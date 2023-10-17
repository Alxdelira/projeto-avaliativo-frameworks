import { useEffect } from 'react';
import style from './style.module.css';
import Image from 'next/image';

export default function Modal({ isOpen, onClose, modalTitle, children, maxWidth, minWidth, xClose }) {

  const handleClose = () => {
    onClose(false);
  };

  if (!isOpen) {
    return null;
  }

  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") {
        onClose(false);
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, []);

  return (
    <div className={style.modal}>
      <div className={style.modalContent} style={{ maxWidth: maxWidth, minWidth: minWidth }}>
        <div className={style.modalHeader}>
          <h2>{modalTitle}</h2>
          {xClose == true && (
            <Image
              src={require("./btnClose.svg")}
              alt="Fechar modal"
              title="Fechar modal"
              className={style.btnClose}
              width={20}
              height={20}
              onClick={handleClose} />
          )}
        </div>
        {children}
      </div>
    </div>
  );
};