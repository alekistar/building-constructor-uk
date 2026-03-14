export default function Loading() {
  return (
    <main className="min-h-screen bg-background px-6 py-16">
      <div className="luxury-container space-y-8">
        <div className="shimmer h-12 w-1/2 rounded-md" />
        <div className="shimmer h-[50vh] w-full rounded-2xl" />
        <div className="grid gap-6 md:grid-cols-3">
          <div className="shimmer h-44 rounded-xl" />
          <div className="shimmer h-44 rounded-xl" />
          <div className="shimmer h-44 rounded-xl" />
        </div>
      </div>
    </main>
  );
}
