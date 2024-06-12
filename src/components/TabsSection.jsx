import Button from './Button/Button'

export default function TabsSection({ active, onChange }) {
  return (
    <section>
      <Button isActive={active === 'main'} onClick={() => onChange('main')}>
        Main
      </Button>

      <Button
        isActive={active === 'feedback'}
        onClick={() => onChange('feedback')}
      >
        Feedback
      </Button>

      <Button isActive={active === 'effect'} onClick={() => onChange('effect')}>
        YouTube Video
      </Button>
    </section>
  )
}
