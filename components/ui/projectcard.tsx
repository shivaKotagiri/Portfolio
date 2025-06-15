import Image from 'next/image';
import Link from 'next/link';


interface Props {
  info: {
    name: string;
    image: string;
    title: string;
    skills: string[];
    live: string;
    viewProject: string;
  }
}

export default function ProjectCard({info}:Props) {
  return (
    <div className="rounded-lg  border overflow-hidden shadow-lg max-w-6xl mx-auto">
      <div className="relative min-h-[20px]">
        <div className="flex justify-center items-center h-full border-b">
          <Image
            src={`/assets/${info.image}`}
            alt="Talent Linker Dashboard"
            height={700}
            width={700}
            className="rounded-t-lg h-full w-full object-cover object-center"
          />
        </div>

        <div className="absolute bottom-6 right-6 flex gap-3">

          <Link href={`${info.live}`} target='_blank' className="bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-black/90 transition-colors">
            Live Website
          </Link>
        </div>
      </div>

      <div className="px-8 pt-6 pb-3">
        <div className="text-sm font-medium mb-2">{info.name}</div>

        <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
          {info.title}
        </h2>

        <div className="flex flex-wrap gap-4 text-xs">
          {info.skills.map((skill, index):React.ReactNode => {
            return <span key={index} className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full"></span>
              • {skill}
            </span>;
          })}
        </div>

        <div className="flex text-sm justify-end pt-5">
          <Link href={info.viewProject} className="px-6 cursor-pointer bg-black text-white py-3 rounded-full font-medium transition-colors flex items-center gap-2">
            View Project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
