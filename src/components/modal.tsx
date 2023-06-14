import { MouseEventHandler, useState } from "react";
import Button from "./button";

type ModalType = {
  title: string;
  paragraph: string;
  //   onClick?: MouseEventHandler;
};

const ModalWindow = ({ title, paragraph }: ModalType) => {
  const [modal, setModal] = useState<boolean>(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      {modal ? (
        <>
          <div className="modal__overlay" onClick={toggleModal}></div>
          <div className="modal">
            <div className="modal__header">
              <Button text="⨉" color="green" onClick={toggleModal} />
            </div>
            <div className="modal__section">
              <h2>{title}</h2>
              <p>{paragraph}</p>
            </div>
            <div className="modal__footer">
              <Button text="Submit" onClick={() => console.log()} />
            </div>
          </div>
        </>
      ) : (
        ""
      )}
      <Button text="Modal" color="green" onClick={toggleModal} />
    </>
  );
};

export default ModalWindow;
