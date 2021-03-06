import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MeetingService } from '../meeting.service';
import { Meeting } from '../meeting.model';
import { Router } from '@angular/router';
import { UserService } from '../../user/user.service';
import { Author } from '../../user/author.model';
import { TokenStorageService } from "../../authentification/token-storage.service";

@Component({
  selector: 'app-meeting-details',
  templateUrl: './meeting-details.component.html',
  styleUrls: ['./meeting-details.component.css']
})
export class MeetingDetailsComponent implements OnInit {
  @Input() id: number;
  @Output() deactivateDetails = new EventEmitter<void>();
  isLoading = true;
  isAdmin: boolean;
  meeting: Meeting;
  author: Author;
  textareaLines: number;

  constructor(private router: Router, private meetingService: MeetingService, private userService: UserService, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.isAdmin = this.tokenStorageService.isAdmin();
    this.meetingService.getMeeting(this.id)
    .subscribe((tempMeeting: Meeting) => {
      this.meeting = tempMeeting;
      if (!this.meeting.description) {
        this.meeting.description = 'Diese Veranstaltung hat noch keine Detailbeschreibung.';
      }
      this.userService.getAuthor(this.meeting.authorId)
      .subscribe((tempAuthor: Author) => {
        this.author = tempAuthor;
        this.isLoading = false;
      });
    });
  }

  onEditMeeting(id: number): void {
    this.router.navigate(['/meeting/edit/' + id]);
  }

  onClose(): void {
    this.deactivateDetails.emit();
  }
}
