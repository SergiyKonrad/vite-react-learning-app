import HowToLearn from './HowToLearn'
import { ways } from '../data'

export default function HowToLearnSection() {
  return (
    <section>
      <h3>How to learn Vite+React</h3>

      <ul>
        {ways.map((way, index) => (
          <HowToLearn
            key={index}
            title={way.title}
            description={way.description}
          />
        ))}
      </ul>
      {/* ----another way---- */}
      {/* <ul>
      {ways.map((way) => (
        <How to learn key={way.title}
         {...way} />
      ))}
    </ul> */}
    </section>
  )
}
