import Link from "next/link";

// This button is used to login or go to the dashboard
const ButtonLogin = ({ isLoggedIn, name, extraStyle }) => {
  if (isLoggedIn) {
    return (
      <Link
        href="/dashboard"
        className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}
      >
        Welcome back {name}
      </Link>
    );
  }
  return <button>Login</button>;
};
export default ButtonLogin;
