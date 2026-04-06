import { projectsData } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default async function ProjectDetails({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = projectsData.find((p) => p.id === resolvedParams.id);

  if (!project) notFound();

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-24 px-4">
      <div className="max-w-5xl mx-auto">
        
        <Link 
          href="/#work" 
          className="inline-flex items-center gap-2 text-white/50 hover:text-purple-400 transition-colors mb-12 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        <div className="mb-16">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6">{project.title}</h1>
          <div className="flex flex-wrap gap-6 text-white/60">
            <p><strong className="text-white">Overview:</strong> {project.brief}</p>
          </div>
        </div>

        <div className="relative w-full h-[50vh] md:h-[70vh] rounded-3xl overflow-hidden mb-16 shadow-[0_0_50px_rgba(192,132,252,0.15)]">
          <Image 
            src={project.image} 
            alt={project.title} 
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6">About the Project</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              {project.description}
            </p>
            
            {/* Features list eka lassanata pennanna */}
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-white/70 text-lg leading-relaxed ml-2 space-y-2">
              {project.features?.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-10">
            <div>
              <h3 className="text-xl font-bold mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Links</h3>
              <div className="flex flex-col gap-4">
                {/* project.link wenuwata project.liveLink damma */}
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-purple-400 hover:text-purple-300 transition-colors">
                  <ExternalLink className="w-5 h-5" /> Live Website
                </a>
                
                {/* project.github wenuwata project.githubLink damma */}
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
                    <path d="M9 18c-4.5 1.6-5-2.5-7-3m14 6v-3.8c0-1.2-.5-2.4-1.4-3.2"></path>
                  </svg>
                  View Source Code
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}