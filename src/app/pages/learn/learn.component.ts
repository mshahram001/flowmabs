import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-learn',
  standalone: false,
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {
  topic: string = ""; // Stores the topic name
  content: string = ""; // Stores dynamic content

  // Define content for each topic
  topicData: any = {
    "cell-biology": "Cell Biology is the study of cell structure and function.",
    "phenotyping": "Phenotyping is the process of determining an organism's observable characteristics.",
    "immunology": "Immunology is the study of the immune system and its responses.",
    "cancer": "Cancer research focuses on understanding and treating cancer.",
    "stem-cells": "Stem cell research explores regenerative medicine and tissue engineering.",
    "neuroscience": "Neuroscience is the study of the nervous system and brain function.",
    "sars-cov-2": "SARS-CoV-2 research is focused on the coronavirus and its impact."
    };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Subscribe to route changes
    this.route.params.subscribe(params => {
      this.topic = params['topic'];
      this.content = this.topicData[this.topic] || "Topic not found.";
    });
  }
}
