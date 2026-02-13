import swaggerJSDoc from 'swagger-jsdoc';

export const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'MyFirstRNApp API',
      version: '1.0.0',
      description: 'Authentication API documentation',
    },

    tags: [
      {
        name: 'Authentication',
        // description: 'Auth related APIs',
      },
    ],

    paths: {
      '/auth/login': {
        post: {
          tags: ['Authentication'], // 👈 Add this
          // summary: 'User login',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    email: { type: 'string' },
                    password: { type: 'string' },
                  },
                },
              },
            },
          },
          responses: {
            200: {
              description: 'Login successful',
            },
            401: {
              description: 'Invalid credentials',
            },
          },
        },
      },
    },
  },
  apis: [],
});
