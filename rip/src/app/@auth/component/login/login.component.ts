import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthTokenService } from '../../services/auth-token.service';
import { Router } from '@angular/router';

declare var $: any;

@Component({
    selector: 'login-component',
    styleUrls: ['login.component.scss'],
    templateUrl: 'login.component.html',
})
export class LoginComponent {

    public buttonLogin: boolean = false;
    private progressBar: number = 25;
    public username: string;
    public password: string;

    public form: FormGroup = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    });

    constructor(private router: Router, private authTokenService: AuthTokenService) {}

    public login() {
      this.username = this.form.get('username').value;
      this.password = this.form.get('password').value;
      if(this.username && this.password) {
        $('body').removeClass('pace-done');
        $('body').addClass('pace-running');
        $('.pace').removeClass('pace-inactive');
        $('.pace').addClass('pace-active');
        if(this.progressBar < 35) {
          this.progressBar = 35;
          $('.pace-progress').attr('data-progress-text', this.progressBar + '%');
          $('.pace-progress').attr('data-progress', this.progressBar);
          $('.pace-progress').attr('style', 'transform: translate3d(' + this.progressBar + '%, 0px, 0px);');
        }
        this.buttonLogin = true;
        this.authTokenService.login(
          this.form.get('username').value,
          this.form.get('password').value)
          .then(() => {
              this.progressBar = 90;
              $('.pace-progress').attr('data-progress-text', this.progressBar + '%');
              $('.pace-progress').attr('data-progress', this.progressBar);
              $('.pace-progress').attr('style', 'transform: translate3d(' + this.progressBar + '%, 0px, 0px);');
              this.progressBar = 0;
              this.username = null;
              this.password = null;
              this.router.navigate(['/app/dashboard']);
          })
          .catch(error => {
              this.username = null;
              this.password = null;
              this.progressBar = 85;
              $('.pace-progress').attr('data-progress-text', this.progressBar + '%');
              $('.pace-progress').attr('data-progress', this.progressBar);
              $('.pace-progress').attr('style', 'transform: translate3d(' + this.progressBar + '%, 0px, 0px);');
              $('body').removeClass('pace-running');
              $('body').addClass('pace-done');
              $('.pace').removeClass('pace-active');
              $('.pace').addClass('pace-inactive');
              this.progressBar = 0;
              this.buttonLogin = false;
          });
          if(this.progressBar >= 35 && this.progressBar < 65) {
              this.progressBar = 65;
              $('.pace-progress').attr('data-progress-text', this.progressBar + '%');
              $('.pace-progress').attr('data-progress', this.progressBar);
              $('.pace-progress').attr('style', 'transform: translate3d(' + this.progressBar + '%, 0px, 0px);');
          }
      }
    }
}
