import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  newMemberName = '';
  members: string[] = []; // members = empty array of strings

  onInput(member: string): void {
    this.newMemberName = member;
    // console.log(this.newMemberName);
  }

  addMember(): void {
    this.members.push(this.newMemberName);
    this.newMemberName = '';
    // console.log(this.members);
  }

}
