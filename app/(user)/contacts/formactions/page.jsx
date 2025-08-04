"use client";

export function ContactAction(formData){
// let name = formData.get("name");
// let email = formData.get("email");
// let message = formData.get("message");
const {name, email, message} = Object.fromEntries(formData.entries());
console.log(name, email, message);
return {success:true};
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        action={ContactAction}
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
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
