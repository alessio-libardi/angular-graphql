import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    SimpleChanges,
    ViewChild,
  } from '@angular/core';
  import { FormControl, FormGroup, Validators } from '@angular/forms';
  import { Observable, Subject } from 'rxjs';
  import {
    takeUntil,
  } from 'rxjs/operators';

import { User } from 'src/app/data-access/users/read-user-by-id.service';

  
  @Component({
    selector: 'lbl-app-feature-users-form',
    templateUrl: 'form.component.html',
    styleUrls: ['form.component.scss'],
  })
  export class FormComponent implements OnInit, OnChanges, OnDestroy {
    @Input()
    entity: User;
  
    @Input()
    submit$: Observable<void>;
  
    @Output()
    submitted: EventEmitter<User> = new EventEmitter();
  
    @ViewChild('button')
    buttonElementRef: ElementRef;
  
    form: FormGroup = new FormGroup({ });
  
    unsubscribe$: Subject<void> = new Subject();
  
    constructor() { }

    buildForm(): FormGroup {
      const form = new FormGroup({
        name: new FormControl(null, Validators.required),
        username: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.email, Validators.required]),
        phone: new FormControl(null, Validators.required),
        website: new FormControl(null, Validators.required),
      });
  
      return form;
    }
  
    updateForm(entity: User): FormGroup {
      const form = this.buildForm();
      form.patchValue(entity);
  
      return form;
    }
  
    submit(form: FormGroup) {
      if (form.valid) {
        const entity = form.value
  
        this.submitted.emit(entity);
      }
    }
  
    ngOnInit() {
      this.form = this.buildForm();
    }
  
    ngOnChanges(changes: SimpleChanges) {
      if (changes) {
        if (changes.entity && this.entity) {
          this.form = this.updateForm(this.entity);
        }
  
        // Initialize submit from parent
        if (changes.submit$ && this.submit$) {
          this.submit$.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
            const htmlButtonElement: HTMLButtonElement = this.buttonElementRef
              .nativeElement;
  
            htmlButtonElement.click();
          });
        }
      }
    }
  
    ngOnDestroy() {
      this.unsubscribe$.next();
      this.unsubscribe$.complete();
    }
  }
  