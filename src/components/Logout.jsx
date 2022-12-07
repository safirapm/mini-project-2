import axios from "axios";
import { Navigate } from "react-router-dom";

function Logout() {
  const isLoggedIn = Boolean(localStorage.getItem("session"));

  const handleLogout = () => {
    axios
      .delete(
        `${process.env.REACT_APP_BASEURL}authentication/session?api_key=${process.env.REACT_APP_APIKEY}`,
        {
          data: {
            session_id: localStorage.getItem("session"),
          },
        }
      )
      .then((res) => {
        console.log(res);
        localStorage.removeItem("session");
        window.location.reload();
      });
  };

  if (isLoggedIn) {
    return (
      <>
        <button
          type="button"
          className="btn btn-outline-light"
          onClick={handleLogout}
        >
          Logout
        </button>
      </>
    );
  }

  return <Navigate to="/" />;
  // const isLoggedIn = Boolean(localStorage.getItem("session"));

  // const handleLogout = () => {
  //   axios
  //     .delete(
  //       `${process.env.REACT_APP_BASEURL}authentication/session?api_key=${process.env.REACT_APP_APIKEY}`,
  //       {
  //         data: {
  //           session_id: localStorage.getItem("session"),
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       console.log(res);
  //       localStorage.removeItem("session");
  //       window.location.reload();
  //     });
  // };
  // if (isLoggedIn) {
  //   return (
  //     <>
  // <button
  //   type="button"
  //   className="btn btn-outline-light"
  //   onClick={handleLogout}
  // >
  //   Logout
  // </button>
  //     </>
  //   );
  // }

  // return "forbidden";
}

export default Logout;
