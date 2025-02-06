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
    { heading: 'Spark Plus Antibodies', content: 'Some content for Spark Plus Antibodies' },
    { heading: 'TotalSeq™ Hashtags', content: 'Some content for TotalSeq Hashtags' },
    { heading: 'Cellular Senescence Kit Red', content: 'Some content for Cellular Senescence Kit Red' },
    { heading: 'True Stain Multi-Fluor Buffer', content: 'Some content for True Stain Multi-Fluor Buffer' }
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

  hoveredItem: any = null;

  categories = [
    { name: 'IMMUNOLOGY', image: 'https://t4.ftcdn.net/jpg/02/35/71/13/360_F_235711378_x8BsTR14c7Iu9myWbXVBk2DHf7dHsdgg.jpg', description: 'Study of immune system responses.' },
    { name: 'STEM CELLS', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSge8I0y5PIOPwQ-6AptkAUqbPTCVqHJVncDCyT6PxdD9qn9_xdOpBp15W8C6pSoIwETAs&usqp=CAU', description: 'Research on regenerative medicine.' },
    { name: 'ONCOLOGY', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKuld-PE7BMxlOl5-cjvNAfAtIJCTbkQIJJNu6fnJzLtMwk-q8exoTPEK3aqWsdw5huMs&usqp=CAU', description: 'Exploring cancer treatments and therapies.' },
    { name: 'NEUROSCIENCE', image: 'https://static.vecteezy.com/system/resources/previews/023/042/077/non_2x/human-cell-biology-dna-strands-molecular-structure-illustration-generate-ai-free-photo.jpg', description: 'Understanding the nervous system.' },
    { name: 'CLINICAL', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkmreKNgg2vExUi5AntmHvbHGSH48qM4XI4iy-K6zIWfshqBEhAlMedpP9hwPFieTN-Hs&usqp=CAU', description: 'Medical trials and patient care studies.' }
  ];

}
