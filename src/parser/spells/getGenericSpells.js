// Import parsing functions
import { fixSpells } from "./special.js";
import { parseSpell } from "./parseSpell.js";

export function getSpells(spells) {
  let items = [];

  spells.forEach((spell) => {
    if (!spell.definition) return;

    spell.flags = {
      ddbimporter: {
        dndbeyond: {
          lookup: "generic",
          lookupName: "generic",
          level: spell.castAtLevel,
          castAtLevel: spell.castAtLevel,
        },
      },
    };

    items.push(parseSpell(spell, null));
  });

  if (items) fixSpells(null, items);

  return items;
}
