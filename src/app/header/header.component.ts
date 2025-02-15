import { Component, Inject, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { Observable, map, startWith } from 'rxjs';

export interface MenuItem {
  label: string;
  submenu?: MenuItem[];
  link?: string;
}

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
  @ViewChild(MatMenuTrigger) menuTrigger!: MatMenuTrigger;
  countryName: string = 'United States';
  content: string = 'Achieve robust multiplexing in small sample pools and reduce experimental variability with TotalSeq™ hashtag reagents.';
  isPanelVisible = false;
  panelData: any = null;
  @ViewChildren(MatMenu) menus!: QueryList<MatMenu>;
  menuRefs: { [key: string]: MatMenu } = {};

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
  
  menuData: MenuItem[] = [
    {
      label: 'Products',
      submenu: [
        {
          label: 'Product Type',
          submenu: [
            { label: 'Reagents', link: '/products/reagents' },
            { label: 'Kits', link: '/products/kits' },
            { label: 'Assays', link: '/products/assays' }
          ]
        },
        {
          label: 'Application',
          submenu: [
            { label: 'Flow Cytometry', link: '/products/flow-cytometry' },
            { label: 'Western Blot', link: '/products/western-blot' },
            { label: 'PCR', link: '/products/pcr' }
          ]
        },
        {
          label: 'Research Area',
          submenu: [
            { label: 'Cancer Research', link: '/products/cancer-research' },
            { label: 'Immunology', link: '/products/immunology' },
            { label: 'Neuroscience', link: '/products/neuroscience' }
          ]
        }
      ]
    },
    {
      label: 'Learn',
      submenu: [
        { label: 'Areas of Research', submenu: [
          { label: 'Immunology', link: '/learn/immunology' },
          { label: 'Cancer', link: '/learn/cancer' },
          { label: 'Stem Cells', link: '/learn/stem-cells' },
          { label: 'Neuroscience', link: '/learn/neuroscience' },
          { label: 'SARS-CoV-2', link: '/learn/sars-cov-2' }
        ]},
        { label: 'Cell Biology', link: '/learn/cell-biology' },
        { label: 'Phenotyping', submenu: [
          { label: 'Cell Types', link: '/learn/phenotyping/cell-types' },
          { label: 'Cell Markers', link: '/learn/phenotyping/cell-markers' }
        ]}
      ]
    },
    {
      label: 'Support',
      submenu: [
        { label: 'Product Support', submenu: [
          { label: 'Protocols', link: '/support/protocols' },
          { label: 'FAQs', link: '/support/faqs' },
          { label: 'CoA Lookup Tools', link: '/support/coa-lookup' },
          { label: 'Safety Datasheets', link: '/support/safety-datasheets' }
        ]},
        { label: 'Order Support', submenu: [
          { label: 'Quick Order', link: '/support/quick-order' },
          { label: 'Worldwide Ordering', link: '/support/worldwide-ordering' },
          { label: 'Track Order', link: '/support/track-order' }
        ]},
        { label: 'Flow Cytometry Tools', submenu: [
          { label: 'Spectra Analyzers', link: '/support/flow-cytometry/spectra-analyzers' },
          { label: 'Panel Builders', link: '/support/flow-cytometry/panel-builders' }
        ]},
        { label: 'Literature, Pathways, & Supporters', link: '/support/literature' }
      ]
    },
    {
      label: 'Quality',
      submenu: [
        { label: 'Quality Assurance & Certificates', link: '/quality/assurance' },
        { label: 'Product Development', link: '/quality/development' },
        { label: 'Quality Control', link: '/quality/control' }
      ]
    },
    {
      label: 'About Us',
      submenu: [
        { label: 'Our Company', link: '/about/company' },
        { label: 'Corporate Social Responsibility', submenu: [
          { label: 'Environmental Sustainability', link: '/about/csr/environment' },
          { label: 'Our People', link: '/about/csr/people' },
          { label: 'Giving', link: '/about/csr/giving' },
          { label: 'Governance', link: '/about/csr/governance' }
        ]},
        { label: 'Careers', link: '/about/careers' },
        { label: 'Promotions', link: '/about/promotions' },
        { label: 'News and Events', link: '/about/news' },
        { label: 'Blogs and Videos', link: '/about/blogs-videos' }
      ]
    },
    {
      label: 'Custom Solutions',
      submenu: [
        { label: 'Custom Reagents', link: '/custom/reagents' },
        { label: 'Custom Services', link: '/custom/services' },
        { label: 'Custom Requests Form', link: '/custom/requests' }
      ]
    },
    { label: 'Contact Us', link: '/contact' }
  ];
  

  ngAfterViewInit() {
    this.menus.forEach(menu => {
      this.menuRefs[menu['_elementRef'].nativeElement.getAttribute('id')] = menu;
    });
  }

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
