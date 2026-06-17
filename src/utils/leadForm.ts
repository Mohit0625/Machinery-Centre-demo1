// -----------------------------------------------------------------------------
// Lead form sender — delivers form submissions straight to email via FormSubmit.
//
// FormSubmit needs NO backend, NO account, and NO credentials. Each "inbox" is
// simply a destination identifier placed in the request URL: either the raw
// email address, OR the random alias token FormSubmit gives you after the first
// activation (prefer the alias so the address stays out of the client bundle).
//
//   • "product"  → catalog download requests (Products page)
//   • "general"  → every other form (Home quick-quote, Quote, Contact, Feedback)
//
// Configure both in .env.local:
//   VITE_FORMSUBMIT_PRODUCT  = machinerycentre@yahoo.com   (or alias token)
//   VITE_FORMSUBMIT_GENERAL  = machinerycentre@yahoo.com   (or alias token)
//
// ACTIVATION: the first submission to each NEW identifier triggers a one-time
// confirmation email — open it in the inbox and click "Activate". Until then,
// submissions are accepted by FormSubmit but not delivered.
// -----------------------------------------------------------------------------

const INBOXES = {
  product: import.meta.env.VITE_FORMSUBMIT_PRODUCT ?? "",
  general: import.meta.env.VITE_FORMSUBMIT_GENERAL ?? "",
} as const;

export type LeadInbox = keyof typeof INBOXES; // "product" | "general"

export interface SendLeadOptions {
  /** Which inbox to deliver to. */
  inbox: LeadInbox;
  /** Subject line of the notification email. */
  subject: string;
  /** Reply-To address — set to the lead's email so hitting "Reply" reaches them. */
  replyTo?: string;
  /**
   * Fields rendered in the email body as rows, in the order given. The object
   * keys become the labels, so use human-readable keys ("Customer Name").
   */
  fields: Record<string, string>;
  /** Honeypot value. Real users leave it empty; a filled value is treated as spam. */
  botcheck?: string;
  /**
   * Abort the request after this many ms (default 10000). A timeout surfaces as
   * a thrown error so a hung network call can never block the UI indefinitely.
   */
  timeoutMs?: number;
}

/**
 * POST a lead to FormSubmit. Resolves on success; throws on failure (including
 * the pre-activation state) so the caller can surface an error to the user.
 */
export async function sendLead({
  inbox,
  subject,
  replyTo,
  fields,
  botcheck = "",
  timeoutMs = 10000,
}: SendLeadOptions): Promise<void> {
  const target = INBOXES[inbox];
  if (!target) throw new Error(`No FormSubmit inbox configured for "${inbox}"`);

  // Cap the request so a stalled connection rejects (as an AbortError) instead
  // of hanging forever — callers already treat any rejection as a failure.
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  const res = await fetch(`https://formsubmit.co/ajax/${target}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      // --- FormSubmit control fields (prefixed "_", not shown as rows) ---
      _subject: subject,
      _template: "table",
      _captcha: "false", // required for AJAX/JSON submissions
      _honey: botcheck, // honeypot: a non-empty value is flagged as spam
      ...(replyTo ? { _replyto: replyTo } : {}),
      // --- Rendered as labelled rows, in this order ---
      ...fields,
    }),
    signal: controller.signal,
  }).finally(() => clearTimeout(timer));

  const data = await res.json().catch(() => ({} as { success?: unknown; message?: string }));
  // FormSubmit returns { success: "true" | true, message: string }.
  const ok = res.ok && (data.success === true || data.success === "true");
  if (!ok) throw new Error(data.message || "Submission failed");
}

/** Human-readable submission time in IST, e.g. "18 Jun 2026, 3:45 pm IST". */
export function nowInIST(): string {
  return (
    new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    }) + " IST"
  );
}
