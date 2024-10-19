import TableBodyRow from "../TableBodyRow/TableBodyRow";
import TableHeadRow from "../TableHeadRow/TableHeadRow";
import styles from "./Table.module.css";
import { DataItem } from "./type";

function Table<T extends DataItem>({ data }: { data: T[] }) {
  if (!data || data.length === 0) return <div>Data not found!</div>;

  return (
    <table className={styles.styledTable}>
      <thead>
        <TableHeadRow data={data} />
      </thead>
      <tbody>
        <TableBodyRow data={data} />
      </tbody>
    </table>
  );
}

export default Table;
