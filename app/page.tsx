import { AnimatedStatistics } from "@/components/animate-statistics";
import { AppIntroduce } from "@/components/app-introduce";
import { AppOverview } from "@/components/app-overview";
import { Navigation } from "@/components/navigation";

export default function Home() {
  return (
    <div className="w-full relative flex flex-col items-center justify-items-center border-2 border-yellow-400 py-7 font-[family-name:var(--font-geist-sans)]">
      <Navigation/>
      <AppIntroduce />
      <AppOverview />
      <AnimatedStatistics />
      <AppIntroduce />
      <AppIntroduce />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"></main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
