export default {
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.infrastructureLogging = {
      level: "error",
    };
    return config;
  },
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
};
