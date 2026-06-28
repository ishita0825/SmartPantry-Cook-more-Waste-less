import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Button } from "../components/ui";
import { Link } from "react-router-dom";
import { itemsService, recipesService } from "../services/api";
import Loader from "../components/ui/loader";
const Home: React.FC = () => {
  const [items, setItems] = useState<any[]>([]);
  const [recipes, setRecipes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [suggestedRecipe, setSuggestedRecipe] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch items
        const itemsData = await itemsService.getAllItems();
        setItems(itemsData.items);

        // Fetch recipes
        const recipesData = await recipesService.getAllRecipes();
        setRecipes(recipesData.recipes);

        // Pick a random recipe to display
        if (recipesData.recipes.length > 0) {
          const randomRecipe =
            recipesData.recipes[
              Math.floor(Math.random() * recipesData.recipes.length)
            ];
          setSuggestedRecipe(randomRecipe);
        }
      } catch (err) {
        console.error("Failed to fetch data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Count items expiring soon (for demo, just count items with expiryDate)
  const expiringCount = items.filter((item) => item.expiryDate).length;

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-50 to-amber-50 dark:from-gray-900 dark:to-gray-800">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:items-center">
            {/* Left content */}
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-green-700 dark:text-green-400">
                Smart Kitchen Management
              </p>

              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Reduce food waste and manage your pantry smarter
              </h1>

              <p className="mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                SmartPantry helps you track pantry inventory, monitor expiry
                dates, discover recipes using available ingredients, and find
                substitutes for missing items.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/dashboard">
                  <Button size="lg">Explore Dashboard</Button>
                </Link>

                <Link to="/ai-recipes">
                  <Button variant="outline" size="lg">
                    Try AI Recipes
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right showcase card - NOW WITH REAL DATA */}
            <div className="rounded-3xl bg-white p-6 shadow-lg dark:bg-gray-900">
              <div className="space-y-5">
                <div className="rounded-2xl bg-green-50 p-6 dark:bg-gray-800">
                  <h3 className="mb-3 text-2xl font-semibold text-green-700 dark:text-green-400">
                    Pantry Overview
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    {items.length} ingredients in stock
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    {expiringCount} items expiring soon
                  </p>
                </div>

                <div className="rounded-2xl bg-amber-50 p-6 dark:bg-gray-800">
                  <h3 className="mb-3 text-2xl font-semibold text-amber-600 dark:text-amber-400">
                    Suggested Recipe
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    {suggestedRecipe ? (
                      <>
                        <strong>{suggestedRecipe.name}</strong> using{" "}
                        {suggestedRecipe.ingredients?.join(", ") ||
                          "available ingredients"}
                      </>
                    ) : (
                      "No recipes available yet"
                    )}
                  </p>
                </div>

                <div className="rounded-2xl bg-green-50 p-6 dark:bg-gray-800">
                  <h3 className="mb-3 text-2xl font-semibold text-green-700 dark:text-green-400">
                    Total Recipes
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    {recipes.length} recipes available for you
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features section */}
        <section className="bg-gray-50 py-16 dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold">SmartPantry Features</h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                Everything you need to manage your pantry efficiently and reduce
                food waste.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl bg-white p-6 shadow dark:bg-gray-800">
                <h3 className="mb-3 text-2xl font-semibold">
                  Inventory Tracking
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Keep track of all pantry items, their quantities, and
                  categories in one place.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow dark:bg-gray-800">
                <h3 className="mb-3 text-2xl font-semibold">Expiry Alerts</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Get notified about items nearing expiry so you can use them
                  before they go bad.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow dark:bg-gray-800">
                <h3 className="mb-3 text-2xl font-semibold">
                  Recipe Suggestions
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Discover recipes based on the ingredients you already have at
                  home.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow dark:bg-gray-800">
                <h3 className="mb-3 text-2xl font-semibold">
                  Substitute Finder
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Find easy ingredient substitutions when you're missing
                  something.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow dark:bg-gray-800">
                <h3 className="mb-3 text-2xl font-semibold">Smart Dashboard</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  View pantry stats, expiring items, and recipe ideas all in one
                  dashboard.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow dark:bg-gray-800">
                <h3 className="mb-3 text-2xl font-semibold">Theme Support</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Switch between light and dark mode for a better experience
                  across devices.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
