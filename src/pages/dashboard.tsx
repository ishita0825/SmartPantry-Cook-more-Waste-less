import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Button } from "../components/ui";
import { itemsService } from "../services/api";
import Loader from "../components/ui/loader";

const Dashboard: React.FC = () => {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        const data = await itemsService.getAllItems();
        setItems(data.items);
        setError("");
      } catch (err) {
        setError("Failed to load items from backend");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-white">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-bold">Pantry Dashboard</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Monitor pantry stock, expiry alerts, and recipe suggestions in one
              place.
            </p>
          </div>

          <Button>Add Pantry Item</Button>
        </div>

        <div className="mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl bg-white p-6 shadow dark:bg-gray-900">
            <h2 className="text-lg font-medium">Total Items</h2>
            <p className="mt-4 text-4xl font-bold text-green-600">
              {items.length}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow dark:bg-gray-900">
            <h2 className="text-lg font-medium">Expiring Soon</h2>
            <p className="mt-4 text-4xl font-bold text-amber-500">
              {items.filter((item) => item.expiryDate).length}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow dark:bg-gray-900">
            <h2 className="text-lg font-medium">Suggested Recipes</h2>
            <p className="mt-4 text-4xl font-bold text-green-600">7</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow dark:bg-gray-900">
            <h2 className="text-lg font-medium">Saved Tips</h2>
            <p className="mt-4 text-4xl font-bold text-green-600">12</p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <section className="rounded-2xl bg-white p-6 shadow dark:bg-gray-900">
            <h2 className="mb-5 text-3xl font-bold">
              Pantry Items (From Backend)
            </h2>

            {error && <p className="text-red-600 mb-4">{error}</p>}

            <div className="space-y-4">
              {items.length === 0 ? (
                <p className="text-gray-600 dark:text-gray-300">
                  No items in pantry
                </p>
              ) : (
                items.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-gray-200 p-5 dark:border-gray-700"
                  >
                    <h3 className="text-2xl font-semibold">{item.name}</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      Quantity: {item.quantity} {item.unit}
                    </p>
                    {item.expiryDate && (
                      <p className="text-amber-600">
                        Expires: {item.expiryDate}
                      </p>
                    )}
                    <p className="text-sm text-gray-500 mt-2">
                      Category: {item.category}
                    </p>
                  </div>
                ))
              )}
            </div>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow dark:bg-gray-900">
            <h2 className="mb-5 text-3xl font-bold">Recipe Suggestions</h2>

            <div className="space-y-4">
              <div className="rounded-2xl bg-green-50 p-5 dark:bg-gray-800">
                <h3 className="text-2xl font-semibold text-green-700 dark:text-green-400">
                  Vegetable Stir Fry
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Uses tomatoes, spinach, onion, and rice.
                </p>
              </div>

              <div className="rounded-2xl bg-green-50 p-5 dark:bg-gray-800">
                <h3 className="text-2xl font-semibold text-green-700 dark:text-green-400">
                  Creamy Tomato Soup
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Great way to use tomatoes before they expire.
                </p>
              </div>

              <div className="rounded-2xl bg-amber-50 p-5 dark:bg-gray-800">
                <h3 className="text-2xl font-semibold text-amber-600 dark:text-amber-400">
                  Quick Rice Bowl
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Combine leftover rice, vegetables, and basic spices.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
