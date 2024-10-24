import React from "react";
import SubmitBtn from "./SubmitBtn";

export default function ContactPage() {
  const handleContactForm = async (formdata) => {
    "use server";

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const name = formdata.get("name");
    const email = formdata.get("email");
    const message = formdata.get("message");

    const response = await fetch(process.env.GOOGLE_CONTACT_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (!response.ok) {
      console.log(response);
      throw new Error("Failed to submit form");
    }

    return { success: true };
  };
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <form action={handleContactForm} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea
            name="message"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <SubmitBtn />
      </form>
    </div>
  );
}
