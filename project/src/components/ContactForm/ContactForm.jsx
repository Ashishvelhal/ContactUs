import Button from "../Buttonns/Button.jsx"
import styles from "./ContactForm.module.css"
import { RiMessage2Fill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function ContactForm() {
  return (
    <section className={styles.container}>
    <div className={styles.contact_form}>
        <div className={styles.top_btn}>
        <Button text=" Via Support Chat" icon={<RiMessage2Fill fontSize="24px" />}/>
        <Button text=" Via A Call" icon={<FaPhoneAlt fontSize="24px" />}/>
        </div>
        <Button isOutline={true} text=" Via A Email Form" icon={<IoMdMail fontSize="24px" />}/>
    <form>
    <div className={styles.form_controler}>
    <label htmlFor="name">Name</label>
    <input type="text" name="name" />
    </div>
    <div className={styles.form_controler}>
    <label htmlFor="email">Email</label>
    <input type="email" name="email" />
    </div>
    <div className={styles.form_controler}>
    <label htmlFor="text">text</label>
    <textarea  name="text" rows="6" />
    </div>
    <div style={{
        display:"flex",
        justifyContent:"end"
    }}><Button text="Submit"/></div>
    </form>
    </div>
    <div className={styles.contact_image}>
        <img src="/imagees/contact-profile-5.png" alt="Cotact Image"/> </div>
    </section>

  );
}

export default ContactForm;
