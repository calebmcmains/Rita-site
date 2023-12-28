import { useState } from "react";
import Navbar from "../components/Navbar";

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

        <main className="">
          <section className="font-sans2 container mx-auto flex flex-col items-center pb-44 pt-24 text-center font-semibold">
            <h1 className=" mb-10 text-5xl lowercase tracking-tighter">
              Welcome.
            </h1>
            <div>
              <p className="tracking-tightest text-3xl">
                arizona <span className="font-serif font-normal">based.</span>
              </p>
              <p className="tracking-tightest text-3xl">
                worldwide <span className="font-serif font-normal">reach.</span>
              </p>
              <p className="tracking-tightest text-3xl">
                creative to the{" "}
                <span className="font-serif font-normal">core.</span>
              </p>
            </div>
          </section>
          <section className=" bg-primary-soft-lime w-full py-36">
            <div className="grid-cols-64 grid-row-12 sm:grid-rows-auto container mx-auto grid gap-y-8 px-8">
              <div className="bg-neutral-soft-white sm:col-end-44 sm:row-end-23 col-span-full rounded-2xl p-12 text-center sm:col-start-1 sm:row-start-6 ">
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
              <div className="bg-neutral-soft-white sm:row-end-22 sm:col-start-40 sm:col-end-64 col-span-full row-start-1 h-[30rem] rounded-2xl sm:row-start-1">
                {/* <img className="bg-neutral-soft-white" src="" alt="" /> */}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
