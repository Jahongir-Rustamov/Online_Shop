import { Link } from "react-router-dom";
import GenderCheckBox from "./GenderCheckBox";
import { useState } from "react";
import useSignup from "../../Hooks/useSignup";
const Signup = () => {
  const { signup, loading } = useSignup();
  const [Input, SetInput] = useState({
    Fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const ChangeGenderHandle = (gender) => {
    SetInput({ ...Input, gender: gender });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    await signup(Input);
  };
  return (
    <div className="flex flex-col justify-center min-w-96 items-center mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp
          <span className="text-blue-500 "> ChatApp</span>
        </h1>
        <form onSubmit={handlesubmit}>
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="James Brown"
              className="w-full input input-bordered h-10"
              value={Input.Fullname}
              onChange={(e) => SetInput({ ...Input, Fullname: e.target.value })}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="james"
              className="w-full input input-bordered h-10"
              value={Input.username}
              onChange={(e) => SetInput({ ...Input, username: e.target.value })}
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="******"
              className="w-full input input-bordered h-10"
              value={Input.password}
              onChange={(e) => SetInput({ ...Input, password: e.target.value })}
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="******"
              className="w-full input input-bordered h-10"
              value={Input.confirmPassword}
              onChange={(e) =>
                SetInput({ ...Input, confirmPassword: e.target.value })
              }
            />
          </div>
          <GenderCheckBox
            onCheckboxChange={ChangeGenderHandle}
            selectInput={Input.gender}
          />
          <Link
            to={"/login"}
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
            href="#"
          >
            Already have an account?
          </Link>
          <div>
            <button
              className="btn btn-block btn-sm mt-2 border border-slate-700"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

// import GenderCheckBox from "./GenderCheckBox";

// const Signup = () => {
//   return (
//     <div className="flex flex-col justify-center min-w-96 items-center mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           SignUp
//           <span className="text-blue-500 "> ChatApp</span>
//         </h1>
//         <form>
//           <div>
//             <label htmlFor="" className="label p-2">
//               <span className="text-base label-text">Full Name</span>
//             </label>
//             <input
//               type="text"
//               placeholder="James Brown"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="james"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="******"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label">
//               <span className="text-base label-text">Confirm Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="******"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <GenderCheckBox />
//           <a
//             to={"/Login"}
//             className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
//             href="#"
//           >
//             Already have an account?
//           </a>
//           <div>
//             <button className="btn btn-block btn-sm mt-2 border border-slate-700">
//               SignUp
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;
