import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/core/services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formbuilder: FormBuilder, private autenticacaoService: AutenticacaoService, private router: Router) {

  }
  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, Validators.required]
    });
  }
  login() {
    const email = this.loginForm.value.email;
    const senha = this.loginForm.value.senha;

    this.autenticacaoService.autenticar(email, senha).subscribe({
      next: (result) => {
        console.log(result);
        this.router.navigateByUrl('/');

      },
      error: (err) => {
        console.error('Erro no login: ', err)
      }
    })
  }
}
