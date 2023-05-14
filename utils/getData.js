const devUrl = 'http://localhost:3000'
const prodUrl = 'https://next-fcc-familyguy.vercel.app/'

export async function getData(path, cache = 'default') {
  const data = await fetch(`${devUrl}/api/${path}`, {
    cache: cache,
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
