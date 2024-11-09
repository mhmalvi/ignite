export default function LoadingTrainers() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-20">
        <div className="animate-pulse space-y-8">
          <div className="h-40 bg-gray-800 rounded-xl" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-96 bg-gray-800 rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 