import { Injectable } from '@angular/core';

var networks = [{
  _id: 0,
  title: 'Angular: Modern Front-End Framework',
  length: '3 Weeks', cost: '$19', rating: 4.5, tags: ['design','front-end', 'web'],
  img: {
    thumb: '/assets/img/courses/angular.jpg',
    full: ''
  },
  lead: 'Angular is a strong competitor for front-end development. It binds together componetization'+
  ' ideology and modularity of the user interface.',
  instructor: {
    name: 'Jaime',
    img: {
      thumb: ''
    }
  }
},{
  _id: 1,
  title: 'Database Fundamentals',
  length: '3 Weeks', cost: '$19', rating: 3.8, tags: ['database', 'data store'],
  lead: 'Explore various databases and basic query methods.',
  img: {
    thumb: '/assets/img/courses/database.png',
    thumbClasses: 'padding-50-100'
  },
  instructor: {
    name: 'Juan',
    img: {
      thumb: ''
    }
  }
},{
  _id: 2,
  title: 'Collecting Data using Internet of Things',
  length: '3 Weeks', cost: '$19', rating: 4.6, tags: ['iot','internet-enabled'],
  img: {
    thumb: '/assets/img/courses/internet-of-things.png',
    thumbClasses: 'padding-50-100'
  },
  lead: 'Collect, Store, Compute & Execute with internet-enabled hardware',
  instructor: {
    name: 'Jose',
    img: {
      thumb: ''
    }
  }
},{
  _id: 3,
  title: 'How does Oauth work?',
  length: '3 Weeks', cost: '$19', rating: 3.7, tags: ['authentication','security','third-party'],
  img: {
    thumb: '/assets/img/courses/oauth.svg',
    thumbClasses: 'padding-50-100'
  },
  lead: 'With Oauth you can connect to using identity retrieved from service providers programatically.',
  instructor: {
    name: 'Antonio',
    img: {
      thumb: ''
    }
  }
},{
  _id: 4,
  title: 'Hybrid-Mobile Apps in Ionic',
  length: '3 Weeks', cost: '$19', rating: 4.4, tags: ['design','front-end', 'mobile'],
  img: {
    thumb: '/assets/img/courses/ionic.png',
    thumbClasses: 'padding-50-100'
  },
  lead: 'Building mobile apps had never been so fast and easy since Ionic came about.',
  instructor: {
    name: 'Jesus',
    img: {
      thumb: ''
    },
  }
},{
  _id: 5,
  title: 'Running a Server using HapiJs',
  length: '3 Weeks', cost: '$19', rating: 3, tags: ['server-side','back-end'],
  img: {
    thumb: '/assets/img/courses/hapijs.png',
    thumbClasses: 'padding-50-100'
  },
  lead: 'The server model remains the traditional middleware software for connecting clients',
  instructor: {
    name: 'Andres',
    img: {
      thumb: ''
    }
  }
},{
  _id: 6,
  title: 'Storing Data in MongoDb',
  length: '3 Weeks', cost: '$19', rating: 4.2, tags: ['database'],
  img: {
    thumb: '/assets/img/courses/mongodb.jpg',
    thumbClasses: 'padding-50-100'
  },
  lead: 'Using MongoDb to store and extract data. You may just discover eminent data from an analysis too.',
  instructor: {
    name: 'Gabriel',
    img: {
      thumb: ''
    }
  }
},{
  _id: 7,
  title: 'Up and Running with Raspberry Pi 3',
  length: '3 Weeks', cost: '$19', rating: 4.2, tags: ['database'],
  img: {
    thumb: '/assets/img/courses/raspberrypi3.png',
    thumbClasses: 'padding-50-100'
  },
  lead: 'The Raspberry Pi 3 is a credit card-sized single-board computer developed to promote the teaching of basic'+
    'computer science in schools',
  instructor: {
    name: 'Arturo',
    img: {
      thumb: ''
    }
  }
},{
  _id: 8,
  title: 'JavaScript',
  length: '3 Weeks', cost: '$19', rating: 4.2, tags: ['programming','language'],
  img: {
    thumb: '/assets/img/courses/javascript.png'
  },
  lead: 'Alongside HTML and CSS, JavaScript is one of the three core technologies of World Wide Web content '+
    'production; the majority of websites employ it, and all modern Web browsers support it without the need for plug-ins.',
  instructor: {
    name: 'Javier',
    img: {
      thumb: ''
    }
  }
},{
  _id: 9,
  title: 'Design Foundations with Bootstrap 4',
  length: '3 Weeks', cost: '$19', rating: 4, tags: ['design'],
  img: {
    thumb: '/assets/img/courses/bootstrap.png'
  },
  instructor: {
    name: 'Erik',
    img: {
      thumb: '',
    }
  },
  lead: 'Bootstrap is a free and open-source front-end web framework for designing websites and web applications.'
},{
  _id: 10,
  title: 'HTML5',
  length: '3 Weeks', cost: '$19', rating: 3.9, tags: ['structure'],
  img: {
    thumb: '/assets/img/courses/html5.png',
    thumbClasses: 'padding-50-100'
  },
  instructor: {
    name: 'Esteban',
    img: {
      thumb: ''
    },
  },
  lead: 'HTML5 is a markup language used for structuring and presenting content on the World Wide Web.'
},{
  _id: 11,
  title: 'Cascading Style Sheets (CSS3)',
  length: '3 Weeks', cost: '$19', rating: 4.2, tags: ['theme'],
  img: {
    thumb: '/assets/img/courses/css3.png',
    thumbClasses: 'padding-50-100'
  },
  lead: 'Cascading Style Sheets 3(CSS3) is a style sheet language used for describing the presentation of a '+
    'document written in a markup language',
  instructor: {
    name: 'Manuel',
    img: {
      thumb: ''
    },
  }
},{
  _id: 12,
  title: 'NodeJs',
  length: '3 Weeks', cost: '$19', rating: 4.2, tags: ['server'],
  img: {
    thumb: '/assets/img/courses/nodejs.png',
    thumbClasses: 'padding-50-100'
  },

  lead: 'Node.js is an open-source, cross-platform JavaScript runtime environment for developing a diverse '+
   'variety of tools and applications.',
  instructor: {
    name: 'Isidro',
    img: {
      thumb: ''
    },
  }
},{
  _id: 13,
  title: 'Chrome Browser',
  img: {
    thumb: '/assets/img/courses/chrome-browser.png',
    thumbClasses: 'padding-50-100'
  },
  length: '3 Weeks', cost: '$19', rating: 4.2,
  lead: 'Google Chrome is a freeware web browser developed by Google.',
  instructor: {
    name: 'Victor',
    img: {
      thumb: ''
    },
  }
},{
  _id: 14,
  title: 'Terminal Emulator',
  length: '3 Weeks', cost: '$19', rating: 4.2, tags: ['workflow'],
  img: {
    thumb: '/assets/img/courses/terminal-emulator.png',
    thumbClasses: 'padding-50-100'
  },

  lead: 'The terminal emulator is an application that provides text-based access to the operating system, in '+
    'contrast to the mostly graphical nature of the user experience',
  instructor: {
    name: 'Luis',
    img: {
      thumb: ''
    },
  }
},{
  _id: 15,
  title: 'WebStorm',
  img: {
    thumb: '/assets/img/courses/webstorm.png',
    thumbClasses: 'padding-50-100'
  },
  length: '3 Weeks', cost: '$19', rating: 4.2,
  lead: 'WebStorm is a cross-platform IDE primarily for web development.',
  instructor: {
    name: 'Edi',
    img: {
      thumb: ''
    },
  }
},{
  _id: 16,
  title: 'Linux',
  length: '3 Weeks', cost: '$19', rating: 4.2, tags: ['os'],
  img: {
    thumb: '/assets/img/courses/linux.png',
    thumbClasses: 'padding-50-100'
  },
  lead: 'Linux is a computer operating system assembled under the model of free and open-source software development ' +
    'and distribution',
  instructor: {
    name: 'Ernesto',
    img: {
      thumb: ''
    },
  }
},{
  _id: 17,
  title: 'Amazon Web Services',
  length: '3 Weeks', cost: '$19', rating: 4.2, tags: ['cloud'],
  img: {
    thumb: '/assets/img/courses/amazon-web-services.png',
    thumbClasses: 'padding-50-100'
  },
  lead: 'Amazon Web Services (AWS) offers a suite of cloud-computing services that make up an on-demand computing platform',
  instructor: {
    name: 'Jorge',
    img: {
      thumb: ''
    },
  }
}];

@Injectable()
export class AppProvider{
  constructor(){

  }

  getAttributes(){
    return {
      label: 'Authors:',
      options: [{
        name: 'All',
        index: 0
      },{
        name: 'Dan',
        index: 1
      }, {
        name: 'Jesus',
        index: 2
      }]
    };
  }
  getCategories(){
    return {
      label: 'Category:',
      options: [{
        name: 'All',
        index: 0
      }, {
        name: 'AngularJS (2)',
        index: 1
      }, {
        name: 'HapiJs (1)',
        index: 2
      }, {
        name: 'Ionic (2)',
        index: 3
      }, {
        name: 'MongoDb (1)',
        index: 4
      }, {
        name: 'Oauth (1)',
        index: 5
      }, {
        name: 'Raspberry Pi (3)',
        index: 6
      }]
    };
  }
  getNetwork( id ){
    console.log( id );
    var i = networks.map(function(item){ return item._id;}).indexOf(id);
    if( i >= 0 ) {
      return networks[i];
    } else {
      return {};
    }
  }
  getNetworks( key, value ){
    switch( key ){
      case 'title':
        var i = networks.map(function(item){ return item.title;}).indexOf(value);
        return networks[i];
      default:
        return networks;
    }
  }
}