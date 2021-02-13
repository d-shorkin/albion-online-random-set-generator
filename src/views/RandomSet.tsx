import React, {useCallback, useState} from "react";
import 'semantic-ui-css/semantic.min.css'
import {Button, Form, Input} from "semantic-ui-react";
import {BuildsList} from "./BuildsList";
import {Items} from "../components/BuildPreview/BuildPreview";
import {IItem} from "../components/conract";
import {GenerateItemModal} from "./GenerateItemModal";
import {items, ItemsList} from "./items";

export interface RandomSetProps {

}

function getRandomItemFromList<T>(array: T[]): T {
  return array[Math.floor((Math.random() * array.length))];
}

function isTwoHandedWeapon(weapon: string): boolean {
  const w = items.weapon.find(w => w.name === weapon);
  if (w) {
    return w.twoHanded;
  }
  return false;
}

function getRandomItem(type: keyof ItemsList, joke: boolean = false): IItem {
  if(!items[type].length){
    return {name: 'T4_TRASH'};
  }
  const itms = items[type].filter(i => i.joke === joke);
  if(!itms.length){
    const item = getRandomItemFromList(items[type]);
    return {name: item.name};
  }

  const item = getRandomItemFromList(itms);
  return {name: item.name};
}

function getRandomItems(count: number, type: keyof ItemsList, joke: boolean = false): IItem[] {
  return new Array(count).fill(0).map(() => getRandomItem(type, joke));
}

export const RandomSet: React.FC<RandomSetProps> = () => {
  const [buildsCounts, setBuildsCount] = useState(1);
  const [building, setBuilding] = useState(false);
  const [builds, setBuilds] = useState<Items[]>([{}]);
  const [itemGenerate, setItemGenerate] = useState<{ slot: string, buildIndex: number, items: IItem[] } | null>(null);

  const onChange = useCallback((e) => {
    const count = !isNaN(Number(e.target.value)) ? Number(e.target.value) : 0;
    setBuildsCount(count);
    setBuilds(new Array(count).fill(0).map(() => ({})));
  }, []);

  const nextItem = useCallback((item?: IItem) => {
    let currentBuilds = builds;
    if (item) {
      currentBuilds = builds.map((build, i) => {
        if (!itemGenerate || i !== itemGenerate.buildIndex) {
          return build;
        }
        return {...build, [itemGenerate.slot]: item}
      });
      setBuilds(currentBuilds);
    }

    setBuilding(true);
    for (let i = 0; i < buildsCounts; i++) {
      const build = currentBuilds[i];

      if (!build.weapon) {
        return setItemGenerate({items: getRandomItems(3, 'weapon', Math.random() < 0.001), buildIndex: i, slot: 'weapon'});
      } else if (!build.offhand && !isTwoHandedWeapon(build.weapon.name)) {
        return setItemGenerate({items: getRandomItems(3, 'offhand', Math.random() < 0.001), buildIndex: i, slot: 'offhand'});
      } else if (!build.head) {
        return setItemGenerate({items: getRandomItems(3, 'head', Math.random() < 0.001), buildIndex: i, slot: 'head'});
      } else if (!build.chest) {
        return setItemGenerate({items: getRandomItems(3, 'chest', Math.random() < 0.001), buildIndex: i, slot: 'chest'});
      } else if (!build.boots) {
        return setItemGenerate({items: getRandomItems(3, 'boots', Math.random() < 0.001), buildIndex: i, slot: 'boots'});
      } else if (!build.cloak) {
        return setItemGenerate({items: getRandomItems(3, 'cloak', Math.random() < 0.001), buildIndex: i, slot: 'cloak'});
      }

    }

    return setItemGenerate(null);
  }, [builds, buildsCounts, itemGenerate]);

  const renderForm = () => {
    return (<Form>
      <Form.Field>
        <label>Количество билдов</label>
        <Input value={buildsCounts}
               onChange={onChange}
               icon='users'
               iconPosition='left'/>
      </Form.Field>
      <Button type='submit' onClick={() => nextItem()} disabled={buildsCounts < 1}>Поехали билить!</Button>
    </Form>);
  };

  return (<div>
    {!building && renderForm()}
    {building && <BuildsList builds={builds}/>}
    {itemGenerate && <GenerateItemModal slot={itemGenerate.slot}
                                        buildIndex={itemGenerate.buildIndex}
                                        items={itemGenerate.items}
                                        onPick={nextItem}/>}
  </div>)
};
