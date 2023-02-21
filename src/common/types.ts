
export type Category = "Any" | "Misc" | "Programming" | "Dark" | "Pun" | "Spooky" | "Christmas";
export type Flags = {
  nsfw: boolean;
  religious: boolean;
  political: boolean;
  racist: boolean;
  sexist: boolean;
  explicit: boolean;
}

export type FlagsKeys = 
   | "nsfw"
   | "religious"
   | "political"
   | "racist"
   | "sexist"
   | "explicit"


export type Joke = {
  id: number;
  category: Category;
  setup?: string;
  delivery?: string;
  joke: string;
  flags: Flags;
  safe: boolean;
  lang: "cs" | "de" | "en" | "es" | "fr" | "pt";
  type: "single" | "twopart";
}