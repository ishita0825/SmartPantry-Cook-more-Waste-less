import Hero from "../components/hero";
import Card from "../components/card";

function Home() {
  return (
    <div>
      <Hero />

      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Smart Features
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card
              title="📦 Inventory Tracking"
              description="Monitor pantry ingredients and receive alerts before food expires."
            />

            <Card
              title="🍳 Recipe Suggestions"
              description="Generate recipes instantly from ingredients available in your pantry."
            />

            <Card
              title="🔄 Ingredient Substitutes"
              description="Find alternatives for ingredients you don't currently have."
            />

            <Card
              title="❄️ Preservation Tips"
              description="Learn the best methods to store food and reduce waste."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;