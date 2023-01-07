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
  const [logIn, { data, error, loading }] = useMutation(UsersPermissionsLoginPayload);

  logIn({
    variables: {
      input: {
        password,
        identifier,
      },
    },
  });

  return {data, loading, error};
};

export default UsersPermissionsLoginInput;
