import { Link } from "react-router-dom";
import { BookOpen, Calendar, ArrowRight } from "lucide-react";
import { blogs } from "../data/blogs";
import { useSEO } from "../utils/useSEO";

export function Blog() {
  useSEO("Blog & Insights | Machinery Centre", "Read our latest articles on industrial machinery, compressor maintenance, and pump selection.");

  return (
    <div className="flex-1 bg-slate-50 flex flex-col">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16 border-b-4 border-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <BookOpen className="w-8 h-8 text-orange-500" />
            <h1 className="text-4xl font-black tracking-tight">Blog & Insights</h1>
          </div>
          <p className="text-slate-400 max-w-2xl text-lg">
            Stay updated with the latest industry news, maintenance tips, and expert insights on compressors and pumps.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link 
              key={blog.id} 
              to={`/blog/${blog.slug}`}
              className="bg-white rounded-sm shadow-sm border border-slate-200 overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={blog.imageUrl} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {blog.tags.slice(0, 1).map(tag => (
                    <span key={tag} className="bg-orange-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-sm shadow-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-3 font-medium">
                  <Calendar className="w-4 h-4" />
                  {blog.date}
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
                  {blog.title}
                </h2>
                <p className="text-slate-600 text-sm line-clamp-3 mb-6 flex-grow">
                  {blog.excerpt}
                </p>
                <div className="flex items-center text-orange-600 font-bold text-xs tracking-widest uppercase mt-auto">
                  Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
