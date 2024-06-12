import Button from './Button/Button'
import { useState } from 'react'
import { differences } from '../data'

export default function AboutSection() {
  const [contentType, setContentType] = useState(null)

  function handleClick(type) {
    setContentType(type)
    // content = type
  }

  return (
    <section>
      <h3>About Vite+React</h3>
      <Button
        isActive={contentType === 'way'}
        onClick={() => handleClick('way')}
      >
        React
      </Button>

      <Button
        isActive={contentType === 'easy'}
        onClick={() => handleClick('easy')}
      >
        Vite
      </Button>

      {!contentType && <p>Click the button</p>}
      {contentType && (
        <p className="centered-text">{differences[contentType]}</p>
      )}

      {/* {contentType ? (
      <p>{differences[contentType]}</p>
    ) : (
      <p>Click the button</p>
    )} */}
    </section>
  )
}
