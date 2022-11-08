import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Turns from "./pages/Turns";
import Login from "./pages/session/Login";
import Register from "./pages/session/Register";
import { AuthProvider } from "./context/Index";

const App = () => {
    return (
        <>
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                {/* Por el momento Turns no esta diseñado */}
                <Route path="/turns" element={<Turns />} />

                {/* login routes */}
                <Route path="/login" element={<Login /> } />
                <Route path="/register" element={<Register /> } />

            </Routes>
        </AuthProvider>
        </>
    );
};
export default App;
