import { useState } from "react";
import data from "./Data.js";
import { FaQuoteRight, FaChevronRight, FaChevronLeft } from "react-icons/fa";

function App() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = data[index];

  const checkNumber = (num) => {
    if (num > data.length - 1) {
      return 0;
    }
    if (num < 0) {
      return data.length - 1;
    }
    return num;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const surprise = () => {
    let randomNum = Math.floor(Math.random() * data.length);
    if (randomNum === index) {
      randomNum = index + 1;
    }
    
    setIndex(checkNumber(randomNum));
  };

  return (
    <div className="review">
      <div className="img_container">
        <img className="person_img" src={image} alt={name} />
        <span className="quote_icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author"> {name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="btn_container">
        <button className="prev_btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next_btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="last_btn" onClick={surprise}>
        Surprise Me
      </button>
    </div>
  );
}

export default App;
