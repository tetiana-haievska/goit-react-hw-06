import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import styles from "./components/ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name.toLowerCase());
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ul className={styles.list}>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}
