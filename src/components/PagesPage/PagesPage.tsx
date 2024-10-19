import Table from "../table/components/Table/Table";
import { pages } from "../../data/pages";

function PagesPage() {
  return (
    <>
      <h1>Pages</h1>
      <Table data={pages} />
    </>
  );
}

export default PagesPage;
