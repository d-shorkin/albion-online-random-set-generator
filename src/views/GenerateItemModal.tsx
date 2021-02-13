import React from "react";
import {Button, Header, Icon, Modal} from "semantic-ui-react";
import {IItem} from "../components/conract";
import {AlbionImage} from "../components/AlbionImage/AlbionImage";

export interface GenerateItemModalProps {
  slot: string;
  buildIndex: number;
  items: IItem[];
  onPick: (item: IItem) => void;
}

export const GenerateItemModal: React.FC<GenerateItemModalProps> = props => {
  return (<Modal
    basic
    open={true}
    size='small'
  >
    <Header>
      Chose item for slot {props.slot.toUpperCase()} for build {props.buildIndex + 1}
    </Header>
    <Modal.Content>
      <div>
        {props.items.map(item => (<AlbionImage item={item.name} onClick={() => props.onPick(item)}/>))}
      </div>
    </Modal.Content>
  </Modal>)
};
