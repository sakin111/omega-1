import { Navigate, useLocation } from "react-router";

import PropTypes from "prop-types"
import useAuth from "../Hook/useAuth";

const Private = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

Private.propTypes = {
    children: PropTypes.node
  };

export default Private;