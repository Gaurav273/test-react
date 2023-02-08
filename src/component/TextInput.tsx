import React, { FC, useState } from "react";

interface Values {
  value: string;
  setParentVal: any;
}
function TextInput(props: Values) {
  const [textVal, setTextVal] = useState("");

  const onConfirm = (e: any) => {
    e.preventDefault();
    props.setParentVal(textVal);
  };
  const onCancel = (e: any) => {
    e.preventDefault();

    setTextVal("");
  };

  return (
    <form>
      <input
        value={textVal}
        type="text"
        onChange={(e) => setTextVal(e.target.value)}
        placeholder="place text here"
      />
      <button onClick={onConfirm}>Confirm</button>
      <button onClick={onCancel}>cancel</button>
    </form>
  );
}

export default TextInput;
