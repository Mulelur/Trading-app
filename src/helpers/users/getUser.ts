import User from 'graphql/query/usersPermissionsUser';

const getUser = (id: number) => {
  const usersPermissionsUser = User(id);

  return usersPermissionsUser;
};

export default getUser;
