import {
  ClientBuilder,

  // Import middlewares
  type AuthMiddlewareOptions, // Required for auth
  type HttpMiddlewareOptions, // Required for sending HTTP requests
} from '@commercetools/ts-client';

const config = useRuntimeConfig()


export const projectKey = config.projectKey;
const scopes = [config.scopes];

// Configure authMiddlewareOptions
const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: config.authURL,
  projectKey,
  credentials: {
    clientId: config.clientID,
    clientSecret: config.clientSecret,
  },
  scopes,
  httpClient: fetch,
};

// Configure HTTP API httpMiddlewareOptions
const httpAPIHTTPMiddlewareOptions: HttpMiddlewareOptions = {
  host: config.apiURL,
  httpClient: fetch,
};

// Export the ClientBuilder for the HTTP API
export const ctpClientHTTPAPI = new ClientBuilder()
  .withProjectKey(projectKey)
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpAPIHTTPMiddlewareOptions)
  .withLoggerMiddleware() // Include middleware for logging
  .build();
