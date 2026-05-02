import Link from "next/link";
import { FolderGit2, Mail, Link2 } from "lucide-react";
import {
  FaSquareXTwitter,
  FaSquareGithub,
  FaSquareInstagram,
  FaLinkedin,
} from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 w-full overflow-hidden bg-background pt-16 pb-8 border-t border-border/50">
      <div className="relative z-10 mx-auto w-full flex flex-col items-center justify-between gap-6 px-4 md:flex-row md:px-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Giri Diwa Adam. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground max-w-sm text-center md:text-left">
            Built with Next.js, Tailwind CSS, and Shadcn UI.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/GiriAdam78"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <FaSquareGithub className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://instagram.com/giri_diwa"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <FaSquareInstagram className="w-5 h-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            href="https://x.com/Giri_diwa"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <FaSquareXTwitter className="w-5 h-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/giri-diwa-adam/"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <FaLinkedin className="w-5 h-5" />
            <span className="sr-only">Linkedin</span>
          </Link>
          <Link
            href="mailto:giriadam78@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>

      {/* The large background text similar to Laravel's footer */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden flex justify-center pointer-events-none select-none">
        <span className="text-[15vw] lg:text-[6vw] font-black leading-none tracking-tighter text-muted-foreground/10 dark:text-muted/10 whitespace-nowrap translate-y-1/4">
          GIRI DIWA ADAM
        </span>
      </div>
    </footer>
  );
}
