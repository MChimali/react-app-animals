export interface PictureInfo {
  id: string;
  picUrl: string;
  title: string;
}

export const cats: PictureInfo[] = [
  {
    id: "01",
    picUrl: "https://cdn2.thecatapi.com/images/W653b2S_F.jpg",
    title: "gato1",
  },
  {
    id: "02",
    picUrl: "https://cdn2.thecatapi.com/images/daq.jpg",
    title: "gato2",
  },
  {
    id: "03",
    picUrl: "https://cdn2.thecatapi.com/images/KBroiVNCM.jpg",
    title: "gato3",
  },
  {
    id: "04",
    picUrl: "https://cdn2.thecatapi.com/images/bjf.jpg",
    title: "gato4",
  },
];

export const dogs: PictureInfo[] = [
  {
    id: "01",
    picUrl: "https://images.dog.ceo/breeds/dalmatian/cooper1.jpg",
    title: "perro1",
  },
  {
    id: "02",
    picUrl: "https://images.dog.ceo/breeds/terrier-norfolk/n02094114_2923.jpg",
    title: "perro2",
  },
  {
    id: "03",
    picUrl: "https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_2970.jpg",
    title: "perro3",
  },
  {
    id: "04",
    picUrl: "https://images.dog.ceo/breeds/chow/n02112137_15792.jpg",
    title: "perro4",
  },
];

export const API  = {cats, dogs};
