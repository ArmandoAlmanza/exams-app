interface ExamProps {
    topic: string;
    questions: number;
}

const ExamCard = ({ topic, questions }: ExamProps) => {
    return (
        <article className="relative bg-[url(/authbg.jpg)] p-6 h-96 w-80 md:w-full bg-no-repeat">
            <div className="bg-white w-full z-10">
                <h1 className="absolute bottom-3 right-10 text-white text-3xl ">
                    {topic}
                </h1>
                <p>{questions}</p>
            </div>
        </article>
    );
};

export default ExamCard;
