import React, { FC, useEffect, useState } from "react";
import "../styles.css";

// interface ResultValue {
//  value:string
// }
function InputDrop() {
  const str: string = `Apple|Banana|Apricot|Atemoya
  Avocados|Blueberry|Blackcurrant|Ackee
  Cranberry|Cantaloupe|Cherry  
  Dragonrfruit|Dates|Cherimoya  
  Buddha's hand fruit
  Finger Lime|Fig|Coconut
  Grapefruit|Gooseberries|Chempedak
  Hazelnut|Honeyberries|Dragon fruit|Durian
  Horned Melon|Hog Plum|Egg fruit
  Indian Fig|Ice Apple|Guava|Fuyu Persimmon
  Jackfruit|Jujube|Honeydew melon|Jenipapo
  Kiwi|Kabosu|Kiwano Lime
  Lime|Lychee|Longan|Langsat
  Mango|Mulberry|Pear|Lucuma
  Muskmelon|Naranjilla|Passion fruit|Mangosteen
  Nectarine|Nance|Quince|Medlar fruit
  Olive|Oranges|Ramphal|Mouse melon
  Papaya|Peach|Water apple|Noni fruit
  Pomegranate|Pineapple|Rambutan|Salak
  Raspberries|Strawberries|Starfruit
  Tangerine|Watermelon|Sapota`;
  const listArray = str.split("|");
  const [textVal, setTextVal] = useState("");
  const [filter, setFilter] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [enter, setEnter] = useState(false);

  const onChangeText = (e: any) => {
    setTextVal(e.target.value);
  };

  useEffect(() => {
    const filterdText = listArray.filter((f: string) => f.includes(textVal));
    setFilter(filterdText);
  }, [textVal]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown") {
        setEnter(false);
        setSelectedIndex((prevIndex) => prevIndex + 1);
      }
      if (event.key === "ArrowUp") {
        setEnter(false);
        setSelectedIndex((prevIndex) => prevIndex - 1);
      }
      // if (event.key === "Enter") {
      //   setEnter(true);
      //   setSelectedIndex((prevIndex) => prevIndex);
      // }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <form className="form">
      <input
        value={textVal}
        type="text"
        onChange={(e) => onChangeText(e)}
        placeholder="place text here"
        className="input-box"
      />
      {enter && filter.at(selectedIndex)}

      <ol>
        {filter.map((text: string, index: number) => {
          return (
            <li
              style={{
                backgroundColor: index === selectedIndex ? "gray" : "white"
              }}
              key={index}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  console.log("text", text);
                  setTextVal(filter.at(selectedIndex) || "");
                }
              }}
            >
              {text}
            </li>
          );
        })}
      </ol>
    </form>
  );
}

export default InputDrop;
