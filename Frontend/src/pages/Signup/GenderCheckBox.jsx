const GenderCheckBox = ({ onCheckboxChange, selectInput }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectInput === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text ">Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectInput === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectInput === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text ">Female</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectInput === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;

// const GenderCheckBox = () => {
//     return (
//       <div className="flex">
//         <div className="form-control">
//           <label className={`label gap-2 cursor-pointer`}>
//             <span className="label-text ">Male</span>
//             <input type="checkbox" className="checkbox border-slate-900" />
//           </label>
//         </div>
//         <div className="form-control">
//           <label className={`label gap-2 cursor-pointer`}>
//             <span className="label-text ">Female</span>
//             <input type="checkbox" className="checkbox border-slate-900" />
//           </label>
//         </div>
//       </div>
//     );
//   };

//   export default GenderCheckBox;
