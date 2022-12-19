import { instance } from "./base.api";

const endpoint = "breeds/list/all";

export const dogList = {
  getAll: function () {
    return instance.get(endpoint, {});
  },
};
