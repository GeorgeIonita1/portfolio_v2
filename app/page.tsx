import { BackgroundBeamsCustom } from "./components/BackgroundBeamsCustom";
import { HeroHighlightCustom } from "./components/HeroHighlightCustom";
import { TimelineCustom } from "./components/TimelineCustom";

export default function Home() {
  return (
    <main>
      <section>
        <HeroHighlightCustom />
      </section>
      <section>
        <TimelineCustom />
      </section>
      <section>
        <BackgroundBeamsCustom />
      </section>
    </main>
  );
}
