export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-[#FFFAEB] flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-[#FFC629] border-r-transparent"></div>
        <p className="mt-4 text-lg text-[#0E2452] font-semibold">Chargement...</p>
      </div>
    </div>
  )
}
