import { inter } from "@/assets/fonts";

export default function WelcomeText() {
  return (
    <div className="flex flex-col items-center">
      <span className={`${inter.className} font-bold !italic text-[72px]`}>
        Welcome to 4rchive :)
      </span>
      <span className="mt-4 font-medium text-[20px]">Minseok’s Tech Blog</span>
    </div>
  );
}
