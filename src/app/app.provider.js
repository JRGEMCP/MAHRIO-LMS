import { Injectable } from '@angular/core';

var networks = [{
  _id: 0,
  title: 'Angular: Modern Front-End (UI) Framework',
  rating: 4.5,
  img: {
    thumb: 'http://codecondo.com/wp-content/uploads/2015/05/15-Directives-to-Extend-Your-Angular.js-Apps.jpg',
    full: ''
  },
  lead: 'Angular is a strong competitor for front-end development. It binds together componetization'+
  ' ideology and modularity of the user interface.',
  tags: ['design','front-end', 'web'],
  instructor: {
    name: 'Jaime',
    img: {
      thumb: ''
    }
  }
},{
  _id: 1,
  title: 'Database Fundamentals',
  rating: 3.8,
  lead: 'Explore various databases and basic query methods.',
  img: {
    thumb: 'https://news.bitcoin.com/wp-content/uploads/2015/12/Database-300x300.png',
    thumbClasses: 'padding-50-100'
  },
  instructor: {
    img: {
      thumb: ''
    },
    name: 'Juan'
  },
  tags: ['database', 'data store']
},{
  _id: 2,
  title: 'Collecting Data using Internet of Things (IoT)',
  rating: 4.6,
  img: {
    thumb: 'http://blog.initialstate.com/wp-content/uploads/2015/07/iot-platforms.png'
  },
  lead: 'Collect, Store, Compute & Execute with internet-enabled hardware',
  instructor: {
    img: {
      thumb: ''
    },
    name: 'Jose'
  },
  tags: ['iot','internet-enabled']
},{
  _id: 3,
  title: 'How does Oauth work?',
  rating: 3.7,
  img: {
    thumb: 'https://cdn.auth0.com/blog/university/courses/oauth-logo.svg',
    thumbClasses: 'padding-50-100'
  },
  lead: 'With Oauth you can connect to using identity retrieved from service providers programatically.',
  instructor: {
    img: {
      thumb: ''
    },
    name: 'Antonio'
  },
  tags: ['authentication','security','third-party']
},{
  _id: 4,
  title: 'Hybrid-Mobile Apps in Ionic',
  img: {
    thumb: 'http://ionic.io/img/2.png',
    thumbClasses: 'padding-50-100'
  },
  rating: 4.4,
  lead: 'Building mobile apps had never been so fast and easy since Ionic came about.',
  tags: ['design','front-end', 'mobile'],
  instructor: {
    name: 'Jesus',
    img: {
      thumb: ''
    },
  }
},{
  _id: 5,
  title: 'Running a Server using HapiJs',
  img: {
    thumb: 'https://avatars1.githubusercontent.com/u/3774533',
    thumbClasses: 'padding-50-100'
  },
  rating: 3,
  lead: 'The server model remains the traditional middleware software for connecting clients',
  tags: ['server-side','back-end'],
  instructor: {
    img: {
      thumb: ''
    },
    name: 'Andres'
  }
},{
  _id: 6,
  title: 'Storing Coordinate Data Sets with MongoDb',
  img: {
    thumb: 'https://pbs.twimg.com/profile_images/750403034178478081/EPrK3ci2.jpg',
    thumbClasses: 'padding-50-100'
  },
  rating: 4.2,
  lead: 'Using MongoDb to store and extract data. You may just discover eminent data from an analysis too.',
  instructor: {
    name: 'Gabriel',
    img: {
      thumb: ''
    }
  },
  tags: ['database']
},{
  _id: 7,
  title: 'Up and Running with Raspberry Pi 3',
  img: {
    thumb: 'http://www.sainsmart.com/media/wysiwyg/pi3.png',
    thumbClasses: 'padding-50-100'
  },
  rating: 4.2,
  lead: '',
  instructor: {
    name: 'Arturo',
    img: {
      thumb: ''
    }
  },
  tags: ['database']
},{
  _id: 7,
  title: 'ECMA 6',
  img: {
    thumb: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png'
  },
  rating: 4.2,
  lead: '',
  instructor: {
    name: 'Javier',
    img: {
      thumb: ''
    }
  },
  tags: ['programming','language']
},{
  _id: 8,
  title: 'Design Foundations with Bootstrap 4',
  img: {
    thumb: 'https://v4-alpha.getbootstrap.com/assets/brand/bootstrap-social-logo.png'
  },
  instructor: {
    name: 'Erik',
    img: {
      thumb: '',
    }
  },
  rating: 4,
  lead: ''
},{
  _id: 9,
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
  rating: 3.9,
  lead: 'The Web was made for HTML5'
},{
  _id: 10,
  title: 'Cascading Style Sheets (CSS3)',
  img: {
    thumb: 'http://www.unixstickers.com/image/data/stickers/css3/css3_unofficial_shaped.png',
    thumbClasses: 'padding-50-100'
  },
  rating: 4.2,
  lead: '',
  instructor: {
    name: 'Manuel',
    img: {
      thumb: ''
    },
  }
},{
  _id: 11,
  title: 'NodeJs',
  img: {
    thumb: 'https://node-os.com/images/nodejs.png',
    thumbClasses: 'padding-50-100'
  },
  rating: 4.2,
  lead: '',
  instructor: {
    name: 'Isidro',
    img: {
      thumb: ''
    },
  }
},{
  _id: 12,
  title: 'Google Chrome',
  img: {
    thumb: 'https://lh3.googleusercontent.com/nYhPnY2I-e9rpqnid9u9aAODz4C04OycEGxqHG5vxFnA35OGmLMrrUmhM9eaHKJ7liB-=w300',
    thumbClasses: 'padding-50-100'
  },
  rating: 4.2,
  lead: '',
  instructor: {
    name: 'Victor',
    img: {
      thumb: ''
    },
  }
},{
  _id: 13,
  title: 'Terminal Application',
  img: {
    thumb: 'http://icons.iconarchive.com/icons/froyoshark/enkel/512/Terminal-icon.png',
    thumbClasses: 'padding-50-100'
  },
  rating: 4.2,
  lead: '',
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
  rating: 4.2,
  lead: '',
  instructor: {
    name: 'Edi',
    img: {
      thumb: ''
    },
  }
},{
  _id: 15,
  title: 'Linux',
  img: {
    thumb: 'https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Linux_-_Tux-512.png',
    thumbClasses: 'padding-50-100'
  },
  rating: 4.2,
  lead: '',
  instructor: {
    name: 'Ernesto',
    img: {
      thumb: ''
    },
  }
},{
  _id: 16,
  title: 'Amazon Web Services',
  img: {
    thumb: 'https://www.cloudbees.com/sites/default/files/aws-final-logo.png',
    thumbClasses: 'padding-50-100'
  },
  rating: 4.2,
  lead: '',
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
  getNetwork(){
    return {
      title: 'Angular: Modern Front-End (UI) Framework',
      rating: 3,
      lead: 'Angular is a strong competitor for front-end development. It binds together componetization'+
      ' ideology and modularity of the user interface.',
      tags: ['design','front-end', 'web'],
      instructor: 'Jesus Rocha'
    };
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