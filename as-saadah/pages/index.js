import Head from 'next/head'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>As-Saadah</title>
      </Head>
      <Navbar />
      <main className="flex flex-col items-center justify-center text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Welcome to As-Saadah</h1>
        <p className="max-w-xl">Transforming Lives, Inspiring Hope</p>
      </main>
    </>
  )
}
