import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";

function CommonButton({ onClick, type, locked }) {
  return (
    <button disabled={locked} className="count-btn" onClick={onClick}>
      {type === "increment" ? (
        <PlusIcon className={`count-btn-icon`} />
      ) : (
        <MinusIcon className="count-btn-icon" />
      )}
    </button>
  );
}
export default CommonButton;
