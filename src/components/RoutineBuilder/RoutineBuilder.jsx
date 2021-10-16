import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function RoutineBuilder({userPreferences, handleUserPreferences }) {
  const questions = [
    {

      question: 'What is your skin type?',
      options: [

        { text: 'Normal', isCorrect: false,type:"skinType" },
        { text: 'Combination', isCorrect: false,type:"skinType" },
        { text: 'Sensitive', isCorrect: false,type:"skinType" },
      ],
    },
    {
      question: 'What is Your Primary Skincare goal?',
      options: [

        { text: 'Calm Redness', isCorrect: false,type:"userGoals" },
        { text: 'Lighten Hyperpigmentation', isCorrect: false,type:"userGoals" },
        { text: 'Hydrate and Moisturize', isCorrect: false,type:"userGoals" },
      ],
    }

  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [displayMorningRoutine, setMorningRoutine] = useState();
  const [displayNightRoutine, setDisplayNightRoutine] = useState()

  const handleSubmit = (isCorrect) => {

  }

  return (
    <Form>
      {questions.map((item, index)=>(
        <div key={`radio-${index + 1}`}>
          
          <h1>{item.question}</h1>
          {item.options.map((option, index)=>(

            <Form.Check 
              type="radio"
              id={`radio-${index + 1}`}
              label={option.text}
              key={`radio-${index + 1}`}
              name={option.type}
              value={option.text}
              onChange={handleUserPreferences}
            />
          ))}
        </div>

      ))}
    <Link to="/results"><Button> View Results </Button></Link>
</Form>
  )
}


export default RoutineBuilder
// import { useState } from "react";

// const RoutineBuilder = () => {
//   // const [question, setQuestion] = useState(1);

//   return (
//     <div>
//       <form>
//         <div>
//           <h3> Select one answer per question.</h3>
//           <h4>What's your skin type?</h4>
//           <div className="answer-options">
//             <ul>
//               <li>
//                 <label for="normal">Normal</label>
//               </li>
//             </ul>
//             <ul>
//               <li>
//                 <label for="normal">Combination</label>
//               </li>
//             </ul>
//             <ul>
//               <li>
//                 <label for="normal">Sensitive</label>
//               </li>
//             </ul>
//           </div>
//           <button class=" black-btn" type="submit">
//             Next →
//           </button>
//         </div>
//         <div className="next-question">
//           <h3> Select one answer per question.</h3>
//           <h4>What's your Primary Skincare goal?</h4>
//           <div className="answer-options">
//             <ul>
//               <li>
//                 <label for="normal">Calm Redness</label>
//               </li>
//             </ul>
//             <ul>
//               <li>
//                 <label for="normal">Hydrate and Moisturize</label>
//               </li>
//             </ul>
//             <ul>
//               <li>
//                 <label for="normal">Lighten Hyperpigmentation</label>
//               </li>
//             </ul>
//           </div>
//           <button type="submit">View Routine</button>
//         </div>
//       </form>
//     </div>
//   );
// };
// export default RoutineBuilder;
