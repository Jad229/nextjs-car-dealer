import Head from "next/head";

function HomePage() {
  return (
    <div>
      <Head>
        <title>Ideal Car Corp | Home</title>
      </Head>
      <nav className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-amber-400">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl text-amber-400 font-semibold">
              Ideal Car Corp
            </span>
            <div className="flex space-x-4 text-amber-400">
              <a href="#">Garage</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HomePage;
