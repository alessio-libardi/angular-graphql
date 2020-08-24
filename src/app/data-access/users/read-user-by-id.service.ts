import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators'

export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string,
  website: string,
}

export interface Response {
  user: User
}

@Injectable({
  providedIn: 'root',
})
export class ReadUserByIdGQL extends Query<Response> {
  document = gql`
    query readUserById($id: ID!) {
      user(id: $id) {
        id,
        name,
        username,
        email,
        phone,
        website,
      }
    }
  `;

  read(id: string) {
    return this.watch({ id }).valueChanges.pipe(
      map(result => result.data.user)
    );
  }
}