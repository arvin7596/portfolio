import MessageButton from "../../../../ui/message-button/MessageButton";
import {
  ButtonRow,
  Input,
  Label,
  StyledFormRow,
  Textarea,
} from "./ContactForm.style";

function ContactForm() {
  function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    var subject = data.subject;
    var body = `Hello Arvin,\n\n${data.message}\n\nBest Regards,\n${data.fullName}
    `;
    var mailto_link =
      "mailto:arvinghaffari75@gmail.com?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);
    window.location.href = mailto_link;
  }

  return (
    <form onSubmit={onSubmit}>
      <StyledFormRow>
        <Label>FULL NAME</Label>
        <Input type="text" name="fullName" />
      </StyledFormRow>
      {/* <StyledFormRow>
        <Label>EMAIL</Label>
        <Input type="text" />
      </StyledFormRow> */}
      <StyledFormRow>
        <Label>SUBJECT</Label>
        <Input type="text" name="subject" />
      </StyledFormRow>
      <StyledFormRow>
        <Label>MESSAGE</Label>
        <Textarea type="text" rows={5} name="message" />
      </StyledFormRow>
      <ButtonRow>
        <MessageButton>message me</MessageButton>
      </ButtonRow>
    </form>
  );
}

export default ContactForm;
