import { ResetIcon } from "@radix-ui/react-icons";

export default function ResetButton({ setCount }) {

    const handleClick = (event) => {
        setCount(0)
        event.currentTarget.blur(); 
    }

  return (
    <button onClick={handleClick} className="reset-btn-icon">
      <ResetIcon />
    </button>
  );
}
