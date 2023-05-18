import React from 'react'
import Card from './Card'

const Results = ({result}) => {
  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 max-w-6xl mx-auto py-4'>
        {result.map((res)=>(
            <Card key={res.id} result={res} />
        ))}
    </div> 
  )
}

export default Results