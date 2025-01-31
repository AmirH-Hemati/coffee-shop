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
    <div className="fixed top-0 left-0 bg-gray-700/70 w-full h-screen flex justify-center items-center [backdrop-filter:blur(10px)]">
      <div className="w-1/2 h-1/2 bg-white">
        <button onClick={close}>close</button>
        <div>{cloneElement(children, { onClose: close })}</div>
      </div>
    </div>
  );
}
Modal.Open = Open;
Modal.Window = Window;
export default Modal;
