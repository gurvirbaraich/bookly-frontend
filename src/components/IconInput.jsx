/* eslint-disable react/prop-types */
export default function IconInput({ icon, placeholder, onInputChange, ...props }) {
  return (
    <div className="input--container">
      <div>
        <img src={icon} />
        <input
          {...props}
          onChange={(event) => onInputChange(event.target.value)}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
