import DarkMode from "./atom/DarkMode"
import MobileMenu from "./atom/MobileMenu";

export default function Navbar() {
  const name = "Giri Diwa Adam"
  
  return (
    <header className="main-container fixed top-0 z-50 left-0 right-0 bg-background/20 backdrop-blur-sm dark:bg-background/20 dark:backdrop-blur-sm border-b border-dotted">
      <nav className="flex items-center justify-between h-16">
        <div className="flex items-center gap-5">
          <a
            href="/"
            className="capitalize font-semibold text-md font-sans text-black dark:text-foreground"
          >
            {name}
          </a>
          <div className="md:flex hidden gap-5">
            {[
              { name: "Home", href: "#home" },
              { name: "About", href: "#about" },
              { name: "Experience", href: "#experience" },
              { name: "Projects", href: "#project" },
              { name: "Blogs", href: "/blog" },
            ].map((item, i) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative font-normal font-sans text-base text-gray-400 hover:text-black hover:dark:text-foreground inline-flex items-start pb-1"
              >
                <sup className="mr-1 mt-0.5 text-[10px]">0{i + 1}</sup>
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black dark:bg-foreground transition-all duration-300 group-hover:w-full group-focus:w-full"></span>
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <DarkMode />
          <div className="md:hidden flex items-center">
           <MobileMenu />
          </div>
        </div>
      </nav>
    </header>
  );
}
