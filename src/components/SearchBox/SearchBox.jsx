import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import styles from "./components/SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  return (
    <input
      className={styles.input}
      type="text"
      onChange={(e) => dispatch(changeFilter(e.target.value))}
      placeholder="Search contacts..."
    />
  );
}
