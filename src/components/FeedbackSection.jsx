import styled from 'styled-components'
import Button from './Button/Button'
import { useState } from 'react'
// import buttonStyles from './Button/Button.module.css'

const Section = styled.section`
  padding: 2em 6em;
  background-color: #f9f9f9;
  border-radius: 10px;
  max-width: 600px;
  margin: 0 auto;
`

const FormContainer = styled.div`
  display: flex;
  align-items: flex-start;
  height: 50vh;
  padding-top: 1em;
`

const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`

const Label = styled.label`
  margin-bottom: 0.8em;
  font-weight: bold;
`

const Control = styled.input`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0.5em 4em;
  margin-bottom: 1em;
  width: 100%;
  text-align: center;
  box-sizing: border-box; /* Include padding and border in element's total width */

  &::placeholder {
    text-align: center;
    line-height: 1.5;
  }
`

const Textarea = styled.textarea`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0.5em 4em;
  margin-bottom: 1em;
  width: 100%;
  resize: vertical;
  text-align: center;
  box-sizing: border-box;

  &::placeholder {
    font-size: 1.1em;
    text-align: center;
    line-height: 1.5;
  }
`

export { Section, FormContainer, Form, Label, Control, Textarea }

export default function FeedbackSection() {
  const [name, setName] = useState('')
  const [hasErr, setHasErr] = useState(false)
  const [email, setEmail] = useState('')
  const [feedback, setFeedback] = useState('')

  function handleNameChange(event) {
    setName(event.target.value)
    setHasErr(event.target.value.trim().length === 0)
  }

  // function validateEmail(email) {
  //   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  // }

  function handleSubmit(event) {
    event.preventDefault()

    if (
      name.trim() === '' ||
      email.trim() === '' ||
      // !validateEmail(email) ||
      feedback.trim() === ''
    ) {
      setHasErr(true)
      alert('Please fill in all fields and ensure the email is valid.')
    } else {
      setHasErr(false)
      // Handle the actual form submission logic (e.g., send data to API)
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, feedback }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
          }
          return response.json()
        })
        .then((data) => console.log('Success:', data))
        .catch((error) => console.error('Error:', error))

      alert(`Thank you for your feedback, ${name}!`)

      setName('')
      setEmail('')
      setFeedback('')

      console.log('Form submitted:', { name, email })
    }
  }

  return (
    <FormContainer>
      <Section>
        <h3>Feedback</h3>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="name">Your Name</Label>
          <Control
            type="text"
            id="name"
            placeholder="Enter your name"
            value={name}
            style={{ border: hasErr ? '1px solid red' : null }}
            onChange={handleNameChange}
            autoComplete="name"
          />

          <Label htmlFor="email">Your Email</Label>
          <Control
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            style={{ border: hasErr ? '1px solid red' : null }}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
          />

          <Label htmlFor="feedback">Your Feedback</Label>
          <Textarea
            id="feedback"
            rows="5"
            placeholder="Enter your feedback"
            value={feedback}
            onChange={(event) => setFeedback(event.target.value)}
          ></Textarea>

          <Button disabled={hasErr} isActive={!hasErr} type="submit">
            Submit
          </Button>

          {/* <Button disabled={hasErr} isActive={false} type="submit">
            Submit
          </Button> */}
        </Form>
      </Section>
    </FormContainer>
  )
}
