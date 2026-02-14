import { ctpClientHTTPAPI, projectKey } from './BuildClient';
import {
  createApiBuilderFromCtpClient,
  type Project,
} from '@commercetools/platform-sdk';

export const httpApiRoot = createApiBuilderFromCtpClient(
  ctpClientHTTPAPI
).withProjectKey({
  projectKey,
});

// Example call to return Project information
// This code has the same effect as sending a GET request to the commercetools Composable Commerce API without any endpoints.
async function getProject(): Promise<Project> {
  const response = await httpApiRoot.get().execute();
  return response.body;
}

// Retrieve Project information and output the result to the log
//await getProject().then(console.log).catch(console.error);