import { inter } from "@/assets/fonts";

export default function PageTitleText({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <span
        className={`${inter.className} font-bold !italic text-[1.5rem] sm:text-[3rem] lg:text-[4.5rem] transition-[font-size] duration-200`}
      >
        {title}
      </span>
      <span className="mt-2 sm:mt-4 font-medium text-base lg:text-[1.25rem] transition-[font-size] duration-200">
        {subTitle}
      </span>
    </div>
  );
}
