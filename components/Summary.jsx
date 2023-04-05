

export default function Summary({data}) {
  if (data.category === "Reaction"){
    return (
      <ul className="summary-items-box">
          <li key={data.score} className="Light-red summary-items">
            <div className="icons">
              <img src={data.icon} alt="summary-logo" />
              <p className="Light-red-summary">{data.category}</p>

              </div>
              <p>
                  <span>{data.score}</span>
                  <span className="number"> / 100</span>
                  </p>
          </li>
      </ul>
    )
  }

  if (data.category === "Memory"){

    return (
      <ul className="summary-items-box">
          <li key={data.score} className="Orange-yellow summary-items">
                  <div className="icons">
              <img src={data.icon} alt="summary-logo" />
              <p className="Orange-yellow-summary">{data.category}</p>
              </div>
              <p>
                  <span>{data.score}</span>
                 <span className="number"> / 100</span> 
                  </p>
          </li>
      </ul>
    )
  }

  if (data.category === "Verbal"){

    return (
      <ul className="summary-items-box">
          <li key={data.score} className="Green-teal summary-items">
                  <div className="icons">
              <img src={data.icon} alt="summary-logo" />
              <p className="Green-teal-summary">{data.category}</p>
              </div>
              <p>
                  <span>{data.score}</span>
                  <span className="number"> / 100</span>
                  </p>
          </li>
      </ul>
    )
  }

  if (data.category === "Visual"){
    return (
      <ul className="summary-items-box">
          <li key={data.score} className="Cobalt-blue summary-items">
                  <div className="icons">
              <img src={data.icon} alt="summary-logo" />
              <p className="Cobalt-blue-summary">{data.category}</p>
              </div>
              <p>
                  <span>{data.score}</span>
                  <span className="number"> / 100</span>
                  </p>
          </li>
      </ul>
    )
  }

}


