'use client'

import { useEffect, useState } from 'react'
import cn from 'classnames'
import { Container } from '.'
import Link from 'next/link'
import { FiRepeat } from 'react-icons/fi'

export const Answer = ({ data, questionId }) => {
  const [selected, setSeleceted] = useState(null)
  const [correct, setCorrect] = useState(null)
  const [random, setRandom] = useState(null)
  const [loading, setLoading] = useState(null)

  console.log(correct)
  console.log(random)

  useEffect(() => {
    const url = `/api/quiz/answer/${questionId}`

    const fetchResult = async () => {
      setLoading(true)
      await fetch(url)
        .then(response => response.json())
        .then(data => {
          setCorrect(data.answer)
          setRandom(data.random)
          setLoading(false)
        })
    }

    selected && fetchResult()
  }, [selected])

  return (
    <>
      <ul className="grid grid-cols-2 gap-2 md:grid-cols-4">
        {data.map(item => {
          return (
            <li key={item}>
              <button
                onClick={() => setSeleceted(item)}
                className={cn(
                  'p-2 rounded-md bg-slate-700 w-full flex text-sm',
                  selected === item &&
                    selected !== correct &&
                    !loading &&
                    'bg-red-500',
                  correct === item && 'outline outline-green-500',
                )}
              >
                {item}
              </button>
            </li>
          )
        })}
      </ul>
      {random && (
        <Link
          href={`/quiz/${random}`}
          className="flex text-blue-500 gap-1 items-center"
        >
          <FiRepeat className="mt-1" />
          Do it again
        </Link>
      )}
    </>
  )
}
