export default function Home() {
  return (
    <section className="text-center py-20 space-y-4">
      <h1 className="text-4xl font-bold">Welcome to As-Saadah</h1>
      <p className="text-lg">Transforming Lives, Inspiring Hope</p>
      <div className="flex justify-center space-x-4">
        <a href="#" className="px-6 py-2 bg-teal text-white rounded shadow hover:bg-teal/80">Discover More</a>
        <a href="/donations" className="px-6 py-2 bg-gold text-white rounded shadow hover:bg-gold/80">Donate</a>
      </div>
    </section>
  );
}
