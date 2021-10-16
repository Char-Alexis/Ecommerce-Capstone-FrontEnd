import { useState } from "react";


function RoutineBuilder() {
  const questions = [
    {

      question: 'What is your skin type?',
      options: [

        { text: 'Normal', isCorrect: false },
        { text: 'Combination', isCorrect: false },
        { text: 'Sensitive', isCorrect: false },
      ],
    },
    {
      question: 'What is Your Primary Skincare goal?',
      options: [

        { text: 'Normal', isCorrect: false },
        { text: 'Combination', isCorrect: false },
        { text: 'Sensitive', isCorrect: false },
      ],
    }

  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [displayMorningRoutine, setMorningRoutine] = useState();
  const [displayNightRoutine, setDisplayNightRoutine] = useState()

  const handleSubmit = (isCorrect) => {

  }

  return (
    <div>
      <div>
        Morning Routine:
      </div>
      <div>
        Night Routine:
      </div>
    </div>
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
