import { BackgroundBeamsCustom } from "./components/BackgroundBeamsCustom";
import { HeroHighlightCustom } from "./components/HeroHighlightCustom";

export default function Home() {
  return (
    <main>
      <section>
        <HeroHighlightCustom />
      </section>
      <section>
        <BackgroundBeamsCustom />
      </section>
    </main>
  );
}
