import TypeIt from "typeit-react";

function Hero() {
  return (
    <>
      <section className="container mx-auto flex flex-col items-center pb-44 pt-24 text-center font-sans2 font-semibold">
        <h1 className=" mb-10 text-5xl lowercase tracking-tighter">Welcome.</h1>

        <div className="grid">
          <div className="invisible col-start-1 row-start-1 text-3xl tracking-tightest">
            {" "}
            arizona <span className="font-serif font-normal">based.</span>
            <br />
            worldwide <span className="font-serif font-normal">reach.</span>
            <br />
            creative to the{" "}
            <span className="font-serif font-normal">core.</span>
          </div>
          <TypeIt
            className="col-start-1 row-start-1 text-3xl tracking-tightest"
            options={{
              speed: 75,
              afterComplete: function (instance) {
                setTimeout(() => {
                  instance.destroy();
                }, 3000);
              },
            }}
          >
            arizona <span className="font-serif font-normal">based.</span>
            <br />
            worldwide <span className="font-serif font-normal">reach.</span>
            <br />
            creative to the{" "}
            <span className="font-serif font-normal">core.</span>
          </TypeIt>
        </div>
      </section>
    </>
  );
}

export default Hero;
