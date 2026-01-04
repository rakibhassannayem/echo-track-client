import { use, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { FaRunning, FaCheckCircle, FaHourglassHalf, FaLeaf } from "react-icons/fa";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const DashboardHome = () => {
  const { user } = use(AuthContext);
  const [stats, setStats] = useState({
    total: 0,
    completed: 0,
    pending: 0,
    activitiesByCategory: [],
  });
  const [recentActivities, setRecentActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`https://echo-track-server.vercel.app/my-activities?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        const total = data.length;
        const completed = data.filter(item => item.progress >= 10).length;
        const pending = total - completed;

        // Group by category for bar chart
        const categoryCounts = data.reduce((acc, item) => {
          const cat = item.challenge?.category || "Other";
          acc[cat] = (acc[cat] || 0) + 1;
          return acc;
        }, {});

        const activitiesByCategory = Object.keys(categoryCounts).map(cat => ({
          name: cat,
          count: categoryCounts[cat]
        }));

        setStats({
          total,
          completed,
          pending,
          activitiesByCategory,
        });

        setRecentActivities(data.slice(0, 5));
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [user]);

  const pieData = [
    { name: "Completed", value: stats.completed, color: "#10b981" },
    { name: "In Progress", value: stats.pending, color: "#f59e0b" },
  ];

  if (loading) return <LoadingSpinner />;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-base-content">Welcome back, {user?.displayName}! 👋</h1>
        <p className="text-secondary mt-1">Here's what's happening with your sustainability goals today.</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { label: "Total Activities", value: stats.total, icon: <FaRunning />, color: "bg-blue-500" },
          { label: "Completed", value: stats.completed, icon: <FaCheckCircle />, color: "bg-emerald-500" },
          { label: "In Progress", value: stats.pending, icon: <FaHourglassHalf />, color: "bg-amber-500" },
        ].map((stat, i) => (
          <div key={i} className="card bg-base-100 shadow-sm border border-base-300 hover:shadow-md transition-shadow">
            <div className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-secondary uppercase tracking-wider">{stat.label}</p>
                <p className="text-3xl font-bold mt-1 text-base-content">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-4 rounded-2xl text-white text-2xl shadow-lg`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pie Chart */}
      <div className="card bg-base-100 border border-base-300 shadow-sm p-6">
        <h3 className="text-xl font-bold mb-6 text-base-content">Goal Progress</h3>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={8}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
