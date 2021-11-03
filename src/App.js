import s from "./App.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useState, useEffect, useRef } from "react";
import { getApi } from "./ApiService/apiService";
import Searchbar from "./component/Searchbar/Searchbar";
import ImageGallery from "./component/ImageGallery/ImageGallery";
import Button from "./component/Button/Button";
import Modal from "./component/Modal/Modal";
import Loader from "react-loader-spinner";

const App = () => {
  const [cards, setCards] = useState([]);
  const [images, setImages] = useState("");
  const [largeImage, setLargeImage] = useState("");
  const [tags, setTags] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [button, setButton] = useState(false);
  const ref = useRef(true);

  const onSubmit = ({ images }) => {
    setCards([]);
    setImages(images);
    setLargeImage("");
    setTags("");
    setPageNumber(1);
    setButton(false);
  };

  useEffect(() => {
    if (ref.current) {
      ref.current = false;
      return;
    }
    setIsLoading(true);

    getApi({ images, pageNumber })
      .then((res) => {
        setCards((cards) => [...cards, ...res.data.hits]);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, [images, pageNumber]);

  const fullImage = (largeImage, tags) => {
    setLargeImage(largeImage);
    setTags(tags);
    setModal(!modal);
  };

  if (cards.length > 11 && button === false) {
    setButton(true);
  } else if (cards.length < 12 && button === true) {
    setButton(false);
  }

  return (
    <div className={s.App}>
      <Searchbar onSubmit={onSubmit} />
      {isLoading && (
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      )}
      <ImageGallery cards={cards} onClickImage={fullImage} />

      {button && (
        <Button onClick={() => setPageNumber((prevState) => prevState + 1)} />
      )}
      {modal && (
        <Modal
          largeImage={largeImage}
          tags={tags}
          toggle={() => setModal(!modal)}
        />
      )}
    </div>
  );
};
export default App;
