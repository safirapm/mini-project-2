import axios from "axios";

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
        localStorage.removeItem("username");
        window.location.reload();
      });
  };

  if (isLoggedIn) {
    return (
      <>
        <button
          type="button"
          className="btn btn-outline-light"
          style={{ borderRadius: "25px", fontSize: "15px" }}
          onClick={handleLogout}
        >
          Logout
        </button>
      </>
    );
  }

  return window.location.assign("/");
}

export default Logout;

/* Note:
Possible to use { Navigate } from react-router-dom but 
the API key from Popular Movies list
still exists when logged out. */
