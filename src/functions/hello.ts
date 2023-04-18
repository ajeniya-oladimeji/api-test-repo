import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';

export const handler = async (_event: APIGatewayProxyEvent, _context: Context): Promise<APIGatewayProxyResult> => {
  try {
    const response = {
      statusCode: 200,
      body: 'I am working as expected!!!!',
    };
    return response;
  } catch (err) {
    return {
      statusCode: 500,
      body: 'An error occured',
    };
  }
};
