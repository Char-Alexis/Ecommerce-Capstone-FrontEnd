import { useState } from "react";

const RoutineBuilder = () => {
  // const [question, setQuestion] = useState(1);

  return (
    <div>
      <form>
        <div>
          <h3> Select one answer per question.</h3>
          <h4>What's your skin type?</h4>
          <div className="answer-options">
            <ul>
              <li>
                <label for="normal">Normal</label>
              </li>
            </ul>
            <ul>
              <li>
                <label for="normal">Combination</label>
              </li>
            </ul>
            <ul>
              <li>
                <label for="normal">Sensitive</label>
              </li>
            </ul>
          </div>
          <button class=" black-btn" type="submit">
            Next →
          </button>
        </div>
        <div className="next-question">
          <h3> Select one answer per question.</h3>
          <h4>What's your Primary Skincare goal?</h4>
          <div className="answer-options">
            <ul>
              <li>
                <label for="normal">Calm Redness</label>
              </li>
            </ul>
            <ul>
              <li>
                <label for="normal">Hydrate and Moisturize</label>
              </li>
            </ul>
            <ul>
              <li>
                <label for="normal">Lighten Hyperpigmentation</label>
              </li>
            </ul>
          </div>
          <button type="submit">View Routine</button>
        </div>
      </form>
    </div>
  );
};
export default RoutineBuilder;
