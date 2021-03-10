import fetch from "node-fetch";

export default class Db {
  static endpoint;

  static init(endpoint) {
    this.endpoint = endpoint;
  }

  static getData() {
    return fetch(this.endpoint).then((res) => res.json());
  }
}
