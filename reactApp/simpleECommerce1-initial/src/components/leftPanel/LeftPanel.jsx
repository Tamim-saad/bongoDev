import { Filter } from "./Filter";
import { Heading } from "./Heading";
import { Product } from "../product";

export function LeftPanel() {
  return (
    <div>
      <Heading />
      <Filter />
      <Product />
    </div>
  );
}
