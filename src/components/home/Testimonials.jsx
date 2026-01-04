const Testimonials = () => {
  const reviews = [
    { name: "Sarah J.", role: "Student", text: "Echo Track made it so easy to track my plastic waste. I've reduced it by 40% in just two months!" },
    { name: "Mark D.", role: "Tech Lead", text: "The energy-saving challenges are gamified and fun. Our whole team joined and we're seeing real results." },
    { name: "Elena R.", role: "Nature Lover", text: "I love the community tips! I've learned so many practical ways to live a zero-waste lifestyle." },
  ];

  return (
    <section className="bg-base-200 rounded-3xl p-10 md:p-16">
      <div className="text-center mb-10">
        <h2 className="headings">What Our Community Says</h2>
        <p className="text-secondary mt-2">Real stories from real eco-warriors</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((t, i) => (
          <div key={i} className="bg-base-100 p-8 rounded-2xl space-y-4 shadow-sm relative">
            <p className="text-secondary italic">"{t.text}"</p>
            <div>
              <h4 className="font-bold text-base-content">{t.name}</h4>
              <p className="text-xs text-primary/70">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
