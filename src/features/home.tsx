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
    <div className="home">
      <div className="home__text">
        <h1>Hello world!</h1>
        {/* <Button text="Click me!" />
      <Button color="red" text="Neki novi button" /> */}
        {/* <Input
        icon={<IconForest />}
        value={newState}
        onChange={(value: string) => setNewState(value)}
      /> */}
        <Button text="Open modal" onClick={() => setModal(true)} color="blue" />
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
      </div>
    </div>
  );
};
export default Home;
