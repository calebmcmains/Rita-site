import { Fade } from "react-awesome-reveal";

import rita1URL from "../assets/rita-1.jpg";
import rita2URL from "../assets/rita-2.jpg";

function ImRita() {
  return (
    <>
      <section className=" w-full bg-primary-soft-lime py-36">
        <div className="md:grid-row-12 md:grid-rows-auto container relative mx-auto flex grid-flow-row flex-col gap-y-8 px-8 md:grid md:grid-cols-64">
          <Fade
            triggerOnce
            direction="left"
            className="order-2 rounded-2xl bg-neutral-soft-white p-12 text-center md:order-1 md:col-span-full md:col-start-1 md:col-end-44 md:row-start-6 md:row-end-22 md:rounded-e-none"
          >
            <div>
              <h2 className="-mb-4 font-sans2 text-4xl font-semibold lowercase tracking-tightest lg:-mb-6">
                I&apos;m rita!
              </h2>
              <h3 className="mb-8 font-serif text-xl md:text-xl lg:text-3xl">
                Project manager and creative
              </h3>
              <p className="leading-7 lg:mx-12 lg:leading-9">
                Hey! I am a creative project manager who is passionate about
                project management, social media, and digital marketing. I love
                to be innovative and find dynamic solutions that not only meet
                objectives but also push the boundaries of creativity. I thrive
                on orchestrating projects that seamlessly blend strategic
                planning with cutting-edge technologies. My goal is to not just
                manage projects, but also creating impactful and memorable
                experiences that resonate with audiences across diverse
                platforms. Let&apos;s collaborate and turn ideas into perfect
                realities!
              </p>
            </div>
          </Fade>
          <Fade
            triggerOnce
            direction="right"
            className="md:col-end-65 order-1 flex h-96 w-5/6 rounded-2xl bg-neutral-soft-white object-cover p-8 md:order-2 md:col-span-full md:col-start-44 md:row-start-1 md:row-end-22 md:h-4/5 md:w-auto md:rounded-bl-none"
          >
            <img
              className="w-full rounded-2xl object-cover"
              src={rita1URL}
              alt="rita kibaki sitting"
            />
          </Fade>
          <Fade
            triggerOnce
            direction="right"
            className="z-10 order-3 flex h-96 w-5/6 self-end rounded-2xl bg-primary-pipe object-cover p-8 md:absolute md:-bottom-[220px] md:right-24 md:w-[200px] lg:-bottom-[190px] lg:right-32 lg:w-72 xl:-bottom-[300px] xl:right-28 xl:h-[450px] xl:w-[400px] 2xl:-bottom-[363px] 2xl:right-32 2xl:h-[500px] 2xl:w-[450px]"
          >
            <img
              className="w-full rounded-2xl object-cover"
              src={rita2URL}
              alt="rita kibaki standing and laughing"
            />
          </Fade>
        </div>
      </section>
    </>
  );
}

export default ImRita;
