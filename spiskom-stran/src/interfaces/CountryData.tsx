export interface LanguageData {
  [key: string]: string;
}

interface Translations {
  [key: string]: {
    official: string;
    common: string;
  };
}

export interface CountryData {
    name: {
      common: string;
      official: string;
      nativeName: {
        rus: {
          official: string;
          common: string;
        };
      };
    };
    tld: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    cioc: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: {
      RUB: {
        name: string;
        symbol: string;
      };
    };
    idd: {
      root: string;
      suffixes: string[];
    };
    capital: string[];
    altSpellings: string[];
    region: string;
    subregion: string;
    languages: LanguageData;
    translations: Translations;
    latlng: [number, number];
    landlocked: boolean;
    borders: string[];
    area: number;
    demonyms: {
      eng: {
        f: string;
        m: string;
      };
      // Add more demonyms here as needed
    };
    flag: string;
    maps: {
      googleMaps: string;
      openStreetMaps: string;
    };
    population: number;
    gini: {
      "2018": number;
    };
    fifa: string;
    car: {
      signs: string[];
      side: string;
    };
    timezones: string[];
    continents: string[];
    flags: {
      png: string;
      svg: string;
      alt: string;
    };
    coatOfArms: {
      png: string;
      svg: string;
    };
    startOfWeek: string;
    capitalInfo: {
      latlng: [number, number];
    };
    postalCode: {
      format: string;
      regex: string;
    };
  }
  