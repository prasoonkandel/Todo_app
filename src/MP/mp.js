import { PiX } from "react-icons/pi";
import NAVBAR from "./navbar";
import { FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
const Mp = () => {
  const getTodo = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];
  return (
    <>
      <NAVBAR />
      <div className="todo_container">
        <h3>YOUR-TODO</h3>
        {getTodo && getTodo.length > 0 ? (
          <>
            {" "}
            {getTodo.map((el, index) => (
              <>
                <div className="single_todo" key={index}>
                  {el}
                  <Link to={`/view/${index}`}>
                    <FiEye size={20} style={{ color: "474747" }} />
                  </Link>
                </div>
              </>
            ))}
          </>
        ) : (
          <>
            <center>
              Nothing on your TO-DO <Link to={"/add"}>add some</Link>
            </center>
          </>
        )}
      </div>
    </>
  );
};

export default Mp;
