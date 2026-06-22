import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Button, Input } from "../components/ui";

const Settings: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-white">
      <Navbar />

      <main className="mx-auto max-w-4xl px-6 py-10">
        <h1 className="mb-3 text-4xl font-bold">Settings</h1>
        <p className="mb-8 text-gray-600 dark:text-gray-300">
          Manage your profile preferences and pantry settings.
        </p>

        <div className="space-y-8">
          <section className="rounded-2xl bg-white p-6 shadow dark:bg-gray-900">
            <h2 className="mb-5 text-2xl font-semibold">Profile Settings</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Input
                label="Full Name"
                placeholder="Enter your name"
                value=""
                onChange={() => {}}
              />
              <Input
                label="Email"
                type="email"
                placeholder="Enter your email"
                value=""
                onChange={() => {}}
              />
            </div>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow dark:bg-gray-900">
            <h2 className="mb-5 text-2xl font-semibold">
              Notification Preferences
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <label className="flex items-center gap-3">
                <input type="checkbox" defaultChecked />
                Expiry alerts
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" defaultChecked />
                Weekly pantry summary
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" />
                Recipe suggestions email
              </label>
            </div>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow dark:bg-gray-900">
            <h2 className="mb-5 text-2xl font-semibold">Pantry Preferences</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Input
                label="Default Pantry Category"
                placeholder="e.g. Vegetables"
                value=""
                onChange={() => {}}
              />
              <Input
                label="Expiry Reminder Days"
                placeholder="e.g. 3"
                value=""
                onChange={() => {}}
              />
            </div>

            <div className="mt-6">
              <Button>Save Settings</Button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Settings;
