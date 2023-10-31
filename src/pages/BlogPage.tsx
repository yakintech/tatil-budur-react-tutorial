import React, { useContext } from 'react'
import { CounterContext, CounterContextType } from '../context/CounterContext'

function BlogPage() {

  const { counter, setcounter } = useContext(CounterContext) as CounterContextType


  return (<>
    <h1>{counter}</h1>
    <button onClick={() => setcounter(0)}>Empty</button>
  </>
  )
}

export default BlogPage