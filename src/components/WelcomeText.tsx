import { inter } from "@/assets/fonts";

export default function WelcomeText() {
  return (
    <div className="flex flex-col items-center">
      <span className={`${inter.className} font-bold !italic text-[4.5rem]`}>
        Welcome to 4rchive :)
      </span>
      <span className="mt-4 font-medium text-[1.25rem]">
        Minseok’s Tech Blog
      </span>
    </div>
  );
}
