import React, { useState, useEffect } from "react";

const suggestions = ["React", "TypeScript", "JavaScript", "Node.js"];

const Suggetion = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown") {
        setSelectedIndex((prevIndex) =>
          prevIndex === suggestions.length - 1 ? 0 : prevIndex + 1
        );
      }
      if (event.key === "ArrowUp") {
        setSelectedIndex((prevIndex) =>
          prevIndex === 0 ? suggestions.length - 1 : prevIndex - 1
        );
      }
    };
  }, []);

  return (
    <div>
      {suggestions.map((suggestion, index) => (
        <div
          key={suggestion}
          style={{
            backgroundColor: index === selectedIndex ? "lightgray" : "white"
          }}
        >
          {suggestion}
        </div>
      ))}
    </div>
  );
};

export default Suggetion;
