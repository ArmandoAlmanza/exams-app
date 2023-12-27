import { FaBarsStaggered, FaUser } from "react-icons/fa6";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProfleCard from "./cards/ProfleCard";
import useScreenSize from "../hooks/useScreenSize";
import { useState } from "react";
import useScreenScroll from "../hooks/useScreenScroll";
import { Link } from "react-router-dom";

const Header = () => {
    const screenSize = useScreenSize();
    const screenScroll = useScreenScroll();
    const logged = true;
    const [menuOpened, setMenuOpened] = useState(false);
    return (
        <header
            className={`${
                screenScroll >= 50
                    ? "bg-[#d4d4d4] shadow-[0_1px_16px_rgba(0, 0, 0, 0.12)]"
                    : "bg-body"
            } sticky top-0 flex flex-row justify-between p-4 border-b border-b-black content-center items-center md:flex-col md:justify-evenly md:items-start md:border-b-0 md:border-r md:border-r-black md:w-72`}
        >
            <h1 className="text-3xl font-semibold md:p-2">
                <span className="text-purple">Berry</span> Exams
            </h1>
            <button
                onClick={() => {
                    setMenuOpened(!menuOpened);
                }}
                className="p-2 text-white bg-black outline-none text-xl block md:hidden"
            >
                <FaBarsStaggered />
            </button>
            <Navbar navOpened={menuOpened} setNavOpened={setMenuOpened} />
            {screenSize.width >= 768 && logged ? (
                <ProfleCard />
            ) : (
                <Link
                    to={"/auth"}
                    className={`${
                        screenSize.width > 500 ? "flex" : "hidden"
                    }  justify-center items-center gap-x-2 bg-black text-white py-3 px-[1.1rem] transition-colors duration-500 hover:bg-purple text-xl mx-auto max-w-80`}
                >
                    <FaUser />
                    Sign in/sign up
                </Link>
            )}

            {screenSize.width >= 768 ? <Footer /> : ""}
        </header>
    );
};

export default Header;
