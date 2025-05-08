import { useLocation, useNavigate, useParams } from "react-router-dom";
import NAVBAR from "./MP/navbar";
import { AiFillDelete } from "react-icons/ai";

const View = () => {
  const nvi = useNavigate();
  const para = useParams();
  const id = para.id;
  const getSto = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];
  const frDta = getSto[id];

  const goback = () => {
    nvi("/");
  };
  const deletetodo = () => {
    nvi("/", { replace: true });
    getSto.splice(id, 1);
    localStorage.setItem("todo", JSON.stringify(getSto));
  };
  return (
    <>
      <NAVBAR />
      <div className="todo_container , ramu">
        <button
          onClick={goback}
          style={{
            display: "inline-block",
            background: "linear-gradient(90deg, #ff6a00, #ee0979)",
            color: "#fff",
            fontSize: "1.2rem",
            fontWeight: "bold",
            padding: "15px 30px",
            borderRadius: "25px",
            textTransform: "uppercase",
            letterSpacing: "1.5px",
            cursor: "pointer",
            textAlign: "center",
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
            transition: "all 0.3s ease-in-out",
            border: "none",
          }}
        >
          Go Back
        </button>
      </div>
      <div
        className="single_todo"
        style={{
          fontSize: "20px",
          background: "#e7e7e7",
          color: "#666",
          margin: "10px",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <b>{frDta}</b>
      </div>
      <button style={{ background: "red" }} onClick={deletetodo}>
        Delete TO-DO <AiFillDelete style={{ color: "white", fontSize: "15" }} />
      </button>
    </>
  );
};

export default View;
