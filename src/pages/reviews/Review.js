import React from "react";
import Media from "react-bootstrap/Media";
import { Link } from "react-router-dom";
import styles from "../../styles/Review.module.css";

const Review = (props) => {
  const { id, owner, updated_at, rating } = props;

  return (
    <>
      <hr />
      <Media>
        <Link to={`/posts/${id}`} aria-label="Link to post"></Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_at}</span>
          <p>
            Rating:
            {rating}
          </p>
        </Media.Body>
      </Media>
    </>
  );
};

export default Review;
