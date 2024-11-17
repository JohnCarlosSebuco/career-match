"use client";

import { useState } from "react";
import Question from "./components/Question";
import Result from "./components/Result";
import { careers, questions } from "./utils/career";

interface Career {
  title: string;
  description: string;
  traits: string[];
  score: number;
}

const IndexPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState<string[]>([]);
  const [results, setResults] = useState<Career[] | null>(null);

  const handleAnswer = (answer: string) => {
    setResponses((prev) => [...prev, answer]);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults();
    }
  };

  const calculateResults = () => {
    const traitScores: Record<string, number> = {};
  
    // Calculate trait scores based on user responses
    questions.forEach((question, index) => {
      if (responses[index] === "Yes") {
        const trait = question.trait;
        traitScores[trait] = (traitScores[trait] || 0) + 1;
      }
    });
  
    // Score careers based on matching traits
    const scoredCareers = careers.map((career) => {
      const weight = career.traits.length; // Normalize based on the number of traits
      const score = career.traits.reduce(
        (acc, trait) => acc + (traitScores[trait] || 0),
        0
      );
      return { ...career, score: score / weight }; // Normalize score
    });
  
    // Find top matches
    const topCareers = scoredCareers
      .sort((a, b) => b.score - a.score)
      .filter((career) => career.score > 0) // Only show careers with scores
      .slice(0, 3);
  
    setResults(topCareers);
  };
  

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setResponses([]);
    setResults(null);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 text-white">
      <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg max-w-lg w-full">
        {results ? (
          <Result careers={results} resetQuiz={resetQuiz} />
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
