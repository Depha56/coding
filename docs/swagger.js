import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Livestock API',
      version: '1.0.0',
      description: 'Livestock Management System',
    },
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'apiKey',
          name: 'authorization',
          in: 'header',
          description: 'JWT authorization token. To obtain a token, use the /auth/login endpoint.',
        },
      },
      schemas: {
        UserSignup: {
          type: 'object',
          properties: {
            username: {
              type: 'string',
            },
            password: {
              type: 'string',
            },
          },
          required: ['username', 'password'],
        },
        UserLogin: {
          type: 'object',
          properties: {
            username: {
              type: 'string',
            },
            password: {
              type: 'string',
            },
          },
          required: ['username', 'password'],
        },
       
        Cow: {
          type: 'object',
          properties: {
            earTag: {
              type: 'string',
              description: 'Ear tag of the cow',
            },
            weight: {
              type: 'number',
              description: 'Weight of the cow',
            },
            age: {
              type: 'number',
              description: 'Age of the cow',
            },
            category: {
              type: 'string',
              enum: ['Calf', 'Bull', 'Cow'],
              default: 'Cow',
              description: 'Category of the cow',
            },
            healthyStatus: {
              type: 'string',
              enum: ['Healthy', 'Sick', 'Old'],
              default: 'Healthy',
              description: 'Health status of the cow',
            },
            milking: {
              type: 'string',
              description: 'Milking status of the cow',
            },
            pregnant: {
              type: 'string',
              description: 'Pregnancy status of the cow',
            },
            calvingDate: {
              type: 'string',
              format: 'date',
              description: 'Date of calving',
            },
          },
          required: ['earTag', 'weight', 'healthyStatus'],
        },
        MilkRecord: {
          type: 'object',
          properties: {
            cow: {
              type: 'string',
              description: 'ID of the cow associated with the milk record',
            },
            date: {
              type: 'string',
              format: 'date',
              description: 'Date of the milk record',
            },
            quantity: {
              type: 'string',
              description: 'Quantity of milk recorded',
            },
          },
          required: ['cow', 'date', 'quantity'],
        },
        NewbornCow: {
          type: 'object',
          properties: {
            earTag: {
              type: 'string',
              description: 'Ear tag of the newborn cow',
            },
            cow: {
              type: 'string',
              description: 'ID of the cow associated with the newborn cow',
            },
            birthDate: {
              type: 'string',
              format: 'date',
              description: 'Date of birth of the newborn cow',
            },
          },
          required: ['earTag', 'cow'],
        },
        Worker: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              description: 'Name of the worker',
            },
            role: {
              type: 'string',
              description: 'Role of the worker',
            },
          },
          required: ['name', 'role'],
        },
        Sale: {
          type: 'object',
          properties: {
            productName: {
              type: 'string',
            },
            quantitySold: {
              type: 'string',
            },
            price: {
              type: 'number',
            },
            customerName: {
              type: 'string',
            },
          },
          required: ['productName', 'quantitySold', 'price', 'customerName'],
        },

      },
    },
    
  },
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
