import Summary from '../components/Summary'
import {data} from '../data'

import './App.css'

function App() {
 
  return (
    <div className="App">
      <main className='content'>
        <article className='results'>
        <h1>Your Result</h1>
        <div className="circle">
          <p>76</p>
          <p>of 100</p>
        </div>
        <p>  Great  </p>
        <p>  You scored higher than 65% of the people who have taken these tests.</p>
        </article>

        <article className='summary'>
          <h2>Summary</h2>

          {data.map(( datas) => (
            <Summary data={datas}/>
          ))}

          <button>Continue</button>


        </article>
      </main>

    </div>
  )
}

export default App
