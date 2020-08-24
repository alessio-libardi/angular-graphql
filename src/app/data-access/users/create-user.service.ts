import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';

export interface UserInput {
    name: string;
    username: string;
    email: string;
    phone: string,
    website: string,
}

@Injectable({
    providedIn: 'root',
})
export class CreateUserGQL extends Mutation {
    document = gql`
        mutation createUser($input: CreateUserInput!) {
            createUser(input: $input) {
                id,
                name
            }
        }
    `;

    create(input: UserInput) {
        return this.mutate({ input }).pipe(
            map(res => res.data)
        )
    }
}