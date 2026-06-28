import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Button, Input } from "../components/ui";
import { recipesService } from "../services/api";
import Loader from "../components/ui/loader";
const AIRecipes: React.FC = () => {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        const data = await recipesService.getAllRecipes();
        setRecipes(data.recipes);
        setError("");
      } catch (err) {
        setError("Failed to load recipes from backend");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const handleGenerateRecipes = () => {
    if (searchInput.trim()) {
      // This filters recipes based on search input
      // For now, it just shows all recipes
      console.log("Searching for recipes with:", searchInput);
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-white">
      <Navbar />

      <main className="mx-auto max-w-5xl px-6 py-10">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">AI Recipe Suggestions</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Enter available ingredients and get recipe ideas based on your
            pantry.
          </p>
        </div>

        <section className="rounded-2xl bg-white p-6 shadow dark:bg-gray-900">
          <div className="grid gap-4 md:grid-cols-[1fr_auto]">
            <Input
              label="Available Ingredients"
              placeholder="e.g. tomato, onion, rice, milk"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <div className="flex items-end">
              <Button onClick={handleGenerateRecipes}>Generate Recipes</Button>
            </div>
          </div>
        </section>

        {error && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          {recipes.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-300 col-span-full">
              No recipes available. Check back soon!
            </p>
          ) : (
            recipes.map((recipe) => (
              <div
                key={recipe.id}
                className="rounded-2xl bg-white p-6 shadow dark:bg-gray-900"
              >
                <h2 className="mb-3 text-2xl font-semibold text-green-700 dark:text-green-400">
                  {recipe.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {recipe.instructions}
                </p>
                {recipe.ingredients && (
                  <div className="mt-3 text-sm text-gray-500">
                    <strong>Ingredients:</strong>{" "}
                    {recipe.ingredients.join(", ")}
                  </div>
                )}
                {recipe.createdAt && (
                  <p className="mt-2 text-xs text-gray-400">
                    Added: {recipe.createdAt}
                  </p>
                )}
              </div>
            ))
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIRecipes;
