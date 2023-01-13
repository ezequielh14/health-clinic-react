import FormTurns from "../components/FormTurns";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { logoutUser } from "../configs/firebase";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/Index";
import { useNavigate } from "react-router-dom";
import { useFirestore } from "../hooks/useFirestore";

const Turns = () => {
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const { getUserByRole, isAdmin } = useFirestore();

    useEffect(() => {
        if (!currentUser) {
            navigate("/login");
        }
        getUserByRole(currentUser);
        if (isAdmin) {
            navigate("/createturn");
        }
    }, [isAdmin]);
    return (
        <>
            <Navbar />
            <button onClick={() => logoutUser()}>Logout</button>
            <FormTurns />

            <Footer />
        </>
    );
};
export default Turns;
