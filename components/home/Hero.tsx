import { Button } from "../ui/button";
import { ArrowDown, ArrowRight } from "lucide-react";
import { AnimatedSpan, Terminal, TypingAnimation } from "../ui/terminal";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-section lg:h-[60vh] h-screen flex items-center w-full z-10 md:mt-10 mt-20 mb-40 lg:mt-30 scroll-smooth"
    >
      <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center w-full">
        <div className="lg:col-span-3 md:order-1 order-2">
          <p className="text-2xl font-semibold md:text-[20px] leading-relaxed pb-5 dark:text-gray-200/60">
            Hi There ! Im 👋
          </p>
          <h1 className="font-sans font-bold lg:text-7xl md:text-2xl text-6xl pb-5 dark:text-gray-200/60">
            <span className="border border-dashed border-blue-400 rounded-md p-2 inline-flex items-center bg-card/20 skew-x-6 shadow-sm ">
              Giri
            </span>{" "}
            Diwa Adam
          </h1>
          <p className="leading-relaxed pb-2 dark:text-gray-200/60 text-gray-500">
            Im a Fullstack Web Developer, Frontend Developer From Indonesia
          </p>
          <p className="text-gray-500 dark:text-gray-200/60 leading-relaxed">
            {" "}
            A web developer focused on both front-end and back-end development,
            with a strong interest in building modern, responsive, and efficient
            applications. Experienced in bridging design and functionality to
            deliver optimal user experiences, and comfortable working with
            various technologies to create structured and scalable solutions.
          </p>
          <div className="mb-2 mt-2 flex flex-wrap items-center gap-3">
            <div className="p-2 border border-dashed bg-card/20 px-4 py-3 rounded-md">
              <p className="text-sm dark:text-gray-200/60 text-dark uppercase mb-2 font-semibold">
                Focus:
              </p>
              <p className="text-sm dark:text-gray-200/60 text-dark uppercase">
                Fullstack Web Developer
              </p>
            </div>
            <div className="p-2 border border-dashed bg-card/20 px-4 py-3 rounded-md">
              <p className="text-sm dark:text-gray-200/60 text-dark uppercase mb-2 font-semibold">
                Experience:
              </p>
              <p className="text-sm dark:text-gray-200/60 text-dark uppercase">
                1 Years
              </p>
            </div>
          </div>
          <div className="mb-2 mt-3 flex items-center gap-2">
            <Button asChild>
              <a href="#project">
                My Project <ArrowDown />
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="#">
                My CV <ArrowRight />
              </a>
            </Button>
          </div>
        </div>
        <div className="lg:col-span-2 md:order-2 order-1">
          <Terminal>
            <TypingAnimation delay={0}>$ Hello World 👋</TypingAnimation>
            <AnimatedSpan delay={800} className="text-emerald-500">
              My Name Is Giri Diwa Adam
            </AnimatedSpan>
            <TypingAnimation delay={1600}>$ Im a </TypingAnimation>
            <AnimatedSpan delay={3200} className="text-green-500">
              Fullstack Web Developer
            </AnimatedSpan>
          </Terminal>
        </div>
      </div>
    </section>
  );
}
