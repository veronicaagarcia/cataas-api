import { useFact } from './hooks/useFact'
import { useCatImg } from './hooks/useCatImg'
import './app.css'

export function App () {
  const { fact, refreshFact } = useFact()
  const { wordSearch, imgURL } = useCatImg({ fact })
  const handleClick = async () => {
    refreshFact()
  }
  return (
    <main className='app'>
      <h1 className='app-title'>Random facts cats app</h1>
      {fact && <p className='app-fact'><strong>Fact:</strong> {fact}</p>}
      <section className='app-section'>
        <p className='app-p'>If you wants more image with the first four words, click for
          <button
            className='app-button'
            onClick={handleClick}
          > More
          </button>
        </p>
        {imgURL && <img
          className='app-img'
          alt={`image cat with:" ${wordSearch}"`}
          src={imgURL}
                   />}
      </section>
    </main>
  )
}
