import mongoose from 'mongoose';
import { filter, includes, map } from 'lodash';
import connectDb from '../util/connection';
import HSRCharacterModel, { HSRCharacterDocument } from '../models/HSRCharacter';
import HSRGameModel from '../models/HSRGame';

connectDb();
mongoose.connection.once('open', async () => {
  const characters = [
    { name: "Arlan", rarity: 4, weapon: "The Destruction", element: "Lightning", sex: "Male", faction: "Herta Space Station" },
    { name: "Asta", rarity: 4, weapon: "The Harmony", element: "Fire", sex: "Female", faction: "Herta Space Station" },
    { name: "Bailu", rarity: 5, weapon: "The Abundance", element: "Lightning", sex: "Female", faction: "Xianzhou Luofu" },
    { name: "Blade", rarity: 5, weapon: "The Destruction", element: "Wind", sex: "Male", faction: "Stellaron Hunters" },
    { name: "Bronya", rarity: 5, weapon: "The Harmony", element: "Wind", sex: "Female", faction: "Silvermane Guards" },
    { name: "Clara", rarity: 5, weapon: "The Destruction", element: "Physical", sex: "Female", faction: "Belobog" },
    { name: "Dan Heng", rarity: 4, weapon: "The Hunt", element: "Wind", sex: "Male", faction: "Astral Express" },
    { name: "Gepard", rarity: 5, weapon: "The Preservation", element: "Ice", sex: "Male", faction: "Silvermane Guards" },
    { name: "Herta", rarity: 4, weapon: "The Erudition", element: "Ice", sex: "Female", faction: "Herta Space Station" },
    { name: "Himeko", rarity: 5, weapon: "The Erudition", element: "Fire", sex: "Female", faction: "Astral Express" },
    { name: "Hook", rarity: 4, weapon: "The Destruction", element: "Fire", sex: "Female", faction: "Belobog" },
    { name: "Jing Yuan", rarity: 5, weapon: "The Erudition", element: "Lightning", sex: "Male", faction: "Xianzhou Luofu" },
    { name: "Kafka", rarity: 5, weapon: "The Nihility", element: "Lightning", sex: "Female", faction: "Stellaron Hunters" },
    { name: "Luocha", rarity: 5, weapon: "The Abundance", element: "Imaginary", sex: "Female", faction: "Intergalactic Merchant Guild" },
    { name: "March 7th", rarity: 4, weapon: "The Preservation", element: "Ice", sex: "Female", faction: "Astral Express" },
    { name: "Natasha", rarity: 4, weapon: "The Abundance", element: "Physical", sex: "Female", faction: "Wildfire" },
    { name: "Pela", rarity: 4, weapon: "The Nihility", element: "Ice", sex: "Female", faction: "Silvermane Guards" },
    { name: "Qingque", rarity: 4, weapon: "The Erudition", element: "Quantum", sex: "Female", faction: "Xianzhou Luofu" },
    { name: "Sampo", rarity: 4, weapon: "The Nihility", element: "Wind", sex: "Male", faction: "Wildfire" },
    { name: "Seele", rarity: 5, weapon: "The Hunt", element: "Quantum", sex: "Female", faction: "Wildfire" },
    { name: "Serval", rarity: 4, weapon: "The Erudition", element: "Lightning", sex: "Female", faction: "Belobog" },
    { name: "Silver Wolf", rarity: 5, weapon: "The Nihility", element: "Quantum", sex: "Female", faction: "Stellaron Hunters" },
    { name: "Sushang", rarity: 4, weapon: "The Hunt", element: "Physical", sex: "Female", faction: "Xianzhou Luofu" },
    { name: "Tingyun", rarity: 4, weapon: "The Harmony", element: "Lightning", sex: "Female", faction: "Xianzhou Luofu" },
    { name: "Welt", rarity: 5, weapon: "The Nihility", element: "Imaginary", sex: "Male", faction: "Astral Express" },
    { name: "Yanqing", rarity: 5, weapon: "The Hunt", element: "Ice", sex: "Male", faction: "Xianzhou Luofu" },
  ]

  try {
    await Promise.all(map(characters, (character: HSRCharacterDocument) => {
      return HSRCharacterModel.create(character);
    }))
  } finally {
    await mongoose.connection.close();
  }
});