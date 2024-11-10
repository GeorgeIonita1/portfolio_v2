import { BackgroundBeamsCustom } from "./components/BackgroundBeamsCustom";
import { HeroHighlightCustom } from "./components/HeroHighlightCustom";
import { TimelineCustom } from "./components/TimelineCustom";

export default function Home() {
  return (
    <main>
      <section>
        <HeroHighlightCustom />
      </section>
      <section id="experience">
        <TimelineCustom />
      </section>
      <section id="contact">
        <BackgroundBeamsCustom />
      </section>
    </main>
  );
}
