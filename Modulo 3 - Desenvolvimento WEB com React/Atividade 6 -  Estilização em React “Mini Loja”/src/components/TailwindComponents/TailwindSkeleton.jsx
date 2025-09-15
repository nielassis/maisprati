export default function TailwindSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col animate-pulse">
      <div className="absolute top-2 left-2 flex flex-col gap-1">
        <div className="h-4 w-12 bg-gray-200 rounded-full"></div>
        <div className="h-4 w-16 bg-gray-200 rounded-full"></div>
      </div>

      <div className="w-full h-48 bg-gray-200" />

      <div className="p-4 flex flex-col flex-1 gap-2">
        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        <div className="mt-auto flex items-center justify-between">
          <div className="h-6 w-16 bg-gray-200 rounded"></div>
          <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
