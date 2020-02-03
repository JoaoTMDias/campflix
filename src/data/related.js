import { MOVIE_DETAILS } from "../../";

export const RELATED = {
  id: "803a5589-d36a-4e94-a821-1eb32539c896",
  title: "Because you've watched Saving Private Ryan",
  data: [
    {
      id: "c19405b7-8fa8-47d7-a4af-63a5498100f7",
      name: "related-movies",
      to: {
        pathname: MOVIE_DETAILS,
        params: {
          id: "c19405b7-8fa8-47d7-a4af-63a5498100f7",
        },
      },
      title: "American Sniper",
      age: "16",
      duration: "2h12m",
      tags: ["Gritty", "Action & Adventure", "Drama"],
    },
  ],
};
