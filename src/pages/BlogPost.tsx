import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { blogs } from "../data/blogs";
import { useSEO } from "../utils/useSEO";
import { useJsonLd, breadcrumbSchema, blogPostingSchema } from "../utils/seo";

export function BlogPost() {
  const { slug } = useParams();
  const blog = blogs.find(b => b.slug === slug);

  useSEO(
    blog ? `${blog.title} | Machinery Centre Blog` : "Blog Post Not Found | Machinery Centre",
    blog ? blog.excerpt : "The requested blog post could not be found.",
    blog ? { canonical: `/blog/${blog.slug}`, ogType: "article", ogImage: blog.imageUrl } : { noindex: true }
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
            image: blog.imageUrl,
            author: blog.author,
            path: `/blog/${blog.slug}`,
          }),
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

  return (
    <div className="flex-1 bg-white">
      {/* Hero Banner */}
      <div className="relative h-[40vh] min-h-[300px] w-full bg-slate-900 overflow-hidden">
        <img 
          src={blog.imageUrl} 
          alt={blog.title} 
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12">
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
            For now, we'll render the content string as paragraphs by splitting on double newlines.
            In a real app with markdown, we'd use a markdown parser (like react-markdown).
          */}
          {blog.content.split('\n\n').map((paragraph, idx) => {
            if (paragraph.trim().startsWith('###')) {
              return <h3 key={idx} className="mt-8 mb-4">{paragraph.replace('### ', '').trim()}</h3>;
            } else if (paragraph.trim().startsWith('- ')) {
              return (
                <ul key={idx} className="my-4 space-y-2">
                  {paragraph.split('\n').filter(Boolean).map((item, i) => (
                    <li key={i}>{item.replace('- ', '').trim()}</li>
                  ))}
                </ul>
              );
            } else if (paragraph.trim().startsWith('1. ')) {
              return (
                <ol key={idx} className="my-4 space-y-2">
                  {paragraph.split('\n').filter(Boolean).map((item, i) => (
                    <li key={i}>{item.replace(/^\d+\.\s/, '').trim()}</li>
                  ))}
                </ol>
              );
            }
            return <p key={idx} className="mb-6">{paragraph.trim()}</p>;
          })}
        </article>

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
