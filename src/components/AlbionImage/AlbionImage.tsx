import React, {DetailedHTMLProps, HTMLAttributes, useMemo} from "react";

export interface AlbionImageProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLImageElement>, HTMLImageElement>, 'src'> {
  item: string;
  enchantment?: number;
}

export const AlbionImage: React.FC<AlbionImageProps> = ({item, enchantment, ...props}) => {
  const itemName = useMemo(() => {
    if(enchantment){
      return item.toUpperCase() + '@' + enchantment;
    }
    return item.toUpperCase();
  }, [item, enchantment]);
  return (<img src={`https://render.albiononline.com/v1/item/${itemName}.png`} {...props}/>)
};
