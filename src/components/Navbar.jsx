/* eslint-disable react/prop-types */
export default function Navbar({ isOpen, toggleMenu }) {
  return (
    <>
      <header className="sticky  w-full bg-[rgba(250,250,250,1)] px-4">
        <div className="text-primary-chocolate  mx-auto flex max-w-screen-2xl items-center">
          <div className="z-50">
            <a href={`/`}>
              <span className="font-sans2 text-5xl font-semibold">rk</span>
            </a>
          </div>
          <nav
            className={`absolute left-0 top-0 ml-auto w-full self-start bg-[rgba(250,250,250,.9)] pr-4 pt-8 uppercase backdrop-blur transition-all duration-300 sm:translate-x-0 sm:transition-none 
            ${
              isOpen
                ? "translate-x-0"
                : "pointer-events-none invisible translate-x-full opacity-0"
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
        </div>
      </header>
    </>
  );
}
