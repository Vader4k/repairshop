/** @type {import('next').NextConfig} */

import { withSentryConfig } from "@sentry/nextjs";

const nextConfig = {
  experimental: {
    instrumentationHook: true,
  }
};

// Make sure adding Sentry options is the last code to run before exporting
export default withSentryConfig(nextConfig, {
  org: "overgeared-o9",
  project: "repairshop",

  // An auth token is required for uploading source maps.
  authToken: process.env.SENTRY_AUTH_TOKEN,

  silent: false, // Can be used to suppress logs
  hideSourceMaps: true, //hides source maps from generated client bundle
  disableLogger: true, //Automatically tree shakes sentry logger statements and reduce bundle size overall
});