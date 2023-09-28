import Image from "next/image";
import Data from "./Data";
import Social from "./Social";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="container gap-y-28 grid__section">
        <div className="grid__section grid-cols-[116px_repeat(2,1fr)] pt-24 items-center gap-x-8">
          <Social />

          <div className="relative w-[300px] h-[300px] order-1 justify-self-center">
            <Image
              src="/assets/profile.jpg"
              alt="profile"
              fill
              className="object-cover animate-profile_animate shadow-[inset_0_0_0_9px_rgba(255,255,255,0.3)]"
            />
          </div>

          <Data />
        </div>

        <ScrollDown />
      </div>
    </section>
  );
};
export default Home;
