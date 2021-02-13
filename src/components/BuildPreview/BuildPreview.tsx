import React, {DetailedHTMLProps, HTMLAttributes} from "react";
import './style.scss';
import {IItem} from "../conract";
import {AlbionImage} from "../AlbionImage/AlbionImage";

export interface Items {
  head?: IItem;
  cloak?: IItem;
  weapon?: IItem;
  chest?: IItem;
  offhand?: IItem;
  boots?: IItem;
}

export interface BuildPreviewProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Items {
  items: Items;
}

export const BuildPreview: React.FC<BuildPreviewProps> = ({className, items, ...props}) => {
  return (<div className={'build-preview' + (className ? ' ' + className : '')} {...props}>
    <div/>
    <div>{items.head && <AlbionImage item={items.head.name} enchantment={items.head.enchantment}/>}</div>
    <div>{items.cloak && <AlbionImage item={items.cloak.name} enchantment={items.cloak.enchantment}/>}</div>
    <div>{items.weapon && <AlbionImage item={items.weapon.name} enchantment={items.weapon.enchantment}/>}</div>
    <div>{items.chest && <AlbionImage item={items.chest.name} enchantment={items.chest.enchantment}/>}</div>
    <div>{items.offhand && <AlbionImage item={items.offhand.name} enchantment={items.offhand.enchantment}/>}</div>
    <div/>
    <div>{items.boots && <AlbionImage item={items.boots.name} enchantment={items.boots.enchantment}/>}</div>
  </div>)
};
