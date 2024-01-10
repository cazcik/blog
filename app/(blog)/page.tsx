import Image from "next/image";

import me from "../../public/images/me.jpg";
import fam from "../../public/images/fam.jpg";
import wife from "../../public/images/wife.jpeg";
import dog from "../../public/images/dog.jpg";
import hockey from "../../public/images/hockey.jpeg";
import mountains from "../../public/images/mountains.jpeg";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <div>
        <h1 className="mb-6 text-xl font-semibold lowercase text-black md:mb-8 md:text-2xl dark:text-white">
          It's Zac.
        </h1>
        <p className="text-neutral-600 md:text-lg dark:text-neutral-400">
          I'm a developer, father, husband, and hockey player. Currently I work
          as an Application Security Engineer at Precision Medicine, where I
          help developers write secure code, design secure systems, and build
          for resiliency.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
        <div className="relative h-40">
          <Image
            alt=""
            src={me}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative row-span-2 h-full">
          <Image
            alt=""
            src={fam}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40">
          <Image
            alt=""
            src={dog}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative row-span-2 h-full">
          <Image
            alt=""
            src={wife}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40 md:row-span-2 md:h-80">
          <Image
            alt=""
            src={mountains}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40">
          <Image
            alt=""
            src={hockey}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      <div className="mt-10">
        <p className="text-neutral-600 md:text-lg dark:text-neutral-400">  </p>
      </div>
    </div>
  );
}
