import { useRouter } from 'next/router'
import Navbar from '@/components/Navbar'

export default function Post() {
  const { query } = useRouter()
  const { slug } = query

  return (
    <>
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">{slug}</h1>
        <p>Blog content coming soon...</p>
      </div>
    </>
  )
}
