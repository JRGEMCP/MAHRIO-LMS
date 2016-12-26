import { Injectable } from '@angular/core';

var m = {
  'en-US': {
    home: {
      sections: [{
        type: 'jumbotron',
        heading: 'Knowledge is Power. Period.',
        lead: [],
        action: {
          label: 'Register',
          link: '/m/register'
        }
      },{
        type: 'featured',
        heading: 'Featured Courses',
        action: {
          link: '/m/courses',
          label: 'View All Courses'
        }
      }]
    },
    components: {
      nav: {
        brand: 'Mahr.io',
        links: [{
          label: 'Courses',
          path: '/m/courses'
        },{
          label: 'Login',
          path: '/m/login'
        },{
          label: 'Register',
          path: '/m/register'
        }]
      }
    },
    session: {
      register: {
        label: 'Register'
      },
      login: {
        label: 'Sign In'
      },
      rememberMe: 'Remember Me',
      resetPassword: {
        label: 'Reset password?',
        action: 'Reset Password'
      },
      accountActivation: {
        label: 'Account Activation',
        text: 'Your account is now active. Click `Continue` to proceed to your dashboard.',
        action: 'Continue'
      }
    },
    user: {
      u: 'Username',
      p: 'Password',
      email: 'Email',
      fN: 'First Name',
      lN: 'Last Name',
      tel: 'Telephone',
      dir: 'Address',
      cty: 'City',
      zip: 'Zip Code'
    }
  },
  'es-xl': {
    home: {
      sections: [{
        type: 'jumbotron',
        heading: 'Conocimiento es Poder. Serio.',
        lead: [],
        action: {
          label: 'Registrate',
          link: '/m/register'
        }
      },{
        type: 'featured',
        heading: 'Cursos Destacados',
        action: {
          link: '/m/courses',
          label: 'Ver Todos Los Cursos'
        }
      }]
    },
    components: {
      nav: {
        brand: 'Mahr.io',
        links: [{
          label: 'Cursos',
          path: '/m/courses'
        },{
          label: 'Iniciar Sesión',
          path: '/m/login'
        },{
          label: 'Inscribete',
          path: '/m/register'
        }]
      }
    },
    session: {
      register: {
        label: 'Inscribete'
      },
      login: {
        label: 'Iniciar Sesion'
      },
      rememberMe: 'Recuerdame',
      resetPassword: {
        label: 'Reset password?',
        action: 'Reset Password'
      },
      accountActivation: {
        label: 'Activar Cuenta',
        text: 'Tu cuenta ha sido activada. Oprime `Continuar` para proceder a tu dashboard',
        action: 'Continuar'
      }
    },
    user: {
      u: 'Usuario',
      p: 'Contrasena',
      email: 'Correo Electronico',
      fN: 'Primer Nombre',
      lN: 'Apellido',
      tel: 'Telefono',
      dir: 'Direccion',
      cty: 'Ciudad',
      zip: 'Codigo Postal'
    }
  }
}, marketing = {};

@Injectable()
export class MarketingMock {
  constructor(){
    this.setLanguage( navigator.language );
  }
  setLanguage( lang ) {
    if( lang === 'es-xl') {
      marketing = m[ lang ];
    } else {
      marketing = m[ 'en-US' ];
    }
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