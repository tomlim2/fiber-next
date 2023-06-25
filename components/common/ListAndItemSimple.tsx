import Image from "next/image";
import styles from "./ListAndItemSimple.module.scss";
import { ItemSimple, ItemImg } from "@/types/list";
const ListAndItemSimple = (props: { list: ItemSimple[] }) => {
  const { list } = props;

  return (
    <ul className={styles.list}>
      {list.map((item: ItemSimple, index: number) => {
        return (
          <li className={styles.item} key={index}>
            <div className={styles.imageFrame}>
              {item.itemImgs.map((itemImg: ItemImg, itemIndex: number) => {
                return (
                  <Image
                    key={itemIndex}
                    className={styles.image}
                    src={itemImg.imgName}
                    alt={itemImg.imgAlt}
                    fill={true}
                  />
                );
              })}
            </div>
            <div className={styles.itemInfo}>
              <h2 className={styles.itemName}>{item.itemName}</h2>
              <p className={styles.itemDescription}>{item.itemDescription}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ListAndItemSimple;
