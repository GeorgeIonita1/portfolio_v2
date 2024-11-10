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
        <BackgroundBeamsCustom />
      </section>
      <section>
        <TimelineCustom />
      </section>
    </main>
  );
}
