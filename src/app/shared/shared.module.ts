import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; 
import {
  MatToolbarModule,
  MatCardModule,
  MatInputModule,
  MatDatepickerModule,
  MatRadioModule,
  MatSelectModule,      
  MatOptionModule,
  MatNativeDateModule,
  MAT_DATE_LOCALE,
  MatListModule,
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule,
  MatProgressSpinnerModule,
 
} from '@angular/material';

@NgModule({
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,      
    MatOptionModule,
    MatListModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
 ],
})
export class SharedModule {}
