const Button = ({ label, onClick, variant = "primary" }) => {
  return (
    <button className={`custom-button ${variant}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;