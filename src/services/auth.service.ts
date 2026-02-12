import { generateAccessToken } from '../utils/jwt';

type LoginResponse = {
  accessToken: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
};

export const loginService = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const fakeUser = {
    id: 'user_1',
    name: 'Divyanshu',
    email: 'divyanshu@gmail.com',
    password: '121212',
  };

  if (!email || !password) {
    throw {
      statusCode: 400,
      code: 'INVALID_REQUEST',
      message: 'Email and password are required',
    };
  }

  if (email !== fakeUser.email) {
    throw {
      statusCode: 404,
      code: 'USER_NOT_FOUND',
      message: 'User does not exist',
    };
  }

  if (password !== fakeUser.password) {
    throw {
      statusCode: 401,
      code: 'INVALID_CREDENTIALS',
      message: 'Email or password is incorrect',
    };
  }

  const accessToken = generateAccessToken({
    userId: fakeUser.id,
    email: fakeUser.email,
  });

  return {
    accessToken,
    user: {
      id: fakeUser.id,
      name: fakeUser.name,
      email: fakeUser.email,
    },
  };
};
