import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
      <Hero />
      <section id="about" className="max-w-4xl mx-auto p-4 mt-10 glass">
        <h2 className="text-2xl font-bold mb-4 text-teal">Our Mission</h2>
        <p>
          As-Saadah is dedicated to providing accessible Islamic knowledge and inspiring content.
        </p>
      </section>
    </>
  )
}
