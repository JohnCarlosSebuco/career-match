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
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-6 text-black">
        Your Top Career Matches
      </h2>
      <div className="grid gap-6 mb-6 sm:grid-cols-1 md:grid-cols-2">
        {careers.map((career) => (
          <div
            key={career.title}
            className="p-4 bg-white shadow-lg rounded-lg border border-gray-200"
          >
            <h2 className="text-xl font-bold text-gray-800">{career.title}</h2>
            <p className="text-sm text-gray-600 mt-2">{career.description}</p>
            <div className="mt-4">
              <div className="h-4 w-full bg-gray-300 rounded-full overflow-hidden">
                <div
                  className="h-4 bg-gradient-to-r from-green-400 to-blue-500"
                  style={{ width: `${Math.min(career.score * 100, 100)}%` }}
                  aria-label="Match Score"
                ></div>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Match Score:{" "}
                <span className="font-bold text-gray-800">
                  {Math.min(career.score * 100, 100).toFixed(1)}%
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={resetQuiz}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:ring focus:ring-blue-300 transition"
      >
        Take Quiz Again
      </button>
    </div>
  );
};

export default Result;
