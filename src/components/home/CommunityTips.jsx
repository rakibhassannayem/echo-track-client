import TipsCard from "./TipsCard";
import SkeletonLoading from "../SkeletonLoading/SkeletonLoading";

const CommunityTips = ({ tipsData, loading }) => {
  return (
    <section className="rounded-xl">
      <div className="mb-8 text-center">
        <h2 className="headings">Community Tips</h2>
        <p className="text-secondary mt-2">
          Learn from our eco-conscious members
        </p>
      </div>

      {loading ? (
        <div className="grid md:grid-cols-3 gap-6">
          <SkeletonLoading />
          <SkeletonLoading />
          <SkeletonLoading />
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {tipsData.slice(0, 6).map((tip) => (
            <TipsCard key={tip._id} tip={tip}></TipsCard>
          ))}
        </div>
      )}
    </section>
  );
};

export default CommunityTips;
