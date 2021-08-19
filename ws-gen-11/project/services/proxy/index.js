const express = require('express');
const proxy = require('express-http-proxy');

const app = express();

require('dotenv').config()

app.use('/api/v1/auth', proxy(
  `http://localhost:${process.env.AUTH_API_PORT}`,
  {
    proxyReqPathResolver: (req) => {
      return `http://localhost:${process.env.AUTH_API_PORT}/api/v1/auth${req.url}`
    }
  }
));

app.use('/blogposts', proxy(
  `http://localhost:${process.env.BLOG_API_PORT}`,
  {
    proxyReqPathResolver: (req) => {
      return `http://localhost:${process.env.BLOG_API_PORT}/blogposts${req.url}`
    }
  }
));

app.use('/download', proxy(
  `http://localhost:${process.env.DOWNLOAD_API_PORT}`,
  {
    proxyReqPathResolver: (req) => {
      return `http://localhost:${process.env.DOWNLOAD_API_PORT}/download${req.url}`
    }
  }
));

app.use('/upload', proxy(
  `http://localhost:${process.env.UPLOAD_API_PORT}`,
  {
    proxyReqPathResolver: (req) => {
      return `http://localhost:${process.env.UPLOAD_API_PORT}/upload${req.url}`
    }
  }
));

app.use('/weather', proxy(
  `http://localhost:${process.env.WEATHER_API_PORT}`,
  {
    proxyReqPathResolver: (req) => {
      return `http://localhost:${process.env.WEATHER_API_PORT}/weather${req.url}`
    }
  }
));

const PORT = process.env.PORT || process.env.PROXY_SERVICE_PORT;
app.listen(PORT, err => {
  if(err) {
      return console.log('Could not start proxy service', err);
  }
  console.log(`Proxy service successfully started on port ${PORT}`);
});

// blog.heroku.com/api/v1/auth/login ---> Reversed Proxy: site api/v1/auth
// ruti se se preprakjaat na localhost:3003/api/v1/auth/login

//                          users (3000)       \
//                        /                     \
//                       /
// browser -> proxy (X) -- auth (3001)          -   DB
//                       \
//                        \                      /
//                          storage (3002)      /
