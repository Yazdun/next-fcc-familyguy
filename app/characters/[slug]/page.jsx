/**
Renders a Next.js page component that displays detailed information about a character, including their name, occupations, description, images, skills, and famous quotes.
@component
@param {Object} props - The component props.
@param {Object} props.params - The parameters passed to the page component.
@param {string} props.params.slug - The slug of the character.
@returns {JSX.Element} The rendered page component.
*/

import { Container } from '@/components'
import Image from 'next/image'
import { endpoint } from '@/utils/endpoint'

export default async function Page({ params }) {
  return <main>character page</main>
}
