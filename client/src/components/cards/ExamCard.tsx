interface ExamProps {
    topic: string;
    questions: number;
}

const ExamCard = ({ topic, questions }: ExamProps) => {
    return (
        <article className="relative bg-[url(/authbg.jpg)] p-6 h-96 w-80 md:w-full bg-no-repeat">
            <div className="bg-white w-full z-10 p-6">
                <h1 className="px-5 b_alt absolute bottom-3 right-10 text-white text-3xl ">
                    {topic}
                </h1>
                <p>{questions}</p>
                <button className="bg-black text-white px-2 py-1 mx-auto block w-36 transition-colors hover:bg-violet-400 hover:text-black duration-500">
                    Continue
                </button>
            </div>
        </article>
    );
};

export default ExamCard;
