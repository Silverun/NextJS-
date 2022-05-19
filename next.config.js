const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

// next.config.js
module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      // Prefer loading of ES Modules over CommonJS
      experimental: { esmExternals: true },
      env: {
        mongodb_username: "newfrog2",
        mongodb_password: "hellhunter",
        mongodb_cluster_name: "cluster0",
        mongodb_database: "blog-site-dev",
      },
    };
  }

  return {
    // Prefer loading of ES Modules over CommonJS
    experimental: { esmExternals: true },
    env: {
      mongodb_username: "newfrog2",
      mongodb_password: "hellhunter",
      mongodb_cluster_name: "cluster0",
      mongodb_database: "blog-site",
    },
  };
};
