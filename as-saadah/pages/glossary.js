import Navbar from '@/components/Navbar'

const terms = [
  { term: 'Salaam', definition: 'Peace' },
  { term: 'Dua', definition: 'Supplication or prayer' }
]

export default function Glossary() {
  return (
    <>
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Glossary</h1>
        <ul>
          {terms.map(t => (
            <li key={t.term} className="mb-2">
              <strong>{t.term}:</strong> {t.definition}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
