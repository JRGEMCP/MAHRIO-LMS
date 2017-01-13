import { Injectable } from '@angular/core';

var networks = [{
  _id: 0,
  title: 'Angular: Modern Front-End Framework',
  length: '3 Weeks', cost: '$19', rating: 4.5, tags: ['design','front-end', 'web'],
  img: {
    thumb: 'http://codecondo.com/wp-content/uploads/2015/05/15-Directives-to-Extend-Your-Angular.js-Apps.jpg',
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
    thumb: 'https://news.bitcoin.com/wp-content/uploads/2015/12/Database-300x300.png',
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
    thumb: 'http://blog.initialstate.com/wp-content/uploads/2015/07/iot-platforms.png',
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
    thumb: 'https://cdn.auth0.com/blog/university/courses/oauth-logo.svg',
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
    thumb: 'http://ionic.io/img/2.png',
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
    thumb: 'https://avatars1.githubusercontent.com/u/3774533',
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
  title: 'Storing Coordinate Data Sets with MongoDb',
  length: '3 Weeks', cost: '$19', rating: 4.2, tags: ['database'],
  img: {
    thumb: 'https://pbs.twimg.com/profile_images/750403034178478081/EPrK3ci2.jpg',
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
    thumb: 'http://www.sainsmart.com/media/wysiwyg/pi3.png',
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
  _id: 7,
  title: 'JavaScript',
  length: '3 Weeks', cost: '$19', rating: 4.2, tags: ['programming','language'],
  img: {
    thumb: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png'
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
  _id: 8,
  title: 'Design Foundations with Bootstrap 4',
  length: '3 Weeks', cost: '$19', rating: 4, tags: ['design'],
  img: {
    thumb: 'https://v4-alpha.getbootstrap.com/assets/brand/bootstrap-social-logo.png'
  },
  instructor: {
    name: 'Erik',
    img: {
      thumb: '',
    }
  },
  lead: 'Bootstrap is a free and open-source front-end web framework for designing websites and web applications.'
},{
  _id: 9,
  title: 'HTML5',
  length: '3 Weeks', cost: '$19', rating: 3.9, tags: ['structure'],
  img: {
    thumb: 'https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png',
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
  _id: 10,
  title: 'Cascading Style Sheets (CSS3)',
  length: '3 Weeks', cost: '$19', rating: 4.2, tags: ['theme'],
  img: {
    thumb: 'http://www.unixstickers.com/image/data/stickers/css3/css3_unofficial_shaped.png',
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
  _id: 11,
  title: 'NodeJs',
  length: '3 Weeks', cost: '$19', rating: 4.2, tags: ['server'],
  img: {
    thumb: 'https://node-os.com/images/nodejs.png',
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
  _id: 12,
  title: 'Chrome Browser',
  img: {
    thumb: 'https://lh3.googleusercontent.com/nYhPnY2I-e9rpqnid9u9aAODz4C04OycEGxqHG5vxFnA35OGmLMrrUmhM9eaHKJ7liB-=w300',
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
  _id: 13,
  title: 'Terminal Emulator',
  length: '3 Weeks', cost: '$19', rating: 4.2, tags: ['workflow'],
  img: {
    thumb: 'http://icons.iconarchive.com/icons/froyoshark/enkel/512/Terminal-icon.png',
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
  _id: 14,
  title: 'WebStorm',
  img: {
    thumb: 'https://confluence.jetbrains.com/download/attachments/15797318/WI?version=2&modificationDate=1449749629000&api=v2',
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
  _id: 15,
  title: 'Linux',
  length: '3 Weeks', cost: '$19', rating: 4.2, tags: ['os'],
  img: {
    thumb: 'https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Linux_-_Tux-512.png',
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
  _id: 16,
  title: 'Amazon Web Services',
  length: '3 Weeks', cost: '$19', rating: 4.2, tags: ['cloud'],
  img: {
    thumb: 'https://www.cloudbees.com/sites/default/files/aws-final-logo.png',
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