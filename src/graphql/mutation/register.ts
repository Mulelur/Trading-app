import { gql, useMutation } from '@apollo/client';

const UsersPermissionsLoginPayload = gql`
  mutation ($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
      user {
        id
        email
        confirmed
        blocked
        username
      }
    }
  }
`;

const UsersPermissionsLoginInput = (password?: string, identifier?: string) => {
  const [logIn, { data, error }] = useMutation(UsersPermissionsLoginPayload);

  logIn({
    variables: {
      input: {
        password,
        identifier,
      },
    },
  });

  if (error) {
    return error;
  }
  return data;
};

export default UsersPermissionsLoginInput;
