import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Button } from "../components/ui";
import { itemsService } from "../services/api";
import Loader from "../components/ui/loader";
const PantryDetail: React.FC = () => {
  const [item, setItem] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchItem = async () => {
      try {
        setLoading(true);
        // For now, fetch item with ID 1 (first item)
        // In real app, this would come from URL params
        const data = await itemsService.getItemById(1);
        setItem(data);
        setError("");
      } catch (err) {
        setError("Failed to load item from backend");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, []);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        await itemsService.deleteItem(item.id);
        alert("Item deleted successfully!");
        // In real app, navigate back to dashboard
      } catch (err) {
        alert("Failed to delete item");
      }
    }
  };

  if (loading) return <Loader />;

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-white">
        <Navbar />
        <main className="mx-auto max-w-5xl px-6 py-10">
          <div className="p-4 bg-red-100 text-red-700 rounded-lg">{error}</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!item) {
    return (
      <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-white">
        <Navbar />
        <main className="mx-auto max-w-5xl px-6 py-10">
          <p className="text-gray-600 dark:text-gray-300">Item not found</p>
        </main>
        <Footer />
      </div>
    );
  }

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
              <h2 className="mb-4 text-3xl font-bold">{item.name}</h2>

              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>
                  <span className="font-semibold">Category:</span>{" "}
                  {item.category || "Uncategorized"}
                </p>
                <p>
                  <span className="font-semibold">Quantity:</span>{" "}
                  {item.quantity} {item.unit}
                </p>
                <p>
                  <span className="font-semibold">Item ID:</span> {item.id}
                </p>
                {item.expiryDate && (
                  <p>
                    <span className="font-semibold">Expiry Date:</span>{" "}
                    {item.expiryDate}
                  </p>
                )}
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
            <Button variant="outline" onClick={handleDelete}>
              Delete Item
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PantryDetail;
