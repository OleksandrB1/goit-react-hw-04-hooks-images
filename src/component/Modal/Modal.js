import { useEffect } from "react";
import PropTypes from "prop-types";
import s from "./Modal.module.css";

const Modal = ({ toggle, largeImage, tags }) => {
  useEffect(() => {
    window.addEventListener("keydown", pressingEsc);
    return () => {
      window.removeEventListener("keydown", pressingEsc);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggle]);

  const pressingEsc = (e) => {
    if (e.code !== "Escape") {
      return;
    }
    toggle();
  };

  const backdropClick = (e) => {
    if (e.currentTarget === e.target) {
      toggle();
    }
  };
  return (
    <div className={s.Overlay} onClick={backdropClick}>
      <div className={s.Modal}>
        <img src={largeImage} alt={tags} className={s.Image} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  toggle: PropTypes.func.isRequired,
  largeImage: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default Modal;
