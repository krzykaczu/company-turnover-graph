// export const endpoint = 'https://company-turnover-server.herokuapp.com/';
export const endpoint = `http://${
  process.env.ENDPOINT || "0.0.0.0"
}:1337/graphql`;
