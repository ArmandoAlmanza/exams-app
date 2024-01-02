interface ExamProps {
    topic: string;
    status: string;
}

const ExamCard = ({ topic, status }: ExamProps) => {
    return (
        <article
            className={`${topic.toLowerCase()} relative p-6 h-96 w-80 md:w-full bg-no-repeat ${
                topic === "General" ? "order-1" : ""
            }`}
        >
            <div className=" w-full z-10 p-6">
                <h1 className="font-second font-semibold px-10 py-1 b_alt absolute bottom-3 right-10 text-white text-3xl ">
                    {topic}
                </h1>
                <p
                    className={`bg-black px-3 py-1 text-white text-xl font-bold absolute top-3 left-10 ${status.toLowerCase()}`}
                >
                    {status}
                </p>
                <button className="absolute top-14 left-10 bg-black text-white px-3 py-2 mx-auto block w-36 transition-colors hover:bg-violet-400 hover:text-black duration-500 ">
                    Continue
                </button>
            </div>
        </article>
    );
};

export default ExamCard;
