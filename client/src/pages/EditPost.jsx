import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Editor from "../components/Editor";

export default function EditPost() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
<<<<<<< HEAD
  const [image, setImage] = useState("");
=======
>>>>>>> 064a111f532124cbeb8252c6e69ddd166f89e25c
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/post/" + id).then((response) => {
      response.json().then((postInfo) => {
        setTitle(postInfo.title);
        setContent(postInfo.content);
        setSummary(postInfo.summary);
<<<<<<< HEAD
        setImage(postInfo.image);
=======
>>>>>>> 064a111f532124cbeb8252c6e69ddd166f89e25c
      });
    });
  }, []);

  async function updatePost(ev) {
    ev.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
<<<<<<< HEAD
    data.set("image", image);
=======
>>>>>>> 064a111f532124cbeb8252c6e69ddd166f89e25c
    data.set("id", id);
    if (files?.[0]) {
      data.set("file", files?.[0]);
    }
   const response = await fetch("http://localhost:4000/post", {
     method: "PUT",
     body: data,
     credentials: "include",
   });
    if (response.ok) {
<<<<<<< HEAD
      setRedirect(true);
=======
      //setRedirect(true);
>>>>>>> 064a111f532124cbeb8252c6e69ddd166f89e25c
    }
  }

  if (redirect) {
    return <Navigate to={"/post/" +id} />;
  }

  return (
    <form onSubmit={updatePost}>
      <input
        type="title"
        placeholder={"Title"}
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />
      <input
        type="summary"
        placeholder={"Summary"}
        value={summary}
        onChange={(ev) => setSummary(ev.target.value)}
      />
<<<<<<< HEAD
      <input
        type="text"
        placeholder={"Image URL"}
        value={image}
        onChange={(ev) => setImage(ev.target.value)}
      />
=======
>>>>>>> 064a111f532124cbeb8252c6e69ddd166f89e25c
      <input type="file" onChange={(ev) => setFiles(ev.target.files)} />
      <Editor onChange={setContent} value={content} />
      <button style={{ marginTop: "5px" }}>Update post</button>
    </form>
  );
}
