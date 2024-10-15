import { LeftPanel, RightPanel } from "./components";
import { CartProvider } from "./contexts";

function App() {
  return (
    <CartProvider>
      <div className="bg-gray-200 container mx-auto flex flex-col lg:flex-row">
        <LeftPanel />
        <RightPanel />
      </div>
    </CartProvider>
  );
}
export default App;
