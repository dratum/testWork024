import Table from "../table/components/Table/Table";
import { pricePlans } from "../../data/pricePlans";
function PricePlansPage() {
  return (
    <>
      <h1>Price Plans</h1>
      <Table data={pricePlans} />
    </>
  );
}

export default PricePlansPage;
