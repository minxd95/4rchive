import Link from "next/link";
import Image from "next/image";
import images from "@/assets/images";

interface PostItemProps {
  type: "large" | "small" | "mobile";
}
export default function PostItem({ type }: PostItemProps) {
  if (type !== "mobile") {
    return (
      <Link
        href="/"
        className={`flex flex-col ${type === "large" ? "w-full" : "w-[48%]"}`}
      >
        <div className={`relative aspect-[3/2] w-full`}>
          <Image
            src={images.loremIpsum}
            alt="loremIpsum"
            fill
            objectFit="cover"
            className="rounded-[1.25rem]"
            placeholder="blur"
          />
        </div>
        <div
          className={`flex ${type === "large" ? "flex-row" : "flex-col"} ${
            type === "large" ? "justify-between" : "justify-start"
          } items-baseline mt-1`}
        >
          <span className="font-medium text-[1.5rem]">
            useEffect? useState? 그게 뭔데?
          </span>
          <span className="font-medium">2023. 11. 23.</span>
        </div>
      </Link>
    );
  }
  return (
    <Link href="/" className="flex flex-col w-full">
      <div className="relative w-full aspect-[432/284]">
        <Image
          src={images.loremIpsum}
          alt="loremIpsum"
          fill
          objectFit="cover"
          className="rounded-[1.25rem]"
          placeholder="blur"
        />
      </div>
      <div className={`flex flex-col justify-start items-baseline mt-1`}>
        <span className="font-medium text-[1.5rem]">
          useEffect? useState? 그게 뭔데?
        </span>
        <span className="font-medium">2023. 11. 23.</span>
      </div>
    </Link>
  );
}
