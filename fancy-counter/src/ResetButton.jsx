import { ResetIcon } from "@radix-ui/react-icons";

function ResetButton({ onClick }) {
  return (
    <button className="reset-btn" onClick={onClick}>
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
}

export default ResetButton;
