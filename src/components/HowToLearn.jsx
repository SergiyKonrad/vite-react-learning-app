export default function HowToLearn({ title, description }) {
  // console.log(props)

  return (
    <li>
      <p>
        <strong className="title">{title}</strong>
        {description}
      </p>
    </li>
  )
}
