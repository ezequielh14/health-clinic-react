import Navbar from "../components/Navbar";

import { logoutUser } from "../configs/firebase";

const Home = () => {
    return (
        <>
            <Navbar />
            <div>Home</div>

            <button onClick={logoutUser}
            className="mt-6 block rounded-lg bg-red-500 px-3 py-3 font-semibold text-white hover:bg-red-400 focus:bg-blue-400">
                Logout</button>
        </>
    );
};
export default Home;
