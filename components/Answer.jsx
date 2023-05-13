'use client'

import { Container } from '.'

export const Answer = ({ data }) => {
  return (
    <ul className="grid grid-cols-2 gap-2 md:grid-cols-4">
      {data.map(item => {
        return (
          <li key={item}>
            <button className="p-2 rounded-md bg-slate-700 w-full flex text-sm">
              {item}
            </button>
          </li>
        )
      })}
    </ul>
  )
}
