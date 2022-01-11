import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GroupService } from '../GroupService/group.service';
import { Group } from '../Models/IGroup';

@Component({
  selector: 'app-group-creation',
  templateUrl: './group-creation.component.html',
  styleUrls: ['./group-creation.component.css']
})
export class GroupCreationComponent {

  constructor(private groupService: GroupService, private router: Router) { }

  public createGroup(groupForm: NgForm): void
  {
    console.log(groupForm.value);
    let group = {groupName: groupForm.value.groupName} as Group
    console.log("group: " + group);
    this.groupService.createGroup(group)
    .subscribe(response => {
      if(response.id > 0)
      {
        this.router.navigate([`group/${response.id}`])
      }
    }, err =>{
      console.log(err);
    })
  }

}
