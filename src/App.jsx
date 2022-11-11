import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Turns from "./pages/Turns";
import Login from "./pages/session/Login";
import Register from "./pages/session/Register";
import { AuthProvider } from "./context/Index";
<<<<<<< HEAD
import CreateTurns from "./pages/controlPanel/CreateTurns";
=======
>>>>>>> a5035cc8539c1f174acd0acabd570384ea632434
import ListTurns from "./components/ListTurns";

const App = () => {
    return (
        <>
<<<<<<< HEAD
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    {/* Por el momento Turns no esta diseñado */}
                    <Route path="/turns" element={<Turns />} />
                    <Route path="/listTurns" element={<ListTurns />} />
=======
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                {/* Por el momento Turns no esta diseñado */}
                <Route path="/turns" element={<Turns />} />
                <Route path="/listTurns" element={<ListTurns />} />
>>>>>>> a5035cc8539c1f174acd0acabd570384ea632434

                    {/* Control Admin Panel */}
                    <Route path="/createturn" element={<CreateTurns />} />
                    {/* login routes */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </AuthProvider>
        </>
    );
};
export default App;
