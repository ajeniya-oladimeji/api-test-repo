/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/default */
import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import { handler } from '../src/functions/hello';

test('get hello', async () => {
  const event = {} as APIGatewayProxyEvent;
  const context = {} as Context;

  const result = await handler(event, context);

  expect(result.statusCode).toBe(200);
  expect(result.body).toBe('I am working as expected!!!!');
});
