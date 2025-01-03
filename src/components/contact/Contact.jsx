import { Container } from "./Contact.style";
import ContactForm from "./parts/form/ContactForm";
import Header from "./../../ui/header/Header";
import { HiOutlineEnvelope } from "react-icons/hi2";

function Contact() {
  return (
    <Container>
      <Header title="contact" icon={<HiOutlineEnvelope />}>
        Let&apos;s Work <span>Together!</span>
      </Header>
      <ContactForm />
    </Container>
  );
}

export default Contact;
