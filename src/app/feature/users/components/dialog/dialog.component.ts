import { Component, OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';

import { User } from 'src/app/data-access/users/read-user-by-id.service';

@Component({
    selector: 'app-feature-users-dialog',
    templateUrl: 'dialog.component.html',
    styleUrls: ["dialog.component.scss"],
})

export class DialogComponent implements OnDestroy {
    submit$: Subject<void> = new Subject();

    constructor(private matDialogRef: MatDialogRef<DialogComponent>) { }
  
    cancel() {
      this.matDialogRef.close();
    }
  
    continue(entity?: User) {
      if (entity) {
        this.matDialogRef.close(entity);
      } else {
        this.submit$.next();
      }
    }
  
    ngOnDestroy() {
      this.submit$.complete();
    }
 }