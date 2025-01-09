
import './App.css'
import Counter from './Counter';
import Team from './Team';

function App() {

  function handleClick() {
    alert('button clicked');
  }

  return (
    <>

      <h3>React core concept part 2</h3>

      <Team></Team>
      <Counter></Counter>

      <button onClick={handleClick}>Click me</button>
      <button onClick={() => { alert('Clicked 2') }}>Click me 2</button>

    </>
  )
}

export default App
