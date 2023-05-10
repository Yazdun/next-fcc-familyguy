import { Container } from '.'
import Image from 'next/image'

export const Navigation = () => {
  return (
    <Container className="py-5">
      <Image src="/logo.png" alt="Family Guy" width={70} height={50} />
    </Container>
  )
}
