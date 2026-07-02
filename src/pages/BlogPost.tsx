import type { ReactNode } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Tag, HelpCircle, ArrowRight, ChevronDown } from "lucide-react";
import { blogs } from "../data/blogs";
import { useSEO } from "../utils/useSEO";
import { useJsonLd, breadcrumbSchema, blogPostingSchema, faqSchema, absoluteUrl, toISODate } from "../utils/seo";

/**
 * Render inline markdown inside a block of text:
 *   **bold**            -> <strong>
 *   [label](/path)      -> internal <Link> (react-router)
 *   [label](https://…)  -> external <a target="_blank">
 * Plain text segments are returned as-is (React renders strings in arrays fine).
 */
function renderInline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).map((part, i) => {
    const bold = /^\*\*([^*]+)\*\*$/.exec(part);
    if (bold) return <strong key={i}>{bold[1]}</strong>;
    const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
    if (link) {
      const [, label, href] = link;
      return href.startsWith("/")
        ? <Link key={i} to={href}>{label}</Link>
        : <a key={i} href={href} target="_blank" rel="noopener noreferrer">{label}</a>;
    }
    return part;
  });
}

/** Map a post's tags to the most relevant product category for internal linking. */
function relatedCategory(tags: string[]): { label: string; to: string; noun: string } {
  const t = tags.join(" ").toLowerCase();
  if (/pump|motor/.test(t)) return { label: "Industrial Pumps", to: "/products/pumps", noun: "pump" };
  if (/nitrogen|dryer|dew|filtration|filter|pipeline|air treatment|air quality/.test(t))
    return { label: "Air Treatment Systems", to: "/products/air-treatment", noun: "air-treatment system" };
  if (/vfd|compressor|receiver|energy/.test(t)) return { label: "Air Compressors", to: "/products/compressors", noun: "air compressor" };
  return { label: "Our Products", to: "/products", noun: "equipment" };
}

export function BlogPost() {
  const { slug } = useParams();
  const blog = blogs.find(b => b.slug === slug);
  const ogImage = blog ? absoluteUrl(blog.imageUrl) : undefined;
  // Authors are real people (e.g. "Sandeep Dhawan") except the generic
  // "Machinery Centre <team>" bylines, which are organizational.
  const authorType: "Person" | "Organization" =
    blog && /^machinery centre/i.test(blog.author) ? "Organization" : "Person";
  const datePublished = blog ? toISODate(blog.date) : "";

  useSEO(
    blog ? (blog.metaTitle ?? `${blog.title} | Machinery Centre Blog`) : "Blog Post Not Found | Machinery Centre",
    blog ? blog.excerpt : "The requested blog post could not be found.",
    blog
      ? {
          canonical: `/blog/${blog.slug}`,
          ogType: "article",
          ogImage,
          keywords: blog.tags.join(", "),
          article: {
            publishedTime: datePublished || undefined,
            modifiedTime: datePublished || undefined,
            author: blog.author,
            section: blog.tags[0],
            tags: blog.tags,
          },
        }
      : { noindex: true }
  );
  useJsonLd(
    blog
      ? [
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: blog.title, path: `/blog/${blog.slug}` },
          ]),
          blogPostingSchema({
            title: blog.title,
            description: blog.excerpt,
            image: ogImage!,
            author: blog.author,
            authorType,
            datePublished: datePublished || undefined,
            dateModified: datePublished || undefined,
            keywords: blog.tags.join(", "),
            articleSection: blog.tags[0],
            path: `/blog/${blog.slug}`,
          }),
          ...(blog.faqs && blog.faqs.length ? [faqSchema(blog.faqs)] : []),
        ]
      : null
  );

  if (!blog) {
    return (
      <div className="flex-1 bg-slate-50 flex items-center justify-center p-8">
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-black text-slate-900 mb-4">Post Not Found</h1>
          <p className="text-slate-600 mb-8">The article you are looking for does not exist or has been removed.</p>
          <Link to="/blog" className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-bold tracking-widest text-[10px] uppercase px-8 py-4 rounded-full transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const rel = relatedCategory(blog.tags);

  return (
    <div className="flex-1 bg-white">
      {/* Hero Banner */}
      <div className="relative w-full bg-slate-900 overflow-hidden">
        <img 
          src={blog.imageUrl} 
          alt={blog.title} 
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        <div className="relative min-h-[40vh] flex flex-col justify-end">
          <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-12 pb-12">
            <Link to="/blog" className="inline-flex items-center text-orange-500 hover:text-orange-400 font-bold text-xs uppercase tracking-widest mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
            </Link>
            <div className="flex flex-wrap gap-2 mb-4">
              {blog.tags.map(tag => (
                <span key={tag} className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-sm">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
              {blog.title}
            </h1>
            <div className="flex items-center gap-6 text-slate-300 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> {blog.date}
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" /> {blog.author}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <article className="prose prose-slate prose-lg max-w-none prose-headings:font-black prose-headings:text-slate-900 prose-a:text-orange-600 hover:prose-a:text-orange-700 prose-img:rounded-lg">
          {/*
            Lightweight markdown renderer: splits the content on blank lines into
            blocks, then renders headings (## / ###), unordered (-) and ordered
            (1.) lists, and paragraphs — with inline **bold** parsed via renderInline.
            A full app would swap this for a markdown library (e.g. react-markdown).
          */}
          {blog.content.split('\n\n').map((block, idx) => {
            const text = block.trim();
            if (!text) return null;
            if (text.startsWith('### ')) {
              return <h3 key={idx} className="mt-8 mb-4">{renderInline(text.replace(/^###\s+/, ''))}</h3>;
            } else if (text.startsWith('## ')) {
              return <h2 key={idx} className="mt-10 mb-4">{renderInline(text.replace(/^##\s+/, ''))}</h2>;
            } else if (text.startsWith('- ')) {
              return (
                <ul key={idx} className="my-4 space-y-2 list-disc pl-5">
                  {text.split('\n').filter(Boolean).map((item, i) => (
                    <li key={i}>{renderInline(item.replace(/^-\s+/, '').trim())}</li>
                  ))}
                </ul>
              );
            } else if (/^\d+\.\s/.test(text)) {
              return (
                <ol key={idx} className="my-4 space-y-2 list-decimal pl-5">
                  {text.split('\n').filter(Boolean).map((item, i) => (
                    <li key={i}>{renderInline(item.replace(/^\d+\.\s+/, '').trim())}</li>
                  ))}
                </ol>
              );
            } else if (text.startsWith('|')) {
              // GitHub-style pipe table: row 0 = header, row 1 = "---" separator, rest = body.
              const rows = text.split('\n').map(l => l.trim()).filter(l => l.startsWith('|'));
              const cells = (line: string) => line.replace(/^\||\|$/g, '').split('|').map(c => c.trim());
              if (rows.length >= 2) {
                const header = cells(rows[0]);
                const body = rows.slice(2).map(cells);
                return (
                  <div key={idx} className="my-6 overflow-x-auto not-prose">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-slate-50">
                          {header.map((h, i) => (
                            <th key={i} className="text-left font-bold text-slate-900 border border-slate-200 px-3 py-2">{renderInline(h)}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {body.map((r, ri) => (
                          <tr key={ri} className="odd:bg-white even:bg-slate-50/50">
                            {r.map((c, ci) => (
                              <td key={ci} className="border border-slate-200 px-3 py-2 align-top text-slate-600">{renderInline(c)}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              }
            }
            return <p key={idx} className="mb-6">{renderInline(text)}</p>;
          })}
        </article>

        {/* FAQ — collapsible accordions (native <details>, no JS needed). Answers stay
            in the DOM for SEO and are mirrored as FAQPage JSON-LD. First item open. */}
        {blog.faqs && blog.faqs.length > 0 && (
          <section className="mt-16 pt-10 border-t border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="w-7 h-7 text-orange-500" />
              <h2 className="text-2xl font-black text-slate-900">Frequently Asked Questions</h2>
            </div>
            <div className="border-t border-slate-200">
              {blog.faqs.map((f, i) => (
                <details key={i} open={i === 0} className="group border-b border-slate-200">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none py-5 [&::-webkit-details-marker]:hidden">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-open:text-orange-600 transition-colors">
                      {f.question}
                    </h3>
                    <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-500 group-open:bg-orange-500 group-open:text-white transition-colors">
                      <ChevronDown className="w-4 h-4 transition-transform duration-300 group-open:rotate-180" />
                    </span>
                  </summary>
                  <p className="text-slate-600 leading-relaxed pb-5 pr-12">{f.answer}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Conversion CTA + internal links to product & quote pages */}
        <section className="mt-16 relative overflow-hidden rounded-xl bg-slate-900">
          <div className="absolute inset-x-0 top-0 h-1 bg-orange-500" />
          <div className="p-8 sm:p-10">
            <p className="text-orange-500 text-[11px] font-bold uppercase tracking-[0.22em] mb-4">
              Machinery Centre · Delhi&nbsp;NCR since 1987
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 leading-tight max-w-2xl">
              Need help choosing the right {rel.noun}?
            </h2>
            <p className="text-slate-400 mb-8 max-w-2xl leading-relaxed">
              We supply and service compressors, pumps and air-treatment systems for industry
              across Delhi&nbsp;NCR. Talk to our team for expert product selection and a tailored quote.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link to="/quote" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold tracking-widest text-[11px] uppercase px-7 py-3.5 rounded-full transition-colors">
                Get a Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to={rel.to} className="inline-flex items-center gap-2 text-white font-bold tracking-widest text-[11px] uppercase px-7 py-3.5 rounded-full border border-white/25 hover:bg-white/10 transition-colors">
                Explore {rel.label}
              </Link>
              <Link to="/contact" className="text-slate-400 hover:text-white font-bold tracking-widest text-[11px] uppercase px-3 py-3.5 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Footer Tags */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-wrap gap-3 items-center">
          <Tag className="w-5 h-5 text-slate-400 mr-2" />
          {blog.tags.map(tag => (
            <span key={tag} className="bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
