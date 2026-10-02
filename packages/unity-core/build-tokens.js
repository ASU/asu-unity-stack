import StyleDictionary from 'style-dictionary';

const sd = new StyleDictionary('style-dictionary.config.json');
await sd.buildAllPlatforms();
