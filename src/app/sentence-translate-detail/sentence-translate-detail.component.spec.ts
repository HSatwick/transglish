import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentenceTranslateDetailComponent } from './sentence-translate-detail.component';

describe('SentenceTranslateDetailComponent', () => {
  let component: SentenceTranslateDetailComponent;
  let fixture: ComponentFixture<SentenceTranslateDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentenceTranslateDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentenceTranslateDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
