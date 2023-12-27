import { FaGithub, FaInstagram, FaX } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="flex flex-col p-4 gap-5">
            <div className="flex flex-col content-center items-center gap-3">
                <h2 className="text-xl">
                    Made by{" "}
                    <span className="text-xl font-semibold">
                        Armando<span className="text-purple-300">Almanza</span>
                    </span>
                </h2>
                <nav className="flex flex-row justify-between gap-3">
                    <a
                        className="text-xl transition-colors hover:text-purple duration-300"
                        href="https://github.com/ArmandoAlmanza"
                        target="_blank"
                    >
                        <FaGithub />
                    </a>
                    <a
                        className="text-xl transition-colors hover:text-purple duration-300"
                        href="https://github.com/ArmandoAlmanza"
                        target="_blank"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        className="text-xl transition-colors hover:text-purple duration-300"
                        href="https://github.com/ArmandoAlmanza"
                        target="_blank"
                    >
                        <FaX />
                    </a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
