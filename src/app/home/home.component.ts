import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  myControl = new FormControl('');
  options: string[] = ['Product Support', 'FLow Cytometry Tools', 'Spectra Analyzers', 'Phenotyping'];
  filteredOptions: Observable<string[]>;
  countryName: string = 'United States';
  currentItemId: string | null = null;
  cloneResult: string = '1-11-23';
  headingName = [
    { heading: 'Spark Plus Antibodies', content: 'Some content for Spark Plus Antibodies', link: '/home/spark-dyes' },
    { heading: 'TotalSeq™ Hashtags', content: 'Some content for TotalSeq Hashtags', link: '/home/totalseq' },
    { heading: 'Cellular Senescence Kit Red', content: 'Some content for Cellular Senescence Kit Red', link: '/products/cellular-senescence-kit-red'  },
    { heading: 'True Stain Multi-Fluor Buffer', content: 'Some content for True Stain Multi-Fluor Buffer', link:'/products/true-stain-multi-flour-buffer' }
  ];
  content: string = 'Achieve robust multiplexing in small sample pools and reduce experimental variability with TotalSeq™ hashtag reagents.';

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
    { name: 'India', flag: '🇮🇳', currency: 'INR' },
    { name: 'USA', flag: '🇺🇸', currency: 'USD' },
    { name: 'UK', flag: '🇬🇧', currency: 'GBP' },
  ];

  // Panel visibility control
  isPanelVisible = false;
  panelData: any = null;

  openPanel(): void {
    // Display the panel with country details
    this.isPanelVisible = true;
    this.panelData = this.countries;  // Show all countries or filter based on selection
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

  hoveredItem: any = null;

  categories = [
    { name: 'Robust Quality Control', image: '/assets/images/public.avif', description: 'Each antibody undergoes meticulous testing to ensure high specificity and reliability, allowing you to trust your experimental outcomes.' },
    { name: 'Intuitive Antibody Finder', image: '/assets/images/public.avif', description: 'REffortlessly navigate our extensive catalog to find the perfect monoclonal antibodies that meet your specific research requirements.' },
    { name: 'Comprehensive Support', image: '/assets/images/public.avif', description: 'Our dedicated support team is here to guide you through product selection and application, ensuring you maximize your research potential.' },
    { name: 'Tailored Solutions', image: '/assets/images/public.avif', description: 'Choose from a variety of isotype controls tailored to enhance the accuracy of your experiments, ensuring optimal performance in your assays.' },
    { name: 'Building a Research Community', image: '/assets/images/public.avif', description: 'Join our network of researchers and stay informed about the latest developments and best practices in monoclonal antibody research.' },
    { name: 'Sustainable Practices', image: '/assets/images/public.avif', description: 'We prioritize eco-friendly methods in our operations, aligning with the needs of modern scientific research while reducing our environmental footprint.' }
  ];

}
