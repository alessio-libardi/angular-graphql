import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class DeleteUserByIdGQL extends Mutation {
  document = gql`
    mutation deleteUserById($id: ID!) {
      deleteUser(id: $id)
    }
  `;

  delete(id: string) {
    return this.mutate({ id })
  }
}