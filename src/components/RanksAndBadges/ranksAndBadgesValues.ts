import { pawnIcon, bishopIcon, knightIcon, rookIcon, queenIcon, kingIcon } from "../../assets/RanksIcons.ts";
import { twoDays, fiveDays, sevenDays, fourteenDays, thirtyDays, oneYear, twoYear } from "../../assets/BadgesIcons.ts";

export const ranks = [
  {
    rank: 'PAWN',
    icon: pawnIcon,
    levels: {
      beginner: 1000,
      intermediate: 3000,
      advanced: 5000
    }
  },
  {
    rank: 'BISHOP',
    icon: bishopIcon,
    levels: {
      beginner: 7000,
      intermediate: 9000,
      advanced: 11000
    }
  },
  {
    rank: 'KNIGHT',
    icon: knightIcon,
    levels: {
      beginner: 13000,
      intermediate: 15000,
      advanced: 17000
    }
  },
  {
    rank: 'ROOK',
    icon: rookIcon,
    levels: {
      beginner: 19000,
      intermediate: 21000,
      advanced: 23000
    }
  },
  {
    rank: 'QUEEN',
    icon: queenIcon,
    levels: {
      beginner: 25000,
      intermediate: 27000,
      advanced: 29000
    }
  },
  {
    rank: 'KING',
    icon: kingIcon,
    levels: {
      beginner: 31000,
      intermediate: 33000,
      advanced: 35000
    }
  }
];

export const badges = [
  {
    category: "DAILY STREAKS",
    items: [
      {
        title: "2 Day",
        info: "Train for 2 days in a row",
        src: twoDays
      },
      {
        title: "5 Day",
        info: "Train for 5 days in a row",
        src: fiveDays
      },
      {
        title: "7 Day",
        info: "Train for 7 days in a row",
        src: sevenDays
      },
      {
        title: "14 Day",
        info: "Train for 14 days in a row",
        src: fourteenDays
      },
      {
        title: "30 Day",
        info: "Train for 30 days in a row",
        src: thirtyDays
      },
      {
        title: "3 Month",
        info: "Train for 90 days in a row",
        src: pawnIcon
      },
      {
        title: "6 Month",
        info: "Train for 180 days in a row",
        src: pawnIcon
      },
      {
        title: "One Year",
        info: "Train for 365 days in a row",
        src: oneYear
      },
      {
        title: "Two Year",
        info: "Train for 730 days in a row",
        src: twoYear
      }
    ]
  },
  {
    category: "TACTICS STREAKS",
    items: [
      {
        title: "Pawns Progress",
        info: "Get 10 puzzles correct in a row",
        src: pawnIcon
      },
      {
        title: "Knights Rally",
        info: "Get 20 puzzles correct in a row",
        src: pawnIcon
      },
      {
        title: "Bishops Triumph",
        info: "Get 30 puzzles correct in a row",
        src: pawnIcon
      },
      {
        title: "Rooks Dominance",
        info: "Get 40 puzzles correct in a row",
        src: pawnIcon
      },
      {
        title: "Queens Reign",
        info: "Get 50 puzzles correct in a row",
        src: pawnIcon
      },
      {
        title: "Kings Conquest",
        info: "Get 100 puzzles correct in a row",
        src: pawnIcon
      }
    ]
  },
  {
    category: "MISCELLANEOUS",
    items: [
      {
        title: "From the start",
        info: "You signed up during our first month Post Launch (Jan 2022)",
        src: pawnIcon
      },
      {
        title: "Christmas Present",
        info: "You had an account when we launched badges in Christmas 2023",
        src: pawnIcon
      },
      {
        title: "Online Player",
        info: "Set your highest online rating",
        src: pawnIcon
      },
      {
        title: "OTB Player",
        info: "Set your highest OTB rating",
        src: pawnIcon
      },
      {
        title: "Well Known",
        info: "Fill in your profile bio",
        src: pawnIcon
      }
    ]
  }
];
