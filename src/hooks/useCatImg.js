import { useEffect, useState } from 'react'

const API_CAT_IMG = 'https://cataas.com/cat/says/'
export function useCatImg ({ fact }) {
  const [imgUrl, setImgUrl] = useState()
  const wordSearch = fact.split(' ', 4).join(' ')
  useEffect(() => {
    if (!fact) return
    fetch(`${API_CAT_IMG}${wordSearch}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => setImgUrl(response._id)
      )
  }, [fact])
  const imgURL = `https://cataas.com/cat/${imgUrl}`
  return (
    {
      imgURL,
      wordSearch
    }
  )
}
