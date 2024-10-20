import { pawnIcon, bishopIcon, knightIcon, rookIcon, queenIcon, kingIcon } from "../../assets/RanksIcons.js";

export const ranks = [
  {
    rank: 'pawn',
    icon: pawnIcon,
    levels: {
      beginner: 1000,
      intermediate: 3000,
      advanced: 5000
    }
  },
  {
    rank: 'bishop',
    icon: bishopIcon,
    levels: {
      beginner: 7000,
      intermediate: 9000,
      advanced: 11000
    }
  },
  {
    rank: 'knight',
    icon: knightIcon,
    levels: {
      beginner: 13000,
      intermediate: 15000,
      advanced: 17000
    }
  },
  {
    rank: 'rook',
    icon: rookIcon,
    levels: {
      beginner: 19000,
      intermediate: 21000,
      advanced: 23000
    }
  },
  {
    rank: 'queen',
    icon: queenIcon,
    levels: {
      beginner: 25000,
      intermediate: 27000,
      advanced: 29000
    }
  },
  {
    rank: 'king',
    icon: kingIcon,
    levels: {
      beginner: 31000,
      intermediate: 33000,
      advanced: 35000
    }
  }
];
