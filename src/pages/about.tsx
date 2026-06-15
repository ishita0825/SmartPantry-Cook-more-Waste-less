function About() {
  return (
    <div className="bg-gray-100 min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-4xl font-bold text-green-700 mb-6">
          About SmartPantry
        </h1>

        <p className="text-gray-700 text-lg mb-4">
          SmartPantry is a web-based platform designed to help users reduce food
          waste and manage their kitchen inventory efficiently.
        </p>

        <p className="text-gray-700 text-lg mb-4">
          The platform allows users to track pantry ingredients, monitor
          expiration dates, receive recipe suggestions based on available
          ingredients, discover suitable substitutes for missing items, and
          learn food preservation techniques.
        </p>

        <p className="text-gray-700 text-lg mb-4">
          By providing intelligent pantry management tools, SmartPantry helps
          households save money, reduce food wastage, and make better use of
          available ingredients.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-green-50 p-5 rounded-lg">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              📦 Inventory Tracking
            </h3>
            <p className="text-gray-600">
              Keep track of ingredients and their shelf life.
            </p>
          </div>

          <div className="bg-green-50 p-5 rounded-lg">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              🍳 Recipe Suggestions
            </h3>
            <p className="text-gray-600">
              Discover recipes using ingredients already available at home.
            </p>
          </div>

          <div className="bg-green-50 p-5 rounded-lg">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              ❄️ Food Preservation
            </h3>
            <p className="text-gray-600">
              Learn practical tips to extend ingredient freshness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
