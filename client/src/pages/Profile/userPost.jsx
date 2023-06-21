
import styles from "./profilePage.module.css";
import { formatISO9075 } from "date-fns";
//import { Navigate } from "react-router-dom";

const UserPost = ({post , id}) => {
  const { _id, title, summary, createdAt, image } = post;
  console.log(post)

  return (
    <div className={styles.containerPost}>
      <div className={styles.content} key={_id}>
        <div className={styles.img}>
          <img src={image} alt="" className={styles.image} />
        </div>
        <div className={styles.text}>
          <div className={styles.button}>
            <div className={styles.clicks}>
              {" "}
              Created On -{formatISO9075(new Date(createdAt))}
              <div className={styles.cli}>SPORTS</div>
            </div>
            <div className={styles.click}>
              <div className={styles.cl}>Review</div>
              
            </div>
          </div>
          <h3>{title}</h3>
          <p>{summary}</p>
        </div>
      </div>
    </div>
  );
};

export default UserPost;
