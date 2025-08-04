"use server";
import { db } from "@/config/db";


async function ContactAction(formData){
const name = formData.get("name");
const email = formData.get("email");
const message = formData.get("message");
if (!name || !email || !message) {
    throw new Error('All fields are required');
  }

console.log(name, email, message);
await db.execute(`insert into contact_form (name, email, message) values (?, ?, ?)`, [name, email, message]);
return { success: true };
}

export default ContactAction;