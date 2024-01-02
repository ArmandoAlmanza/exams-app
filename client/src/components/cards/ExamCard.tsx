interface ExamProps {
    topic: string;
    status: string;
}

const ExamCard = ({ topic, status }: ExamProps) => {
    return (
        <article
            className={`${topic.toLowerCase()} overflow-hidden relative p-6 h-96 w-80 md:w-full bg-center bg-no-repeat ${
                topic === "General" ? "order-1" : ""
            }`}
        >
            <div className="w-full p-6 absolute h-full ">
                <h1 className="font-second font-semibold px-10 py-1 b_alt absolute bottom-10 right-10 text-white text-3xl ">
                    {topic}
                </h1>
                <p
                    className={`bg-black px-3 py-1 text-white text-xl font-bold absolute top-0 left-0 ${status.toLowerCase()}`}
                >
                    {status}
                </p>
                <button className="absolute top-11 left-0 bg-black text-white px-3 py-2 mx-auto block w-36 transition-colors hover:bg-violet-400 hover:text-black duration-500 ">
                    Continue
                </button>
            </div>
        </article>
    );
};

export default ExamCard;
