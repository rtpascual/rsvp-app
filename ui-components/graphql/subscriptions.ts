/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGuest = /* GraphQL */ `
  subscription OnCreateGuest(
    $filter: ModelSubscriptionGuestFilterInput
    $owner: String
  ) {
    onCreateGuest(filter: $filter, owner: $owner) {
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
export const onDeleteGuest = /* GraphQL */ `
  subscription OnDeleteGuest(
    $filter: ModelSubscriptionGuestFilterInput
    $owner: String
  ) {
    onDeleteGuest(filter: $filter, owner: $owner) {
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
export const onUpdateGuest = /* GraphQL */ `
  subscription OnUpdateGuest(
    $filter: ModelSubscriptionGuestFilterInput
    $owner: String
  ) {
    onUpdateGuest(filter: $filter, owner: $owner) {
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
