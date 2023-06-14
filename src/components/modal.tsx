import { MouseEventHandler, ReactNode, useState } from "react";
import Button from "./button";

type ModalType = {
  title: string;
  paragraph: string;
  children: ReactNode;
};

const ModalWindow = ({ title, paragraph, children }: ModalType) => {
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
            <div className="modal__section">{children}</div>
            <div className="modal__footer">
              <Button text="Submit" onClick={() => console.log()} />
              <Button text="Cancel" onClick={toggleModal} color="red" />
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
