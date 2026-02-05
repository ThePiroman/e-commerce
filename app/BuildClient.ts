import {
  ClientBuilder,

  // Import middlewares
  type AuthMiddlewareOptions, // Required for auth
  type HttpMiddlewareOptions, // Required for sending HTTP requests
} from '@commercetools/ts-client';


export const projectKey = '{projectKey}';
const scopes = ['{scope}'];

// Configure authMiddlewareOptions
const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: 'https://auth.{region}.commercetools.com',
  projectKey,
  credentials: {
    clientId: '{clientID}',
    clientSecret: '{clientSecret}',
  },
  scopes,
  httpClient: fetch,
};

// Configure HTTP API httpMiddlewareOptions
const httpAPIHTTPMiddlewareOptions: HttpMiddlewareOptions = {
  host: 'https://api.{region}.commercetools.com',
  httpClient: fetch,
};

// Export the ClientBuilder for the HTTP API
export const ctpClientHTTPAPI = new ClientBuilder()
  .withProjectKey(projectKey)
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpAPIHTTPMiddlewareOptions)
  .withLoggerMiddleware() // Include middleware for logging
  .build();
