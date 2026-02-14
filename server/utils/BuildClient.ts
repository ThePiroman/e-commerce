import {
  ClientBuilder,

  // Import middlewares
  type AuthMiddlewareOptions, // Required for auth
  type HttpMiddlewareOptions, // Required for sending HTTP requests
} from '@commercetools/ts-client';


export const projectKey = import.meta.env.CTP_PROJECT_KEY;
const scopes = [import.meta.env.CTP_SCOPES];

// Configure authMiddlewareOptions
const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: import.meta.env.CTP_AUTH_URL,
  projectKey,
  credentials: {
    clientId: import.meta.env.CTP_CLIENT_ID,
    clientSecret: import.meta.env.CTP_CLIENT_SECRET,
  },
  scopes,
  httpClient: fetch,
};

// Configure HTTP API httpMiddlewareOptions
const httpAPIHTTPMiddlewareOptions: HttpMiddlewareOptions = {
  host: import.meta.env.CTP_API_URL,
  httpClient: fetch,
};

// Export the ClientBuilder for the HTTP API
export const ctpClientHTTPAPI = new ClientBuilder()
  .withProjectKey(projectKey)
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpAPIHTTPMiddlewareOptions)
  .withLoggerMiddleware() // Include middleware for logging
  .build();
