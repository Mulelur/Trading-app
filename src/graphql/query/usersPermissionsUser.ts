import { gql, useQuery } from '@apollo/client';

const UsersPermissionsUser = gql`
  query ($id: ID!) {
    usersPermissionsUser(id: $id) {
      data {
        attributes {
          username
          email
          provider
          confirmed
          blocked
          profile {
            data {
              id
            }
          }
          createdAt
          updatedAt
        }
      }
    }
  }
`;

const User = (id: number) => {
  const { error, data } = useQuery(UsersPermissionsUser, {
    variables: {
      id,
    },
  });

  if (error) {
    return error;
  }

  return data;
};

export default User;
