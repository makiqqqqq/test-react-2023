import { Item} from "../../utils/types";

export type ModalItemProps  = {
 handleDeleteItem: (record: Item) => void
 handleGetItemIndex: (index: number) => void
 record: Item
 activeItemIndex?: number
 index: number
}