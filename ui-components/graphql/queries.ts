/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGuest = /* GraphQL */ `
  query GetGuest($id: ID!) {
    getGuest(id: $id) {
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
export const listGuests = /* GraphQL */ `
  query ListGuests(
    $filter: ModelGuestFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listGuests(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
