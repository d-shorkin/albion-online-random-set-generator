(this["webpackJsonpalbion-random-set-challenge"]=this["webpackJsonpalbion-random-set-challenge"]||[]).push([[0],{140:function(_,T,A){},141:function(_,T,A){},143:function(_,T,A){},145:function(_,T,A){},152:function(_,T,A){"use strict";A.r(T);var E=A(0),e=A.n(E),n=A(47),H=A.n(n),t=(A(140),A(141),A(78)),O=A(41),R=A(76),a=(A(142),A(165)),L=A(164),o=A(153),S=A(106),F=(A(143),A(6)),c=function(_){var T=_.item,A=_.enchantment,e=Object(S.a)(_,["item","enchantment"]),n=Object(E.useMemo)((function(){return A?T.toUpperCase()+"@"+A:T.toUpperCase()}),[T,A]);return Object(F.jsx)("img",Object(O.a)({src:"https://render.albiononline.com/v1/item/".concat(n,".png")},e))},d=function(_){var T=_.className,A=_.items,E=Object(S.a)(_,["className","items"]);return Object(F.jsxs)("div",Object(O.a)(Object(O.a)({className:"build-preview"+(T?" "+T:"")},E),{},{children:[Object(F.jsx)("div",{}),Object(F.jsx)("div",{children:A.head&&Object(F.jsx)(c,{item:A.head.name,enchantment:A.head.enchantment})}),Object(F.jsx)("div",{children:A.cloak&&Object(F.jsx)(c,{item:A.cloak.name,enchantment:A.cloak.enchantment})}),Object(F.jsx)("div",{children:A.weapon&&Object(F.jsx)(c,{item:A.weapon.name,enchantment:A.weapon.enchantment})}),Object(F.jsx)("div",{children:A.chest&&Object(F.jsx)(c,{item:A.chest.name,enchantment:A.chest.enchantment})}),Object(F.jsx)("div",{children:A.offhand&&Object(F.jsx)(c,{item:A.offhand.name,enchantment:A.offhand.enchantment})}),Object(F.jsx)("div",{}),Object(F.jsx)("div",{children:A.boots&&Object(F.jsx)(c,{item:A.boots.name,enchantment:A.boots.enchantment})})]}))},N=(A(145),function(_){return Object(F.jsx)("div",{className:"builds",children:_.builds.map((function(_,T){return Object(F.jsx)(d,{items:_},T)}))})}),M=A(166),i=A(168),r=function(_){return Object(F.jsxs)(M.a,{basic:!0,open:!0,size:"small",children:[Object(F.jsxs)(i.a,{children:["Chose item for slot ",_.slot.toUpperCase()," for build ",_.buildIndex+1]}),Object(F.jsx)(M.a.Content,{children:Object(F.jsx)("div",{children:_.items.map((function(T){return Object(F.jsx)(c,{item:T.name,onClick:function(){return _.onPick(T)}})}))})})]})},s=function(_){return{name:_,twoHanded:!1,joke:!1}},I=function(_){var T=function(_){return _.map((function(_){return"string"===typeof _?{name:_,twoHanded:!1,joke:!1}:_}))};return{head:T(_.head),weapon:T(_.weapon),cloak:T(_.cloak),chest:T(_.chest),offhand:T(_.offhand),boots:T(_.boots)}}({head:["T4_HEAD_PLATE_SET1","T4_HEAD_PLATE_SET2","T4_HEAD_PLATE_SET3","T4_HEAD_PLATE_HELL","T4_HEAD_LEATHER_AVALON","T4_HEAD_LEATHER_ROYAL","T4_HEAD_CLOTH_ROYAL","T4_HEAD_LEATHER_UNDEAD","T4_HEAD_PLATE_KEEPER","T4_HEAD_CLOTH_KEEPER","T4_HEAD_LEATHER_MORGANA","T4_HEAD_PLATE_ROYAL","T4_HEAD_CLOTH_MORGANA","T4_HEAD_LEATHER_SET1","T4_HEAD_LEATHER_SET2","T4_HEAD_LEATHER_SET3","T4_HEAD_LEATHER_HELL","T4_HEAD_PLATE_AVALON","T4_HEAD_CLOTH_AVALON","T4_HEAD_CLOTH_SET2","T4_HEAD_CLOTH_SET1","T4_HEAD_CLOTH_SET3","T4_HEAD_CLOTH_HELL","T4_HEAD_GATHERER_FIBER","T4_HEAD_GATHERER_HIDE","T4_HEAD_GATHERER_ORE","T4_HEAD_GATHERER_ROCK","T4_HEAD_GATHERER_FISH","T4_HEAD_GATHERER_WOOD",{name:"T2_HEAD_CLOTH_SET1",twoHanded:!1,joke:!0},{name:"T2_HEAD_PLATE_SET1",twoHanded:!1,joke:!0},{name:"T2_HEAD_LEATHER_SET1",twoHanded:!1,joke:!0}],weapon:[s("T4_MAIN_FIRESTAFF_KEEPER"),s("T4_MAIN_FIRESTAFF"),"T4_2H_INFERNOSTAFF","T4_2H_FIRESTAFF","T4_2H_FIRESTAFF_HELL","T4_2H_FIRE_RINGPAIR_AVALON","T4_2H_INFERNOSTAFF_MORGANA",s("T4_MAIN_RAPIER_MORGANA"),s("T4_MAIN_DAGGER"),"T4_2H_DUALSICKLE_UNDEAD","T4_2H_IRONGAUNTLETS_HELL","T4_2H_DAGGERPAIR","T4_2H_CLAWPAIR","T4_2H_DAGGER_KATAR_AVALON",s("T4_MAIN_HAMMER"),"T4_2H_HAMMER","T4_2H_HAMMER_AVALON","T4_2H_RAM_KEEPER","T4_2H_HAMMER_UNDEAD","T4_2H_HAMMER_UNDEAD","T4_2H_POLEHAMMER",s("T4_MAIN_1HCROSSBOW"),"T4_2H_CROSSBOWLARGE","T4_2H_DUALCROSSBOW_HELL","T4_2H_CROSSBOW_CANNON_AVALON","T4_2H_REPEATINGCROSSBOW_UNDEAD","T4_2H_CROSSBOWLARGE_MORGANA","T4_2H_CROSSBOW",s("T4_MAIN_MACE"),s("T4_MAIN_ROCKMACE_KEEPER"),s("T4_MAIN_MACE_HELL"),"T4_2H_MACE_MORGANA","T4_2H_FLAIL","T4_2H_DUALMACE_AVALON","T4_2H_MACE",s("T4_MAIN_CURSEDSTAFF_AVALON"),s("T4_MAIN_CURSEDSTAFF_UNDEAD"),s("T4_MAIN_CURSEDSTAFF"),"T4_2H_CURSEDSTAFF_MORGANA","T4_2H_CURSEDSTAFF","T4_2H_SKULLORB_HELL","T4_2H_DEMONICSTAFF","T4_2H_BOW_KEEPER","T4_2H_BOW","T4_2H_BOW_HELL","T4_2H_BOW_AVALON","T4_2H_WARBOW","T4_2H_LONGBOW_UNDEAD","T4_2H_LONGBOW",s("T4_MAIN_ARCANESTAFF_UNDEAD"),s("T4_MAIN_ARCANESTAFF"),"T4_2H_ENIGMATICORB_MORGANA","T4_2H_ARCANESTAFF_HELL","T4_2H_ARCANESTAFF","T4_2H_ARCANE_RINGPAIR_AVALON","T4_2H_ENIGMATICSTAFF",s("T4_MAIN_AXE"),"T4_2H_HALBERD_MORGANA","T4_2H_HALBERD","T4_2H_DUALAXE_KEEPER","T4_2H_AXE_AVALON","T4_2H_SCYTHE_HELL","T4_2H_AXE",s("T4_MAIN_SWORD"),s("T4_MAIN_SCIMITAR_MORGANA"),"T4_2H_DUALSWORD","T4_2H_CLAYMORE_AVALON","T4_2H_DUALSCIMITAR_UNDEAD","T4_2H_CLEAVER_HELL","T4_2H_CLAYMORE",s("T4_MAIN_SPEAR_LANCE_AVALON"),s("T4_MAIN_SPEAR_KEEPER"),s("T4_MAIN_SPEAR"),"T4_2H_TRIDENT_UNDEAD","T4_2H_HARPOON_HELL","T4_2H_GLAIVE","T4_2H_SPEAR",s("T4_MAIN_FROSTSTAFF_KEEPER"),s("T4_MAIN_FROSTSTAFF_AVALON"),s("T4_MAIN_FROSTSTAFF"),"T4_2H_ICECRYSTAL_UNDEAD","T4_2H_FROSTSTAFF","T4_2H_GLACIALSTAFF","T4_2H_ICEGAUNTLETS_HELL",s("T4_MAIN_NATURESTAFF_KEEPER"),s("T4_MAIN_NATURESTAFF_AVALON"),s("T4_MAIN_NATURESTAFF"),"T4_2H_NATURESTAFF_KEEPER","T4_2H_WILDSTAFF","T4_2H_NATURESTAFF","T4_2H_NATURESTAFF_HELL","T4_2H_QUARTERSTAFF_AVALON","T4_2H_IRONCLADEDSTAFF","T4_2H_QUARTERSTAFF","T4_2H_TWINSCYTHE_HELL","T4_2H_ROCKSTAFF_KEEPER","T4_2H_DOUBLEBLADEDSTAFF","T4_2H_COMBATSTAFF_MORGANA",s("T4_MAIN_HOLYSTAFF_MORGANA"),s("T4_MAIN_HOLYSTAFF"),s("T4_MAIN_HOLYSTAFF_AVALON"),"T4_2H_HOLYSTAFF_HELL","T4_2H_HOLYSTAFF","T4_2H_DIVINESTAFF","T4_2H_HOLYSTAFF_UNDEAD",{name:"T3_2H_QUARTERSTAFF",joke:!0,twoHanded:!0},{name:"T3_2H_CROSSBOW",joke:!0,twoHanded:!0},{name:"T3_MAIN_ARCANESTAFF",joke:!0,twoHanded:!1},{name:"T3_MAIN_NATURESTAFF",joke:!0,twoHanded:!1},{name:"T3_MAIN_CURSEDSTAFF",joke:!0,twoHanded:!1},{name:"T3_MAIN_HAMMER",joke:!0,twoHanded:!1},{name:"T3_MAIN_SWORD",joke:!0,twoHanded:!1},{name:"T3_MAIN_MACE",joke:!0,twoHanded:!1},{name:"T3_MAIN_FROSTSTAFF",joke:!0,twoHanded:!1},{name:"T3_MAIN_AXE",joke:!0,twoHanded:!1},{name:"T3_MAIN_SPEAR",joke:!0,twoHanded:!1},{name:"T3_MAIN_HOLYSTAFF",joke:!0,twoHanded:!1},{name:"T3_MAIN_DAGGER",joke:!0,twoHanded:!1},{name:"T3_MAIN_FIRESTAFF",joke:!0,twoHanded:!1},{name:"T3_2H_BOW",joke:!0,twoHanded:!0},{name:"T3_2H_TOOL_FISHINGROD",joke:!0,twoHanded:!0}].map((function(_){return"string"===typeof _?{name:_,joke:!1,twoHanded:!0}:_})),cloak:["T4_CAPE","T4_CAPEITEM_FW_BRIDGEWATCH","T4_CAPEITEM_FW_FORTSTERLING","T4_CAPEITEM_FW_LYMHURST","T4_CAPEITEM_FW_MARTLOCK","T4_CAPEITEM_FW_THETFORD","T4_CAPEITEM_HERETIC","T4_CAPEITEM_UNDEAD","T4_CAPEITEM_KEEPER","T4_CAPEITEM_MORGANA","T4_CAPEITEM_DEMON"],chest:["T4_ARMOR_LEATHER_MORGANA","T4_ARMOR_PLATE_KEEPER","T4_ARMOR_GATHERER_HIDE","T4_ARMOR_CLOTH_HELL","T4_ARMOR_CLOTH_MORGANA","T4_ARMOR_GATHERER_FISH","T4_ARMOR_CLOTH_KEEPER","T4_ARMOR_CLOTH_SET1","T4_ARMOR_CLOTH_SET3","T4_ARMOR_CLOTH_SET2","T4_ARMOR_CLOTH_ROYAL","T4_ARMOR_CLOTH_AVALON","T4_ARMOR_LEATHER_AVALON","T4_ARMOR_PLATE_AVALON","T4_ARMOR_GATHERER_ROCK","T4_ARMOR_PLATE_ROYAL","T4_ARMOR_GATHERER_WOOD","T4_ARMOR_LEATHER_UNDEAD","T4_ARMOR_GATHERER_ORE","T4_ARMOR_PLATE_HELL","T4_ARMOR_LEATHER_ROYAL","T4_ARMOR_GATHERER_FIBER","T4_ARMOR_PLATE_SET1","T4_ARMOR_PLATE_SET3","T4_ARMOR_PLATE_SET2","T4_ARMOR_LEATHER_HELL","T4_ARMOR_PLATE_UNDEAD","T4_ARMOR_LEATHER_SET2","T4_ARMOR_LEATHER_SET1","T4_ARMOR_LEATHER_SET3",{name:"T3_ARMOR_CLOTH_SET1",joke:!0,twoHanded:!1},{name:"T3_ARMOR_LEATHER_SET1",joke:!0,twoHanded:!1},{name:"T3_ARMOR_PLATE_SET1",joke:!0,twoHanded:!1}],offhand:["T4_OFF_SHIELD_AVALON","T4_OFF_TALISMAN_AVALON","T4_OFF_SHIELD","T4_OFF_TORCH","T4_OFF_DEMONSKULL_HELL","T4_OFF_JESTERCANE_HELL","T4_OFF_TOWERSHIELD_UNDEAD","T4_OFF_BOOK","T4_OFF_ORB_MORGANA","T4_OFF_LAMP_UNDEAD","T4_OFF_SPIKEDSHIELD_MORGANA","T4_OFF_HORN_KEEPER","T4_OFF_CENSER_AVALON","T4_OFF_TOTEM_KEEPER","T4_OFF_SHIELD_HELL",{name:"T3_OFF_BOOK",joke:!0,twoHanded:!1},{name:"T3_OFF_SHIELD",joke:!0,twoHanded:!1},{name:"T3_OFF_TORCH",joke:!0,twoHanded:!1}],boots:["T4_SHOES_CLOTH_SET2","T4_SHOES_CLOTH_SET3","T4_SHOES_CLOTH_HELL","T4_SHOES_GATHERER_FIBER","T4_SHOES_GATHERER_ORE","T4_SHOES_LEATHER_AVALON","T4_SHOES_PLATE_AVALON","T4_SHOES_CLOTH_AVALON","T4_SHOES_GATHERER_FISH","T4_SHOES_LEATHER_SET3","T4_SHOES_LEATHER_SET2","T4_SHOES_LEATHER_SET1","T4_SHOES_LEATHER_HELL","T4_SHOES_PLATE_SET3","T4_SHOES_PLATE_SET1","T4_SHOES_PLATE_SET2","T4_SHOES_PLATE_HELL","T4_SHOES_LEATHER_MORGANA","T4_SHOES_GATHERER_ROCK","T4_SHOES_GATHERER_HIDE",{name:"T3_SHOES_CLOTH_SET1",joke:!0,twoHanded:!1},{name:"T3_SHOES_PLATE_SET1",joke:!0,twoHanded:!1},{name:"T3_SHOES_LEATHER_SET1",joke:!0,twoHanded:!1}]});function j(_){return _[Math.floor(Math.random()*_.length)]}function D(_){var T=I.weapon.find((function(T){return T.name===_}));return!!T&&T.twoHanded}function m(_){var T=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!I[_].length)return{name:"T4_TRASH"};var A=I[_].filter((function(_){return _.joke===T}));if(!A.length){var E=j(I[_]);return{name:E.name}}var e=j(A);return{name:e.name}}function C(_,T){var A=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return new Array(_).fill(0).map((function(){return m(T,A)}))}var u=function(){var _=Object(E.useState)(1),T=Object(R.a)(_,2),A=T[0],e=T[1],n=Object(E.useState)(!1),H=Object(R.a)(n,2),S=H[0],c=H[1],d=Object(E.useState)([{}]),M=Object(R.a)(d,2),i=M[0],s=M[1],I=Object(E.useState)(null),j=Object(R.a)(I,2),m=j[0],u=j[1],l=Object(E.useCallback)((function(_){var T=isNaN(Number(_.target.value))?0:Number(_.target.value);e(T),s(new Array(T).fill(0).map((function(){return{}})))}),[]),b=Object(E.useCallback)((function(_){var T=i;_&&(T=i.map((function(T,A){return m&&A===m.buildIndex?Object(O.a)(Object(O.a)({},T),{},Object(t.a)({},m.slot,_)):T})),s(T)),c(!0);for(var E=0;E<A;E++){var e=T[E];if(!e.weapon)return u({items:C(3,"weapon",Math.random()<.001),buildIndex:E,slot:"weapon"});if(!e.offhand&&!D(e.weapon.name))return u({items:C(3,"offhand",Math.random()<.001),buildIndex:E,slot:"offhand"});if(!e.head)return u({items:C(3,"head",Math.random()<.001),buildIndex:E,slot:"head"});if(!e.chest)return u({items:C(3,"chest",Math.random()<.001),buildIndex:E,slot:"chest"});if(!e.boots)return u({items:C(3,"boots",Math.random()<.001),buildIndex:E,slot:"boots"});if(!e.cloak)return u({items:C(3,"cloak",Math.random()<.001),buildIndex:E,slot:"cloak"})}return u(null)}),[i,A,m]);return Object(F.jsxs)("div",{children:[!S&&Object(F.jsxs)(a.a,{children:[Object(F.jsxs)(a.a.Field,{children:[Object(F.jsx)("label",{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0431\u0438\u043b\u0434\u043e\u0432"}),Object(F.jsx)(L.a,{value:A,onChange:l,icon:"users",iconPosition:"left"})]}),Object(F.jsx)(o.a,{type:"submit",onClick:function(){return b()},disabled:A<1,children:"\u041f\u043e\u0435\u0445\u0430\u043b\u0438 \u0431\u0438\u043b\u0438\u0442\u044c!"})]}),S&&Object(F.jsx)(N,{builds:i}),m&&Object(F.jsx)(r,{slot:m.slot,buildIndex:m.buildIndex,items:m.items,onPick:b})]})};var l=function(){return Object(F.jsx)("div",{className:"App",children:Object(F.jsx)(u,{})})},b=function(_){_&&_ instanceof Function&&A.e(3).then(A.bind(null,170)).then((function(T){var A=T.getCLS,E=T.getFID,e=T.getFCP,n=T.getLCP,H=T.getTTFB;A(_),E(_),e(_),n(_),H(_)}))};H.a.render(Object(F.jsx)(e.a.StrictMode,{children:Object(F.jsx)(l,{})}),document.getElementById("root")),b()}},[[152,1,2]]]);
//# sourceMappingURL=main.94d0ecc6.chunk.js.map