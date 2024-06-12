import Button from './Button/Button'

export default function ResoursesSection() {
  return (
    <section>
      <h3>Recommended Learning Resources</h3>
      <Button>
        <a
          href="https://react.dev/blog/2023/03/16/introducing-react-dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Documentation
        </a>
      </Button>

      <Button>
        <a
          href="https://vitejs.dev/guide/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vite Documentation
        </a>
      </Button>

      <Button>
        <a
          href="https://javascript.info/"
          target="_blank"
          rel="noopener noreferrer"
        >
          JavaScript Info
        </a>
      </Button>
    </section>
  )
}
