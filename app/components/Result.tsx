interface ResultProps {
  careers: {
    title: string;
    description: string;
    score: number;
  }[];
  resetQuiz: () => void;
}

const Result: React.FC<ResultProps> = ({ careers, resetQuiz }) => {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">Your Top 3 Career Matches</h1>
      <ul className="space-y-4">
        {careers.map((career, index) => (
          <li key={index} className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">{career.title}</h2>
            <p className="text-sm text-gray-600">{career.description}</p>
            <p className="text-sm font-bold">Score: {career.score}</p>
          </li>
        ))}
      </ul>
      <button
        className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        onClick={resetQuiz}
      >
        Take Quiz Again
      </button>
    </div>
  );
};

export default Result;
