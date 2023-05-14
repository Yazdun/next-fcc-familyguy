export async function getData(path, cache = 'default') {
  const data = await fetch(`http://localhost:3000/api/${path}`, {
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
