import styles from "../styles/contact.module.css";
import data from "../public/data";
import Link from "next/link";

const Contact = () => {
    return (
        <>
            <div id="contact" className={styles.main}>
                <div className={styles.container}>
                    <h3>
                        <span>Contact</span>
                    </h3>
                    <h4>Get in touch</h4>

                    <div className={styles.cards}>
                        {data.contacts.map((contact) => (
                            <Link href={contact.link} key={contact.id}>
                                <a>
                                    <div
                                        key={contact.id}
                                        className={styles.card}
                                    >
                                        <img
                                            src={contact.icon}
                                            alt={contact.type}
                                        />
                                        <h5>{contact.value}</h5>
                                    </div>
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
