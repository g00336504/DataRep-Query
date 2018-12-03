import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor(private service:PostService) { }

  onAddPost(form: NgForm) {
    /*-----Here in this function the values taken in from the form are sent to the server----- */
    this.service.addPost(form.value.title, form.value.content, 
                         form.value.reference, form.value.DOB,form.value.Doctor, form.value.Diagnosis).subscribe();
    
    console.log(form.value);
    form.resetForm();
  }


  ngOnInit() {



  }

}
