import { RecentPostList, WelcomeText } from "@/components";

export default function Home() {
  return (
    <main className="max-w-[58.25rem] mx-auto px-4">
      <div className="mt-[4.5rem]">
        <WelcomeText />
      </div>
      <RecentPostList />
    </main>
  );
}
