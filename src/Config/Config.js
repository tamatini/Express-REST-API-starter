/**
* The configuration file use default value if you dont have
* environnement configuration.
*/

const config = {
  /** Morgan configurations & options: dev, short, tiny, combined, common
  * you save your logs inside a file using the morgan option "stream"
  * and pass the log file address. */
  morgan: {
    options: {
      stream: process.env.MORGAN_STREAM_PATH || null
    },
    type: process.env.MORGAN_LOG_TYPE || "common"
  },

  // Express configurations and options
  express: {
    config: {
      port: process.env.EXPRESS_PORT || 5000,
      host: process.env.EXPRESS_HOST || "127.0.0.1"
    },
    options: {
      urlencoded: {
        extended :process.env.EXPRESS_URL_ENCODED || "false"
      }
    }
  },
  
  // Cors configurations
  cors: {
    options: {
      origin: process.env.CORS_ORIGIN || "*",
      methods: process.env.CORS_METHODS || "GET, HEAD, PUT, PATCH, POST, DELETE",
      preflightContinue: process.env.CORS_PREFLIGHT || false,
      optionsSucess: process.env.CORS_OPTIONS_SUCESS || 204
    }
  },

  // MongoDB configuration
  mongodb: {
    config: {
      uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/',
    },
    options: {
      dbName: process.env.MONGO_DB_NAME || 'default_express_db',
      user: process.env.MONGODB_USERNAME || null,
      pass: process.env.MONGODB_PASSWORD || null
    }
  }
};

module.exports = config;