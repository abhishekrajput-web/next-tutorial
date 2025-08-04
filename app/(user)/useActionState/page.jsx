"use client";
import ContactAction from "./contact.actions";
import { useActionState } from "react";
export default function ContactPage() {
    const [state, formAction, isPending] = useActionState(ContactAction, null);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        action={formAction}
        className="bg-white p-6 rounded-lg shadow-md max-w-md w-full space-y-4"
      >
        <h2 className="text-xl font-semibold text-center">Contact Us</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full p-2 border border-gray-300 rounded"
          rows={5}
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >{isPending ? <h1>loading....</h1>:  <p>Send Message</p>  }
        </button>
      </form>

      {state && <h1>{state.message}</h1>}
    </div>
  );
}
