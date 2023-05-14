import { Container } from '@/components'
import { endpoint } from '@/utils/endpoint'
import Image from 'next/image'
import Link from 'next/link'
import { TbArrowBigRightFilled } from 'react-icons/tb'

async function getData(path) {
  const data = await fetch(`${endpoint}/${path}`, { cache: 'no-store' })
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
  const data = await getData('quiz/random')

  return (
    <main>
      <Container className="flex flex-col gap-5 py-5 md:flex-row-reverse md:justify-between">
        <div className="relative overflow-hidden rounded-2xl">
          <div className="md:w-[24rem]">
            <Image src="/wallpaper.jpg" alt="" width={700} height={700} />
          </div>
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent md:bg-gradient-to-r"></div>
        </div>

        <div className="md:w-[50%] flex flex-col gap-5">
          <h1 className="text-2xl font-semibold">Family Guy Quiz</h1>
          <p className="text-sm text-gray-300">
            Take this quiz to find out how much you know about the hit animated
            sitcom Family Guy. Test your knowledge of the characters, the
            episodes, and the show&apos;s many pop culture references.
          </p>
          <Link
            href={`/quiz/${data.randomQuestion}`}
            className="flex items-center justify-center gap-1 px-5 py-4 font-semibold text-orange-500 transition-colors rounded-md outline duration-600 hover:bg-orange-950"
          >
            <TbArrowBigRightFilled className="text-lg" />
            Take a Quiz Now!
          </Link>
        </div>
      </Container>
    </main>
  )
}
