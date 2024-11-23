const LoadingSpinner = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
    </div>
  );
};

export default LoadingSpinner;