import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Button, Input } from "../components/ui";

const AIRecipes: React.FC = () => {
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
              value=""
              onChange={() => {}}
            />
            <div className="flex items-end">
              <Button>Generate Recipes</Button>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow dark:bg-gray-900">
            <h2 className="mb-3 text-2xl font-semibold text-green-700 dark:text-green-400">
              Tomato Rice Bowl
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              A quick rice bowl made using tomato, onion, and pantry spices.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow dark:bg-gray-900">
            <h2 className="mb-3 text-2xl font-semibold text-green-700 dark:text-green-400">
              Creamy Veg Soup
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Uses milk, vegetables, and seasonings to make a simple soup.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow dark:bg-gray-900">
            <h2 className="mb-3 text-2xl font-semibold text-green-700 dark:text-green-400">
              Stir Fry Mix
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              A fast stir fry recipe for leftover vegetables and rice.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow dark:bg-gray-900">
            <h2 className="mb-3 text-2xl font-semibold text-green-700 dark:text-green-400">
              Pantry Pasta
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              A simple recipe suggestion using tomato, herbs, and dry pasta.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIRecipes;
