import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };
  return (
    <>
      <div
        className={`mx-auto max-w-full ${
          isOpen ? "h-svh overflow-hidden" : ""
        }`}
      >
        <header className="text-primary-chocolate sticky top-0 mx-auto flex max-w-screen-2xl items-center bg-[rgba(250,250,250,1)] px-4">
          <div className="z-50">
            <a href={`/`}>
              <span className="font-sans2 text-5xl font-semibold">rk</span>
            </a>
          </div>
          <nav
            className={`absolute left-0 top-0 ml-auto w-full translate-x-full self-start bg-[rgba(250,250,250,.9)] pr-4 pt-8 uppercase backdrop-blur transition-all duration-300 sm:translate-x-0 sm:transition-none ${
              isOpen ? "translate-x-0 transition-all duration-300" : ""
            } sm:pointer-events-auto sm:visible sm:static sm:left-auto sm:top-auto sm:flex sm:w-auto sm:bg-inherit sm:opacity-100`}
          >
            <ul
              className={`mt-64 flex h-svh flex-col items-center gap-8 text-2xl font-semibold sm:mt-auto sm:h-auto sm:flex-row sm:gap-16 sm:text-base sm:font-normal md:gap-32`}
            >
              <li className="">
                <a href={`/about`}>About</a>
              </li>
              <li>
                <a href={`/contact`}>Contact</a>
              </li>
              <li>
                <a href={`/portfolio`}>Portfolio</a>
              </li>
            </ul>
          </nav>
          <button
            className="z-50 ml-auto block sm:pointer-events-none sm:invisible sm:hidden sm:opacity-0"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className={`h-16 w-16 ${isOpen ? "hidden" : "block"}`}
            >
              <path
                strokeLinecap="square"
                strokeLinejoin="square"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className={`h-16 w-16 ${isOpen ? "block" : "hidden"}`}
            >
              <path
                strokeLinecap="square"
                strokeLinejoin="square"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </header>

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
          <section className=" bg-primary-soft-lime h-[768px] w-full py-24">
            <div className="container mx-auto px-8">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                quidem exercitationem natus maiores cumque? Vitae, repellat!
                Officia incidunt vero necessitatibus illo consequuntur tenetur
                libero, labore deleniti quo eligendi beatae sit. Quidem, sed
                officiis! Dignissimos tempora sed velit atque quam officiis, cum
                labore ullam, ducimus officia sapiente! Quos a quasi praesentium
                blanditiis impedit, debitis nobis, odio laboriosam odit officia,
                autem rem! Amet quaerat neque culpa deleniti voluptates omnis
                vel nihil unde suscipit fuga delectus iure minima in maiores
                voluptas fugiat asperiores accusamus sunt nesciunt, voluptatem
                iusto, facilis quod commodi. Quasi, voluptatum!
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
