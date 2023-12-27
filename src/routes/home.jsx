export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-screen-2xl">
        <nav className="text-primary-chocolate sticky top-0 flex items-center bg-[rgba(250,250,250,1)] px-4">
          <div>
            <span className=" font-sans2 text-5xl font-semibold ">rk</span>
          </div>
          <ul className=" ml-auto flex gap-32 self-start pr-4 pt-8 uppercase">
            <li>
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

        <main>
          <section className="font-sans2 flex flex-col items-center pb-44 pt-24 text-center font-semibold">
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
          <section className=" bg-primary-soft-lime h-[768px] w-full py-24"></section>
        </main>
      </div>
    </>
  );
}
