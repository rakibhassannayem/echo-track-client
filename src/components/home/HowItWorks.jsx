const HowItWorks = () => {
  const steps = [
    { step: 1, title: "Join a Challenge", desc: "Browse our challenges and pick one that fits your lifestyle and goals" },
    { step: 2, title: "Track Your Progress", desc: "Log your daily actions and watch your environmental impact grow" },
    { step: 3, title: "Share & Inspire", desc: "Share your journey and tips with the community to inspire others" },
  ];

  return (
    <section>
      <div className="mb-10 text-center">
        <h2 className="headings">How It Works</h2>
        <p className="text-secondary mt-2">
          Three simple steps to start your sustainability journey
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
        {steps.map((item, i) => (
          <div key={i} className="text-center space-y-4 relative group">
            <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto text-2xl font-bold shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
              {item.step}
            </div>
            <h3 className="font-bold text-xl text-base-content">{item.title}</h3>
            <p className="text-secondary">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
