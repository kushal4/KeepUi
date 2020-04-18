import { NotesService } from './../services/notes.service';
import { ModalService } from './../_modal/modal.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup } from '@angular/forms';

class FileSnippet {
  static readonly IMAGE_SIZE = {width: 950, height: 720};

  pending: boolean = false;
  status: string = 'INIT';

  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit,OnChanges {

  selectedFile: FileSnippet;
  imageChangedEvent: any;
  uploadForm:FormGroup;
  notes:[];
  filteredNotes;
  @Input("noteSearched")noteSearched:string;
  constructor(private formBuilder: FormBuilder,private modalService: ModalService,private toastr:ToastrService
    ,private notesService:NotesService) { }
  async ngOnInit(): Promise<void> {
    this.uploadForm = this.formBuilder.group({
      image: [''],
      title:[''],
      body:['']
    });
   this.filteredNotes= this.notes=(await this.notesService.getNotes())["notes"];
  }

  ngOnChanges(){
   // console.log("content changed");
   this.filteredNotes=this.noteSearched?this.notes.filter(note=>{
     let note_tite:string=note["title"];
    if(note_tite.toLowerCase().includes(this.noteSearched.toLowerCase())){
      //console.log("fount");
      return note;
    }

   }):this.notes;
  }

  openModal(id: string,title:HTMLDivElement,body:HTMLDivElement) {
    title.innerText="";
    body.innerText="";
   let cur_modal= this.modalService.open(id);
   console.log(cur_modal);
}

closeModal(id: string) {
    this.modalService.close(id);
}

processFile(files: any,previewImg:HTMLImageElement=null) {
  this.selectedFile = undefined;

  const URL = window.URL;
  let file, img;
  console.log(files);
  if ((file = files[0]) && (file.type === 'image/png' || file.type === 'image/jpeg')) {
    img = new Image();
    this.uploadForm.get('image').setValue(file);
    const self = this;
    img.onload = function() {

       if (this.width > FileSnippet.IMAGE_SIZE.width && this.height > FileSnippet.IMAGE_SIZE.height) {
         self.imageChangedEvent = event;
       } else {
          self.toastr.error(`Minimum width is ${FileSnippet.IMAGE_SIZE.width} and minimum heigth is ${FileSnippet.IMAGE_SIZE.height}`, 'Error!');
       }
    }

    img.src = URL.createObjectURL(file);
    previewImg.src=img.src;
    console.log(img);
  } else {
    this.toastr.error('Unsupported File Type. Only jpeg and png is allowed!', 'Error!');
  }
}

async submitForm(){
  let formData: any = new FormData();


  try{
    for (const key in this.uploadForm.value) {
      console.log(this.uploadForm.value[key]);
      formData.append(key, this.uploadForm.value[key]);
  }
 this.filteredNotes= this.notes= (await this.notesService.saveNote(formData))["notes"];
  this.modalService.close("custom-modal-1");
  console.log(this.notes);
  }catch(ex){
    console.log(ex);
  }

//console.log(formData);
  //console.log(this.uploadForm.value);
}

async markDone(is_done,note_id){
try{
      console.log("note id ::",note_id);
      let mark_obj={
        is_done: !is_done
      };
      this.filteredNotes= this.notes= (await this.notesService.markDone(note_id,mark_obj))["notes"];
    }catch(ex){
      console.log(ex);
    }

}



}
