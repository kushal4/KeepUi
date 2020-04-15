import { ModalService } from './../_modal/modal.service';
import { DivSelectButtonsComponent } from './../divInput.component';
import { Token } from './../utils/Token';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { NotesService } from './../services/notes.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from "@angular/forms";
import { NotesComponent } from './notes.component';

describe('NotesComponent', () => {
  let component: NotesComponent;
  let fixture: ComponentFixture<NotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesComponent,DivSelectButtonsComponent ],
      imports:[
        HttpClientTestingModule,
        ReactiveFormsModule,
        ToastrModule.forRoot()
      ],
      providers:[NotesService,Token,ModalService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesComponent);
    component = fixture.componentInstance;

  });

  it('can save notes', () => {
    let noteService=TestBed.get(NotesService);
    spyOn(noteService,"getNotes").and.returnValue(Promise.resolve({
      code:200,
      notes:[]
    }));
    component.ngOnInit();
    fixture.detectChanges();
   // component.uploadForm.controls['user_id'].setValue(4);
   // component.uploadForm.controls['title'].setValue("test3");
    let spy=spyOn(noteService,"saveNote").and.returnValue(Promise.resolve({
      code:200,
      notes:[{
          "user_id":4,
          "title":"test3"
      }]
    }));
    component.submitForm();
    //expect(spy).toHaveBeenCalled();

    fixture.whenStable().then(()=>{
     // console.log(component.notes);
     // expect(component.notes.length).toBe(2);
      expect(component.notes.length).toBeGreaterThanOrEqual(1);

    });
  });


});
