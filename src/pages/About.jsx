export default function About() {
  return (
    <section className="relative mt-24 px-6 py-16 max-w-4xl mx-auto bg-white shadow-lg rounded-2xl border border-gray-100 overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-rose-400 to-pink-500" />

      <div className="relative z-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 border-b pb-2 border-gray-200">
          About <span className="text-pink-600">InBrief</span>
        </h1>

        <p className="mb-6 text-lg text-gray-700 leading-relaxed">
          <strong className="text-gray-900">InBrief</strong> is a sleek, intuitive news aggregator app built with React. It delivers trending and categorized headlines from trusted sources around the globe using a powerful news API.
        </p>

        <p className="mb-6 text-lg text-gray-700 leading-relaxed">
          Whether you're into politics, tech, business, sports, or entertainment, InBrief keeps you updated with clean, quick access. Effortlessly search topics, browse by category, and save favorites to read later.
        </p>

        <p className="mb-6 text-lg text-gray-700 leading-relaxed">
          Designed for speed and focus, InBrief offers a clutter-free reading experience perfect for everyday readers, students, or professionals.
        </p>

        <p className="text-md text-gray-500 italic">
          💡 This is an open-source project made for learning and educational exploration.
        </p>
      </div>
    </section>
  );
}
