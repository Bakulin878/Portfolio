import styles from './Contacts.module.css'
import contactsData from '../../data/contacts.json';
import { contacts } from '../../types/index'

const Contacts = () => {
  return (
    <section className={styles.contacts} id="contacts">
      <div className={styles.container}>
        <h2 className={styles.contacts__contacts_title}>Контакты</h2>
        <div className={styles.contacts__messangers}>
        {contactsData.contacts.map((contacts: contacts) => (
          <a key={contacts.id} className={styles.contacts__messanger} href={contacts.livePreviewUrl} target="_blank">
            <img src={contacts.icon} alt="Telegram"/>
            {contacts.description}
          </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contacts;