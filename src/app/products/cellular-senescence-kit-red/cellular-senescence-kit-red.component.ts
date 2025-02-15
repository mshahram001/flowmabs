import { Component } from '@angular/core';

@Component({
  selector: 'app-cellular-senescence-kit-red',
  standalone: false,
  
  templateUrl: './cellular-senescence-kit-red.component.html',
  styleUrl: './cellular-senescence-kit-red.component.css'
})
export class CellularSenescenceKitRedComponent {
  price: number = 650;
  images = [
    {
      src: 'https://d1spbj2x7qk4bg.cloudfront.net/Admin/Public/GetImage.ashx?Image=/Files/Images/media_assets/products/product_images/Cellular_Senescence_Kit_Red_1_021224.png&Width=240&Height=300&altFmImage_path=&Compression=90&Crop=5',
      text: 'Live-cell fluorescence imaging of RAW264.7 untreated (panel A) and treated with Camptothecin (panel B) for 4 days to induce cellular senescence. Cells were then stained with Cellular Senescence Kit Red (red) and nuclei were stained with Hoechst. Images were captured using a 60X objective. Scale bar: 20µm'
    },
    {
      src: 'https://d1spbj2x7qk4bg.cloudfront.net/Admin/Public/GetImage.ashx?Image=/Files/Images/media_assets/products/product_images/Cellular_Senescence_Kit_Red_2_021224.png&Width=240&Height=300&altFmImage_path=&Compression=90&Crop=5',
      text: 'RAW264.7 untreated (open histogram) or treated with Camptothecin (filled histogram) for 4 days to induce cellular senescence. Cells were then stained with Cellular Senescence Kit Red and analyzed by flow cytometry.'
    },
    {
      src: 'https://d1spbj2x7qk4bg.cloudfront.net/Admin/Public/GetImage.ashx?Image=/Files/Images/media_assets/products/product_images/Cellular_Senescence_Kit_Red_3_021224.png&Width=240&Height=300&altFmImage_path=&Compression=90&Crop=5',
      text: 'U937 untreated (open histogram) or treated with Camptothecin (filled histogram) for 3 days to induce cellular senescence. Cells were then stained with Cellular Senescence Kit Red and analyzed by flow cytometry.'
    }
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
