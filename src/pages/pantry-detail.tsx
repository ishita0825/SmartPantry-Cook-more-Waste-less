import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Button } from "../components/ui";

const PantryDetail: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-white">
      <Navbar />

      <main className="mx-auto max-w-5xl px-6 py-10">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">Pantry Item Detail</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            View complete information about a pantry item.
          </p>
        </div>

        <section className="rounded-2xl bg-white p-8 shadow dark:bg-gray-900">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold">Tomatoes</h2>

              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>
                  <span className="font-semibold">Category:</span> Vegetables
                </p>
                <p>
                  <span className="font-semibold">Quantity:</span> 5 pcs
                </p>
                <p>
                  <span className="font-semibold">Added On:</span> 20 June 2026
                </p>
                <p>
                  <span className="font-semibold">Expiry Date:</span> 24 June
                  2026
                </p>
                <p>
                  <span className="font-semibold">Storage Tip:</span> Keep in a
                  cool dry place
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-green-50 p-6 dark:bg-gray-800">
              <h3 className="mb-3 text-2xl font-semibold text-green-700 dark:text-green-400">
                Suggested Uses
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
                <li>Tomato soup</li>
                <li>Vegetable stir fry</li>
                <li>Sandwich filling</li>
                <li>Pasta sauce base</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button>Edit Item</Button>
            <Button variant="outline">Delete Item</Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PantryDetail;
