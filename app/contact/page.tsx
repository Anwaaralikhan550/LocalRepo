export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto p-4 mt-24 glass">
      <h1 className="text-3xl font-bold mb-4 text-teal">Contact Us</h1>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
        <textarea placeholder="Message" className="w-full p-2 border rounded" rows={4} />
        <button type="submit" className="px-4 py-2 bg-teal text-white rounded hover:bg-gold transition">Send</button>
      </form>
    </div>
  )
}
