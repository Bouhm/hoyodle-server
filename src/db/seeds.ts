import mongoose from 'mongoose';
import { filter, includes, map } from 'lodash';
import connectDb from '../util/connection';
import HSRCharacterModel, { HSRCharacterDocument } from '../models/HSRCharacter.model';
import HSRGameModel from '../models/HSRGame.model';
import { Path, Element, Sex, Faction } from '../interfaces/Enums';

connectDb();
mongoose.connection.once('open', async () => {
  const characters = [
    { name: "Arlan", rarity: 4, weapon: Path.Destruction, element: Element.Lightning, sex: Sex.Male, faction: Faction.HertaSpaceStation },
    { name: "Asta", rarity: 4, weapon: Path.Harmony, element: Element.Fire, sex: Sex.Female, faction: Faction.HertaSpaceStation },
    { name: "Bailu", rarity: 5, weapon: Path.Abundance, element: Element.Lightning, sex: Sex.Female, faction: Faction.XianzhouLuofu },
    { name: "Blade", rarity: 5, weapon: Path.Destruction, element: Element.Wind, sex: Sex.Male, faction: Faction.StellaronHunters },
    { name: "Bronya", rarity: 5, weapon: Path.Harmony, element: Element.Wind, sex: Sex.Female, faction: Faction.SilvermaneGuards },
    { name: "Clara", rarity: 5, weapon: Path.Destruction, element: Element.Physical, sex: Sex.Female, faction: Faction.Belobog },
    { name: "Dan Heng", rarity: 4, weapon: Path.Hunt, element: Element.Wind, sex: Sex.Male, faction: Faction.AstralExpress },
    { name: "Fu Xuan", rarity: 5, weapon: Path.Preservation, element: Element.Quantum, sex: Sex.Female, faction: Faction.XianzhouLuofu },
    { name: "Gepard", rarity: 5, weapon: Path.Preservation, element: Element.Ice, sex: Sex.Male, faction: Faction.SilvermaneGuards },
    { name: "Guinaifen", rarity: 4, weapon: Path.Nihility, element: Element.Fire, sex: Sex.Female, faction: Faction.XianzhouLuofu },
    { name: "Herta", rarity: 4, weapon: Path.Erudition, element: Element.Ice, sex: Sex.Female, faction: Faction.HertaSpaceStation },
    { name: "Himeko", rarity: 5, weapon: Path.Erudition, element: Element.Fire, sex: Sex.Female, faction: Faction.AstralExpress },
    { name: "Hook", rarity: 4, weapon: Path.Destruction, element: Element.Fire, sex: Sex.Female, faction: Faction.Belobog },
    { name: "Imbibitor Lunae", rarity: 5, weapon: Path.Destruction, element: Element.Imaginary, sex: Sex.Male, faction: Faction.XianzhouLuofu },
    { name: "Jingliu", rarity: 5, weapon: Path.Destruction, element: Element.Ice, sex: Sex.Female, faction: Faction.XianzhouLuofu },
    { name: "Jing Yuan", rarity: 5, weapon: Path.Erudition, element: Element.Lightning, sex: Sex.Male, faction: Faction.XianzhouLuofu },
    { name: "Kafka", rarity: 5, weapon: Path.Nihility, element: Element.Lightning, sex: Sex.Female, faction: Faction.StellaronHunters },
    { name: "Luocha", rarity: 5, weapon: Path.Abundance, element: Element.Imaginary, sex: Sex.Male, faction: Faction.XianzhouLuofu },
    { name: "Luka", rarity: 4, weapon: Path.Nihility, element: Element.Physical, sex: Sex.Male, faction: Faction.Belobog },
    { name: "Lynx", rarity: 4, weapon: Path.Abundance, element: Element.Ice, sex: Sex.Female, faction: Faction.Belobog },
    { name: "March 7th", rarity: 4, weapon: Path.Preservation, element: Element.Ice, sex: Sex.Female, faction: Faction.AstralExpress },
    { name: "Natasha", rarity: 4, weapon: Path.Abundance, element: Element.Physical, sex: Sex.Female, faction: Faction.Wildfire },
    { name: "Pela", rarity: 4, weapon: Path.Nihility, element: Element.Ice, sex: Sex.Female, faction: Faction.SilvermaneGuards },
    { name: "Qingque", rarity: 4, weapon: Path.Erudition, element: Element.Quantum, sex: Sex.Female, faction: Faction.XianzhouLuofu },
    { name: "Sampo", rarity: 4, weapon: Path.Nihility, element: Element.Wind, sex: Sex.Male, faction: Faction.Wildfire },
    { name: "Seele", rarity: 5, weapon: Path.Hunt, element: Element.Quantum, sex: Sex.Female, faction: Faction.Wildfire },
    { name: "Serval", rarity: 4, weapon: Path.Erudition, element: Element.Lightning, sex: Sex.Female, faction: Faction.Belobog },
    { name: "Silver Wolf", rarity: 5, weapon: Path.Nihility, element: Element.Quantum, sex: Sex.Female, faction: Faction.StellaronHunters },
    { name: "Sushang", rarity: 4, weapon: Path.Hunt, element: Element.Physical, sex: Sex.Female, faction: Faction.XianzhouLuofu },
    { name: "Tingyun", rarity: 4, weapon: Path.Harmony, element: Element.Lightning, sex: Sex.Female, faction: Faction.XianzhouLuofu },
    { name: "Topaz & Numby", rarity: 5, weapon: Path.Hunt, element: Element.Fire, sex: Sex.Female, faction: Faction.XianzhouLuofu },
    { name: "Welt", rarity: 5, weapon: Path.Nihility, element: Element.Imaginary, sex: Sex.Male, faction: Faction.AstralExpress },
    { name: "Yanqing", rarity: 5, weapon: Path.Hunt, element: Element.Ice, sex: Sex.Male, faction: Faction.XianzhouLuofu },
    { name: "Yukong", rarity: 4, weapon: Path.Harmony, element: Element.Imaginary, sex: Sex.Female, faction: Faction.XianzhouLuofu },
  ]

  try {
    await Promise.all(map(characters, (character: HSRCharacterDocument) => {
      return HSRCharacterModel.create(character);
    }))
  } finally {
    await mongoose.connection.close();
  }
});