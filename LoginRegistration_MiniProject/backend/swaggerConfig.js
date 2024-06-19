// swaggerConfig.js
const path = require("path");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Customer API",
      version: "1.0.0",
      description: "API for user registration, login, and profile management",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: [path.join(__dirname, "./routes/*.js")], // Path to your API routes
};

module.exports = options;
