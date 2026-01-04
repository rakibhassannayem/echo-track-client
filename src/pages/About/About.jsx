import { BiLeaf, BiTargetLock, BiGroup, BiTrophy } from "react-icons/bi";
import { RiEarthFill } from "react-icons/ri";
import { Link } from "react-router";

const About = () => {
  return (
    <div className="space-y-16 py-10">
      {/* Hero Section */}
      <section className="text-center space-y-6 max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
          <RiEarthFill className="w-4 h-4" />
          <span>Tracking Our Path to Sustainability</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-base-content leading-tight">
          Empowering Communities to <span className="text-primary italic">Echo Change</span>
        </h1>
        <p className="text-lg text-secondary leading-relaxed max-w-2xl mx-auto">
          Echo Track is more than just a tracking tool; it's a movement dedicated to making sustainable living accessible, engaging, and impactful for everyone.
        </p>
      </section>

      {/* Mission Section */}
      <section className="bg-base-200 rounded-3xl p-8 md:p-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="headings">Our Mission</h2>
            <p className="text-secondary text-lg">
              To inspire global environmental action by providing an intuitive platform where individuals can track their sustainability journey, share insights, and celebrate community-driven impact.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 p-4 rounded-2xl bg-base-100 border border-base-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <BiTargetLock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-base-content">Action-Oriented</h4>
                  <p className="text-sm text-secondary">Broadening the reach of eco-friendly habits through gamified challenges.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-2xl bg-base-100 border border-base-300">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <BiGroup className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-base-content">Community First</h4>
                  <p className="text-sm text-secondary">Fostering a supportive environment for eco-conscious individuals.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-linear-to-br from-primary/20 via-accent/10 to-primary/10 rounded-3xl flex items-center justify-center">
              <BiLeaf className="w-48 h-48 text-primary opacity-50 rotate-12" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-base-100 p-6 rounded-2xl shadow-xl border border-base-300 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white">
                <BiTrophy className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-secondary uppercase tracking-wider font-bold">Total Impact</p>
                <p className="text-2xl font-bold text-base-content">1.2M+ Actions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="space-y-10">
        <div className="text-center space-y-4">
          <h2 className="headings text-center">Why Choose Echo Track?</h2>
          <p className="text-secondary max-w-xl mx-auto">
            We've designed a platform that makes sustainability second nature, combining data with community inspiration.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Real-time Analytics",
              desc: "Visualize your progress with dynamic charts and personalized impact reports.",
              icon: "📊"
            },
            {
              title: "Global Challenges",
              desc: "Join community-wide events and compete for eco-milestones alongside others.",
              icon: "🌍"
            },
            {
              title: "Verified Tips",
              desc: "Access a library of expert-curated advice on zero-waste living and carbon reduction.",
              icon: "💡"
            },
            {
              title: "Social Integration",
              desc: "Share your achievements seamlessly on social media to inspire your network.",
              icon: "🤝"
            },
            {
              title: "Simple Logging",
              desc: "An intuitive interface that lets you record your actions in seconds.",
              icon: "⚡"
            },
            {
              title: "Reward System",
              desc: "Earn badges and recognition as you reach new levels of sustainability.",
              icon: "🎖️"
            }
          ].map((feature, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-base-100 border border-base-300 hover:border-primary/50 transition-all group">
              <span className="text-4xl mb-6 block group-hover:scale-110 transition-transform">{feature.icon}</span>
              <h3 className="text-xl font-bold text-base-content mb-3">{feature.title}</h3>
              <p className="text-secondary leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-primary text-white rounded-3xl p-10 md:p-16 text-center space-y-8">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Ready to make an echo?</h2>
          <p className="text-primary-content/80 text-lg">
            Join thousands of others who are already tracking their journey towards a better planet. Every small action counts.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/challenges" className="btn btn-lg bg-white text-primary hover:bg-white/90 border-none px-8">Get Started Now</Link>

        </div>
      </section>
    </div>
  );
};

export default About;
