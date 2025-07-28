import Navbar from '@/components/Navbar'

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <form className="flex flex-col max-w-md gap-4">
          <input type="text" placeholder="Name" className="border p-2 rounded" />
          <input type="email" placeholder="Email" className="border p-2 rounded" />
          <textarea placeholder="Message" className="border p-2 rounded" />
          <button className="bg-teal text-white px-4 py-2 rounded">Send</button>
        </form>
      </div>
    </>
  )
}
