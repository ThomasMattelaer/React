import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({ type, setCount, locked }) {
  const handleClick = (event) => {
    setCount((prevCount) => {
      if (type === "minus") {
        const newCount = prevCount - 1;
        if (newCount < 0) {
          return 0;
        } else {
          return newCount;
        }
      } else {
        const newCount = prevCount + 1;
        if (newCount > 5) {
          return 5;
        } else {
          return newCount;
        }
      }
    });

    event.currentTarget.blur()
  };
  return (
    <>
      <button disabled= {locked} onClick={handleClick} className="count-btn">
        {type === "plus" ? (
          <PlusIcon className="count-btn-icon" />
        ) : (
          <MinusIcon className="count-btn-icon" />
        )}
      </button>
    </>
  );
}
