import React, { useState } from 'react'

const IndexPage = () => {
  const [source, setSource] = useState(null)

  const handleStart = () => {
    const newSource = new EventSource('/api/sse')
    newSource.onmessage = (event) => {
      console.log('Received message:', event.data)
    }
    setSource(newSource)
  }

  const handleStop = () => {
    if (source) {
      source.close()
      setSource(null)
    }
  }

  return (
    <div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  )
}

export default IndexPage