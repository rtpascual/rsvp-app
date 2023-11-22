/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGuest = /* GraphQL */ `
  mutation CreateGuest(
    $condition: ModelGuestConditionInput
    $input: CreateGuestInput!
  ) {
    createGuest(condition: $condition, input: $input) {
      createdAt
      email
      id
      name
      owner
      phone
      rsvp
      updatedAt
      __typename
    }
  }
`;
export const deleteGuest = /* GraphQL */ `
  mutation DeleteGuest(
    $condition: ModelGuestConditionInput
    $input: DeleteGuestInput!
  ) {
    deleteGuest(condition: $condition, input: $input) {
      createdAt
      email
      id
      name
      owner
      phone
      rsvp
      updatedAt
      __typename
    }
  }
`;
export const updateGuest = /* GraphQL */ `
  mutation UpdateGuest(
    $condition: ModelGuestConditionInput
    $input: UpdateGuestInput!
  ) {
    updateGuest(condition: $condition, input: $input) {
      createdAt
      email
      id
      name
      owner
      phone
      rsvp
      updatedAt
      __typename
    }
  }
`;
