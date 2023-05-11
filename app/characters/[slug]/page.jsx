import { Container } from '@/components'

export default async function Page() {
  return (
    <main>
      <Container className="grid grid-cols-2 gap-1 py-5 md:grid-cols-3 lg:grid-cols-4">
        <h1>Character</h1>
      </Container>
    </main>
  )
}
