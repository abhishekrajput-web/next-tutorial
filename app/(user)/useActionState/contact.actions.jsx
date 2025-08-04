"use server";
import { db } from "@/config/db";

async function ContactAction(previousState, formData) {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    if (!name || !email || !message) {
      throw new Error("All fields are required");
    }

    console.log(name, email, message);
    await db.execute(
      `insert into contact_form (name, email, message) values (?, ?, ?)`,
      [name, email, message]
    );
    return { success: true, message:"form submitted succesfully" };
  } catch (error) {
    console.log("server actions", error);
    return { success: false, message:"error while submitting" };
  }
}

export default ContactAction;

