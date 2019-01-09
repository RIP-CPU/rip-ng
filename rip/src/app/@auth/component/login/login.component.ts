import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthTokenService } from '../../services/auth-token.service';
import { Router } from '@angular/router';

@Component({
    selector: 'login-component',
    styleUrls: ['login.component.scss'],
    templateUrl: 'login.component.html',
})
export class LoginComponent {

    public buttonLogin: boolean = false;
    private progressBar: number = 25;
    public usernameRequired: boolean = false;
    public passwordRequired: boolean = false;

    public form: FormGroup = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    });

    constructor(private router: Router, private authTokenService: AuthTokenService) {}

    public login() {
      if (!this.form.get('username').value)
        this.usernameRequired = true;
      if (!this.form.get('password').value)
        this.passwordRequired = true;
      if (!this.usernameRequired && !this.passwordRequired) {
        document.querySelector('.pace-done').className =
        document.querySelector('.pace-done').className.replace('pace-done', 'pace-running');
        document.querySelector('.pace-inactive').className =
        document.querySelector('.pace-inactive').className.replace('pace-inactive', 'pace-active');
        const progressDOM = document.getElementsByClassName('pace-progress').item(0) as HTMLElement;
        if (this.progressBar < 35) {
          this.progressBar = 35;
          progressDOM.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
          progressDOM.getAttributeNode('data-progress-text').value = this.progressBar + '%';
          progressDOM.getAttributeNode('data-progress').value = this.progressBar.toString();
        }
        this.buttonLogin = true;
        this.authTokenService.login(
          this.form.get('username').value,
          this.form.get('password').value)
          .then(() => {
              this.progressBar = 90;
              progressDOM.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
              progressDOM.getAttributeNode('data-progress-text').value = this.progressBar + '%';
              progressDOM.getAttributeNode('data-progress').value = this.progressBar.toString();
              this.progressBar = 0;
              this.usernameRequired = false;
              this.passwordRequired = false;
              this.router.navigate(['/app/dashboard']);
          })
          .catch(error => {
              this.usernameRequired = false;
              this.passwordRequired = false;
              this.progressBar = 85;
              progressDOM.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
              progressDOM.getAttributeNode('data-progress-text').value = this.progressBar + '%';
              progressDOM.getAttributeNode('data-progress').value = this.progressBar.toString();
              document.querySelector('.pace-running').className =
              document.querySelector('.pace-running').className.replace('pace-running', 'pace-done');
              document.querySelector('.pace-active').className =
              document.querySelector('.pace-active').className.replace('pace-active', 'pace-inactive');
              this.progressBar = 0;
              this.buttonLogin = false;
          });
          if (this.progressBar >= 35 && this.progressBar < 65) {
              this.progressBar = 65;
              progressDOM.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
              progressDOM.getAttributeNode('data-progress-text').value = this.progressBar + '%';
              progressDOM.getAttributeNode('data-progress').value = this.progressBar.toString();
          }
      }
    }
}
