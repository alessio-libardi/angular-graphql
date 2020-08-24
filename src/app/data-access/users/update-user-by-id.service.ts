import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

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
export class UpdateUserByIdGQL extends Mutation {
    document = gql`
        mutation updateUserById($id: ID!, $input: UpdateUserInput!) {
            updateUser(id: $id, input: $input) {
                id,
                name
            }
        }
    `;

    update(id: string, input: UserInput) {
        return this.mutate({ id, input })
    }
}