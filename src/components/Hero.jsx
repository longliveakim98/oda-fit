import Button from "./Button";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-10 text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p>IT&apos;S TIME TO GET</p>
        <h1 className="text-4xl font-semibold uppercase sm:text-5xl md:text-6xl lg:text-7xl">
          ODA<span className="text-blue-400">NORMOUS</span>
        </h1>
      </div>
      <p className="text-xs font-light md:text-base lg:text-lg">
        I hearby acknowledge that I may become
        <span className="font-medium text-blue-400">
          {" "}
          unbelievably Odanormous
        </span>{" "}
        and accept all risks of becoming the local
        <span className="font-medium text-blue-400"> mass monstrosity</span>,
        afflicted with severe body dismorphia, unable to fit through doors
      </p>
      <Button func={() => (window.location.href = "#generate")}>
        Accept & Begin
      </Button>
    </div>
  );
};

export default Hero;
