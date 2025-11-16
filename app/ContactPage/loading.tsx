export default function Loading() {
  return (
    <div className="min-h-screen bg-[#9AC2FF] flex items-center justify-center px-4 py-24">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-[#0A0D24] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-[#0A0D24] text-lg font-antonio">Loading Contact Page...</p>
      </div>
    </div>
  );
}
