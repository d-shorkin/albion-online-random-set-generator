import React from "react";
import {BuildPreview, Items} from "../components/BuildPreview/BuildPreview";
import './style.scss';

export interface BuildsPreviewProps {
  builds: Items[]
}

export const BuildsList: React.FC<BuildsPreviewProps> = props => {
  return <div className={'builds'}>
    {(props.builds.map((items, i) => (<BuildPreview items={items} key={i}/>)))}
  </div>
};
