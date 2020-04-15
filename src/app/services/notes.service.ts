import { Token } from './../utils/Token';
import { EndpointUtilService } from './endpoint-util.service';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  base_notes_url;
  constructor(private endpont: EndpointUtilService,private tokenObj:Token) {
    this.base_notes_url=`${environment.apiUrl}/api/notes`;
   }


  async getNotes(){
      let decoded_token=this.tokenObj.decode();
      let user_id=decoded_token["user_id"];
      let notes_url=`${this.base_notes_url}/${user_id}`;
      let notes=await this.endpont.call_get(notes_url);
      return notes;
  }
  async saveNote(note_formData){
    let decoded_token=this.tokenObj.decode();
    let user_id=decoded_token["user_id"];
    let notes_url=`${this.base_notes_url}/${user_id}`;
    let notes= await this.endpont.call_post(note_formData,notes_url);
    return notes;
  }

  async markDone(note_id,mark_obj){
    let decoded_token=this.tokenObj.decode();
    let user_id=decoded_token["user_id"];
    let notes_url=`${this.base_notes_url}/${user_id}/${note_id}`;
    let notes=await this.endpont.call_put(notes_url,mark_obj);
    return notes;
  }
}
