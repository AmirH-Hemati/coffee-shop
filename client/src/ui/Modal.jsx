import { CloseSquare } from "iconsax-react";
import { cloneElement, createContext, useContext, useState } from "react";

const modalContext = createContext();
function Modal({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  function close() {
    setIsOpen(false);
  }
  function open(openies) {
    setIsOpen(openies);
  }
  return (
    <modalContext.Provider value={{ isOpen, close, open }}>
      {children}
    </modalContext.Provider>
  );
}

function Open({ children, openies }) {
  const { open } = useContext(modalContext);
  return cloneElement(children, { onClick: () => open(openies) });
}
function Window({ children, name }) {
  const { isOpen, close } = useContext(modalContext);
  if (name !== isOpen) return null;
  return (
    <div className="fixed z-50 top-0 left-0 bg-gray-700/70 w-full h-screen flex justify-center items-center [backdrop-filter:blur(10px)]">
      <div className="w-[80%]  bg-white flex flex-col p-6 rounded-sm [box-shadow:2px_2px_10px_black)]">
        <CloseSquare
          size="32"
          color="#00512c"
          onClick={close}
          className="self-end cursor-pointer"
        />
        <div>{cloneElement(children, { onClose: close })}</div>
      </div>
    </div>
  );
}
Modal.Open = Open;
Modal.Window = Window;
export default Modal;
