import styles from "./TableTile.module.scss";

const TableTile = (props) => {
  return <div className={styles.tableTile}>{props.children}</div>;
};

export default TableTile;
