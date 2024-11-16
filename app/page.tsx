"use client";

import { useState } from "react";
import Question from "./components/Question";
import Result from "./components/Result";
import { careers, questions } from "./utils/career";

interface Career {
  title: string;
  description: string;
  traits: string[];
}

const IndexPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState<string[]>([]);
  const [result, setResult] = useState<{ career: string; description: string } | null>(null);

  const handleAnswer = (answer: string) => {
    setResponses((prev) => [...prev, answer]);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    const traitScores: Record<string, number> = {};

    questions.forEach((question, index) => {
      if (responses[index] === "Yes") {
        const trait = question.trait;
        if (traitScores[trait]) {
          traitScores[trait] += 1;
        } else {
          traitScores[trait] = 1;
        }
      }
    });

    let bestCareer: Career = careers[0]; // Specify the type of bestCareer
    let maxScore = 0;

    careers.forEach((career) => {
      const score = career.traits.reduce((acc, trait) => acc + (traitScores[trait] || 0), 0);

      if (score > maxScore) {
        maxScore = score;
        bestCareer = career;
      }
    });

    setResult({ career: bestCareer.title, description: bestCareer.description });
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setResponses([]);
    setResult(null);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 text-white">
      <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg max-w-lg w-full">
        {result ? (
          <Result career={result.career} description={result.description} resetQuiz={resetQuiz} />
        ) : (
          <>
            {/* Progress Bar */}
            <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden mb-4">
              <div
                className="h-full bg-blue-500"
                style={{ width: `${progress}%` }}
                aria-label="Progress"
              ></div>
            </div>

            {/* Question Component */}
            <Question
              question={questions[currentQuestion].question}
              options={questions[currentQuestion].options}
              onAnswer={handleAnswer}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default IndexPage;
