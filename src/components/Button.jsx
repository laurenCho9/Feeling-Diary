export default function Button({ text, type, onClick }) {
  const buttonType = ["positive", "negative"].includes(type) ? type : "default";

  return (
    <button
      className={["button", `button_${buttonType}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  type: "default",
};
