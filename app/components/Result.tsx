// components/Result.tsx
import React from "react";

interface ResultProps {
  career: string;
  description: string;
  resetQuiz: () => void;
}

const Result: React.FC<ResultProps> = ({ career, description, resetQuiz }) => {
  return (
    <div className="p-4 text-center">
      <h2 className="text-3xl font-bold text-green-500">Recommended Career: {career}</h2>
      <p className="mt-4">{description}</p>
      <button
        onClick={resetQuiz}
        className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
      >
        Take Quiz Again
      </button>
    </div>
  );
};

export default Result;
