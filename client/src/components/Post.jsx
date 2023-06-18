import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

<<<<<<< HEAD
const Post = ({_id, title, summary, content, cover, createdAt, author, image }) => {
=======
export default function Post({
  _id,
  title,
  summary,
  cover,
  content,
  createdAt,
  author,
}) {
>>>>>>> 064a111f532124cbeb8252c6e69ddd166f89e25c
  return (
    <div className="post" key={_id}>
      <div className="image">
        <Link to={`/post/${_id}`}>
<<<<<<< HEAD
          <img src={image} alt="img" />
=======
          <img src={"http://localhost:4000/" + cover} alt="" />
>>>>>>> 064a111f532124cbeb8252c6e69ddd166f89e25c
        </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p className="info">
          <a className="author">{author.username}</a>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}
