export default function HomePage() {
  return (
    <div className="flex flex-col">
      <div>
        <h1 className="mb-6 text-xl font-semibold lowercase text-black md:mb-8 md:text-2xl dark:text-white">
          It's Zac.
        </h1>
      </div>
      <div className="max-w-[30rem]">
        <p className="mb-4 text-neutral-500 md:text-lg">
          I'm an application security engineer helping developers write secure
          code, design secure systems, and build for resiliency.
        </p>
      </div>
    </div>
  );
}
