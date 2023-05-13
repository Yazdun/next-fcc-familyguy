import { Container } from '@/components'
import Image from 'next/image'
import Link from 'next/link'
import { TbArrowBigRightFilled } from 'react-icons/tb'

async function getData() {
  const data = await fetch('http://localhost:3000/api/quiz/random', {
    cache: 'no-store',
  })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  // Recommendation: handle errors

  if (!data.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return data.json()
}

export default async function Page() {
  const data = await getData()

  return (
    <main>
      <Container className="py-5 flex flex-col gap-5 md:flex-row-reverse md:justify-between">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="md:w-[24rem]">
            <Image src="/wallpaper.jpg" alt="" width={700} height={700} />
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black to-transparent md:bg-gradient-to-r"></div>
        </div>

        <div className="md:w-[50%] flex flex-col gap-5">
          <h1 className="text-2xl font-semibold">Family Guy Quiz</h1>
          <p className="text-gray-300">
            Take this quiz to find out how much you know about the hit animated
            sitcom Family Guy. Test your knowledge of the characters, the
            episodes, and the show&apos;s many pop culture references.
          </p>
          <Link
            href={`/quiz/${data.randomQuestion}`}
            className="flex items-center justify-center gap-1 px-5 font-semibold  transition-colors outline py-4 text-orange-500 rounded-md duration-600 hover:bg-orange-950"
          >
            <TbArrowBigRightFilled className="text-lg" />
            Take a Quiz Now!
          </Link>
        </div>
      </Container>
    </main>
  )
}
