import { BiLeaf, BiCheckCircle } from "react-icons/bi";
import { RiTeamLine } from "react-icons/ri";

const WhyGoGreen = () => {
  const benefits = [
    {
      title: "Protect Our Planet",
      desc: "Reduce your carbon footprint and preserve natural resources for future generations",
      icon: <BiLeaf className="w-8 h-8 text-primary" />,
      bgColor: "bg-primary/10",
    },
    {
      title: "Build Community",
      desc: "Connect with like-minded individuals and inspire others through your actions",
      icon: <RiTeamLine className="w-8 h-8 text-accent" />,
      bgColor: "bg-accent/10",
    },
    {
      title: "Track Progress",
      desc: "Measure your impact with real data and celebrate your environmental wins",
      icon: <BiCheckCircle className="w-8 h-8 text-primary" />,
      bgColor: "bg-primary/10",
    },
  ];

  return (
    <section>
      <div className="mb-8 text-center">
        <h2 className="headings">Why Go Green?</h2>
        <p className="text-secondary mt-2">
          Small actions create big changes when we work together
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {benefits.map((benefit, i) => (
          <div key={i} className="text-center space-y-4 p-8 bg-base-100 rounded-3xl border border-base-300">
            <div className={`w-16 h-16 rounded-2xl ${benefit.bgColor} flex items-center justify-center mx-auto`}>
              {benefit.icon}
            </div>
            <h3 className="font-bold text-xl text-base-content">
              {benefit.title}
            </h3>
            <p className="text-secondary">
              {benefit.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyGoGreen;
