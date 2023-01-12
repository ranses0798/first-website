import { instance } from "./base.api";

const endpoint = (name: string) => `breed/${name}/images`;

export const byBreed = {
  getByBreed: function (breed: string) {
    return instance.get(endpoint(breed), {});
  },
};
