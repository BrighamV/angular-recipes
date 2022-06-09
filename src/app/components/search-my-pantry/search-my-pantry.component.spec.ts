import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMyPantryComponent } from './search-my-pantry.component';

describe('SearchMyPantryComponent', () => {
  let component: SearchMyPantryComponent;
  let fixture: ComponentFixture<SearchMyPantryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchMyPantryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMyPantryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
