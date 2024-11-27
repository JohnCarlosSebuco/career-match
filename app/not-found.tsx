import Link from 'next/link'

const Custom404 = () => (
  <div className="min-h-screen flex flex-col items-center justify-center animate-gradient bg-gradient-to-br from-purple-500 via-blue-500 to-green-400 text-white">
    <header className="text-center">
      <h1
        className="text-5xl font-bold"
        style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.4)" }}
      >
        404
      </h1>
      <p
        className="text-xl mt-4"
        style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.4)" }}
      >
        Oops! The page you're looking for doesn't exist.
      </p>
    </header>
    <main className="mt-6">
      <Link
        href="/"
        className="bg-blue-500 text-white py-2 px-8 rounded-lg text-lg hover:bg-blue-600 transition"
        style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.4)" }}
      >
        Go back to the homepage
      </Link>
    </main>
    <footer
      className="mt-10 text-sm text-gray-200"
      style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.4)" }}
    >
      &copy; {new Date().getFullYear()} Role Selector. All rights reserved.
    </footer>
  </div>
);

export default Custom404;
