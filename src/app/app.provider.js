import { Injectable } from '@angular/core';

var networks = [{
  title: 'Angular: Modern Front-End (UI) Framework',
  rating: 3,
  description: 'Angular is a strong competitor for front-end development. It binds together componetization'+
  ' ideology and modularity of the user interface.',
  tags: ['design','front-end', 'web'],
  instructor: 'Jesus Rocha'
},{
  title: 'Hybrid-Mobile Apps in Ionic',
  rating: 2,
  description: 'Building mobile apps had never been so fast and easy since Ionic came about.',
  tags: ['design','front-end', 'mobile'],
  instructor: 'Jesus Rocha'
},{
  title: 'Running a Server using HapiJs',
  rating: 4,
  description: 'The server model remains the traditional middleware software for connecting clients',
  tags: ['server-side','back-end'],
  instructor: 'Jesus Rocha'
},{
  title: 'Storing Large Data Sets with MongoDb',
  rating: 5,
  description: 'Using MongoDb to store and extract data. You may just discover eminent data from an analysis too.',
  instructor: 'Jesus Rocha',
  tags: ['database']
},{
  title: 'Collecting Data using Internet of Things (IoT)',
  rating: 3,
  description: 'Collect, Store, Compute & Execute with internet-enabled hardware',
  instructor: 'Jesus Rocha',
  tags: ['iot','internet-enabled']
},{
  title: 'How does Oauth work?',
  rating: 3,
  description: 'With Oauth you can connect to using identity retrieved from service providers programatically.',
  instructor: 'Jesus Rocha',
  tags: ['authentication','security','third-party']
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
      description: 'Angular is a strong competitor for front-end development. It binds together componetization'+
      ' ideology and modularity of the user interface.',
      tags: ['design','front-end', 'web'],
      instructor: 'Jesus Rocha'
    };
  }
  getNetworks( key, value ){
    switch( key ){
      case 'featured':
        var data = [];
        data.push( networks.slice(0, 3) );
        return data;
      case 'title':
        var i = networks.map(function(item){ return item.title;}).indexOf(value);
        return networks[i];
      default:
        var length = networks.length, data = [];
        var rows = (length / 3);
        for( var i = 0; i < rows; i++){
          data.push( networks.slice(i * 3, (i * 3) + 3) );
        }
        return data;
    }
  }
}