import { Component } from '@angular/core';

@Component({
  selector: 'app-totalseq',
  standalone: false,
  
  templateUrl: './totalseq.component.html',
  styleUrl: './totalseq.component.css'
})
export class TotalseqComponent {
  cards = [
    {
      title: 'Single-Cell RNA and Protein Detection',
      subtitle: 'Compatible with TotalSeq-A, B, and C reagents.',
      description: 'Simultaneously detect surface and intracellular proteins along with RNA using our TotalSeq antibodies, panels, and hashtags which integrate seamlessly into existing single-cell workflows.',
      linkText: 'Explore applications >',
      link: '#',
      image: '/assets/images/single-cell.jpg'
    },
    {
      title: 'High-Parameter Single-Cell Protein Detection',
      subtitle: 'Compatible with TotalSeq Phenocyte Kit',
      description: 'Unlock comprehensive protein profiling across hundreds of targets simultaneously with the TotalSeq™ PhenoCyte kit, featuring ultra-high analyte and sample multiplexing capabilities, enabling faster, more efficient biomarker discovery and high-throughput screening.',
      linkText: 'Discover our kit >',
      link: '#',
      image: '/assets/images/high-parameter.jpg'
    },
    {
      title: 'Single-Cell DNA and Protein Detection',
      subtitle: 'Compatible with TotalSeq-D reagents.',
      description: 'Resolve complex genetic questions by combining single-cell DNA analysis with protein detection using TotalSeq-D reagents and the Mission Bio Tapestri platform.',
      linkText: 'Explore applications >',
      link: '#',
      image: '/assets/images/single-cell-dna.jpg'
    },
    {
      title: 'Technology Partnerships and Service Providers',
      subtitle: '',
      description: 'Explore the ecosystem of organizations we have collaborated with utilizing TotalSeq reagents to enable protein detection in multiomics for single-cell and bulk analyses. ',
      linkText: 'Find your platform >',
      link: '#',
      image: '/assets/images/technology-partneship.jpg'
    },
    {
      title: 'Multiomics Analysis Software',
      subtitle: 'For single-cell RNA and protein data analysis.',
      description: 'To simplify data analysis, we provide Multiomics Analysis Software (MAS), a free cloud-based program accessible to all users irrespective of their bioinformatics background.',
      linkText: 'Analyze your data >',
      link: '#',
      image: '/assets/images/mulitomics-software.webp'
    },
    {
      title: 'Bulk RNA Sequencing',
      subtitle: 'Compatible with TotalSeq-A reagents.',
      description: 'Our BEN-seq workflow, developed in collaboration with Illumina, stains cells in suspension with TotalSeq antibodies prior to bulk RNA sequencing.',
      linkText: 'Expand bulk sequencing >',
      link: '#',
      image: '/assets/images/bulk-rna.jpg'
    }
  ];
}
