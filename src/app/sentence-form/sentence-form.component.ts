import { Component, OnInit, ReflectiveInjector } from '@angular/core';
import { Sentences } from '../models/Sentences';
import { TranslateSentenceService } from './translate-sentence.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-sentence-form',
  templateUrl: './sentence-form.component.html',
  styleUrls: ['./sentence-form.component.css']
})
export class SentenceFormComponent implements OnInit {

  enpty_string_flag : boolean;
  removable: boolean = true;
  sentence: Sentences = {
    original_sentc : ''
  }

  constructor(
    private translateSentenceService: TranslateSentenceService,
    private router: Router,
    private loc: Location
  ) { }

  ngOnInit() {
  }

  remove_chip(){
    this.enpty_string_flag = false;
    this.sentence.original_sentc = '';
  }

  navigate(){
    this.router.navigate(['']);
  }

  translate_sentence() {
    if(this.sentence.original_sentc.trim().length == 0){
      this.enpty_string_flag = true;
      return;
    }else{
      this.translateSentenceService.translate_sentence(this.sentence).subscribe(data => {
        this.navigate();
      });
    }
  }

}
