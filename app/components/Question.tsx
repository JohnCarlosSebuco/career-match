// components/Question.tsx
import React from "react";

interface QuestionProps {
  question: string;
  options: string[];
  onAnswer: (answer: string) => void;
}

const Question: React.FC<QuestionProps> = ({ question, options, onAnswer }) => {
  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold">{question}</h2>
      <div className="mt-4 flex justify-center gap-4">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onAnswer(option)}
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
