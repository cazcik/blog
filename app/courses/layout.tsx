import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses － Zac Wojcik",
};

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen max-w-5xl mx-auto pt-12 px-2">
      <div className="border border-neutral-200">
        <main className="grow">{children}</main>
      </div>
      <footer className="pt-12 pb-2 px-5">
        <p className="text-neutral-500 text-sm uppercase text-center">
          &copy; 2023 Zac Wojcik
        </p>
      </footer>
    </div>
  );
}
