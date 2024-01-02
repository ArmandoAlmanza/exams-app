import { useState } from "react";
import ExamCard from "../cards/ExamCard";
import { exams } from "../../interfaces/mock";
const MyExams = () => {
    const [counter, setCounter] = useState(0);
    const user = {
        name: "Armando Almanza",
        email: "armando@correo.com",
        picture: "avatar.jpg",
    };

    return (
        <div className="flex flex-col items-center content-center gap-4 m-5">
            <h1>Welcome {user.name.split(" ")[0]} </h1>
            <div className="flex justify-between gap-5 p-3">
                {counter >= 4 ? (
                    <h3>Sorry but you don't have more exams avaliable</h3>
                ) : (
                    <div className="flex flex-col gap-4">
                        <h1>
                            You still have{" "}
                            <span className="font-semibold font-second">
                                {4 - counter}
                            </span>{" "}
                            exams avaliable
                        </h1>
                        <button onClick={() => setCounter(counter + 1)}>
                            Add exam
                        </button>
                    </div>
                )}
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3 place-items-center place-content-center w-full">
                {exams.map((exam, i) => (
                    <ExamCard key={i} {...exam} />
                ))}
            </div>
        </div>
    );
};

export default MyExams;
