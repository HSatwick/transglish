import { Component, OnInit, ViewChild } from '@angular/core';
import { Sentences } from '../models/Sentences';
import { MatPaginator } from '@angular/material';
import { GetListService } from './get-list.service';

@Component({
  selector: 'app-list-of-translations',
  templateUrl: './list-of-translations.component.html',
  styleUrls: ['./list-of-translations.component.css']
})
export class ListOfTranslationsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'orig_sent', 'lang', 'eng_trs', 'created'];
  data: Sentences[] = [];
  resultsLength = 0;

  constructor(
    private translationService: GetListService
  ) { }

  ngOnInit() {
    this.translationService.getAllTranslations().subscribe(data => {
      this.resultsLength = data.length;
      this.data = data;
    },
    error =>{
      console.log(error);
    });
  }

}
