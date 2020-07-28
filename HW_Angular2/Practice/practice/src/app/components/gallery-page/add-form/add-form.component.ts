import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'


interface sendedPost {
  urlImage: string;
  titleText: string
}
@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  url: string = 'Image URL';
  title: string = 'Some title';
  formAdd: FormGroup;

  constructor(private fb: FormBuilder) { }

  @Output()
  addNewPost: EventEmitter<sendedPost> = new EventEmitter();

  ngOnInit(): void {
    
    this.formAdd = this.fb.group(
    {
      urlImage: [this.url, [Validators.required, Validators.minLength(4)] ],
      titleText: [this.title, Validators.required]
    })
  }
  addPost(newPost) {
    if(this.formAdd.valid) {
      if(this.formAdd.value.urlImage === 'Image URL') {
        this.formAdd.value.urlImage = '../../../../assets/1.jpg';
      }
      this.addNewPost.emit(newPost);
    }
  }
}
