import { Fade } from "react-awesome-reveal";

function WhatImAbout() {
  return (
    <>
      <section className="py-36">
        <div className="container mx-auto mb-24 md:mt-8 xl:mt-36 2xl:mt-48">
          <h2 className="mb-20 text-center font-serif text-3xl font-semibold lowercase">
            Here&apos;s what i&apos;m all about
          </h2>
          <div className="grid items-start justify-items-center gap-x-4 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            <Fade
              direction="up"
              triggerOnce
              className="grid items-center justify-items-center gap-x-4 gap-y-16"
            >
              <div className="flex w-5/6 flex-col justify-start ">
                <div className="mb-8 flex h-72 w-full items-center justify-center rounded-2xl bg-secondary-red">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-36 w-36"
                  >
                    <path
                      strokeLinecap="square"
                      strokeLinejoin="square"
                      d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold uppercase">
                  Brand Management
                </h3>
                <p className="">
                  Brand management is like crafting a brand&apos;s personality
                  and claiming your own slice of uniqueness. From logo to vibe,
                  it is about guiding you to a place where the world knows
                  exactly who you are and loves you for it! 🌏
                </p>
              </div>
              <div className="flex w-5/6 flex-col justify-start ">
                <div className="mb-8 flex h-72 w-full items-center justify-center rounded-2xl bg-secondary-yellow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-36 w-36"
                  >
                    <path
                      strokeLinecap="square"
                      strokeLinejoin="square"
                      d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold uppercase">
                  Project Management
                </h3>
                <p className="">
                  Project management is the art of orchestrating tasks,
                  combining success with a unique plan, and ensuring your
                  project wins 📌. Working together form start to completion,
                  project management leads you to a place where your goals
                  become a reality.
                </p>
              </div>
              <div className="flex w-5/6 flex-col justify-start ">
                <div className=" mb-8 flex h-72 w-full items-center justify-center rounded-2xl bg-secondary-tan">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-36 w-36"
                  >
                    <path
                      strokeLinecap="square"
                      strokeLinejoin="square"
                      d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold uppercase">Web Design</h3>
                <p className="">
                  Web design is the symphony of creating digital perfection,
                  weaving success with a unique blueprint, and sharing your
                  passion. From concept to launch, web design guides you to a
                  place where your online goals come to life! 🖥
                </p>
              </div>

              <div className="flex w-5/6 flex-col justify-start ">
                <div className=" mb-8 flex h-72 w-full items-center justify-center rounded-2xl bg-secondary-light-green ">
                  <div className="grid items-center justify-center gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="col-start-1 row-start-1 row-end-3 h-24 w-24"
                    >
                      <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" />
                      <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="col-start-2 row-start-1 h-24 w-24"
                    >
                      <path
                        d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
                        fillRule="evenodd"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="col-start-2 row-start-2 h-24 w-24"
                    >
                      <path d="M412.19 118.66a109.27 109.27 0 01-9.45-5.5 132.87 132.87 0 01-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14 23.9 350 16 350.13 16h-82.44v318.78c0 4.28 0 8.51-.18 12.69 0 .52-.05 1-.08 1.56 0 .23 0 .47-.05.71v.18a70 70 0 01-35.22 55.56 68.8 68.8 0 01-34.11 9c-38.41 0-69.54-31.32-69.54-70s31.13-70 69.54-70a68.9 68.9 0 0121.41 3.39l.1-83.94a153.14 153.14 0 00-118 34.52 161.79 161.79 0 00-35.3 43.53c-3.48 6-16.61 30.11-18.2 69.24-1 22.21 5.67 45.22 8.85 54.73v.2c2 5.6 9.75 24.71 22.38 40.82A167.53 167.53 0 00115 470.66v-.2l.2.2c39.91 27.12 84.16 25.34 84.16 25.34 7.66-.31 33.32 0 62.46-13.81 32.32-15.31 50.72-38.12 50.72-38.12a158.46 158.46 0 0027.64-45.93c7.46-19.61 9.95-43.13 9.95-52.53V176.49c1 .6 14.32 9.41 14.32 9.41s19.19 12.3 49.13 20.31c21.48 5.7 50.42 6.9 50.42 6.9v-81.84c-10.14 1.1-30.73-2.1-51.81-12.61z" />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-bold uppercase">
                  Social Media
                </h3>
                <p className="">
                  Knowing what kind of content should you be sharing, or how
                  often should you be posting and where is so vital 🙌! Creating
                  customized media plans that increase brand awareness,
                  engagement and optimization to take your brand from better to
                  best.
                </p>
              </div>
              <div className="flex w-5/6 flex-col justify-start ">
                <div className=" mb-8 flex h-72 w-full items-center justify-center rounded-2xl bg-secondary-light-blue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-36 w-36"
                  >
                    <path
                      strokeLinecap="square"
                      strokeLinejoin="square"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold uppercase">
                  Email Marketing
                </h3>
                <p className="">
                  Mastering the art of email marketing is the key to mass
                  connection. Crafting customized email plans becomes the
                  compass, steering your brand towards heightened awareness📈,
                  engagement, and optimization.
                </p>
              </div>
              <div className="flex w-5/6 flex-col justify-start ">
                <a
                  rel="noreferrer"
                  href="https://www.pinterest.com/ritankibaki/"
                  target="_blank"
                >
                  <div className=" mb-8 flex h-72 w-full items-center justify-center rounded-2xl bg-primary-chocolate">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-36 w-36 stroke-neutral-soft-white"
                    >
                      <path
                        strokeLinecap="square"
                        strokeLinejoin="square"
                        d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                      />
                    </svg> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-36 w-36 stroke-neutral-soft-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold uppercase">Fun</h3>
                  <p className="">
                    Take a look at what design styles and trends I am totally
                    loving right now!!!🤩✨🤎
                  </p>
                </a>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhatImAbout;
