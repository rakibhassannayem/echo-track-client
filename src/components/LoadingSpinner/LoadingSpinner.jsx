const LoadingSpinner = () => {
  return (
    <div className="flex items-center gap-1">
      <img className="w-8 animate-spin" src="/logo.png" alt="" />
      <p className="text-2xl text-primary font-semibold">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
