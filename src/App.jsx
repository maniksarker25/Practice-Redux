
import './App.css'
import Counter from './components/Counter/Counter'

function App() {

  return (
    <>
     <Counter/>
    </>
  )
}

export default App


/* 
* state count = 0;
* action: increment , decrement, reset;
* reducer : increment => count = count + 1;
* decrement : count = count - 1;
* reset : count = 0
* store
* Providing store in globally
* use store --------
*/
