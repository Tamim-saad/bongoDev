import { Cart } from "../cart";

export function RightPanel() {
  return (
    <div>
      <h1>cart</h1>
      <button> Checkout </button>
      <Cart />
    </div>
  );
}
