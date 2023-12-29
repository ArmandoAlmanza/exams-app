import { Link } from "react-router-dom";
import { FaBook, FaSchool } from "react-icons/fa6";
const LandingPage = () => {
    const logged = false;
    const services = [
        {
            title: "General Exams",
            content:
                "You have access to ONE general exam, you want to make your way into the UNAM or some school? then make a general exam an practice",
            icon: <FaSchool />,
        },
        {
            title: "Topic Exams",
            content:
                "You have access to 3 general exams to improve your knowledge, you had problems with history? then make a history exam!",
            icon: <FaBook />,
        },
    ];
    return (
        <main className="md:mx-auto gap-5 flex flex-col">
            <div className="flex flex-col items-center my-5">
                <h1 className="mx-auto text-4xl font-bold text-center">
                    Welcome to <span className="b">Berry Exams</span>
                </h1>
                <span className="text-center mx-auto italic">
                    if you think you know, you don't
                </span>
            </div>
            <div className="max-w-5xl md:mx-auto gap-5 grid md:grid-cols-2 place-items-center m-4 mx-auto p-3">
                <h1 className="text-4xl font-bold max-w-max mx-auto self-end">
                    Want to improve your knowledge?
                </h1>
                <div className="md:row-span-2 w-56 md:w-96">
                    <img src="/study.png" alt="study icon" />
                </div>

                <div className="flex flex-col gap-4">
                    <p>Check our plans and make exams to be better</p>
                    <Link
                        to={logged ? "/exams" : "/auth"}
                        className="flex justify-center items-center gap-x-2 bg-black text-white py-3 px-[1.1rem] transition-colors duration-500 hover:bg-purple text-xl mx-auto max-w-80"
                    >
                        <FaBook />
                        Start a new Exam
                    </Link>
                </div>
            </div>

            <section className="p-3 bg-[#D4D4D4]">
                <div className="max-w-6xl mb-5 p-3 grid gap-5 mx-auto">
                    <h2 className="relative text-4xl font-bold max-w-max mx-auto mt-3 after:content-[''] after:bg-purple after:absolute after:block after:w-10 after:h-7 after:-top-1 after:-right-2 md:self-end">
                        Services.
                    </h2>
                    <div className="max-w-6xl mb-5 p-8 grid gap-5 justify-center gap-y-8 pt-4 md:grid-cols-2">
                        {services.map((service, i) => (
                            <article className="relative group/card" key={i}>
                                <div className="absolute w-full h-full border-4 border-purple top-0 left-0 transition-transform duration-500 group-hover/card:translate-x-3 group-hover/card:translate-y-3"></div>

                                <div className="h-full bg-body border-4 border-black pt-24 px-4 pb-12 z-[4] relative transition-[colors, border] duration-500">
                                    <div className="relative inline-block">
                                        <div className="absolute w-6 h-6 bg-purple -right-[2px] -top-[2px]"></div>
                                        <p className="text-3xl text-black relative z-[5]">
                                            {service.icon}
                                        </p>
                                    </div>
                                    <h2 className="text-2xl font-bold mb-5">
                                        {service.title}.
                                    </h2>
                                    <p>{service.content}.</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default LandingPage;
