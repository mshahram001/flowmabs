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
    { name: 'IMMUNOLOGY', image: 'https://t4.ftcdn.net/jpg/02/35/71/13/360_F_235711378_x8BsTR14c7Iu9myWbXVBk2DHf7dHsdgg.jpg', description: 'Study of immune system responses.' },
    { name: 'STEM CELLS', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSge8I0y5PIOPwQ-6AptkAUqbPTCVqHJVncDCyT6PxdD9qn9_xdOpBp15W8C6pSoIwETAs&usqp=CAU', description: 'Research on regenerative medicine.' },
    { name: 'ONCOLOGY', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKuld-PE7BMxlOl5-cjvNAfAtIJCTbkQIJJNu6fnJzLtMwk-q8exoTPEK3aqWsdw5huMs&usqp=CAU', description: 'Exploring cancer treatments and therapies.' },
    { name: 'NEUROSCIENCE', image: 'https://static.vecteezy.com/system/resources/previews/023/042/077/non_2x/human-cell-biology-dna-strands-molecular-structure-illustration-generate-ai-free-photo.jpg', description: 'Understanding the nervous system.' },
    { name: 'CLINICAL', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkmreKNgg2vExUi5AntmHvbHGSH48qM4XI4iy-K6zIWfshqBEhAlMedpP9hwPFieTN-Hs&usqp=CAU', description: 'Medical trials and patient care studies.' }
  ];

}
