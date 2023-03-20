import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { useFetchBreedsQuery } from './features/dogs/dogs-api-slice'
import { incremented, amountAdded } from './features/counter/counter-slice'
import './App.css'

function App() {

  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch();

  const [numDogs, setNumDogs] = useState(10);
  const { data = [], isFetching} = useFetchBreedsQuery(numDogs);

  function handleClick(){
    dispatch(amountAdded(3));
  }

  return (
    <div className="App">
      <div>
      </div>
      <h1>Vite + React + Redux Toolkit in Typescript</h1>
      <div className="card">
        <button  onClick={handleClick}>
          count is {count}
        </button >

        <div>
          <p> Dogs to fetch:</p>
          <select title="select object title" value={numDogs} onChange={(e) => setNumDogs(Number(e.target.value))}>
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="32">32</option>
          </select>
        </div>
       <div>
        Number of dogs fetched : {data.length}
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {data.map((breed) => (
              <tr key={breed.id}>
                <td>{breed.name}</td>
                <td><img src={breed.image.url} alt={breed.name} height={150}></img></td>
              </tr>
            ))}
          </tbody>
        </table>
       </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
