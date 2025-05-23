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
  const [currentQuestion, setCurrentQuestion] = useState(-1); // Start with -1 for the START screen
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

    questions.forEach((question, index) => {
      if (responses[index] === "Yes") {
        const trait = question.trait;
        traitScores[trait] = (traitScores[trait] || 0) + 1;
      }
    });

    const scoredCareers = careers.map((career) => {
      const weight = career.traits.length;
      const score = career.traits.reduce(
        (acc, trait) => acc + (traitScores[trait] || 0),
        0
      );
      return { ...career, score: score / weight };
    });

    const topCareers = scoredCareers
      .sort((a, b) => b.score - a.score)
      .filter((career) => career.score > 0)
      .slice(0, 4);

    setResults(topCareers);
  };

  const resetQuiz = () => {
    setCurrentQuestion(-1);
    setResponses([]);
    setResults(null);
  };

  // Calculate progress for the entire quiz including the START screen
  const progress = ((currentQuestion + 2) / (questions.length + 1)) * 100;

  return (
    <div className="min-h-screen flex flex-col items-center animate-gradient bg-gradient-to-br sm:justify-center from-purple-500 via-blue-500 to-green-400 text-white">
      <header className="pt-8 pb-5 text-center mt-2 sm:mt-20">
        <h1 id="htitle" className="text-4xl font-bold mb-4">
          Discover Your Ideal Career Path
        </h1>
        <p id="descrip" className="text-lg max-w-3xl mx-auto">
          Take a quick quiz and unlock personalized career recommendations based on your traits and preferences.
        </p>
      </header>

      <main className="w-full max-w-2xl bg-white text-gray-800 p-8 rounded-lg shadow-lg mb-5">
        {/* Progress Bar */}
        {!results && (
          <div className="w-full bg-gray-300 rounded-full overflow-hidden mb-3">
            <div
              className="bg-gradient-to-r from-green-400 to-blue-500 h-4 transition-all duration-300"
              style={{ width: `${progress}%` }}
              aria-label="Progress"
            ></div>
          </div>
        )}
        {results ? (
          <Result careers={results} resetQuiz={resetQuiz} />
        ) : currentQuestion === -1 ? (
          <div className="text-center">
            {/* Text and Button */}
            <h2 className="text-2xl font-bold mb-4 mt-10 md:mx-1">
              Find ideal career in just 1 minute. <br />Click START to begin!
            </h2>
            <button
              onClick={() => setCurrentQuestion(0)}
              className="bg-green-500 text-white py-2 px-8 rounded-lg text-lg hover:bg-green-600 transition"
            >
              START
            </button>
          </div>
        ) : (
          <Question
            question={questions[currentQuestion].question}
            options={questions[currentQuestion].options}
            onAnswer={handleAnswer}
          />
        )}
      </main>

      {/*Native Banner Ads*/}
      <script
          async
          data-cfasync="false"
          src="//pl25097143.profitablecpmrate.com/ac623b2dfb6c82431e0b61778a308e9d/invoke.js"
        ></script>
        <div id="container-ac623b2dfb6c82431e0b61778a308e9d"></div>
        
      <footer className="py-6 text-sm text-gray-200">
        &copy; {new Date().getFullYear()} Role Selector. All rights reserved.
      </footer>
    </div>
  );
};

export default IndexPage;
