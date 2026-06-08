import { Star } from "lucide-react";

export interface SuccessItem {
  id: string | number;
  quote: string;
  rating?: number;
  // Media
  media?: {
    type: 'image' | 'video';
    url: string;
    thumbnailUrl?: string; // for video fallback
  };
  // Author Info
  author?: {
    name: string;
    role?: string;
    avatar?: string;
  };
  // Project / Company Info
  project?: {
    title: string;
    company: string;
  };
}

export function SuccessCard({ item }: { item: SuccessItem }) {
  return (
    <div className="bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group relative h-full">
      
      {/* Media Section */}
      {item.media && (
        <div className="relative h-48 bg-slate-900 flex items-center justify-center overflow-hidden">
          {item.media.type === 'image' ? (
            <img 
              src={item.media.url} 
              alt={item.project?.title || item.author?.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          ) : (
            <>
              {item.media.thumbnailUrl && (
                <div className="absolute inset-0 z-0">
                  <img src={item.media.thumbnailUrl} className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500" alt="Video thumbnail" />
                </div>
              )}
              <div className="relative z-10 w-full h-full">
                <video 
                  src={item.media.url} 
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                />
              </div>
              <div className="absolute top-3 left-3 z-20 bg-orange-600 text-white text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded shadow">
                Video
              </div>
            </>
          )}
        </div>
      )}

      {/* Content Section */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col relative z-10 bg-white/50">
        
        {/* Quote Icon Watermark - Only if no media */}
        {!item.media && (
          <div className="absolute top-6 right-6 text-slate-100 group-hover:text-orange-50 transition-colors pointer-events-none z-0">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 32 32">
              <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2h2V8h-2zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2h2V8h-2z"/>
            </svg>
          </div>
        )}

        {/* Project Title / Company Badge (if exists) */}
        {item.project && (
          <div className="flex items-start justify-between gap-2 mb-4 relative z-10">
            <h4 className="text-slate-900 font-bold text-lg leading-tight">{item.project.title}</h4>
            <span className="bg-slate-100 text-slate-600 text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded whitespace-nowrap">
              {item.project.company}
            </span>
          </div>
        )}

        {/* Rating */}
        <div className="flex gap-1 text-orange-500 mb-4 relative z-10">
          {Array.from({ length: item.rating || 5 }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>

        {/* Quote */}
        <p className="text-slate-700 italic leading-relaxed mb-6 flex-1 relative z-10 text-[15px]">
          "{item.quote}"
        </p>

        {/* Author Info */}
        {item.author && (
          <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-100 relative z-10">
            {item.author.avatar ? (
              <img src={item.author.avatar} alt={item.author.name} className="w-12 h-12 rounded-full object-cover shadow-sm" />
            ) : (
              <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-lg">
                {item.author.name.charAt(0)}
              </div>
            )}
            <div>
              <h4 className="text-slate-900 font-bold">{item.author.name}</h4>
              {(item.author.role) && (
                <p className="text-slate-500 text-xs mt-0.5">{item.author.role}</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
