import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Turns from "./pages/Turns";
import Login from "./pages/session/Login";
import Register from "./pages/session/Register";
import { AuthProvider } from "./context/Index";
import CreateTurns from "./pages/controlPanel/CreateTurns";
import ListTurns from "./components/ListTurns";
import { MyTurns } from "./components/MyTurns";
import LayoutPublic from "./layouts/LayoutPublic";

const App = () => {
    return (
        <>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<LayoutPublic />}>
                        <Route index element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Route>

                    {/* Turns  */}
                    <Route path="/turns" element={<Turns />} />
                    <Route path="/listTurns" element={<ListTurns />} />
                    <Route path="/myTurns" element={<MyTurns />} />

                    {/* Control Admin Panel */}
                    <Route path="/createturn" element={<CreateTurns />} />

                    {/* Login Routes */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </AuthProvider>
        </>
    );
};
export default App;
