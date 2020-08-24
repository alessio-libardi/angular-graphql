import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators'

export interface User {
  id: string;
  name: string;
  username: string;
}

export interface Response {
  users: {
    data: User[];
  }
}

@Injectable({
  providedIn: 'root',
})
export class ReadAllUsersGQL extends Query<Response> {
  document = gql`
    query readAllUsers {
      users {
        data {
          id,
          name,
          username
        }
      }
    }
  `;

  read() {
    return this.watch().valueChanges.pipe(
      map(result => result.data.users.data)
    );
  }
}