import { Background } from "../App.types";
import { backgroundList } from "./backgroundList";
import { favoriteArtistKey } from "./constants";
import { getRandomNumber } from "./getRandomNumber";

export const getRandomBackground = (): Background => {
  const artistKeys = Object.keys(backgroundList);
  const artistCount = artistKeys.length;
  const favoriteArtist = localStorage.getItem(favoriteArtistKey);
  const isFavoriteArtistValid =
    favoriteArtist && artistKeys.includes(favoriteArtist);

  const randomArtistIndex = getRandomNumber(0, artistCount - 1);
  const randomArtist =
    (isFavoriteArtistValid && favoriteArtist) || artistKeys[randomArtistIndex];

  const backgrounds = backgroundList[randomArtist];
  const backgroundCount = backgrounds.length;

  const randomBackgroundIndex = getRandomNumber(0, backgroundCount - 1);
  const randomBackground = backgrounds[randomBackgroundIndex];

  return { artist: randomArtist, background: randomBackground };
};
