interface formProps {
    state: string;
    setState: () => void;
}

const LoginForm = ({ setState }: formProps) => {
    return (
        <div className="transition-opacity ease-in-out opacity-100">
            <form className="mb-4">
                <div className="flex flex-col mb-4">
                    <label
                        htmlFor="email"
                        className=" text-purple text-md font-semibold mb-2"
                    >
                        <span>Email </span>
                    </label>
                    <input
                        className="oshadow appearance-none border-b-2 shadow-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-purple transition-[border,colors] duration-500"
                        type="email"
                        placeholder="jhondoe@email.com"
                        required
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label
                        htmlFor="password"
                        className=" text-purple text-md font-semibold mb-2"
                    >
                        <span>Password </span>
                    </label>
                    <input
                        className="oshadow appearance-none border-b-2 shadow-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-purple transition-[border,colors] duration-500"
                        type="password"
                        placeholder="*******"
                        required
                    />
                </div>
                <button
                    type="button"
                    className="bg-black text-white px-2 py-1 mx-auto block w-36 transition-colors hover:bg-violet-400 hover:text-black duration-500"
                >
                    Log in
                </button>
            </form>
            <button className="cursor-pointer text-blue-600" onClick={setState}>
                You don't have an account?
            </button>
        </div>
    );
};

export default LoginForm;
