import { API, PictureInfo } from "../../../core/mock.data";

export const getList = (string = "dogs"): Promise<PictureInfo[]> =>
  Promise.resolve(API[string]);
