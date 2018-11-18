import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DetailServiceService } from './detail-service.service';
import { Sentences } from '../models/Sentences';

@Component({
  selector: 'app-sentence-translate-detail',
  templateUrl: './sentence-translate-detail.component.html',
  styleUrls: ['./sentence-translate-detail.component.css']
})
export class SentenceTranslateDetailComponent implements OnInit {

  sentence: Sentences = {
    original_sentc : '',
    language: '',
    english_sentc: '',
  };

  constructor(
    private router: ActivatedRoute,
    private detailTranslation: DetailServiceService
  ) { }

  ngOnInit() {
    const id = +this.router.snapshot.paramMap.get('id');
    this.detailTranslation.getTrasnlation(id).subscribe(data=> {
      this.sentence = data[0];
      console.log(data[0]);
    });
  }

}
