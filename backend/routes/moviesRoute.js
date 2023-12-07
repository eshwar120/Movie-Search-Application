const express = require("express");
const fetch = require("node-fetch");

//creating a route
const moviesRoute = express.Router();

//search by popular and by name
moviesRoute.get("", (req, res) => {
  const movieName = req.query.movieName;
  const page = req.query.page;

  console.log(`Hit "" end point at ${new Date()}`);

  if (page) {
    try {
      let url = `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=${page}`;
      if (movieName === "") {
        url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`;
      }

      fetch(`${url}&api_key=${process.env.API_KEY}`, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.API_TOKEN}`,
        },
      })
        .then((response) => {
          // console.log(response)
          if (response.status === 200) return response.json();
          throw new Error(response);
        })
        .then((data) => {
          res.status(200).json({
            message: "movies fetched successfully",
            data: data,
          });
        })
        .catch((err) => {
          res.status(400).json({
            message: err,
          });
        });
    } catch (err) {
      res.status(500).json({
        message: err,
      });
    }
  }
});

//search by movie id
moviesRoute.get("/search", (req, res) => {
  console.log(`Hit "/search" end point at ${new Date()}`);
  const id = req.query.id;
  if (id) {
    try {
      fetch(
        `https://api.themoviedb.org/3/movie/${id}?&append_to_response=videos&api_key=${process.env.API_KEY}`,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.API_TOKEN}`,
          },
        }
      )
        .then((response) => {
          // console.log(response)
          if (response.status === 200) return response.json();
          throw new Error(response);
        })
        .then((data) => {
          fetch(
            `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US&api_key=${process.env.API_KEY}`,
            {
              headers: {
                accept: "application/json",
                Authorization: `Bearer ${process.env.API_TOKEN}`,
              },
            }
          )
            .then((response) => {
              if (response.status === 200) return response.json();
              throw new Error(response);
            })
            .then((result) => {
              console.log(result);
              res.status(200).json({
                message: "movies fetched successfully",
                data: data,
                cast: result,
              });
            })
            .catch((err) => {
              throw new Error(err);
            });
        })
        .catch((err) => {
          res.status(400).json({
            message: err,
          });
        });
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  } else {
    res.status(400).json({
      message: "Not found",
    });
  }
});

moviesRoute.get("/actor", (req, res) => {
  console.log(`Hit "/actor" end point at ${new Date()}`);
  const id = req.query.id;
  if (id) {
    try {
      fetch(
        `https://api.themoviedb.org/3/person/${id}?language=en-US&api_key=${process.env.API_KEY}`,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.API_TOKEN}`,
          },
        }
      )
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error(response);
        })
        .then((result) => {
          fetch(
            `https://api.themoviedb.org/3/person/${id}/combined_credits?language=en-US&api_key=${process.env.API_KEY}`,
            {
              headers: {
                accept: "application/json",
                Authorization: `Bearer ${process.env.API_TOKEN}`,
              },
            }
          )
            .then((response) => {
              if (response.status === 200) return response.json();
              throw new Error(response);
            })
            .then((data) => {
              res.status(200).json({
                message: "actor details fetched successfully",
                data: {
                  ...result,
                  ...data,
                },
              });
            });
        })
        .catch((err) => {
          throw new Error(err);
        });
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  } else {
    res.status(400).json({
      message: "Not found",
    });
  }
});

module.exports = moviesRoute;
