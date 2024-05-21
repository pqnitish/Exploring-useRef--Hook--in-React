import './App.css'
import FocusableInputFeild from './components/FocusableInputFeild'
import UncontrolledInput from './components/UncontrolledInput'
import ClickableElement from './components/ClickableElement'
function App() {
  

  return (
    <>
    <h1>Exploring useRef Hook in React</h1>
    <h2>Creating a Focusable Input Field</h2>
      <FocusableInputFeild/>
      <h2>Managing Uncontrolled Components</h2>
      <UncontrolledInput/>
      <h2>Interacting with DOM Elements</h2>
      <ClickableElement/>
    </>
  )
}

export default App
