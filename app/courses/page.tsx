import Link from "next/link";

export default function Courses() {
  return (
    <div>
      <div className="border-b border-neutral-200 px-5 py-12">
        <div className="max-w-xl mx-auto">
          <h1 className="text-3xl text-black dark:text-white">Courses</h1>
          <p className="text-neutral-500 pt-4 text-lg">
            I've been working in the security industry since 2019. Since then
            I've accumulated a diverse set of skills from security operations,
            incident response, security engineering, and application security.
            Now I am focused on sharing everything I have learned via self-paced
            courses.
          </p>
        </div>
      </div>
      <div className="border-b border-neutral-200 px-5 py-12">
        <div className="max-w-xl mx-auto">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://howtosecops.com"
            className="group hover:underline underline-offset-4 decoration-2"
          >
            <h2 className="underline underline-offset-4 decoration-sky-300 group-hover:no-underline decoration-2 text-2xl text-black dark:text-white">
              How to SecOps
            </h2>
          </Link>
          <p className="text-neutral-500 pt-4 text-lg">
            My first ever job in security was working in the global security
            operations center at NTT. Before that I was a systems analyst, and
            before that I was a technical support representative.
          </p>
          <p className="text-neutral-500 pt-2 text-lg">
            I knew about security only from my own experience and knowledge
            developing little tools and websites, or hearing about some
            ransomware event it on the news.
          </p>
          <p className="text-neutral-500 pt-2 text-lg">
            During my time at NTT I got up to speed very quickly managing over
            400 customers, thousands of endpoints, hundreds of networks and
            disperate enviornments. How to SecOps is my attempt of breaking down
            security operations at every scale and solutions or processes to
            address complex challenges.
          </p>
          <div className="pt-4">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://howtosecops.com"
              className="group text-lg text-neutral-900 hover:underline underline-offset-4 decoration-2"
            >
              Learn more at{" "}
              <span className="underline underline-offset-4 decoration-sky-300 decoration-2 font-semibold group-hover:no-underline">
                HowToSecOps.com
              </span>{" "}
              &rarr;
            </Link>
          </div>
        </div>
      </div>
      <div className="border-b border-neutral-200 px-5 py-12">
        <div className="max-w-xl mx-auto">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://howtoseceng.com"
            className="group hover:underline underline-offset-4 decoration-2"
          >
            <h2 className="underline underline-offset-4 decoration-sky-300 group-hover:no-underline decoration-2 text-2xl text-black dark:text-white">
              How to SecEng
            </h2>
          </Link>
          <p className="text-neutral-500 pt-4 text-lg">
            I have always felt lucky to be part of teams with a culture focused
            on engineering. Not everyone always new how to code, but nearly
            everyone understood that engineering was also a mindset.
          </p>
          <p className="text-neutral-500 pt-2 text-lg">
            If dissecting complex problems and creating simple yet scalable
            solutions is the goal, then your security engineers will handle it.
          </p>
          <p className="text-neutral-500 pt-2 text-lg">
            Building internal tools, solving for specific problems, and building
            processes around code is what How to SecEng is all about. Creating
            an event driven engineering organization within your security team
            is no small task. Learn how breaking the resources up into their
            functional components can shape your team.
          </p>
          <div className="pt-3">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://howtoseceng.com"
              className="group text-lg text-neutral-900 hover:underline underline-offset-4 decoration-2"
            >
              Learn more at{" "}
              <span className="underline underline-offset-4 decoration-sky-300 decoration-2 font-semibold group-hover:no-underline">
                HowToSecEng.com
              </span>{" "}
              &rarr;
            </Link>
          </div>
        </div>
      </div>
      <div className="px-5 py-12">
        <div className="max-w-xl mx-auto">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://howtoappsec.com"
            className="group hover:underline underline-offset-4 decoration-2"
          >
            <h2 className="underline underline-offset-4 decoration-sky-300 group-hover:no-underline decoration-2 text-2xl text-black dark:text-white">
              How to AppSec
            </h2>
          </Link>
          <p className="text-neutral-500 pt-4 text-lg">
            I first started to teach myself how to program back in 2008 when I
            was 12 years old. My reasoning for teaching myself C, C++, and C#
            was because I wanted to mod my Xbox 360 games. I never created
            anything useful but what I learned back then I still carry with me
            today.
          </p>
          <p className="text-neutral-500 pt-2 text-lg">
            As the years have gone on I since got into web and mobile
            development mostly as a hobby while I was working in security
            operations. Eventually I started building things my team and I could
            use and I made the switch to appsec to be closer to development and
            I haven't looked back since.
          </p>
          <p className="text-neutral-500 pt-2 text-lg">
            These days I help developers write secure code, design secure
            systems, and build for resiliency. How to AppSec is a culmination of
            everything I have learned building, breaking, hacking, and securing
            web applications today.
          </p>
          <div className="pt-3">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://howtoappsec.com"
              className="group text-lg text-neutral-900 hover:underline underline-offset-4 decoration-2"
            >
              Learn more at{" "}
              <span className="underline underline-offset-4 decoration-sky-300 decoration-2 font-semibold group-hover:no-underline">
                HowToAppSec.com
              </span>{" "}
              &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
