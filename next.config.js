const { withPlausibleProxy } = require("next-plausible");

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:slug*",
        headers: [
          {
            key: "strict-transport-security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "x-content-type-options",
            value: "nosniff",
          },
          {
            key: "referrer-policy",
            value: "no-referrer",
          },
          {
            key: "cross-origin-opener-policy",
            value: "same-origin",
          },
          {
            key: "cross-origin-embedder-policy",
            value: "require-corp",
          },
          {
            key: "x-frame-options",
            value: "DENY",
          },
          {
            key: "x-content-type-options",
            value: "nosniff",
          },
          {
            key: "x-xss-protection",
            value: "0",
          },
          {
            key: "permissions-policy",
            value:
              "accelerometer=(), ambient-light-sensor=(), autoplay=(), battery=(), bluetooth=(), camera=(), clipboard-read=(), clipboard-write=(), display-capture=(), document-domain=(), encrypted-media=(), fullscreen=(), gamepad=(), geolocation=(), gyroscope=(), hid=(), idle-detection=(), interest-cohort=(), keyboard-map=(), local-fonts=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), screen-wake-lock=(), serial=(), speaker-selection=(), sync-xhr=(), usb=(), xr-spatial-tracking=()",
          },
          {
            key: "cross-origin-resource-policy",
            value: "same-origin",
          },
          {
            key: "content-security-policy",
            value:
              "default-src 'none'; connect-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data:; font-src 'self'; frame-ancestors 'none'; block-all-mixed-content; manifest-src 'self'; upgrade-insecure-requests;",
          },
        ],
      },
    ];
  },
};

module.exports = withPlausibleProxy()(nextConfig);
