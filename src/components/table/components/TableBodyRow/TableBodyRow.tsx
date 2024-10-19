import { useState } from "react";
import Modal from "../../../../ui/modal/Modal";
import { DataItem } from "../Table/type";

export default function TableBodyRow<T extends DataItem>({
  data,
}: {
  data: T[];
}) {
  const [edit, setEdit] = useState(false);
  const [tableData, setTableData] = useState(data);
  const [selectedItem, setSelectedItem] = useState<T | null>(null);

  const modalHandler = () => setEdit((prev) => !prev);

  const openModal = (item: T) => {
    setSelectedItem(item);
    modalHandler();
  };

  const handleEdit = (id: number, key: string, newValue: string) => {
    const updateData = tableData.map((item) => {
      if (item.id == id) {
        return { ...item, [key]: newValue };
      }
      return item;
    });
    setTableData(updateData);
  };

  return (
    <>
      {edit && selectedItem ? (
        <Modal onClose={modalHandler} item={selectedItem} onEdit={handleEdit} />
      ) : null}

      {tableData &&
        tableData.map((item) => (
          <tr key={item.id}>
            {Object.values(item)
              .slice(1, 4)
              .map((value) => (
                <td>
                  {typeof value === "object"
                    ? Object.values(value).join(", ")
                    : String(value)}
                </td>
              ))}
            <td>
              <button onClick={() => openModal(item)}>Edit</button>
            </td>
          </tr>
        ))}
    </>
  );
}
