import { FaLaravel, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="experience-section lg:h-[60vh] min-h-screen mt-30 mb-20 lg:mt-20"
    >
      <p className="text-base font-semibold font-sans lg:text-1xl mb-4 dark:text-muted-foreground text-black">
        Experience
      </p>
      <h1 className="text-2xl lg:text-4xl font-semibold font-sans dark:text-muted-foreground text-black mb-4">
        Where I've Worked and What I've Learned
      </h1>
      <p className="text-base font-normal font-sans lg:text-1xl mb-4 dark:text-muted-foreground text-black">
        I’ve had the opportunity to work in different environments, each shaping
        how I think, build, and solve problems. Along the way, I've learned not
        just technical skills, but also how to adapt, collaborate, and
        continuously grow as a developer.
      </p>

      <div className="grid grid-cols-1">
        <div className="p-6 md:p-8 rounded-md border border-border bg-card/20 mb-2">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between">
            <div className="flex-1 flex items-center gap-2">
              <div>
                <p className="font-medium dark:text-muted-foreground leading-relaxed mb-2 md:order-1 order-2">
                  01. Mitra Transaksi Indonesia - Junior Software Developer
                </p>
                <p className="dark:text-muted-foreground text-muted-foregorund text-balance text-sm">
                  Contributed to the development of internal business
                  applications using PHP and Bootstrap. Implemented and enhanced
                  features based on user requirements, optimized application
                  performance, and resolved complex technical issues to ensure
                  high system stability and reliability. Maintained a seamless
                  user experience by proactively debugging, fixing bugs, and
                  supporting end users.
                </p>
                <div className="mt-3">
                  <div className="flex flex-wrap gap-2 mt-3 ">
                    <span className="rounded-full border border-border bg-card text-sm dark:text-white text-primary p-1 px-2 capitalize">
                      Php Vanilla
                    </span>
                    <span className="rounded-full border border-border bg-card text-sm dark:text-white text-primary p-1 px-2 capitalize">
                      Bootstrap
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center order-1 md:order-2 mt-3">
              <div>
                <p className="dark:text-muted-foreground text-black text-sm">
                  {" "}
                  Feb 2023- Mar 2023
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 md:p-8 rounded-md border border-border bg-card/20 mb-2">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between">
            <div className="flex-1 flex items-center gap-2">
              <div>
                <p className="font-medium dark:text-muted-foreground leading-relaxed mb-2">
                  02. Adhyamitra Tata Sarana - Junior Developer
                </p>
                <p className="dark:text-muted-foreground text-muted-foregorund text-balance text-sm">
                  Worked as a Full Stack Developer delivering enterprise-grade
                  internal applications for government institutions. Owned
                  end-to-end development across frontend and backend using
                  Laravel and Bootstrap, building scalable, secure, and
                  user-focused systems.
                </p>
                <div className="mt-3">
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="rounded-full border border-border bg-card text-sm dark:text-white text-primary p-1 px-2 capitalize">
                      php
                    </span>
                    <span className="rounded-full border border-border bg-card text-sm dark:text-white text-primary p-1 px-2 capitalize">
                      bootstrap
                    </span>
                    <span className="rounded-full border border-border bg-card text-sm dark:text-white text-primary p-1 px-2 capitalize">
                      codeigniter
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div>
                <p className="dark:text-muted-foreground text-black text-sm mt-3">
                  {" "}
                  Aug 2023- Jan 2025
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 md:p-8 rounded-md border border-border bg-card/20">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between">
            <div className="flex-1 flex items-center gap-2">
              <div>
                <p className="font-medium dark:text-muted-foreground leading-relaxed mb-3">
                  03. Neptus Teknologi Indonesia - SOC Engineer Layer 1
                </p>
                <p className="dark:text-muted-foreground text-muted-foregorund text-balance text-sm">
                  Monitored and analyzed security events using SIEM platforms to
                  detect potential threats and incidents. Performed initial
                  incident triage, alert investigation, and escalation following
                  SOC procedures. Contributed to maintaining security visibility
                  and operational readiness across monitored environments.
                </p>
                <div className="mt-3">
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="rounded-full border border-border bg-card text-sm dark:text-white text-primary p-1 px-2 capitalize">
                      imperva
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div>
                <p className="dark:text-muted-foreground text-black text-sm mt-3">
                  {" "}
                  Mar 2025 - May 2026
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 md:p-8 rounded-md border border-border bg-card/20">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between">
            <div className="flex-1 flex items-center gap-2">
              <div>
                <p className="font-medium dark:text-muted-foreground leading-relaxed mb-2">
                  04. Navios Evolusi Solusindo - Programmer
                </p>
                <p className="dark:text-muted-foreground text-muted-foregorund text-balance text-sm">
                  Developing and maintaining web applications using CodeIgniter and
                  Bootstrap framework. Building robust backend systems with
                  clean architecture, implementing efficient database designs,
                  and ensuring code quality through best practices. Collaborating
                  with cross-functional teams to deliver high-performance,
                  scalable solutions.
                </p>
                <div className="mt-3">
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="rounded-full border border-border bg-card text-sm dark:text-white text-primary p-1 px-2 capitalize">
                      Php Vanilla
                    </span>
                    <span className="rounded-full border border-border bg-card text-sm dark:text-white text-primary p-1 px-2 capitalize">
                      Code Igniter
                    </span>
                    <span className="rounded-full border border-border bg-card text-sm dark:text-white text-primary p-1 px-2 capitalize">
                      Bootstrap
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div>
                <p className="dark:text-muted-foreground text-black text-sm mt-3">
                  {" "}
                  May 2026 - Now
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
