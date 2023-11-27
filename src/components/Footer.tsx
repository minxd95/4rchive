import images from "@/assets/images";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mb-[3.125rem] flex flex-col">
      <div className="flex">
        <div className="relative w-[7.5rem] h-[7.5rem]">
          <Image
            src={images.loremIpsum}
            alt="me"
            fill
            objectFit="cover"
            placeholder="blur"
            className="rounded-full"
          />
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div></div>
    </footer>
  );
}
