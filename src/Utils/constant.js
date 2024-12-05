const url =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export const API_options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZWQwOGZhZTMzYjJhZjhmN2ExMjk1ZmZjMzJmNjdhYyIsIm5iZiI6MTczMjc3Mjc1MS43MDg0MTM2LCJzdWIiOiI2NzQ4MDIzZTJhYTViN2JkMTRlNTM1NDUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.XzQ03y83CNC4qNEBoYev57dKSfr70I_Cf6XPe_-lW68",
  },
};

// fetch(url, options)
//   .then((res) => res.json())
//   .then((json) => console.log(json))
//   .catch((err) => console.error(err));
