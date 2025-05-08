import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();

  if (localStorage.getItem("loggedIn")) {
  } else {
    navigate("/log");
  }
};

export default Auth;
