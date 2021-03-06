import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MeetingService } from '../../meeting/meeting.service';
import { Meeting } from '../../meeting/meeting.model';

@Component({
  selector: 'app-participants-list',
  templateUrl: './participants-list.component.html'
})
export class ParticipantsListComponent implements OnInit {
  isLoading = true;
  id: number;
  meeting: Meeting;
  isEmpty: boolean;
  meetingExists: boolean;

  constructor(private route: ActivatedRoute, private router: Router, private meetingService: MeetingService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.isEmpty = false;
    this.id = +this.route.snapshot.paramMap.get('id');

    this.meetingService.getMeeting(this.id)
    .subscribe(tempMeeting => {
      if (!tempMeeting) {
        this.meetingExists = false;
      } else {
        this.meetingExists = true;
        this.isLoading = false;
        this.meeting = tempMeeting;
        if (!this.meeting.users[0]) {
          this.isEmpty = true;
        }
      }
    });
  }

  onBack(): void {
    this.router.navigate(['/meeting/list']);
  }

}
