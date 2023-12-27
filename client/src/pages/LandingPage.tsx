import { Link } from "react-router-dom";
import { FaBook } from "react-icons/fa6";
const LandingPage = () => {
    return (
        <div className="max-w-5xl md:mx-auto p-4 md:border md:border-black gap-5 grid md:grid-cols-2 place-items-center m-4 mx-auto">
            <h1 className="text-4xl font-bold max-w-max mx-auto">
                Want to improve your knowledge?
            </h1>
            <div className="md:row-span-2 w-56 md:w-96">
                <img src="/study.png" alt="study icon" />
            </div>

            <div className="flex flex-col gap-4">
                <p>Check our plans and make exams to be better</p>
                <Link
                    to={"/exams"}
                    className="flex justify-center items-center gap-x-2 bg-black text-white py-3 px-[1.1rem] transition-colors duration-500 hover:bg-purple text-xl mx-auto max-w-80"
                >
                    <FaBook />
                    Start a new Exam
                </Link>
            </div>
        </div>
    );
};

export default LandingPage;
