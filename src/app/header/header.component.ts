import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  myControl = new FormControl('');
  options: string[] = ['Product Support', 'FLow Cytometry Tools', 'Spectra Analyzers', 'Phenotyping'];
  filteredOptions: Observable<string[]>;
  countryName: string = 'United States';
  content: string = 'Achieve robust multiplexing in small sample pools and reduce experimental variability with TotalSeq™ hashtag reagents.';
  isPanelVisible = false;
  panelData: any = null;
  constructor(public dialog: MatDialog) {

  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  countries = [
    { name: 'India', currency: 'INR' },
    { name: 'USA',currency: 'USD' },
    { name: 'UK',currency: 'GBP' },
  ];

  openPanel(): void {
    // Display the panel with country details
    this.isPanelVisible = true;
    this.panelData = this.countries; 
    console.log(this.panelData) // Show all countries or filter based on selection
  }

  closePanelWithDelay(): void {
    setTimeout(() => {
      this.isPanelVisible = false;
      this.panelData = null;
  });
  }

  selectCountry(country: any): void {
    this.countryName = country.name;  // Set the selected country name
    this.isPanelVisible = false;  // Close the panel after selection
  }

  menuItems = [
    { id: 1, label: 'Product', content: '' },
    {
      id: 2, label: 'Learn', content: '',
      subItems: [
        { id: 21, label: 'Areas of Research', options: ['Immunology', 'Cancer', 'Stem Cells', 'Neuroscience', 'SARS-CoV-2'] },
        { id: 22, label: 'Cell Biology' },
        { id: 23, label: 'Phenotyping', options: ['Cell Types', 'Cell Markers'] }
      ]
    },
    {
      id: 3, label: 'Support', content: '',
      subItems: [
        { id: 31, label: 'Product Support', options: ['Protocols', 'FAQs', 'CoA Lookup Tools', 'Safety Datasheets'] },
        { id: 32, label: 'Order Support', options: ['Quick Order', 'Worldwide Ordering', 'Track Order'] },
        { id: 33, label: 'FLow Cytometry Tools', options: ['Spectra Analyzers', 'Panel Builders'] },
        { id: 34, label: 'Literature, Pathways, & Supporters' },
      ]
    },
    {
      id: 4, label: 'Quality', content: '',
      subItems: [
        { id: 41, label: 'Quality Assurance & Certificates'},
        { id: 42, label: 'Product Development'},
        { id: 43, label: 'Quality Control'},
      ]
    },

    {
      id: 5, label: 'About Us', content: '',
      subItems: [
        { id: 51, label: 'Our Company' },
        { id: 52, label: 'Corporate Social Responsibility', options: ['Environmental Sustainibility', 'Our People', 'Giving', 'Governance'] },
        { id: 53, label: 'Careers' },
        { id: 54, label: 'Promotions' },
        { id: 55, label: 'News and Events' },
        { id: 56, label: 'Blogs and Videos' },
      ]
    },
    { id: 6, label: 'Contact Us', content: 'Reach out to us' },

    {
      id: 7, label: 'Custom Solutions', content: '',
      subItems: [
        { id: 71, label: 'Custom Reagents' },
        { id: 72, label: 'Custom Services' },
        { id: 73, label: 'Custom Requests Form' },
      ]
    }
  ];

  tableData = [
    { productType: 'Antibodies and Reagents', application: 'Flow Cytometry', researchArea: 'Immunology' },
    { productType: 'Apoptosis and Cell Health Reagents', application: 'Fluorophore Families', researchArea: 'Stem Cells' },
    { productType: 'Buffers and Chemical Probes', application: 'TotalSeq', researchArea: 'Oncology' },
    { productType: 'Isotype Controls', application: 'ELISAs', researchArea: 'Neuroscience' }
  ];

  openLoginDialog(): void {
    let dialogRef = this.dialog.open(LoginDialogComponent, {
      minWidth: '35%',
      height: '55vh',
    });
  }

  openCartDialog(): void {
    let dialogRef = this.dialog.open(MyCartDialogComponent, {
      minWidth: '35%',
      height: '55vh',
    });
  }

}

@Component({
  selector: 'app-login-register',
  standalone: false,
  templateUrl: './login-register-dialog.component.html',
  styleUrls: ['./header.component.css'],
})

export class LoginDialogComponent {
  loginRegisterForm: FormGroup;
  hide: boolean = true;
  constructor(private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.initializeLoginRegisterForm();
  }

  initializeLoginRegisterForm() { 
    this.loginRegisterForm = this._formBuilder.group({
      emailAddress: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  togglePasswordVisibility() {
    this.hide = !this.hide;
  }
}

@Component({
  selector: 'app-my-cart',
  standalone: false,
  templateUrl: './my-cart-dialog.component.html',
  styleUrls: ['./header.component.css'],
})

export class MyCartDialogComponent {
  productAmount: number = 450;
  totalAmount: number = 450;
  constructor(
    public dialogRef: MatDialogRef<MyCartDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }
}
