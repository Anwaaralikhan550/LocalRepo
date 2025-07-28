import Navbar from '@/components/Navbar'

export default function Donations() {
  return (
    <>
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Support As-Saadah</h1>
        <p className="mb-4">Your support helps us continue providing valuable content.</p>
        <button className="bg-gold text-white px-4 py-2 rounded">Donate</button>
      </div>
    </>
  )
}
