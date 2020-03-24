export interface ILogin{
  email?: string;
  password?: string;
}

export interface ILoginError extends ILogin{
}

export interface IUser{
  sessionId: string;
  userEmail: string;
  userId: string;
}

export interface IAuthenticationError{
  message: string;
}

export interface IAuthentication{
  authenticationError?: IAuthenticationError;
  login: ILogin;
}