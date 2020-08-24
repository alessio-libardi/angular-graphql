import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil, switchMap, map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

import { ReadUserByIdGQL, User } from 'src/app/data-access/users/read-user-by-id.service';
import { UpdateUserByIdGQL } from 'src/app/data-access/users/update-user-by-id.service';

@Component({
    selector: 'app-feature-users-detail',
    templateUrl: 'detail.component.html',
    styleUrls: ["detail.component.scss"],
})

export class DetailComponent {
    entity$: Observable<User>
    submit$: Subject<void> = new Subject();

    unsubscribe$: Subject<void> = new Subject();

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private readUserById: ReadUserByIdGQL,
        private updateUserById: UpdateUserByIdGQL,
    ) { }

    back() {
        this.router.navigate(['./..'], {
            relativeTo: this.activatedRoute,
        });
    }

    save(entity?: User) {
        if (entity) {
            this.updateUserById.update(entity.id, entity).subscribe();
        } else {
            this.submit$.next();
        }
    }

    ngOnInit() {
        this.entity$ = this.activatedRoute.paramMap.pipe(
            takeUntil(this.unsubscribe$),
            map((paramMap) => paramMap.get('id')),
            switchMap((id) => this.readUserById.read(id)),
        )
    }

    ngOnDestroy() {
        this.submit$.complete()

        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}