import "./AppButton.css";

type ButtonProps = {
  className: string;
  text: string;
  type: "button" | "submit";
  onClick: () => void;
};

export function AppButton({ text, type = "button", onClick }: ButtonProps) {
  return (
    <button className="app-button" type={type} onClick={onClick}>
      {text}
    </button>
  );
}
