export default function Home() {
  return (
    <div className="bg-white min-h-screen text-gray-800">
      {/* Header */}
      <header className="w-full bg-white shadow-md sticky top-0 z-10">
        <div className="flex flex-wrap justify-between items-center py-6 px-8 max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-[#7421B0]">Screenshoter+</h1>
          <nav className="space-x-6 hidden md:flex">
            <a href="#" className="text-gray-600 hover:text-[#7421B0] transition">Features</a>
            <a href="#" className="text-gray-600 hover:text-[#7421B0] transition">Benefits</a>
            <a href="#" className="text-gray-600 hover:text-[#7421B0] transition">FAQ</a>
          </nav>
          <select className="border border-gray-300 rounded px-2 py-1 text-gray-600">
            <option value="ru">RU</option>
            <option value="en">EN</option>
          </select>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-purple-50 to-purple-100">
        <div className="flex flex-col lg:flex-row items-center py-20 px-8 max-w-7xl mx-auto">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Capture and Record Your Screen <span className="text-[#7421B0]">in One Click</span>
            </h2>
            <p className="text-gray-600 mb-6">
              With Screenshoter+, you can easily take screenshots or record your screen and share them instantly.
            </p>
            <button className="bg-[#7421B0] text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
              Download for Free
            </button>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img
              src="/img/main.png"
              alt="Screenshoter preview"
              className="rounded-lg shadow-lg w-full max-w-md mx-auto lg:max-w-full"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Meet the Ultimate <span className="text-[#7421B0]">Screenshot and Recording Tool</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-purple-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <img
              src="/img/save.png"
              alt="Save your work"
              className="rounded-lg mb-4 w-full h-auto max-w-[100px] mx-auto"
            />
            <h3 className="text-xl font-bold text-[#7421B0] mb-4">One-Click Capture</h3>
            <p className="text-gray-600">
              Quickly and easily take screenshots or record videos.
            </p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <img
              src="/img/puzzle.png"
              alt="Share instantly"
              className="rounded-lg mb-4 w-full h-auto max-w-[100px] mx-auto"
            />
            <h3 className="text-xl font-bold text-[#7421B0] mb-4">Instant Sharing</h3>
            <p className="text-gray-600">
              Share your files instantly with unique links.
            </p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <img
              src="/img/heart.png"
              alt="Edit screenshots"
              className="rounded-lg mb-4 w-full h-auto max-w-[100px] mx-auto"
            />
            <h3 className="text-xl font-bold text-[#7421B0] mb-4">Built-in Editor</h3>
            <p className="text-gray-600">
              Edit your screenshots directly in the app.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm bg-white shadow-inner max-w-7xl mx-auto">
        &copy; 2025 Screenshoter+. All rights reserved.
      </footer>
    </div>
  );
}
