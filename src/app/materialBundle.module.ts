import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,

} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';


@NgModule({
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatTableModule,
        MatPaginatorModule,
        MatToolbarModule,
        MatListModule,
        MatGridListModule,
        LayoutModule,
        FlexLayoutModule,
        MatChipsModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        FormsModule
    ],
})

export class MaterialBundle {}
