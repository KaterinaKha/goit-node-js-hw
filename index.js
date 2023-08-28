import contacts from "./contacts.js";
import { Command } from "commander";

const program = new Command();

program
	.option("-a, --action <type>", "choose action")
	.option("-i, --id <type>", "user id")
	.option("-n, --name <type>", "user name")
	.option("-e, --email <type>", "user email")
	.option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
	switch (action) {
		case "list":
			const allContacts = await contacts.contactsList();
			return console.table(allContacts);
			break;

		case "get":
			const getContact = await contacts.getContactById(id);
			return console.log(getContact);

		case "add":
			const addNewContact = await contacts.addContact({ name, email, phone });
			return console.log(addNewContact);
			break;

		case "remove":
			const deleteContact = await contacts.removeContact(id);
			return console.log(deleteContact);
			break;

		default:
			console.warn("\x1B[31m Unknown action type!");
	}
};

invokeAction(argv);
// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "e6ywwRe4jcqxXfCZOj_1e" });
// invokeAction({ action: "add", name: "Rina", email: "kha@gmail.com", phone: "537-512-044" });
