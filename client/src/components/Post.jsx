import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";



export default function Post({
  _id,
  title,
  summary,
  cover,
  createdAt,
  author,
  image,
}) {
  return (
    <div className="post" key={_id}>
      <div className="image">
        <Link to={`/post/${_id}`}>
          {!image ? (
            <img
              src="https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
              alt=""
            />
          ) : (
            <img src={image} alt="" />
          )}
          
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
//<img src={"http://localhost:4000/" + cover} alt="" />