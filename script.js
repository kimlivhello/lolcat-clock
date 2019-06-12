var noon = 12;
var evening = 18;

var wakeUpTime = 7;
var lunchTime = 12;
var napTime = 15;
var partyTime= 19;
var timeNow = new Date().getHours();

var updateClock = function() {

  var messageText;
  var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
  var lolcat = document.getElementById('lolcat');

  var timeEventJS = document.getElementById("timeEvent");

  //Update image and text
  
  if (timeNow == partyTime){
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
      messageText = "IZ PARTEE TIME!!";
  } else if (timeNow == napTime) {
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
      messageText = "IZ NAP TIME...";
  } else if (timeNow == lunchTime) {
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
      messageText = "IZ NOM NOM NOM TIME!!";
  } else if (timeNow == wakeUpTime) {
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
      messageText = "IZ TIME TO GETTUP.";
  } else if (timeNow < noon) { 
      messageText = "Good morning!"; 
  } else if (timeNow > evening) {
      messageText = "Good Evening!";
  } else {
      messageText = "Good afternoon!";
  }
    

  timeEventJS.innerText = messageText;
  lolcat.src = image;


  var showCurrentTime = function() {
        
        // display the string on the webpage
        var clock = document.getElementById('clock');
    
        var currentTime = new Date();
    
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var meridian = "AM";
    
        // Set hours 
        if (hours >= noon) 
        { 
            meridian = "PM"; 
        }  
        if (hours > noon) 
        { 
            hours = hours - 12; 
        }
    
        // Set Minutes
        if (minutes < 10)
        {
            minutes = "0" + minutes;
        }
    
        // Set Seconds
        if (seconds < 10)
        {
            seconds = "0" + seconds;
        }
    
        // put together the string that displays the time
        var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
    
        clock.innerText = clockTime;
    };

showCurrentTime();  
  
};

updateClock();

var oneSecond = 1000;
setInterval( updateClock, oneSecond);

// Party Time Button

var partyTimeButton = document.getElementById("partyTimeButton");
var isPartyTime = false;

var partyEvent = function() {
  
  if (isPartyTime === false) {
    isPartyTime = true;
    timeNow = partyTime;
    partyTimeButton.innerText = "PARTY TIME!";
    partyTimeButton.style.backgroundColor = "#222";
  } else {
    isPartyTime = false;
    timeNow = new Date().getHours();
    partyTimeButton.innerText = "PARTY OVER";
    partyTimeButton.style.backgroundColor = "#700001";
  }
  
};

partyTimeButton.addEventListener('click', partyEvent);

// Time Selectors

var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var wakeUpEvent = function() {
  wakeUpTime = wakeUpTimeSelector.value;
};
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);


var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var lunchTimeEvent = function() {
  lunchTime = lunchTimeSelector.value;
};
lunchTimeSelector.addEventListener('change', lunchTimeEvent);


var napTimeSelector = document.getElementById("napTimeSelector");
var napTimeEvent = function() {
  napTime = napTimeSelector.value;
};
napTimeSelector.addEventListener('change', napTimeEvent);
