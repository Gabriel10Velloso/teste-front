import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Ecommerce } from '../shared/model/ecommerce.model';
import { EcommerceService } from '../shared/services/ecommerce.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
    selector: 'app-add-edit-ecommerce',
    templateUrl: './add-edit-ecommerce.component.html',
    styleUrls: ['./add-edit-ecommerce.component.scss']
})
export class AddEditEcommerceComponent implements OnInit {
    ecommerces: Ecommerce[];
    ecommerceForm: FormGroup;

    constructor(private ecommerceService: EcommerceService,
                private fb: FormBuilder,
                public dialogRef: MatDialogRef<AddEditEcommerceComponent>,
                @Inject(MAT_DIALOG_DATA) public data: Ecommerce,
                @Inject(MAT_DIALOG_DATA) public ecommerce: Ecommerce) { }

    ngOnInit() {
        this.buildForm();
        this.data = new Ecommerce();
    }

    // =====================================
    //  /** CLOSE DIALOG TO ADD */
    // ====================================
    onNoClick(): void {
        this.dialogRef.close();
    }

    // =====================
    //  /** FORM TO ADD */
    // =====================
    buildForm(): void {
        this.ecommerceForm = this.fb.group({
            id: [this.data.id],
            title: new FormControl(null, Validators.required),
            subtitle: new FormControl(null, [Validators.required]),
            img: new FormControl(null, Validators.required),
            author: new FormControl(null, Validators.required),
        });
    }

    // ========================================
    //  /** createEcommerce + editEcommerce */
    // =======================================
    onSubmit() {
        if (isNaN(this.data.id) || this.ecommerceForm.value) {
            this.ecommerceService.createEcommerce(this.ecommerceForm.value)
                .subscribe(data => {
                    this.dialogRef.close();
                    this.ecommerceForm.reset();
                });
        } else {
            this.ecommerceService.updateEcommerce(this.ecommerceForm.value)
                .subscribe(data => {
                    this.dialogRef.close();
                });
        }
    }
}
