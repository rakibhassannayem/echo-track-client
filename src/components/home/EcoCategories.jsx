import { BiLeaf, BiDroplet, BiSun, BiTrash, BiBus } from "react-icons/bi";

const EcoCategories = () => {
  const categories = [
    { name: "Energy", icon: <BiSun />, color: "bg-yellow-500/10 text-yellow-600" },
    { name: "Water", icon: <BiDroplet />, color: "bg-blue-500/10 text-blue-600" },
    { name: "Waste", icon: <BiTrash />, color: "bg-orange-500/10 text-orange-600" },
    { name: "Transport", icon: <BiBus />, color: "bg-green-500/10 text-green-600" },
    { name: "Nature", icon: <BiLeaf />, color: "bg-emerald-500/10 text-emerald-600" },
  ];

  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="headings">Explore by Category</h2>
        <p className="text-secondary mt-2">Find challenges that match your environmental focus</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {categories.map((cat, i) => (
          <div key={i} className={`p-6 rounded-2xl ${cat.color} flex flex-col items-center gap-3 hover:scale-105 transition-transform cursor-pointer border border-transparent hover:border-current/20`}>
            <span className="text-3xl">{cat.icon}</span>
            <span className="font-bold">{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EcoCategories;
