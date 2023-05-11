import Link from 'next/link'
import { Container } from '.'
import Image from 'next/image'

export const Navigation = () => {
  return (
    <div className="sticky top-0 backdrop-blur-xl bg-[rgba(0,0,0,0.8)] border-b border-slate-800 z-50">
      <Container className="py-5">
        <Link href="/">
          <Image src="/logo.png" alt="Family Guy" width={70} height={50} />
        </Link>
      </Container>
    </div>
  )
}
