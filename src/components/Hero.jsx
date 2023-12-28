import TypeIt from "typeit-react";

function Hero() {
  return (
    <>
      <section className="font-sans2 container mx-auto flex flex-col items-center pb-44 pt-24 text-center font-semibold">
        <h1 className=" mb-10 text-5xl lowercase tracking-tighter">Welcome.</h1>

        <div>
          <TypeIt
            className="tracking-tightest text-3xl"
            options={{
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
