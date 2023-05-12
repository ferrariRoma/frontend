import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { JsxElement } from "typescript";

const useModal = ({children}:{children:ReactNode}):React.ReactPortal => {
  
  return createPortal(children, document.body);
}

export default useModal;