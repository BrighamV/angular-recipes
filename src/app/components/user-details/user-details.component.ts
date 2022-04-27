import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() user?: User;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentUser: User = {
    fname: '',
    lname: '',
  };
  message = '';
  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
    this.message = '';
  }
  ngOnChanges(): void {
    this.message = '';
    this.currentUser = { ...this.user };
  }
  updateUser(): void {
    const data = {
      fname: this.currentUser.fname,
      lname: this.currentUser.lname
    };
    if (this.currentUser.id) {
      this.tutorialService.update(this.currentUser.id, data)
        .then(() => this.message = 'The user was updated successfully!')
        .catch(err => console.log(err));
    }
  }
  deleteUser(): void {
    if (this.currentUser.id) {
      this.tutorialService.delete(this.currentUser.id)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The user was updated successfully!';
        })
        .catch(err => console.log(err));
    }
  }


}
