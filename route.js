import { Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

export const Protected = ({ children }) => {
  const token = sessionStorage.getItem("token");
  if (!token) {
    return (
      <Navigate
        to={"/"}
        replace={true}
      ></Navigate>
    );
  }
  return children;
};

export const Public = ({ children }) => {
  const token = sessionStorage.getItem("token");
  if (!token) {
    return children;
  }
  return (
    <Navigate
      to={"/"}
      replace={true}
    ></Navigate>
  );
};

// export const Admin = ({ children }) => {
//   const user = jwtDecode(sessionStorage.getItem("token"));

//   if (user.isAdmin) {
//     return children;
//   }
//   return (
//     <Navigate
//       to={"/"}
//       replace={true}
//     ></Navigate>
//   );
// };
export const Admin = ({ children }) => {
  const token = sessionStorage.getItem("token");
  if (!token) {
    return (
      <Navigate
        to={"/"}
        replace={true}
      ></Navigate>
    );
  }
  return children;
};
