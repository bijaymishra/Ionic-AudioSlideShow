angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Chapters', function() {
  // Might use a resource here that returns a JSON array
	var sections = [];
	
  sections[0] =[{id:0,  name:'', img:'assets/c01/images/c01_welcome.jpg', sound: 'assets/c01/audio/welcome.mp3', label:'', caption: '', next:false}];  

  sections[1] =[   
	  {id:1,  name:'', img:'assets/c01/images/pumptrns.jpg', sound: 'assets/c01/audio/c01_know_p02_a01.mp3', label:'Welcome!',
	  caption: 'Welcome to the Medtronic online training for the MiniMed™ 640G insulin pump.', next:true},
	  {id:2,  name:'', img:'assets/c01/images/conv.jpg', sound: 'assets/c01/audio/c01_know_p02_a02a.mp3', label:'', 
	  caption: 'Whether you\'ve chosen pump therapy because of its convenience,', next:true},
	  {id:3,  name:'', img:'assets/c01/images/flex.jpg', sound: 'assets/c01/audio/c01_know_p02_a02b.mp3', label:'',
	   caption: 'the flexibility it provides,', next:true},
	  {id:4,  name:'', img:'assets/c01/images/imglcse.jpg', sound: 'assets/c01/audio/c01_know_p02_a02c.mp3', label:'', 
	  caption: 'or to help improve your glucose control, your pump will be a valuable tool for your diabetes management.', next:true},
	  {id:5,  name:'', img:'assets/c01/images/laptop.jpg', sound: 'assets/c01/audio/c01_know_p02_a03.mp3', label:'', 
	  caption: 'We want to thank you for choosing the MiniMed™ insulin pump and look forward to getting you started.', next:true},
	  {id:6,  name:'', img:'assets/c01/images/top.jpg', sound: 'assets/c01/audio/c01_know_p02_a04.mp3', label:'', 
	  caption: 'The courses you\'ll be taking are designed to help you feel comfortable with your pump and prepare you for in-person training with your healthcare professional or certified product trainer.', next:true},
	  {id:7,  name:'', img:'assets/c01/images/syscare.jpg', sound: 'assets/c01/audio/c01_know_p02_a05.mp3', label:'', 
	  caption: 'You should find that it\'s quite easy to navigate through the courses, but if you need help at any time, just click the "Resources" button at the top of your screen and select Tour.', next:true},
	  {id:8,  name:'', img:'assets/c01/images/syscare.jpg', sound: 'assets/c01/audio/c01_know_p02_a06.mp3', label:'', 
	  caption: 'There you can also find the System Care Guide for tips on how to care for your MiniMed™ insulin pump.', next:true},
	  {id:9,  name:'', img:'assets/c01/images/syscare.jpg', sound: 'assets/c01/audio/c01_know_p02_a07.mp3', label:'', 
	  caption: 'This course, Getting to Know Your Pump, will introduce you to the parts of the pump and how it delivers insulin to you.', next:true},
	  {id:10, name:'', img:'assets/c01/images/syscare.jpg', sound: 'assets/c01/audio/c01_know_p02_a08.mp3', label:'', 
	  caption: 'It\'ll also cover the basics for using the buttons on the front of the pump.', next:true},
	  {id:11, name:'', img:'assets/c01/images/syscare.jpg', sound: 'assets/c01/audio/c01_know_p02_a04.mp3', label:'', 
	  caption: '', next:true},
			];
			
	var lessons = [];
			

  lessons[0] = [ {id:0, name:'Welcome', sections: sections[0]},
  				 {id:1, name:'Introduction', sections: sections[1]},
  				 {id:2, name:'Delivering Insulin', sections: sections[0]},
  				 {id:3, name:'Pump basics', sections: sections[0]},
  				 {id:4, name:'Conclusion', sections: sections[0]}
  				];
  lessons[1] = [{id:0, name:'Welcome', sections: sections[0]},
  				 {id:1, name:'Introduction', sections: sections[1]},
  				 {id:2, name:'Delivering Insulin', sections: sections[0]},
  				 {id:3, name:'Pump basics', sections: sections[0]},
  				 {id:4, name:'Conclusion', sections: sections[0]}];
  lessons[2] = [{id:0, name:'Welcome', sections: sections[0]},
  				 {id:1, name:'Introduction', sections: sections[1]},
  				 {id:2, name:'Delivering Insulin', sections: sections[0]},
  				 {id:3, name:'Pump basics', sections: sections[0]},
  				 {id:4, name:'Conclusion', sections: sections[0]}];
  lessons[3] = [{id:0, name:'Welcome', sections: sections[0]},
  				 {id:1, name:'Introduction', sections: sections[1]},
  				 {id:2, name:'Delivering Insulin', sections: sections[0]},
  				 {id:3, name:'Pump basics', sections: sections[0]},
  				 {id:4, name:'Conclusion', sections: sections[0]}];
  lessons[4] = [{id:0, name:'Welcome', sections: sections[0]},
  				 {id:1, name:'Introduction', sections: sections[1]},
  				 {id:2, name:'Delivering Insulin', sections: sections[0]},
  				 {id:3, name:'Pump basics', sections: sections[0]},
  				 {id:4, name:'Conclusion', sections: sections[0]}];
  lessons[5] = [{id:0, name:'Welcome', sections: sections[0]},
  				 {id:1, name:'Introduction', sections: sections[1]},
  				 {id:2, name:'Delivering Insulin', sections: sections[0]},
  				 {id:3, name:'Pump basics', sections: sections[0]},
  				 {id:4, name:'Conclusion', sections: sections[0]}];

  // Some fake testing data
  var chapters = [
    { id: 0, name: 'Getting to know', lessons: lessons[0] },
    { id: 1, name: 'Start', lessons: lessons[1] },
    { id: 2, name: 'Basal', lessons: lessons[2] },
    { id: 3, name: 'Giving', lessons: lessons[3] },
	{ id: 4, name: 'Suspend', lessons: lessons[4] },
	{ id: 5, name: 'Alerts', lessons: lessons[5] }
  ];

  return {
    all: function() {
      return chapters;
    },
    get: function(chapterId) {
      // Simple index lookup
      return chapters[chapterId];
    }
  }
});
