import fetch from "node-fetch";

export default class Db {
  static endpoint;

  static init(endpoint) {
    this.endpoint = endpoint;
  }

  static async getData() {
    const fetchResult = await fetch(this.endpoint);
    const dbData = await fetchResult.json();
    return dbData;
  }
}
