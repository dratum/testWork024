import { FormEvent, useState } from "react";
import styles from "./Modal.module.css";
import { DataItem } from "../../components/table/components/Table/type";

interface PropsTypes {
  onEdit: (id: number, title: string, inputValue: string) => void;
  onClose: () => void;
  item: DataItem;
}

export default function Modal({ onEdit, onClose, item }: PropsTypes) {
  const title = Object.keys(item)[1];
  const value = item[title];
  const [inputValue, setInputValue] = useState<string>(String(value));
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onEdit(item.id, title, inputValue);
    onClose();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Edit</h2>
        <form className={styles.modalContent} onSubmit={submitHandler}>
          <label>{title}</label>
          <input
            value={inputValue}
            type='text'
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className={styles.closeButton}>Save edit</button>
        </form>
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
