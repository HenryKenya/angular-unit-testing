import { TestBed, async, tick, fakeAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { DataService } from './data.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  let fixture;
  let component;
  let dataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [ CommonModule, BrowserModule, BrowserAnimationsModule ],
      providers: [ DataService, HttpClient, HttpHandler ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    dataService = TestBed.get(DataService)
    component.ngOnInit()

  }));

  it('should create the app', () => {
    expect(component).toBeTruthy()
  });

  it('should call function for fetching data when button is clicked', fakeAsync(() => {
    const button = fixture.debugElement.query(By.css('.btn')).nativeElement

    const spyComponent = spyOn(component, 'showData')
    
    button.click()

    tick(1000)

    expect(spyComponent).toHaveBeenCalled()
    
  }))

  it('should populate list with data when method showData is successfully called', fakeAsync(() => {

    const spyComponent = spyOn(component, 'showData').and.callThrough()
    const spyService = spyOn(dataService, 'fetchData').and.callThrough()

  }))

});
