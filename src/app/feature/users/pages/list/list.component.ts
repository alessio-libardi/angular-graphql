import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

import { ReadAllUsersGQL, User } from '../../../../data-access/users/read-all-users.service'
import { DeleteUserByIdGQL } from '../../../../data-access/users/delete-user-by-id.service'
import { CreateUserGQL } from '../../../../data-access/users/create-user.service'
import { DialogComponent } from '../../components/dialog/dialog.component';


@Component({
    selector: 'app-feature-users-list',
    templateUrl: 'list.component.html',
    styleUrls: ["list.component.scss"],
})
export class ListComponent implements OnInit, OnDestroy {
    entities$: Observable<User[]>;
    displayedColumns = ['id', 'name', 'username', 'actions'];

    unsubscribe$: Subject<void> =  new Subject();

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,

        private matDialog: MatDialog,
        
        private readAllUsersGQL: ReadAllUsersGQL,
        private createUserGQL: CreateUserGQL,
        private deleteUserByIdGQL: DeleteUserByIdGQL
    ) { }

    ngOnInit() {
        this.entities$ = this.readAllUsersGQL.read();
    }

    ngOnDestroy() {
        this.unsubscribe$.next()
        this.unsubscribe$.complete()
    }

    create() {
        const dialogRef = this.matDialog.open(DialogComponent);

        dialogRef.afterClosed().pipe(takeUntil(this.unsubscribe$)).subscribe((entity) => {
            if (entity) {
                this.createUserGQL.create(entity).subscribe((value: any) => {
                  this.edit(value.createUser)
                });
              }
        });
    }

    edit(entity: User) {
        this.router.navigate([entity.id], {
            relativeTo: this.activatedRoute,
        });
    }

    delete(entity: User) {
        this.deleteUserByIdGQL.delete(entity.id).subscribe()
    }
}