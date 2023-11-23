/** @type {import('next').NextConfig} */

require("dotenv").config();

const nextConfig = {
  images: {
    domains: ["64739e80d784bccb4a3cc766.mockapi.io", "loremflickr.com"], // resolve to use
  },
  env: {
    API_URL: process.env.API_URL,
  },
};

module.exports = nextConfig;
