import { inter } from "@/assets/fonts";

export default function WelcomeText() {
  return (
    <div className="flex flex-col items-center">
      <span
        className={`${inter.className} font-bold !italic text-[1.5rem] sm:text-[3rem] lg:text-[4.5rem] transition-[font-size] duration-200`}
      >
        Welcome to 4rchive :)
      </span>
      <span className="mt-4 font-medium text-[0.75rem] sm:text-[1rem] lg:text-[1.25rem] transition-[font-size] duration-200">
        Minseok’s Tech Blog
      </span>
    </div>
  );
}
