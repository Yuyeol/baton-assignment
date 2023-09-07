import Overlay from "./Overlay";

function Modal({ content, isModalOpen }) {
  return (
    <>
      {content}
      <Overlay isModalOpen={isModalOpen} />
    </>
  );
}

export default Modal;
