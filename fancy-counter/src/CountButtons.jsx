import CommonButton from "./CommonButton";
function CountButtons({ increment, decrement, locked }) {
  return (
    <div className="button-container">
      <CommonButton type="decrement" onClick={decrement} locked={locked} />
      <CommonButton type="increment" onClick={increment} locked={locked} />
    </div>
  );
}

export default CountButtons;
