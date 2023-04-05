

export default function Summary({data}) {
  return (
    <ul>
        <li key={data.score}>
            <img src={data.icon} alt="summary-logo" />
            <p>{data.category}</p>
            <p>
                <span>{data.score}</span>
                /100
                </p>
        </li>
    </ul>
  )
}
