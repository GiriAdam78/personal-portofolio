import { FaLaravel, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="about-section lg:h-[60vh] w-full z-10 mt-30 mb-20 lg:mt-20 scroll-smooth"
    >
      <p className="text-base font-semibold font-sans lg:text-1xl mb-4">
        About Me :
      </p>
      <h1 className="lg:text-4xl text-3xl font-bold mb-2">
        Frontend-Focused Fullstack Developer
      </h1>
      <p className="text-balance dark:text-muted-foreground mb-5 mt-3">
        I'm Giri Diwa Adam, a Fullstack Web Developer focused on building
        efficient, modern, and scalable web applications. I specialize in
        developing end-to-end solutions, from concept to implementation, while
        continuously refining my skills to stay aligned with evolving
        technologies.
      </p>
      <div className="flex items-center mt-4 mb-2 gap-3">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          <div className="border border-dotted p-2 rounded-md flex items-center gap-2">
            <FaLaravel className="w-4 h-4" />{" "}
            <p className="text-sm">Laravel</p>
          </div>
          <div className="border border-dotted p-2 rounded-md flex items-center gap-2">
            <FaReact className="w-4 h-4" />{" "}
            <p className="text-sm">React</p>
          </div>
          <div className="border border-dotted p-2 rounded-md flex items-center gap-2">
            <SiNextdotjs className="w-4 h-4" />{" "}
            <p className="text-sm">Next JS</p>
          </div>
          <div className="border border-dotted p-2 rounded-md flex items-center gap-2">
            <SiTailwindcss className="w-4 h-4" />{" "}
            <p className="text-sm">Tailwind CSS</p>
          </div>
        </div>
      </div>
      <div className="p-6 md:p-8 rounded-md border border-dotted border-gray-500/60 bg-card/20">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between">
          <div className="flex-1 justify-start about-section ">
            <p className="uppercase dark:text-muted-foreground text-sm leading-relaxed mb-2">
              Currently Position :
            </p>
            <h1 className="capitalize dark:text-muted-foreground text-2xl leading-relaxed lg:text-3xl mb-2 font-semibold">
              Programmer
            </h1>
            <p className="dark:text-muted-foreground text-sm mb-2 text-balance">
              A Frontend-Focused Fullstack Developer who combines strong
              engineering principles with a keen eye for design, building web
              applications that are not only functional, but also intuitive,
              scalable, and visually engaging.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative w-13 h-13 rounded-full overflow-hidden bg-accent">
              <img
                src="https://res.cloudinary.com/dtk5ur0hj/image/upload/v1775749826/snapedit_1770536379098_sdlbdj.jpg"
                alt="Giri Diwa Adam"
              />
            </div>
            <div>
              <p className="font-medium dark:text-muted-foreground">
                Giri Diwa Adam
              </p>
              <p className="dark:text-muted-foreground text-muted-foregorund">
                Fullstack Web Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
