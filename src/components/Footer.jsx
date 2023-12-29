import { Helmet } from "react-helmet-async";
function Footer() {
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
      <Helmet>
        <script
          src="https://open.spotify.com/embed/iframe-api/v1"
          async
        ></script>
        <script async src="//www.instagram.com/embed.js"></script>
      </Helmet>
      <footer className="pb-16 pt-36">
        <div className="mx-auto px-8 lg:container">
          <div className="grid items-end justify-items-center gap-8 md:grid-cols-2 xl:grid-cols-3">
            <div className="flex w-full flex-col items-center md:row-start-2 xl:row-auto">
              <span className="mb-4 font-serif text-lg  uppercase tracking-wider sm:text-xl">
                currently vibing to:
              </span>
              <div className="w-full rounded-2xl bg-primary-soft-lime p-8">
                <div id="embed-iframe"></div>
              </div>
            </div>
            <div className="row-start-1 w-full xl:col-start-2 ">
              <h2 className="mb-10 text-center font-sans2 text-4xl font-semibold lowercase sm:text-5xl">
                Connect!
              </h2>
              <div className="flex flex-col items-center font-serif">
                <span className="mb-4 font-serif text-lg uppercase tracking-wider sm:text-xl">
                  let&apos;s keep in touch
                </span>
                <div className="w-full rounded-2xl bg-primary-soft-lime p-8 text-center text-lg">
                  <span className="mb-4 block rounded-lg bg-primary-chocolate px-2 py-4 uppercase text-neutral-soft-white">
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
            <div className=" flex w-full items-center justify-center rounded-2xl bg-primary-soft-lime pb-6 pt-8 max-[420px]:hidden md:row-span-2 md:h-full xl:row-auto">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/rita.kibaki/?utm_source=ig_embed&utm_campaign=loading"
                data-instgrm-version={14}
              ></blockquote>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
