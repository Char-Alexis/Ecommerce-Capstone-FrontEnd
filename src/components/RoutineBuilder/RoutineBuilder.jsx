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

  return (
    <div className="d-flex justify-content-center mb-3">
    <Form >
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
    <Link to="/results"><Button variant="outline-dark"> View Results  → </Button></Link>
</Form>
</div>
  )
}


export default RoutineBuilder

