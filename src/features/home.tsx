import { useState } from "react";
import Button from "../components/button";
import Container from "../components/container";
import Input from "../components/input";
import Devider from "../components/devider";
import Modal from "../components/modal";
import IconSearch from "../assets/icons/iconsearch";
import IconForest from "../assets/icons/iconforest";

const Home = () => {
  const [newState, setNewState] = useState<string>("");

  const [modal, setModal] = useState<boolean>(false);

  return (
    <Container>
      <h1>Hello world</h1>
      <Button text="Click me!" />
      <Button color="red" text="Neki novi button" />
      <Devider />
      <h1>neki naslov</h1>
      <div>teki text</div>

      <Input
        icon={<IconForest />}
        value={newState}
        onChange={(value: string) => setNewState(value)}
      />
      <Button text="Open modal" onClick={() => setModal(true)} />
      <Modal
        onSuccess={() => {
          alert("Success");
          setModal(false);
        }}
        isOpen={modal}
        title="Modal naslov"
        onClose={() => setModal(false)}
      >
        This is random modal text.
      </Modal>
    </Container>
  );
};
export default Home;
