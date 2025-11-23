import { useState } from "react";
import Cards from "../components/Cards";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleShow = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("access denied provide, no token available");
      navigate("/register");

      return;
    }
    setShow(true);
  };

  return (
    <div>
      {show && <Cards />}
      <button className="btn btn-primary" onClick={handleShow}>
        See Pokemon cards
      </button>
    </div>
  );
};

export default Home;
