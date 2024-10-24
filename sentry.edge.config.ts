import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://5b8e0f877be746992ebbe1089fd83e77@o4508177795710976.ingest.us.sentry.io/4508177807769600",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for tracing.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // ...

  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
