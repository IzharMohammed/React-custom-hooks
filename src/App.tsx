import { useState } from "react"
import usePrevious from "./hooks/usePrevious";
import useWindowSize from "./hooks/useWindowSize";

// Article link :- https://www.joshwcomeau.com/react/why-react-re-renders/
/*
Big Misconception #1: The entire app re-renders whenever a state variable changes.
 Re-renders only affect the component that owns the state + its descendants (if any)
React's “main job” is to keep the application UI in sync with the React state. 
The point of a re-render is to figure out what needs to change.
Big Misconception #2: A component will re-render because its props change.
When a component re-renders, it tries to re-render all descendants, regardless of whether 
they're being passed a particular state variable through props or not.
React's #1 goal is to make sure that the UI that the user sees is kept “in sync” with the application
 state. And so, React will err on the side of too many renders. It doesn't want to risk showing the user a stale UI.
When a component re-renders, because one of its state variables has been updated, that re-render will cascade 
all the way down the tree, in order for React to fill in the details of this new sketch, to capture a new snapshot.
I like to pretend that React.memo is a bit like a lazy photographer. If you ask it to take 5 photos of the exact same thing, 
it'll take 1 photo and give you 5 copies of it. The photographer will only snap a new picture when your instructions change.
 */

function App() {
  const [count, setCount] = useState(0);
  const prev = usePrevious(count);
  console.log('prev', prev);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }


  const[height , width] = useWindowSize();
  console.log('height',height);
  console.log('width',width);
  

  return (
    <>
      <div>
        prev count :- {prev}
      </div>
      <div>
        current count  :- {count}
      </div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  )
}

export default App
