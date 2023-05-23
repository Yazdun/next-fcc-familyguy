/**

Renders a Next.js page component that displays a grid of character avatars with links to individual character pages.
@component
@returns {JSX.Element} The rendered page component.
*/
import { Container } from '@/components'
import Image from 'next/image'
import Link from 'next/link'
import { endpoint } from '@/utils/endpoint'
/**

Retrieves data from the specified endpoint path.
@async
@param {string} path - The endpoint path to fetch data from.
@returns {Promise<Object>} A promise that resolves to the fetched data.
@throws {Error} If the data fetching fails.
*/

export async function getData(path) {
  const data = await fetch(`${endpoint}/${path}`)

  if (!data.ok) {
    throw new Error('Failed to fetch data')
  }

  return data.json()
}

export default async function Page() {
  const data = await getData('/characters')

  return (
    <main>
      <Container className="grid grid-cols-2 gap-1 py-5 md:grid-cols-3 lg:grid-cols-4">
        {data?.characters?.map(item => {
          return (
            <Link
              href={`/characters/${item.slug}`}
              key={item.name}
              className="overflow-hidden rounded-md"
            >
              <Image
                src={item.avatar}
                alt=""
                className="transition-all duration-500 hover:scale-110 hover:-rotate-2"
                width={500}
                height={500}
              />
            </Link>
          )
        })}
      </Container>
    </main>
  )
}
