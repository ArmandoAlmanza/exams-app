import { useState } from "react";

const MyExams = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <h1>You have {counter} Exams </h1>
            <button onClick={() => setCounter(counter + 1)}>Add exam</button>
        </div>
    );
};

export default MyExams;
