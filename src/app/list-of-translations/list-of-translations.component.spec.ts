import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfTranslationsComponent } from './list-of-translations.component';

describe('ListOfTranslationsComponent', () => {
  let component: ListOfTranslationsComponent;
  let fixture: ComponentFixture<ListOfTranslationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfTranslationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfTranslationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
