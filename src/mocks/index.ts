import * as T from "../types";
import acvalhalla from "../assets/games/acvalhalla.png"
import amongus from "../assets/games/amongus.jpg"
import destiny2 from "../assets/games/destiny2.jpg"
import fallguys from "../assets/games/fallguys.jpg"
import fenyxrising from "../assets/games/fenyxrising.jpg"
import fifa23 from "../assets/games/fifa23.jpg"

export const mockedProducts: T.Games[] = [
  {
    id: "3df26203-5a36-402b-ac7d-437339db1501",
    title: "Assassins Creed Valhalla",
    description:
      "É um jogo eletrônico de RPG de ação desenvolvido pela Ubisoft Montreal e publicado pela Ubisoft.",
    price: 179.99,
    image: acvalhalla,
    year: 2020,
    imdbScore: 4.5,
    trailerYoutubeUrl: "https://www.youtube.com/watch?v=SUxjS3xQ4QM",
    gameplayYoutubeUrl: "https://www.youtube.com/watch?v=2oYuNla8B10",
    categoryId: "1c86eac1-f2b9-4bdf-8dc9-21bcd789da4f",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "10c6c5d1-24eb-436d-a21a-0c9b8516f9fa",
    title: "Among Us",
    description:
      "É um jogo eletrônico online, dos gêneros jogo em grupo e sobrevivência, desenvolvido e publicado pelo estúdio de jogos estadunidense InnerSloth.",
    price: 7.99,
    image: amongus,
    year: 2018,
    imdbScore: 4.2,
    trailerYoutubeUrl: "https://www.youtube.com/watch?v=vtbVwHVpzXw",
    gameplayYoutubeUrl: "https://www.youtube.com/watch?v=jq3pz79up1o",
    categoryId: "1c86eac1-f2b9-4bdf-8dc9-21bcd789da4f",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "b201ee19-c00d-4e2a-bdf0-f4101348f1b5",
    title: "Destiny 2: A Bruxa-Rainha",
    description:
      "É um jogo eletrônico de tiro em primeira pessoa multijogador desenvolvido pela Bungie e publicado pela Activision.",
    price: 199.99,
    image: destiny2,
    year: 2022,
    imdbScore: 5,
    trailerYoutubeUrl: "https://www.youtube.com/watch?v=KaHiVn6ZwLA",
    gameplayYoutubeUrl: "https://www.youtube.com/watch?v=YLQIRm0QnZg",
    categoryId: "a6e86fe9-ca7f-40a3-9b95-331e749038f1",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "ef550853-9fb4-4b97-8e88-843c2f827ee4",
    title: "Fall Guys",
    description:
      "É um jogo eletrônico de plataforma battle royale desenvolvido pela Mediatonic.",
    price: 0.99,
    image: fallguys,
    year: 2020,
    imdbScore: 4.1,
    trailerYoutubeUrl: "https://www.youtube.com/watch?v=B8XSo9PRVPI",
    gameplayYoutubeUrl: "https://www.youtube.com/watch?v=omoLINpH91Q",
    categoryId: "1c86eac1-f2b9-4bdf-8dc9-21bcd789da4f",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "75904227-fdc1-4cc2-a8e1-bf5f6449b2d8",
    title: "Immortals Fenyx Rising",
    description:
      "É um jogo eletrônico de RPG de ação desenvolvido pela Ubisoft Montreal e publicado pela Ubisoft.",
    price: 97.99,
    image: fenyxrising,
    year: 2020,
    imdbScore: 4.6,
    trailerYoutubeUrl: "https://www.youtube.com/watch?v=stMoQIh2kK8",
    gameplayYoutubeUrl: "https://www.youtube.com/watch?v=QggfH5ECOL4",
    categoryId: "1c86eac1-f2b9-4bdf-8dc9-21bcd789da4f",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "b1cb2926-59e1-4443-abd7-22ba2e81f9cf",
    title: "fifa23",
    description:
      "Será o próximo jogo eletrônico de simulação de futebol em desenvolvimento pela Electronic Arts.",
    price: 239.99,
    image: fifa23,
    year: 2022,
    imdbScore: 1,
    trailerYoutubeUrl: "https://www.youtube.com/watch?v=o3V-GvvzjE4",
    gameplayYoutubeUrl: "https://www.youtube.com/watch?v=oyN5KqcPbPw",
    categoryId: "ef215c07-a2e4-495c-9e0f-5c10cc971d11",
    createdAt: new Date(),
    updatedAt: new Date(),
  }
];

export const mockedCategories: T.Gener[] = [
  {
    id: "ef215c07-a2e4-495c-9e0f-5c10cc971d11",
    name: "Futebol",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "a6e86fe9-ca7f-40a3-9b95-331e749038f1",
    name: "FPS",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "1c86eac1-f2b9-4bdf-8dc9-21bcd789da4f",
    name: "Aventura",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const mockedUsers: T.User[] = [
  {
    id: "6d6cf9d2-cf94-4b90-a53b-973d92501e02",
    name: "Darlan Souza",
    email: "darlan@blue.com",
    password: "7ccbf779f22b9579f80ba3afebcb0e7e",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const mockedFavorites: T.Favorite[] = [
  {
    id: "35abf7f1-c999-4bcf-abfb-a95cb483a2b9",
    gameTitle: "Destiny 2: A Bruxa-Rainha",
    userId: "6d6cf9d2-cf94-4b90-a53b-973d92501e02",
    favoritedAt: new Date(),
  },
  {
    id: "ef215c07-a2e4-495c-9e0f-5c10cc971d53",
    gameTitle: "Immortals Fenyx Rising",
    userId: "6d6cf9d2-cf94-4b90-a53b-973d92501e02",
    favoritedAt: new Date(),
  },
];
