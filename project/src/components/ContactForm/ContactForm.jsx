import Button from "../Buttonns/Button"
import styles from "./ContactForm.module.css"
function ContactForm() {
  return (
    <section className={styles.container}>
    <div className={styles.contact_form}>
        <Button/>
    </div>
    <div className={styles.contact_image}></div>
    </section>

  )
}

export default ContactForm
