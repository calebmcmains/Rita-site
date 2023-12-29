import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ImRita from "../components/ImRita";
import { Fade } from "react-awesome-reveal";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  window.onSpotifyIframeApiReady = (IFrameAPI) => {
    console.log("test");
    const element = document.getElementById("embed-iframe");
    const options = {
      width: "100%",
      height: "80",
      uri: "spotify:track:7zrhy9OhtcO7MdIvbbJiOa",
    };
    // eslint-disable-next-line no-unused-vars
    const callback = (EmbedController) => {};
    IFrameAPI.createController(element, options, callback);
  };

  return (
    <>
      <div
        className={`text-primary-chocolate mx-auto max-w-full ${
          isOpen ? "h-svh overflow-hidden" : "overflow-x-hidden"
        }`}
      >
        <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />

        <main>
          <Hero />
          <ImRita />

          <section className="py-36">
            <div className="container mx-auto mb-24 md:mt-8 xl:mt-36 2xl:mt-48">
              <h2 className="mb-20 text-center font-serif text-3xl font-semibold lowercase">
                Here&apos;s what i&apos;m all about
              </h2>
              <div className="grid items-center justify-items-center gap-x-4 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
                <Fade
                  triggerOnce
                  className="grid items-center justify-items-center gap-x-4 gap-y-16"
                >
                  <div className="flex w-5/6 flex-col justify-start ">
                    <div className="bg-secondary-red mb-8 flex h-72 w-full items-center justify-center rounded-2xl">
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
                      Incidunt dolorum reiciendis nemo minus libero aperiam
                      recusandae harum voluptate eius adipisci?
                    </p>
                  </div>
                  <div className="flex w-5/6 flex-col justify-start ">
                    <div className="bg-secondary-yellow mb-8 flex h-72 w-full items-center justify-center rounded-2xl">
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
                      Incidunt dolorum reiciendis nemo minus libero aperiam
                      recusandae harum voluptate eius adipisci?
                    </p>
                  </div>
                  <div className="flex w-5/6 flex-col justify-start ">
                    <div className=" bg-secondary-tan mb-8 flex h-72 w-full items-center justify-center rounded-2xl">
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
                    <h3 className="mb-2 text-xl font-bold uppercase">
                      Web Design
                    </h3>
                    <p className="">
                      Incidunt dolorum reiciendis nemo minus libero aperiam
                      recusandae harum voluptate eius adipisci?
                    </p>
                  </div>

                  <div className="flex w-5/6 flex-col justify-start ">
                    <div className=" bg-secondary-light-green mb-8 flex h-72 w-full items-center justify-center rounded-2xl ">
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
                      Incidunt dolorum reiciendis nemo minus libero aperiam
                      recusandae harum voluptate eius adipisci?
                    </p>
                  </div>
                  <div className="flex w-5/6 flex-col justify-start ">
                    <div className=" bg-secondary-light-blue mb-8 flex h-72 w-full items-center justify-center rounded-2xl">
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
                      Incidunt dolorum reiciendis nemo minus libero aperiam
                      recusandae harum voluptate eius adipisci?
                    </p>
                  </div>
                  <div className="flex w-5/6 flex-col justify-start ">
                    <div className=" bg-primary-chocolate mb-8 flex h-72 w-full items-center justify-center rounded-2xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="stroke-neutral-soft-white h-36 w-36"
                      >
                        <path
                          strokeLinecap="square"
                          strokeLinejoin="square"
                          d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                        />
                      </svg>
                    </div>
                    <h3 className="mb-2 text-xl font-bold uppercase">Fun</h3>
                    <p className="">
                      Incidunt dolorum reiciendis nemo minus libero aperiam
                      recusandae harum voluptate eius adipisci?
                    </p>
                  </div>
                </Fade>
              </div>
            </div>
          </section>

          <section className="bg-primary-chocolate w-full py-36">
            <div className="text-neutral-soft-white container mx-auto md:mt-8 xl:mt-36 2xl:mt-48">
              <h2 className="text-primary-chocolate -mt-96 mb-96 text-center font-serif text-3xl font-semibold lowercase">
                Check out some of my favs!
              </h2>
            </div>
          </section>
        </main>
        <footer className="pb-16 pt-96">
          <div className="container mx-auto">
            <div className="grid grid-cols-3 items-end justify-items-center">
              <div className="flex flex-col items-center">
                <span className="mb-4 font-serif text-xl uppercase tracking-wider">
                  currently vibing to:
                </span>
                <div className="bg-primary-soft-lime rounded-2xl p-8">
                  <div id="embed-iframe"></div>
                </div>
              </div>
              <div className="w-full">
                <h2 className="font-sans2 mb-10 text-center text-5xl font-semibold lowercase">
                  Connect!
                </h2>
                <div className="flex flex-col items-center font-serif">
                  <span className="mb-4 font-serif text-xl uppercase tracking-wider">
                    let&apos;s keep in touch
                  </span>
                  <div className="bg-primary-soft-lime w-full rounded-2xl p-8 text-center text-lg">
                    <span className="bg-primary-chocolate text-neutral-soft-white mb-4 block rounded-lg px-2 py-4 uppercase">
                      work with me
                    </span>
                    <div className="mb-4">
                      <a className="tracking-wider" href="tel:+17022227739">
                        702.222.7739
                      </a>
                    </div>
                    <div>
                      <a
                        className="tracking-wider"
                        href="mailto:kibakirita@gmail.com"
                      >
                        kibakirita@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink="https://www.instagram.com/rita.kibaki/?utm_source=ig_embed&utm_campaign=loading"
                  data-instgrm-version={14}
                  style={{
                    background: "#FFF",
                    border: 0,
                    borderRadius: 3,
                    boxShadow:
                      "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                    margin: 1,
                    maxWidth: 540,
                    minWidth: 326,
                    padding: 0,
                    width: "calc(100% - 2px)",
                  }}
                >
                  <div style={{ padding: 16 }}>
                    <a
                      rel="noreferrer"
                      href="https://www.instagram.com/rita.kibaki/?utm_source=ig_embed&utm_campaign=loading"
                      style={{
                        background: "#FFFFFF",
                        lineHeight: 0,
                        padding: "0 0",
                        textAlign: "center",
                        textDecoration: "none",
                        width: "100%",
                      }}
                      target="_blank"
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            backgroundColor: "#F4F4F4",
                            borderRadius: "50%",
                            flexGrow: 0,
                            height: 40,
                            marginRight: 14,
                            width: 40,
                          }}
                        />
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            flexGrow: 1,
                            justifyContent: "center",
                          }}
                        >
                          <div
                            style={{
                              backgroundColor: "#F4F4F4",
                              borderRadius: 4,
                              flexGrow: 0,
                              height: 14,
                              marginBottom: 6,
                              width: 100,
                            }}
                          />
                          <div
                            style={{
                              backgroundColor: "#F4F4F4",
                              borderRadius: 4,
                              flexGrow: 0,
                              height: 14,
                              width: 60,
                            }}
                          />
                        </div>
                      </div>
                      <div style={{ padding: "19% 0" }} />
                      <div
                        style={{
                          display: "block",
                          height: 50,
                          margin: "0 auto 12px",
                          width: 50,
                        }}
                      >
                        <svg
                          width="50px"
                          height="50px"
                          viewBox="0 0 60 60"
                          version="1.1"
                          xmlns="https://www.w3.org/2000/svg"
                          xmlnsXlink="https://www.w3.org/1999/xlink"
                        >
                          <g
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <g
                              transform="translate(-511.000000, -20.000000)"
                              fill="#000000"
                            >
                              <g>
                                <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631" />
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div style={{ paddingTop: 8 }}>
                        <div
                          style={{
                            color: "#3897f0",
                            fontFamily: "Arial,sans-serif",
                            fontSize: 14,
                            fontStyle: "normal",
                            fontWeight: 550,
                            lineHeight: 18,
                          }}
                        >
                          View this profile on Instagram
                        </div>
                      </div>
                      <div style={{ padding: "12.5% 0" }} />
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          marginBottom: 14,
                          alignItems: "center",
                        }}
                      >
                        <div>
                          <div
                            style={{
                              backgroundColor: "#F4F4F4",
                              borderRadius: "50%",
                              height: "12.5px",
                              width: "12.5px",
                              transform: "translateX(0px) translateY(7px)",
                            }}
                          />
                          <div
                            style={{
                              backgroundColor: "#F4F4F4",
                              height: "12.5px",
                              transform:
                                "rotate(-45deg) translateX(3px) translateY(1px)",
                              width: "12.5px",
                              flexGrow: 0,
                              marginRight: 14,
                              marginLeft: 2,
                            }}
                          />
                          <div
                            style={{
                              backgroundColor: "#F4F4F4",
                              borderRadius: "50%",
                              height: "12.5px",
                              width: "12.5px",
                              transform: "translateX(9px) translateY(-18px)",
                            }}
                          />
                        </div>
                        <div style={{ marginLeft: 8 }}>
                          <div
                            style={{
                              backgroundColor: "#F4F4F4",
                              borderRadius: "50%",
                              flexGrow: 0,
                              height: 20,
                              width: 20,
                            }}
                          />
                          <div
                            style={{
                              width: 0,
                              height: 0,
                              borderTop: "2px solid transparent",
                              borderLeft: "6px solid #f4f4f4",
                              borderBottom: "2px solid transparent",
                              transform:
                                "translateX(16px) translateY(-4px) rotate(30deg)",
                            }}
                          />
                        </div>
                        <div style={{ marginLeft: "auto" }}>
                          <div
                            style={{
                              width: 0,
                              borderTop: "8px solid #F4F4F4",
                              borderRight: "8px solid transparent",
                              transform: "translateY(16px)",
                            }}
                          />
                          <div
                            style={{
                              backgroundColor: "#F4F4F4",
                              flexGrow: 0,
                              height: 12,
                              width: 16,
                              transform: "translateY(-4px)",
                            }}
                          />
                          <div
                            style={{
                              width: 0,
                              height: 0,
                              borderTop: "8px solid #F4F4F4",
                              borderLeft: "8px solid transparent",
                              transform: "translateY(-4px) translateX(8px)",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          flexGrow: 1,
                          justifyContent: "center",
                          marginBottom: 24,
                        }}
                      >
                        <div
                          style={{
                            backgroundColor: "#F4F4F4",
                            borderRadius: 4,
                            flexGrow: 0,
                            height: 14,
                            marginBottom: 6,
                            width: 224,
                          }}
                        />
                        <div
                          style={{
                            backgroundColor: "#F4F4F4",
                            borderRadius: 4,
                            flexGrow: 0,
                            height: 14,
                            width: 144,
                          }}
                        />
                      </div>
                    </a>
                    <p
                      style={{
                        color: "#c9c8cd",
                        fontFamily: "Arial,sans-serif",
                        fontSize: 14,
                        lineHeight: 17,
                        marginBottom: 0,
                        marginTop: 8,
                        overflow: "hidden",
                        padding: "8px 0 7px",
                        textAlign: "center",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <a
                        rel="noreferrer"
                        href="https://www.instagram.com/rita.kibaki/?utm_source=ig_embed&utm_campaign=loading"
                        style={{
                          color: "#c9c8cd",
                          fontFamily: "Arial,sans-serif",
                          fontSize: 14,
                          fontStyle: "normal",
                          fontWeight: "normal",
                          lineHeight: 17,
                        }}
                        target="_blank"
                      >
                        rita kibaki
                      </a>
                      (@
                      <a
                        rel="noreferrer"
                        href="https://www.instagram.com/rita.kibaki/?utm_source=ig_embed&utm_campaign=loading"
                        style={{
                          color: "#c9c8cd",
                          fontFamily: "Arial,sans-serif",
                          fontSize: 14,
                          fontStyle: "normal",
                          fontWeight: "normal",
                          lineHeight: 17,
                        }}
                        target="_blank"
                      >
                        rita.kibaki
                      </a>
                      ) • Instagram photos and videos
                    </p>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
