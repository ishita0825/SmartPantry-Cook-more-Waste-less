import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Button, Input, Modal, Toast, Loader } from "../components/ui";

const UIShowcase: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const handleLoaderDemo = () => {
    setShowLoader(true);
    setTimeout(() => setShowLoader(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-white">
      <Navbar />

      <main className="mx-auto max-w-5xl px-6 py-10">
        <h1 className="mb-3 text-4xl font-bold">UI Component Showcase</h1>
        <p className="mb-8 text-gray-600 dark:text-gray-300">
          This page demonstrates all reusable Week 3 SmartPantry UI components.
        </p>

        <div className="space-y-8">
          <section className="rounded-2xl bg-white p-6 shadow dark:bg-gray-900">
            <h2 className="mb-4 text-2xl font-semibold">Button Component</h2>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button size="sm">Small Button</Button>
              <Button size="lg">Large Button</Button>
              <Button disabled>Disabled Button</Button>
            </div>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow dark:bg-gray-900">
            <h2 className="mb-4 text-2xl font-semibold">Input Component</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Input
                label="Name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                label="Email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                label="Input with Error"
                placeholder="Example error"
                value=""
                onChange={() => {}}
                error="This field is required"
              />
            </div>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow dark:bg-gray-900">
            <h2 className="mb-4 text-2xl font-semibold">Modal Component</h2>
            <Button onClick={() => setShowModal(true)}>Open Modal</Button>

            <Modal
              isOpen={showModal}
              onClose={() => setShowModal(false)}
              title="Add Pantry Item"
            >
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                This is a reusable modal component for SmartPantry.
              </p>
              <div className="flex gap-3">
                <Button onClick={() => setShowModal(false)}>Save</Button>
                <Button variant="outline" onClick={() => setShowModal(false)}>
                  Cancel
                </Button>
              </div>
            </Modal>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow dark:bg-gray-900">
            <h2 className="mb-4 text-2xl font-semibold">Toast Component</h2>
            <Toast message="Pantry item saved successfully!" />
          </section>

          <section className="rounded-2xl bg-white p-6 shadow dark:bg-gray-900">
            <h2 className="mb-4 text-2xl font-semibold">Loader Component</h2>
            <Button onClick={handleLoaderDemo}>Show Loader</Button>
            {showLoader && <Loader />}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UIShowcase;
