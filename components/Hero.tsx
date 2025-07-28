export default function Hero() {
  return (
    <section className="flex items-center justify-center h-[60vh] bg-[url('/images/hero.jpg')] bg-cover bg-center text-center">
      <div className="bg-white/70 p-8 rounded glass">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-spiritual">Welcome to As-Saadah</h1>
        <p className="text-lg mb-6">Transforming Lives, Inspiring Hope</p>
        <a href="#about" className="px-6 py-3 bg-teal text-white rounded hover:bg-gold transition">Discover More</a>
      </div>
    </section>
  )
}
