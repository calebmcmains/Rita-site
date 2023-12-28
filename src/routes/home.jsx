import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

import rita1URL from "../assets/rita-1.jpg";
import rita2URL from "../assets/rita-2.jpg";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <>
      <div
        className={`mx-auto max-w-full ${
          isOpen ? "h-svh overflow-hidden" : "overflow-x-hidden"
        }`}
      >
        <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />

        <main>
          <Hero />

          <section className=" bg-primary-soft-lime w-full py-36">
            <div className="md:grid-cols-64 md:grid-row-12 md:grid-rows-auto container relative mx-auto flex grid-flow-row flex-col gap-y-8 px-8 md:grid">
              <div className="bg-neutral-soft-white md:col-end-44 md:row-end-22 order-2 rounded-2xl p-12 text-center md:order-1 md:col-span-full md:col-start-1 md:row-start-6 ">
                <h2 className="font-sans2 tracking-tightest -mb-4 text-4xl font-semibold lowercase lg:-mb-6">
                  I&apos;m rita!
                </h2>
                <h3 className="mb-8 font-serif text-xl md:text-xl lg:text-3xl">
                  Projecty manager and creative
                </h3>
                <p className="leading-7 lg:mx-12 lg:leading-9">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  quidem exercitationem natus maiores cumque? Vitae, repellat!
                  Officia incidunt vero necessitatibus illo consequuntur tenetur
                  libero, labore deleniti quo eligendi beatae sit. Quidem, sed
                  officiis! Dignissimos tempora sed velit atque quam officiis,
                  cum labore ullam, ducimus officia sapiente! Quos a quasi
                  praesentium blanditiis impedit, debitis nobis, odio laboriosam
                  odit officia, autem rem! Amet quaerat neque culpa deleniti
                  voluptates omnis vel nihil unde suscipit fuga delectus iure
                  minima in maiores voluptas fugiat asperiores accusamus sunt
                  nesciunt, voluptatem iusto, facilis quod commodi. Quasi,
                  voluptatum!
                </p>
              </div>
              <div className="bg-neutral-soft-white md:row-end-22 md:col-start-44 md:col-end-65 order-1 flex h-96 w-5/6 rounded-2xl object-cover p-8 md:order-2 md:col-span-full md:row-start-1 md:h-4/5 md:w-auto md:rounded-bl-none">
                <img
                  className="w-full rounded-2xl object-cover"
                  src={rita1URL}
                  alt=""
                />
              </div>
              <div className=" bg-primary-pipe order-3 flex h-96 w-5/6 self-end rounded-2xl object-cover p-8 md:absolute md:-bottom-[220px] md:right-24 md:w-[200px] lg:-bottom-[190px] lg:right-32 lg:w-72 xl:-bottom-[300px] xl:right-28 xl:h-[450px] xl:w-[400px] 2xl:-bottom-[360px] 2xl:right-32 2xl:h-[500px] 2xl:w-[450px]">
                <img
                  className="w-full rounded-2xl object-cover"
                  src={rita2URL}
                  alt=""
                />
              </div>
            </div>
          </section>
          <section className="py-36">
            <div className="container mx-auto xl:mt-36 2xl:mt-44 ">
              <h2 className="text-center font-serif text-3xl font-semibold lowercase">
                Here&apos;s what i&apos;m all about
              </h2>
              <div className="grid grid-cols-3 justify-items-center  gap-4">
                <div className="h-96 w-96 bg-slate-600">1</div>
                <div className="h-96 w-96 bg-slate-600">2</div>
                <div className="h-96 w-96 bg-slate-600">3</div>
                <div className="h-96 w-96 bg-slate-600">4</div>
                <div className="h-96 w-96 bg-slate-600">5</div>
                <div className="h-96 w-96 bg-slate-600">6</div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
