import LogInBg from "../../assets/login.jpg";
import { MdOutlineCancel } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
        <div className="bg-white flex w-5/6 max-w-5xl relative rounded-xl">
            <div className="w-2/5 p-10 flex flex-col justify-center space-y-5">
                <h3 className="font-bold text-3xl">Welcome Back</h3>
                <p className="font-light">
                    Sign In with your Email Address and Password
                </p>
                <form className="space-y-3">
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            className="input input-bordered w-full focus:outline-none"
                            name="email"
                            type="email"
                            placeholder="Type Your Email"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            className="input input-bordered w-full focus:outline-none"
                            name="password"
                            type="password"
                            placeholder="Type Your Password"
                            required
                        />
                    </div>
                    <input
                        className="btn w-full bg-pink-700 hover:bg-pink-800 text-white font-semibold"
                        type="submit"
                        value="Sign In"
                    />
                </form>
                <div className="flex gap-1 my-5 items-center">
                    <div className="h-[1px] w-full bg-gray-300"></div>
                    <h3 className="font-medium text-center w-full">Or, Continue With</h3>
                    <div className="h-[1px] w-full bg-gray-300"></div>
                </div>
                <div className="flex justify-center">
                    <button className=" btn-circle border bg-white border-pink-700 hover:bg-white  hover:border-pink-700 flex justify-center items-center">
                        <FcGoogle className="text-2xl"></FcGoogle>
                    </button>
                </div>
            </div>
            <div className="w-3/5">
                <img className="w-full rounded-r-xl" src={LogInBg} alt="" />
            </div>

            <form method="dialog" className="right-3 top-3 absolute">
                <button className="btn btn-ghost btn-sm p-0">
                    <MdOutlineCancel className="text-white text-3xl"></MdOutlineCancel>
                </button>
            </form>
        </div>
    );
};

export default Login;