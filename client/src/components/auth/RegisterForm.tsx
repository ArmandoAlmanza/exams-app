interface formProps {
    state: string;
    setState: () => void;
}

const RegisterForm = ({ setState }: formProps) => {
    return (
        <div  className="transition-opacity opacity-100">
            <h1>Register Form</h1>
            <button onClick={setState}>You already have an account?</button>
        </div>
    );
};

export default RegisterForm;
