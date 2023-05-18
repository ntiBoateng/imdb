import Results from '@/components/Results'
import React from 'react'

const SearchPage = async({params}) => {
    const res =await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US`)
    if(!res.ok){
        throw new Error("Error fetching data")
    }
    const data = await (await res).json()
    const results = data.results
    console.log(results.length);
  return (
    <div>
        {results && results.length ===0 && (
            <h1 className='text-center pt-6 text-2xl'>No results found!</h1>
        )}
 
        {results && <Results result={results} />}
    </div>
  )
}

export default SearchPage