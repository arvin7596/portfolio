import { Container } from "./Contact.style";
import ContactForm from "./parts/form/ContactForm";
import Header from "./../../ui/header/Header";
import { MdOutlineMail } from "react-icons/md";

function Contact() {
  return (
    <Container>
      <Header title="contact" icon={<MdOutlineMail />}>
        Let&apos;s Work <span>Together!</span>
      </Header>
      <ContactForm />
    </Container>
  );
}

export default Contact;
