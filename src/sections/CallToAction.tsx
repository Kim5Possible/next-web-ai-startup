import Button from "@/components/Button";
import starsBg from "@/assets/stars.png";
import GridLines from "@/assets/grid-lines.png";

export const CallToAction = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div
          className="border border-white/15 py-24 rounded-xl overflow-hidden relative"
          style={{ backgroundImage: `url(${starsBg.src})` }}
        >
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]"
            style={{ backgroundImage: `url(${GridLines.src})` }}
          ></div>
          <div className="relative">
            <h2 className="text-5xl md:text-6xl max-w-sm mx-auto font-medium text-center tracking-tighter">
              AI-driven SEO for everyone.
            </h2>
            <p className="text-lg md:text-xl text-white/70 tracking-tight text-center px-4 mt-5 max-w-xs mx-auto">
              Achieve clear, impactfull results without the complexity.
            </p>
            <div className="flex justify-center mt-8">
              <Button>Join Waitlist</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
