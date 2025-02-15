import { Component } from '@angular/core';

@Component({
  selector: 'app-spark-dyes',
  standalone: false,
  templateUrl: './spark-dyes.component.html',
  styleUrls: ['./spark-dyes.component.css'],
})
export class SparkDyesComponent {

  relatedProducts: string[] = [
    'Spark UV™ Reagents',
    'Spark Violet™ Reagents',
    'Spark Blue™ Reagents',
    'Spark YG™ Reagents',
    'Spark NIR™ and Spark Red™ Reagents'
  ];

  relatedPages: string[] = [
    'Fluorophore Families',
    'KIRAVIA Dyes™',
    'Fire Dyes'
  ];

  sparkProducts: string[] = [
    "Spark PLUS UV395™",
    "Spark PLUS B550™",
    "Spark UV™ 387",
    "Spark Violet™ 423",
    "Spark Violet™ 500",
    "Spark Violet™ 538",
    "Spark Blue™ 515",
    "Spark Blue™ 550",
    "Spark Blue™ 574",
    "Spark YG™ 570",
    "Spark YG™ 581",
    "Spark YG™ 593",
    "Spark NIR™ 685",
    "Spark Red™ 718"
  ];

  activeProduct = this.sparkProducts[0]; 

  setActiveProduct(product: string) {
    this.activeProduct = product;
  }
  
}
