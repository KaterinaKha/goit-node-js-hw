import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";

const contactsPath = path.resolve("db", "contacts.json");
// console.log("Path: ", contactsPath);

const updateContacts = allContacts => fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));

const contactsList = async () => {
	const data = await fs.readFile(contactsPath);
	return JSON.parse(data);
};

const getContactById = async contactId => {
	const allContacts = await contactsList();
	const contact = allContacts.find(contact => contact.id === contactId);
	return contact || null;
};

const addContact = async ({ name, email, phone }) => {
	const allContacts = await contactsList();
	const newContacts = {
		id: nanoid(),
		name,
		email,
		phone,
	};
	allContacts.push(newContacts);
	await updateContacts(allContacts);
	return newContacts || null;
};

const removeContact = async contactId => {
	const allContacts = await contactsList();
	const index = allContacts.findIndex(contact => contact.id === contactId);
	if (index === -1) {
		return null;
	}
	const [result] = allContacts.splice(index, 1);
	await updateContacts(allContacts);
	return result;
};

export default { contactsList, getContactById, addContact, removeContact };
