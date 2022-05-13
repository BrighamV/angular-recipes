import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent implements OnInit {
  user: User = new User();
  submitted = false;
  constructor(private tutorialService: TutorialService) { }
  
  ngOnInit(): void {
  }
  saveUser(): void {
    this.tutorialService.create(this.user).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    })
  }
  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

}