import FormTurns from "../components/FormTurns";
import Navbar from "../components/Navbar";

import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Index";

const Turns = () => {
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!currentUser) {
            navigate("/login");
        }
    }, []);

    return currentUser && <div>Turns</div>;
};
export default Turns;
