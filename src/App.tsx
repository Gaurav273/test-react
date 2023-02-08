import React, { useState } from "react";

import ResultArea from "./component/ResultArea";
import TextInput from "./component/TextInput";
import InputDrop from "./component/InputDrop";
import InputWithSuggestions from "./component/InputWithSuggestions";

function App() {
  const [textVal, setParentVal] = useState("");

  return (
    <div>
      {/* {/* <TextInput value={textVal} setParentVal={setParentVal} />

      <ResultArea value={textVal} /> */}
      <InputDrop />
      {/* <InputWithSuggestions /> */}
      {/* <Suggetion /> */}
    </div>
  );
}

export default App;
