export const hexCharITESMap: { [key: string]: string } = {
  "60": "A",
  "61": "B",
  "62": "C",
  "63": "D",
  "64": "E",
  "65": "F",
  "66": "G",
  "67": "H",
  "68": "I",
  "69": "V",
  "6A": "S",
  "6B": "L",
  "6C": "M",
  "6D": ":",
  "6E": "ぃ",
  "6F": "ぅ",
  "70": "‘",
  "71": "’",
  "72": "“",
  "73": "”",
  "74": "・",
  "75": "…",
  "76": "ぁ",
  "77": "ぇ",
  "78": "ぉ",
  "79": "╔",
  "7A": "═",
  "7B": "╗",
  "7C": "║",
  "7D": "╚",
  "7E": "╝",
  "7F": " ",
  "80": "A",
  "81": "B",
  "82": "C",
  "83": "D",
  "84": "E",
  "85": "F",
  "86": "G",
  "87": "H",
  "88": "I",
  "89": "J",
  "8A": "K",
  "8B": "L",
  "8C": "M",
  "8D": "N",
  "8E": "O",
  "8F": "P",
  "90": "Q",
  "91": "R",
  "92": "S",
  "93": "T",
  "94": "U",
  "95": "V",
  "96": "W",
  "97": "X",
  "98": "Y",
  "99": "Z",
  "9A": "(",
  "9B": ")",
  "9C": ":",
  "9D": ";",
  "9E": "[",
  "9F": "]",
  A0: "a",
  A1: "b",
  A2: "c",
  A3: "d",
  A4: "e",
  A5: "f",
  A6: "g",
  A7: "h",
  A8: "i",
  A9: "j",
  AA: "k",
  AB: "l",
  AC: "m",
  AD: "n",
  AE: "o",
  AF: "p",
  B0: "q",
  B1: "r",
  B2: "s",
  B3: "t",
  B4: "u",
  B5: "v",
  B6: "w",
  B7: "x",
  B8: "y",
  B9: "z",
  BA: "à",
  BB: "è",
  BC: "é",
  BD: "ù",
  BE: "À",
  BF: "Á",
  C0: "Ä",
  C1: "Ö",
  C2: "Ü",
  C3: "ä",
  C4: "ö",
  C5: "ü",
  C6: "È",
  C7: "É",
  C8: "Ì",
  C9: "Í",
  CA: "Ñ",
  CB: "Ò",
  CC: "Ó",
  CD: "Ù",
  CE: "Ú",
  CF: "á",
  D0: "ì",
  D1: "í",
  D2: "ñ",
  D3: "ò",
  D4: "ó",
  D5: "ú",
  D6: "º",
  D7: "&",
  D8: "'d",
  D9: "'l",
  DA: "'m",
  DB: "'r",
  DC: "'s",
  DD: "'t",
  DE: "'v",
  E0: "'",
  E1: "PK",
  E2: "MN",
  E3: "-",
  E4: "¿",
  E5: "¡",
  E6: "?",
  E7: "!",
  E8: ".",
  E9: "ァ",
  EA: "ゥ",
  EB: "ェ",
  EC: "▷",
  ED: "▶",
  EE: "▼",
  EF: "♂",
  F0: "$",
  F1: "×",
  F2: ".",
  F3: "/",
  F4: ",",
  F5: "♀",
  F6: "0",
  F7: "1",
  F8: "2",
  F9: "3",
  FA: "4",
  FB: "5",
  FC: "6",
  FD: "7",
  FE: "8",
  FF: "9",
};

const specialCharHexITESMap: { [key: string]: string } = {
  A: "80",
  B: "81",
  C: "82",
  D: "83",
  E: "84",
  F: "85",
  G: "86",
  H: "87",
  I: "88",
  L: "8B",
  M: "8C",
  S: "92",
  V: "95",
};

export const charHexITESMap: { [key: string]: string } = {};

for (const key in hexCharITESMap) {
  charHexITESMap[hexCharITESMap[key]] = key;
}

for (const key in specialCharHexITESMap) {
  charHexITESMap[key] = specialCharHexITESMap[key];
}
