export interface ItemSimple {
  itemName: string;
  itemDescription: string;
  itemImgs: ItemImg[];
}

export interface ItemImg {
  imgPath: string;
  imgAlt: string;
}
