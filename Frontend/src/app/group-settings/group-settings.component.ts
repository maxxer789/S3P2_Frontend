import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GroupService } from '../GroupService/group.service';
import { Group } from '../Models/IGroup';

@Component({
  selector: 'app-group-settings',
  templateUrl: './group-settings.component.html',
  styleUrls: ['./group-settings.component.css']
})
export class GroupSettingsComponent {

  @Input() public groupId?: number;

  constructor(private groupService: GroupService, private router: Router) {}

  public editGroup(form: NgForm):void
  {
    let group: Group = {id: this.groupId!, groupName: form.value.groupName} as Group

    this.groupService.editGroup(group).
      subscribe(response => {
        window.location.reload();
      })
  }

  public deleteGroup(form: NgForm):void
  {
    let group: Group = {id: this.groupId!, groupName: form.value.groupName} as Group

    this.groupService.deleteGroup(group).
      subscribe(() => {
        this.router.navigate(["home"]);
      }, err =>{
        console.log(err);
      })
  }

}
