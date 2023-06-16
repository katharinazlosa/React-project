import Container from "../components/container";
import Divider from "../components/divider";
import Field from "../components/field";

const Contact = () => {
  return (
    <>
      <Container>
        <h1>Contact page</h1>
        <Divider />
        <Field text="First name" />
        <Field text="Last name" />
        <Field text="Email" />
        <Field text="Age" />
      </Container>
    </>
  );
};

export default Contact;
