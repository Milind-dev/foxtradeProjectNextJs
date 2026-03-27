export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center h-[80vh] gap-4">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-500 text-sm">Loading services...</p>
    </div>
  );
}
