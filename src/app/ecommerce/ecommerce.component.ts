import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AddEditEcommerceComponent } from '../add-edit-ecommerce/add-edit-ecommerce.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Ecommerce } from '../shared/model/ecommerce.model';
import { EcommerceService } from '../shared/services/ecommerce.service';
import { ToastConfig, Toaster, ToastType } from 'ngx-toast-notifications';


@Component({
    selector: 'app-ecommerce',
    templateUrl: './ecommerce.component.html',
    styleUrls: ['./ecommerce.component.scss']
})
export class EcommerceComponent implements OnInit {
    // tslint:disable-next-line:no-inferrable-types
    showalter: boolean = false;
    objcard;
    nameTitle;
    nameSplit;
    ecommerces: Ecommerce[];
    ecommerce: Ecommerce;
    constructor(private ecommerceService: EcommerceService,
                private toaster: Toaster, private snackBar: MatSnackBar,
                public dialog: MatDialog, ) { }


    ngOnInit() {
        this.getEcommerces();
    }

    // =====================================
    //  /** GET Ecommerce from the server */
    // ====================================
    getEcommerces() {
        this.ecommerceService.getEcommerces()
            .subscribe(data => {
                this.ecommerces = data;
            });
    }

    // =====================================
    //  /** OPEN DIALOG TO ADD */
    // ====================================
    createEcommerce(): void {
        const dialogRef = this.dialog.open(AddEditEcommerceComponent, {
            panelClass: 'custom-dialog-container',
            data: Ecommerce,
        });
        dialogRef.afterClosed().subscribe(result => {
            this.getEcommerces();
        });
    }

    // =====================================
    // /** OPEN DIALOG TO EDIT */
    // ====================================
    editEcommerce(ecommerce) {
        const dialogRef = this.dialog.open(AddEditEcommerceComponent, {
            panelClass: 'custom-dialog-container',
            data: ecommerce,
        });
        dialogRef.afterClosed().subscribe(result => {
            this.getEcommerces();
        });
    }

    // =====================================
    // /** DELET Ecommerce from the server */
    // ====================================
    deleteEcommerce(ecommerce) {
        this.ecommerceService.deleteEcommerce(ecommerce.id)
            .subscribe(data => {
                this.getEcommerces();
                this.toaster.open({ text: 'Deleted Card 😢', duration: 5000, type: 'success' });
                this.showalter = !this.showalter;
            });
    }

    // =======================================
    // /** PRINT FIRST NAME AND MIDDLE NAME */
    // ======================================
    getShortName(name) {
        this.nameSplit = name.split(' ');
        this.nameTitle = this.nameSplit[0] + ' ' + this.nameSplit[1];
    }

    // ===========================================
    // /** OPEN AND CLOSE MSN ALERT >>DELETE <<<*/
    // ==========================================
    showAlter(objcard) {
        this.objcard = objcard;
        this.showalter = !this.showalter;
    }
}
