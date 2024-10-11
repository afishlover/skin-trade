export * from './any-function';

export type UserData = {
  isLoggedIn: boolean,
  accessToken: string,
  userId: string,
  userName: string,
};

export type StoreState = {
  userData: UserData
}