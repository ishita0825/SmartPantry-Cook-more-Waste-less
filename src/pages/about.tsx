import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <Navbar />

      <main>
        <section className="bg-gray-50 py-16 dark:bg-gray-900">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-green-600 dark:text-green-400">
                About SmartPantry
              </p>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                A smarter way to manage your kitchen and reduce food waste
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                SmartPantry helps users organize pantry items, monitor expiry
                dates, discover recipes using available ingredients, and reduce
                unnecessary food waste through a simple and modern web app.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-6 shadow dark:bg-gray-800">
                <h2 className="mb-3 text-2xl font-semibold">Our Goal</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  To make pantry management easy, practical, and helpful for
                  everyday households.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow dark:bg-gray-800">
                <h2 className="mb-3 text-2xl font-semibold">What It Solves</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  It reduces forgotten groceries, avoids expired food, and helps
                  users cook from ingredients they already have.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow dark:bg-gray-800">
                <h2 className="mb-3 text-2xl font-semibold">Key Features</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Inventory tracking, expiry alerts, recipe suggestions,
                  ingredient substitutes, and a clean dashboard.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-white p-8 shadow dark:bg-gray-800">
              <h2 className="mb-4 text-3xl font-bold">Why SmartPantry?</h2>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Many households buy groceries with good intentions but still end
                up wasting food because ingredients get forgotten in the pantry
                or fridge. SmartPantry is designed to make that process easier.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                By combining pantry tracking with recipe suggestions and simple
                reminders, SmartPantry helps users make better use of what they
                already have at home.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
