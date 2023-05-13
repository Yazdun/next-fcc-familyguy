'use client'

export const Answer = ({ data }) => {
  return (
    <ul className="grid gap-2 grid-cols-2 md:grid-cols-4">
      {data.map(item => {
        return (
          <li key={item}>
            <button className="p-2 text-sm rounded-md justify-center bg-slate-700 w-full flex">
              {item}
            </button>
          </li>
        )
      })}
    </ul>
  )
}
