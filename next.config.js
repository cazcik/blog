const { withPlausibleProxy } = require("next-plausible");

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
};

module.exports = withPlausibleProxy()(nextConfig);
