import { useState, useEffect } from 'react'
const API_CAT_FACTS = 'https://catfact.ninja/fact'
export function useFact () {
  // const [fact, setFact] = useState('fact')

  // useEffect(() => {
  //   fetch(API_CAT_FACTS)
  //     .then(res => res.json())
  //     .then(data => setFact(data.fact))
  // }, [])

  const [fact, setFact] = useState('fact')
  const getRandomFact = async () => {
    const res = await fetch(API_CAT_FACTS)
    const data = await res.json()
    const { fact } = data
    return fact
  }
  const refreshFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }
  useEffect(refreshFact, [])

  return (
    {
      fact,
      refreshFact
    }
  )
}
