import { Link } from "react-router-dom";
import Button from "./ui/button";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-100 to-amber-50 px-6 py-16 dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-green-700 dark:text-green-400">
            Smart kitchen management
          </p>

          <h1 className="mb-5 text-4xl font-bold leading-tight text-gray-900 dark:text-white md:text-5xl">
            Reduce food waste and manage your pantry smarter
          </h1>

          <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
            SmartPantry helps you track pantry inventory, monitor expiry dates,
            discover recipes using available ingredients, and find substitutes
            for missing items.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/dashboard">
              <Button variant="primary" size="lg">
                Explore Dashboard
              </Button>
            </Link>

            <Link to="/ai-recipes">
              <Button variant="outline" size="lg">
                Try AI Recipes
              </Button>
            </Link>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-900">
          <div className="mb-4 rounded-xl bg-green-50 p-4 dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-green-700 dark:text-green-400">
              Pantry Overview
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              18 ingredients in stock
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              4 items expiring soon
            </p>
          </div>

          <div className="mb-4 rounded-xl bg-amber-50 p-4 dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-amber-600 dark:text-amber-400">
              Suggested Recipe
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Vegetable Stir Fry using carrots, onions, capsicum and rice
            </p>
          </div>

          <div className="rounded-xl bg-green-50 p-4 dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-green-700 dark:text-green-400">
              Preservation Tip
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Store leafy vegetables in an airtight container with a paper towel
              to keep them fresh longer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
