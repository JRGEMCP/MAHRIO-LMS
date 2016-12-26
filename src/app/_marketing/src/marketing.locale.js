import { Injectable } from '@angular/core';

var marketing = {
  home: {
    sections: [{
      type: 'jumbotron',
      heading: ['Knowledge is Power. Period.', 'Conocimiento es Poder. Serio.'],
      lead: [],
      action: {
        label: ['Sign Up', 'Registrate'],
        link: '/m/register'
      }
    },{
      type: 'featured',
      heading: ['Featured Courses', 'Cursos Destacados'],
      action: {
        link: '/m/courses',
        label: ['View All Courses', 'Ver Todos Los Cursos']
      }
    }]
  },
  components: {
    nav: {
      brand: ['Mahr.io', 'Mahr.ia'],
      links: [{
        label: ['Courses', 'Cursos'],
        path: '/m/courses'
      },{
        label: ['Login', 'Iniciar Sesión'],
        path: '/m/login'
      },{
        label: ['Register', 'Inscribete'],
        path: '/m/register'
      }]
    }
  },
  session: {
    register: {
      label: ['Register','Inscribete']
    },
    login: {
      label: ['Sign In','Iniciar Sesion']
    },
    rememberMe: ['Remember Me', 'Recuerdame'],
    resetPassword: {
      label: ['Reset password?','Reset password?'],
      action: ['Reset Password', 'Reset Password']
    },
    accountActivation: {
      label: ['Account Activation','Activar Cuenta'],
      text: ['Your account is now active. Click `Continue` to proceed to your dashboard.',
        'Tu cuenta ha sido activada. Oprime `Continuar` para proceder a tu dashboard'],
      action: ['Continue','Continuar']
    }
  },
  user: {
    u: ['Username','Usuario'],
    p: ['Password','Contrasena'],
    email: ['Email','Correo Electronico'],
    fN: ['First Name','Primer Nombre'],
    lN: ['Last Name', 'Apellido'],
    tel: ['Telephone', 'Telefono'],
    dir: ['Address', 'Direccion'],
    cty: ['City', 'Ciudad'],
    zip: ['Zip Code', 'Codigo Postal']
  }
};

@Injectable()
export class MarketingMock {
  constructor(){
    
  }
  getLanguage( part ){
    switch( part ) {
      case 'nav':
        return marketing['components'][ part ];
      case 'home':
      case 'user':
      case 'session':
        return marketing[ part ];
      default:
    }
  }
}