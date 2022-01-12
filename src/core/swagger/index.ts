import path from 'path';

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'EXAMPLE API',
      version: '1.0.0',
      description: 'API Documentation'
    }
  },
  servers: [
    {
      url: `http://localhost:${process.env.PORT}`,
      description: 'Local'
    }
  ],
  url: '/api/v1/swagger.json',
  explorer: true,
  apis: ['../../api/v1/*.ts', '../../loaders/*.ts']
};

const swaggerOptions2 = {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'EXAMPLE API',
    description: 'Example API Documentation',
    license: {
      name: 'UNLICENSED'
    }
  },
  security: {
    BasicAuth: {
      type: 'http',
      scheme: 'basic'
    }
  },
  baseDir: path.join(__dirname, '../../api/v1'),
  // Glob pattern to find your jsdoc files (multiple patterns can be added in an array)
  filesPattern: './**/*.ts',
  // URL where SwaggerUI will be rendered
  swaggerUIPath: '/docs',
  // Expose OpenAPI UI
  exposeSwaggerUI: true,
  // Expose Open API JSON Docs documentation in `apiDocsPath` path.
  exposeApiDocs: true,
  // Open API JSON Docs endpoint.
  apiDocsPath: '/v1/docs',
  // Set non-required fields as nullable by default
  notRequiredAsNullable: false,
  // You can customize your UI options.
  // you can extend swagger-ui-express config. You can checkout an example of this
  // in the `example/configuration/swaggerOptions.js`
  swaggerUiOptions: {}
};

export { swaggerOptions, swaggerOptions2 };
