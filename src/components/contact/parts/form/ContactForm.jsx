import { Input, Label, StyledFormRow, Textarea } from "./ContactForm.style";

function ContactForm() {
  function openEmail() {
    var subject = "Hello!";
    var body = "This is the email body.";
    var mailto_link =
      "mailto:example@example.com?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);
    window.location.href = mailto_link;
  }

  return (
    <form>
      <StyledFormRow>
        <Label>FULL NAME</Label>
        <Input type="text" />
      </StyledFormRow>
      <StyledFormRow>
        <Label>EMAIL</Label>
        <Input type="text" />
      </StyledFormRow>
      <StyledFormRow>
        <Label>SUBJECT</Label>
        <Input type="text" />
      </StyledFormRow>
      <StyledFormRow>
        <Label>MESSAGE</Label>
        <Textarea type="text" rows={5} />
      </StyledFormRow>
      <button onClick={openEmail}></button>
    </form>
  );
}

export default ContactForm;
