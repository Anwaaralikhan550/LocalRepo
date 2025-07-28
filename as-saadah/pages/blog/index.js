import Navbar from '@/components/Navbar'

const posts = [
  { title: 'First Article', slug: 'first-article' },
  { title: 'Second Article', slug: 'second-article' }
]

export default function Blog() {
  return (
    <>
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
        <ul className="list-disc pl-5">
          {posts.map(post => (
            <li key={post.slug} className="mb-2">
              <a href={`/blog/${post.slug}`} className="text-teal hover:underline">
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
