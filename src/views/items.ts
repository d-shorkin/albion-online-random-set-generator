export interface ItemListItem {
  name: string;
  twoHanded: boolean;
  joke: boolean;
}

export interface ItemsList {
  head: ItemListItem[];
  cloak: ItemListItem[];
  weapon: ItemListItem[];
  chest: ItemListItem[];
  offhand: ItemListItem[];
  boots: ItemListItem[];
}

type ItemsListEz = {[K in keyof ItemsList]: Array<ItemListItem | string>}


const MH = (name: string): ItemListItem => ({name, twoHanded: false, joke: false});

export const items = ((items: ItemsListEz): ItemsList => {
  const format = (items: Array<ItemListItem | string>): ItemListItem[] => {
    return items.map((item) => {
      if (typeof item === "string") {
        return {name: item, twoHanded: false, joke: false};
      }
      return item;
    });
  };

  return {
    head: format(items.head),
    weapon: format(items.weapon),
    cloak: format(items.cloak),
    chest: format(items.chest),
    offhand: format(items.offhand),
    boots: format(items.boots),
  };
})({
  head: [
    'T4_HEAD_PLATE_SET1',
    'T4_HEAD_PLATE_SET2',
    'T4_HEAD_PLATE_SET3',
    'T4_HEAD_PLATE_HELL',
    'T4_HEAD_LEATHER_AVALON',
    'T4_HEAD_LEATHER_ROYAL',
    'T4_HEAD_CLOTH_ROYAL',
    'T4_HEAD_LEATHER_UNDEAD',
    'T4_HEAD_PLATE_KEEPER',
    'T4_HEAD_CLOTH_KEEPER',
    'T4_HEAD_LEATHER_MORGANA',
    'T4_HEAD_PLATE_ROYAL',
    'T4_HEAD_CLOTH_MORGANA',
    'T4_HEAD_LEATHER_SET1',
    'T4_HEAD_LEATHER_SET2',
    'T4_HEAD_LEATHER_SET3',
    'T4_HEAD_LEATHER_HELL',
    'T4_HEAD_PLATE_AVALON',
    'T4_HEAD_CLOTH_AVALON',
    'T4_HEAD_CLOTH_SET2',
    'T4_HEAD_CLOTH_SET1',
    'T4_HEAD_CLOTH_SET3',
    'T4_HEAD_CLOTH_HELL',

    'T4_HEAD_GATHERER_FIBER',
    'T4_HEAD_GATHERER_HIDE',
    'T4_HEAD_GATHERER_ORE',
    'T4_HEAD_GATHERER_ROCK',
    'T4_HEAD_GATHERER_FISH',
    'T4_HEAD_GATHERER_WOOD',

    {name: 'T2_HEAD_CLOTH_SET1', twoHanded: false, joke: true},
    {name: 'T2_HEAD_PLATE_SET1', twoHanded: false, joke: true},
    {name: 'T2_HEAD_LEATHER_SET1', twoHanded: false, joke: true}
  ],
  weapon: [
    MH('T4_MAIN_FIRESTAFF_KEEPER'),
    MH('T4_MAIN_FIRESTAFF'),
    'T4_2H_INFERNOSTAFF',
    'T4_2H_FIRESTAFF',
    'T4_2H_FIRESTAFF_HELL',
    'T4_2H_FIRE_RINGPAIR_AVALON',
    'T4_2H_INFERNOSTAFF_MORGANA',

    MH('T4_MAIN_RAPIER_MORGANA'),
    MH('T4_MAIN_DAGGER'),
    'T4_2H_DUALSICKLE_UNDEAD',
    'T4_2H_IRONGAUNTLETS_HELL',
    'T4_2H_DAGGERPAIR',
    'T4_2H_CLAWPAIR',
    'T4_2H_DAGGER_KATAR_AVALON',

    MH('T4_MAIN_HAMMER'),
    'T4_2H_HAMMER',
    'T4_2H_HAMMER_AVALON',
    'T4_2H_RAM_KEEPER',
    'T4_2H_HAMMER_UNDEAD',
    'T4_2H_HAMMER_UNDEAD',
    'T4_2H_POLEHAMMER',

    MH('T4_MAIN_1HCROSSBOW'),
    'T4_2H_CROSSBOWLARGE',
    'T4_2H_DUALCROSSBOW_HELL',
    'T4_2H_CROSSBOW_CANNON_AVALON',
    'T4_2H_REPEATINGCROSSBOW_UNDEAD',
    'T4_2H_CROSSBOWLARGE_MORGANA',
    'T4_2H_CROSSBOW',

    MH('T4_MAIN_MACE'),
    MH('T4_MAIN_ROCKMACE_KEEPER'),
    MH('T4_MAIN_MACE_HELL'),
    'T4_2H_MACE_MORGANA',
    'T4_2H_FLAIL',
    'T4_2H_DUALMACE_AVALON',
    'T4_2H_MACE',

    MH('T4_MAIN_CURSEDSTAFF_AVALON'),
    MH('T4_MAIN_CURSEDSTAFF_UNDEAD'),
    MH('T4_MAIN_CURSEDSTAFF'),
    'T4_2H_CURSEDSTAFF_MORGANA',
    'T4_2H_CURSEDSTAFF',
    'T4_2H_SKULLORB_HELL',
    'T4_2H_DEMONICSTAFF',

    'T4_2H_BOW_KEEPER',
    'T4_2H_BOW',
    'T4_2H_BOW_HELL',
    'T4_2H_BOW_AVALON',
    'T4_2H_WARBOW',
    'T4_2H_LONGBOW_UNDEAD',
    'T4_2H_LONGBOW',

    MH('T4_MAIN_ARCANESTAFF_UNDEAD'),
    MH('T4_MAIN_ARCANESTAFF'),
    'T4_2H_ENIGMATICORB_MORGANA',
    'T4_2H_ARCANESTAFF_HELL',
    'T4_2H_ARCANESTAFF',
    'T4_2H_ARCANE_RINGPAIR_AVALON',
    'T4_2H_ENIGMATICSTAFF',

    MH('T4_MAIN_AXE'),
    'T4_2H_HALBERD_MORGANA',
    'T4_2H_HALBERD',
    'T4_2H_DUALAXE_KEEPER',
    'T4_2H_AXE_AVALON',
    'T4_2H_SCYTHE_HELL',
    'T4_2H_AXE',

    MH('T4_MAIN_SWORD'),
    MH('T4_MAIN_SCIMITAR_MORGANA'),
    'T4_2H_DUALSWORD',
    'T4_2H_CLAYMORE_AVALON',
    'T4_2H_DUALSCIMITAR_UNDEAD',
    'T4_2H_CLEAVER_HELL',
    'T4_2H_CLAYMORE',

    MH('T4_MAIN_SPEAR_LANCE_AVALON'),
    MH('T4_MAIN_SPEAR_KEEPER'),
    MH('T4_MAIN_SPEAR'),
    'T4_2H_TRIDENT_UNDEAD',
    'T4_2H_HARPOON_HELL',
    'T4_2H_GLAIVE',
    'T4_2H_SPEAR',

    MH('T4_MAIN_FROSTSTAFF_KEEPER'),
    MH('T4_MAIN_FROSTSTAFF_AVALON'),
    MH('T4_MAIN_FROSTSTAFF'),
    'T4_2H_ICECRYSTAL_UNDEAD',
    'T4_2H_FROSTSTAFF',
    'T4_2H_GLACIALSTAFF',
    'T4_2H_ICEGAUNTLETS_HELL',

    MH('T4_MAIN_NATURESTAFF_KEEPER'),
    MH('T4_MAIN_NATURESTAFF_AVALON'),
    MH('T4_MAIN_NATURESTAFF'),
    'T4_2H_NATURESTAFF_KEEPER',
    'T4_2H_WILDSTAFF',
    'T4_2H_NATURESTAFF',
    'T4_2H_NATURESTAFF_HELL',

    'T4_2H_QUARTERSTAFF_AVALON',
    'T4_2H_IRONCLADEDSTAFF',
    'T4_2H_QUARTERSTAFF',
    'T4_2H_TWINSCYTHE_HELL',
    'T4_2H_ROCKSTAFF_KEEPER',
    'T4_2H_DOUBLEBLADEDSTAFF',
    'T4_2H_COMBATSTAFF_MORGANA',


    MH('T4_MAIN_HOLYSTAFF_MORGANA'),
    MH('T4_MAIN_HOLYSTAFF'),
    MH('T4_MAIN_HOLYSTAFF_AVALON'),
    'T4_2H_HOLYSTAFF_HELL',
    'T4_2H_HOLYSTAFF',
    'T4_2H_DIVINESTAFF',
    'T4_2H_HOLYSTAFF_UNDEAD',


    {name: 'T3_2H_QUARTERSTAFF', joke: true, twoHanded: true},
    {name: 'T3_2H_CROSSBOW', joke: true, twoHanded: true},
    {name: 'T3_MAIN_ARCANESTAFF', joke: true, twoHanded: false},
    {name: 'T3_MAIN_NATURESTAFF', joke: true, twoHanded: false},
    {name: 'T3_MAIN_CURSEDSTAFF', joke: true, twoHanded: false},
    {name: 'T3_MAIN_HAMMER', joke: true, twoHanded: false},
    {name: 'T3_MAIN_SWORD', joke: true, twoHanded: false},
    {name: 'T3_MAIN_MACE', joke: true, twoHanded: false},
    {name: 'T3_MAIN_FROSTSTAFF', joke: true, twoHanded: false},
    {name: 'T3_MAIN_AXE', joke: true, twoHanded: false},
    {name: 'T3_MAIN_SPEAR', joke: true, twoHanded: false},
    {name: 'T3_MAIN_HOLYSTAFF', joke: true, twoHanded: false},
    {name: 'T3_MAIN_DAGGER', joke: true, twoHanded: false},
    {name: 'T3_MAIN_FIRESTAFF', joke: true, twoHanded: false},
    {name: 'T3_2H_BOW', joke: true, twoHanded: true},
    {name: 'T3_2H_TOOL_FISHINGROD', joke: true, twoHanded: true},


  ].map(s => typeof s === 'string' ? {name: s, joke: false, twoHanded: true} : s),
  cloak: [
    'T4_CAPE',
    'T4_CAPEITEM_FW_BRIDGEWATCH',
    'T4_CAPEITEM_FW_FORTSTERLING',
    'T4_CAPEITEM_FW_LYMHURST',
    'T4_CAPEITEM_FW_MARTLOCK',
    'T4_CAPEITEM_FW_THETFORD',
    'T4_CAPEITEM_HERETIC',
    'T4_CAPEITEM_UNDEAD',
    'T4_CAPEITEM_KEEPER',
    'T4_CAPEITEM_MORGANA',
    'T4_CAPEITEM_DEMON',
  ],
  chest: [
    'T4_ARMOR_LEATHER_MORGANA',
    'T4_ARMOR_PLATE_KEEPER',
    'T4_ARMOR_GATHERER_HIDE',
    'T4_ARMOR_CLOTH_HELL',
    'T4_ARMOR_CLOTH_MORGANA',
    'T4_ARMOR_GATHERER_FISH',
    'T4_ARMOR_CLOTH_KEEPER',
    'T4_ARMOR_CLOTH_SET1',
    'T4_ARMOR_CLOTH_SET3',
    'T4_ARMOR_CLOTH_SET2',
    'T4_ARMOR_CLOTH_ROYAL',
    'T4_ARMOR_CLOTH_AVALON',
    'T4_ARMOR_LEATHER_AVALON',
    'T4_ARMOR_PLATE_AVALON',
    'T4_ARMOR_GATHERER_ROCK',
    'T4_ARMOR_PLATE_ROYAL',
    'T4_ARMOR_GATHERER_WOOD',
    'T4_ARMOR_LEATHER_UNDEAD',
    'T4_ARMOR_GATHERER_ORE',
    'T4_ARMOR_PLATE_HELL',
    'T4_ARMOR_LEATHER_ROYAL',
    'T4_ARMOR_GATHERER_FIBER',
    'T4_ARMOR_PLATE_SET1',
    'T4_ARMOR_PLATE_SET3',
    'T4_ARMOR_PLATE_SET2',
    'T4_ARMOR_LEATHER_HELL',
    'T4_ARMOR_PLATE_UNDEAD',
    'T4_ARMOR_LEATHER_SET2',
    'T4_ARMOR_LEATHER_SET1',
    'T4_ARMOR_LEATHER_SET3',

    {name: 'T3_ARMOR_CLOTH_SET1', joke: true, twoHanded: false},
    {name: 'T3_ARMOR_LEATHER_SET1', joke: true, twoHanded: false},
    {name: 'T3_ARMOR_PLATE_SET1', joke: true, twoHanded: false},
  ],
  offhand: [
    'T4_OFF_SHIELD_AVALON',
    'T4_OFF_TALISMAN_AVALON',
    'T4_OFF_SHIELD',
    'T4_OFF_TORCH',
    'T4_OFF_DEMONSKULL_HELL',
    'T4_OFF_JESTERCANE_HELL',
    'T4_OFF_TOWERSHIELD_UNDEAD',
    'T4_OFF_BOOK',
    'T4_OFF_ORB_MORGANA',
    'T4_OFF_LAMP_UNDEAD',
    'T4_OFF_SPIKEDSHIELD_MORGANA',
    'T4_OFF_HORN_KEEPER',
    'T4_OFF_CENSER_AVALON',
    'T4_OFF_TOTEM_KEEPER',
    'T4_OFF_SHIELD_HELL',

    {name: 'T3_OFF_BOOK', joke: true, twoHanded: false},
    {name: 'T3_OFF_SHIELD', joke: true, twoHanded: false},
    {name: 'T3_OFF_TORCH', joke: true, twoHanded: false},
  ],
  boots: [
    'T4_SHOES_CLOTH_SET2',
    'T4_SHOES_CLOTH_SET3',
    'T4_SHOES_CLOTH_HELL',
    'T4_SHOES_GATHERER_FIBER',
    'T4_SHOES_GATHERER_ORE',
    'T4_SHOES_LEATHER_AVALON',
    'T4_SHOES_PLATE_AVALON',
    'T4_SHOES_CLOTH_AVALON',
    'T4_SHOES_GATHERER_FISH',
    'T4_SHOES_LEATHER_SET3',
    'T4_SHOES_LEATHER_SET2',
    'T4_SHOES_LEATHER_SET1',
    'T4_SHOES_LEATHER_HELL',
    'T4_SHOES_PLATE_SET3',
    'T4_SHOES_PLATE_SET1',
    'T4_SHOES_PLATE_SET2',
    'T4_SHOES_PLATE_HELL',
    'T4_SHOES_LEATHER_MORGANA',
    'T4_SHOES_GATHERER_ROCK',
    'T4_SHOES_GATHERER_HIDE',

    {name: 'T3_SHOES_CLOTH_SET1', joke: true, twoHanded: false},
    {name: 'T3_SHOES_PLATE_SET1', joke: true, twoHanded: false},
    {name: 'T3_SHOES_LEATHER_SET1', joke: true, twoHanded: false},
  ],
});