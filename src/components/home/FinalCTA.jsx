import { BiLeaf } from "react-icons/bi";
import { Link } from "react-router";

const FinalCTA = () => {
  return (
    <section className="bg-primary rounded-3xl p-10 md:p-20 text-center text-white space-y-8 relative overflow-hidden">
      <BiLeaf className="absolute -top-10 -right-10 text-white/5 text-[20rem] rotate-12" />
      <div className="max-w-2xl mx-auto space-y-6 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold">Small actions create a massive echo.</h2>
        <p className="text-primary-content/80 text-lg md:text-xl">
          Join to the community of eco-conscious members who are already making a difference every single day.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link to="/challenges" className="btn btn-lg bg-white text-primary border-none hover:bg-white/90 px-10 rounded-2xl">Start Now</Link>
          <Link to="/about" className="btn btn-lg bg-transparent border-white/30 text-white hover:bg-white/10 px-10 rounded-2xl">Learn More</Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
