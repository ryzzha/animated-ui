import { AnimatedStatistics } from "@/components/animate-statistics";
import { AppDesign } from "@/components/app-design";
import { AppIntroduce } from "@/components/app-introduce";
import { AppOverview } from "@/components/app-overview";
import { Navigation } from "@/components/navigation";

export default function Home() {
  return (
    <div className="w-full relative flex flex-col items-center justify-items-center py-5 font-[family-name:var(--font-geist-sans)]">
      <Navigation/>
      <AppIntroduce />
      <AppOverview />
      <AnimatedStatistics />
      <AppDesign />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"></main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
