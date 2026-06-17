/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** FormSubmit inbox (email or alias) for catalog download requests (Products page). */
  readonly VITE_FORMSUBMIT_PRODUCT: string;
  /** FormSubmit inbox (email or alias) for all other forms (Home, Quote, Contact, Feedback). */
  readonly VITE_FORMSUBMIT_GENERAL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
