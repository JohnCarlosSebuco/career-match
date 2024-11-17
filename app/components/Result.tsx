import React from "react";

interface Career {
  title: string;
  description: string;
  score: number; // Score as a value between 0 and 1
}

interface ResultProps {
  careers: Career[];
  resetQuiz: () => void;
}

const Result = ({ careers, resetQuiz }: ResultProps) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center">Your Top Career Matches</h1>
      <ul className="list-disc pl-5 mb-4">
        {careers.map((career) => (
          <li key={career.title} className="mb-2">
            <strong>{career.title}</strong>: {career.description} <br />
            Match Score: {Math.min(career.score * 100, 100).toFixed(0.1)}%
          </li>
        ))}
      </ul>
      <div className="text-center">
        <button
          onClick={resetQuiz}
          className="bg-blue-500 text-white px-4 py-2 rounded text-center hover:bg-blue-600"
        >
          Take Quiz Again
        </button>
      </div>
    </div>
  );
};

export default Result;
