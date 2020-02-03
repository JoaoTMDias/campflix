import { MOVIE_DETAILS } from "../constants/index";

export const RELATED = {
  id: "803a5589-d36a-4e94-a821-1eb32539c896",
  title: "Because you've watched Saving Private Ryan",
  data: [
    {
      id: "c19405b7-8fa8-47d7-a4af-63a5498100f7",
      name: "related-movies",
      to: `${MOVIE_DETAILS}/c19405b7-8fa8-47d7-a4af-63a5498100f7`,
      title: "American Sniper",
      age: "16",
      duration: "2h12m",
      tags: ["Gritty", "Action & Adventure", "Drama"],
    },
    {
      id: "9ef63bf8-86a1-423f-9c97-97cfc997e6a0",
      name: "related-movies",
      to: `${MOVIE_DETAILS}/9ef63bf8-86a1-423f-9c97-97cfc997e6a0`,
      title: "Fury",
      age: "16",
      duration: "1h30m",
      tags: ["Gritty", "Action & Adventure", "Drama"],
    },
  ],
};