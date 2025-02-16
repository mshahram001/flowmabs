import { Component } from '@angular/core';

@Component({
  selector: 'app-true-stain-multi-fluor-buffer',
  standalone: false,
  
  templateUrl: './true-stain-multi-fluor-buffer.component.html',
  styleUrl: './true-stain-multi-fluor-buffer.component.css'
})
export class TrueStainMultiFluorBufferComponent {
  price: number = 650;
  images = [
    {
      src: 'https://d1spbj2x7qk4bg.cloudfront.net/Admin/Public/GetImage.ashx?Image=/Files/Images/media_assets/products/product_images/True-Stain-Multi-Fluor-Buffer_091724-.png&Width=240&Height=300&altFmImage_path=&Compression=90&Crop=5',
      text: 'Human peripheral blood lymphocytes were stained with anti-human CD4 (clone SK3) Brilliant Violet 421™ and anti-human CD8 (clone SK1) Brilliant Violet 605™ with (right) or without (left) True-Stain™ Multi-Fluor Buffer. Red circles indicate instances of staining artifacts caused by polymer dye interactions.'
    },
  ];

  selectedImage = this.images[0];

  changeImage(image: { src: string; text: string }) {
    this.selectedImage = image;
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
