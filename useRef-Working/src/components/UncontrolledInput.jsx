import { useRef, useState } from "react";

function UncontrolledInput() {
  const inputRef = useRef(null);
  const [value, setValue] = useState("");
  function handleOnInput() {
    setValue(inputRef.current.value);
  }
  return (
    <div>
      <input
        type="text"
        placeholder="enter the value"
        ref={inputRef}
        onInput={handleOnInput}
      />
      <p>Current Value: {value}</p>
    </div>
  );
}
export default UncontrolledInput;
