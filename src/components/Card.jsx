import Col from "react-bootstrap/Col";
import Styles from "@/styles/components/Card.module.css";
import StarSX from "@/assets/icons/starXS.png";
export const Card = ({ book, deleteFromListAndReadBook }) => {
  return (
    <>
      <Col className="my-3" xs={12} md={6} lg={4}>
        <img
          loading="lazy"
          className="w-100 h-100 position-relative"
          src={book?.cover}
          alt={book?.title}
        />
        <div className={Styles.overlay}>
          <div className={Styles.overlay__button}>
            <button>
              <img
                onClick={() => deleteFromListAndReadBook(book)}
                src={StarSX}
                className={Styles.overlay__icon}
                alt=""
              />
            </button>
          </div>
          <div className={`w-100 text-center ${Styles.overlay__title}`}>
            <h3 className="text-white">{book?.title}</h3>
          </div>
        </div>
      </Col>
    </>
  );
};
