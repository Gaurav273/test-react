import React, { useState } from "react";

interface Props {}

const words = [
  "Apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape"
];

const InputWithSuggestions: React.FC<Props> = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
    setSuggestions(
      words.filter((word) =>
        word.toLowerCase().includes(inputValue.toLowerCase())
      )
    );
  };

  const handleSuggestionClick = (e: any, suggestion: string) => {
    console.log("Rrr", e);
    setInputValue(suggestion);
    setSuggestions([]);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion) => (
            <li
              key={suggestion}
              onKeyDown={(e) => handleSuggestionClick(e, suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InputWithSuggestions;
