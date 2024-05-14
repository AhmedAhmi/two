import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular';
import { PagemComponent } from './pagem.component';

describe('PagemComponent', () => {
  let component: PagemComponent;
  let fixture: ComponentFixture<PagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagemComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxButtonDirective, IgxRippleDirective ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
