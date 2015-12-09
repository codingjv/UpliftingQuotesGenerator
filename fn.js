$(document).ready(function() {
  // Store quotes in array
  var manyQuotes = [
    "Problems are not stop signs, they are guidelines. ~Robert H. Schuller",
    "You were given this life because you are strong enough to live it. ~Unknown",
    "Success is the ability to go from failure to failure without losing your enthusiasm. ~Winston Churchill",
    "Failure is only the Opportunity to Begin Again, only this time more Wisely. ~Henry Ford",
    "Passion is energy. Feel the power that comes from focusing on what excites you. ~Oprah Winfrey",
    "Only as high as I reach can I Grow, only as far as I Seek can I Go, only as deep as I Look can I see, only as much as I Dream can I Be. ~Karen Raun",
    "Be the reason someone smiles today. ~KatrinaMayer.com",
    "We rise by lifting others. ~Robert Ingersoll",
    "If your dreams do not scare you, they are not big enough. ~Ellen Johnson Sirleaf",
    "Hardships often prepare ordinary people for an extraordinary destiny... ~C.S. Lewis",
    "Be an encourager. The world has plenty of critics already. ~DaveWillis.org",
    "Discouragement and failure are two of the surest stepping stones to success. ~Dale Carnegie",
    "Always rember that, in some way or another you're somebody's angel, even if you don't know it. ~Unknown",
    "Your present circumstances don't determine where you can go; they merely determine where you Start. ~Nido Qubein",
    "Be a reflection of what you'd like to see in others. If you want love, give Love. If you want honesty, give Honesty. If you want respect, give Respect. You Get in return, what you Give. ~Unknown",
    "Always remember that the future comes one day at a time. ~Dean Acheson",
    "Life is about Balance. Be ind, but don't let people abuse you. Trust, but don't be deceived. Be Content, but never stop Improving Yourself. ~Ziglar.com",
    "Never give up, for that is just the place and time that the tide will turn. ~Harriet Beecher Stowe",
    "It's not whether you get knocked down, it's whether you get up. ~Vince Lombardi",
    "'Experience' is the name everyone gives to their mistakes. ~Oscar Wilde",
    "Minds are like parachutes. They only function when they are open. ~James Dewar",
    "Don't let the noise of other peoples opinions drown out your inner voice. ~Steve Jobs",
    "In this world we have to take chances, sometimes they're worth it and sometimes they're not, but I'm telling you now, you will never now until you try. ~wisdomquotesandstories.com",
    "The more you like yourself, the less you are like anyone else, which makes you Unique. ~Walt Disney",
    "You are somebody's reason to smile. ~Chinese Proverb",
    "The tallest oak in the forest was once just a little nut that held its ground. ~QuotesLoveandLife.com",
    "If we could see the miracle of a single flower clearly, our whole life would change. ~Buddha",
    "Only surround yourself with people who are going to lift you Higher. ~Oprah",
    "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all. ~Dale Carnegie",
    "Anyone who has never made a mistae has never tried anything new. ~Albert Einstein",
    "The best way to predict the future is to create it. ~Peter Drucker",
    "There are no traffic jams along the extra mile. ~Roger Staubach",
    "Someone's sitting in the shade today because someone planted a tree a long time ago. ~Warren Buffett"
  ];

  // run placeQuote immediately
  placeQuote();
  // and again when button clicked
  $('#showQuote').click(placeQuote);

  function placeQuote() {
    // get random number in range of indexes of quotes array
    // and get quote at that index
    randomQuote = manyQuotes[Math.floor(Math.random() * manyQuotes.length)];
    // split quote into array to have author on separate line
    quoteArr = randomQuote.split(' ~');
    // and put quote in quoteHolder well
    $('#quoteHolder').html('<p>' + quoteArr[0] + '</p><p class="text-right">~ ' + quoteArr[1] + '</p>');
  }

  $('#saveQuote1').click(placeQuote1);

  function placeQuote1() {
    // get main quote and put it in 1st saved quoteHolder well
    var quote1 = $('#quoteHolder').text();
    $('#quoteHolder1').html(quote1);
  }

  $('#saveQuote2').click(placeQuote2);

  function placeQuote2() {
    // get main quote and put it in 1st saved quoteHolder well
    var quote2 = $('#quoteHolder').text();
    $('#quoteHolder2').html(quote2);
  }

  $('#saveQuote3').click(placeQuote3);

  function placeQuote3() {
    // get main quote and put it in 1st saved quoteHolder well
    var quote3 = $('#quoteHolder').text();
    $('#quoteHolder3').html(quote3);
  }

  /*  
    $('#saveQuote1').click(placeQuote1);
    
    function placeQuote1() {
      // get random number in range of indexes of quotes array
      // and get quote at that index
      randomQuote = manyQuotes[Math.floor(Math.random() * manyQuotes.length)];
      // split quote into array to have author on separate line
      quoteArr = randomQuote.split(' ~');
      // and put quote in quoteHolder well
      $('#quoteHolder1').html('<p>' + quoteArr[0] + '</p><p class="text-right">~ ' + quoteArr[1] + '</p>');
      }


  $('#saveQuote2').click(placeQuote2);
    
    function placeQuote2() {
      // get random number in range of indexes of quotes array
      // and get quote at that index
      randomQuote = manyQuotes[Math.floor(Math.random() * manyQuotes.length)];
      // split quote into array to have author on separate line
      quoteArr = randomQuote.split(' ~');
      // and put quote in quoteHolder well
      $('#quoteHolder2').html('<p>' + quoteArr[0] + '</p><p class="text-right">~ ' + quoteArr[1] + '</p>');
      }
    
    
  $('#saveQuote3').click(placeQuote3);
    
    function placeQuote3() {
      // get random number in range of indexes of quotes array
      // and get quote at that index
      randomQuote = manyQuotes[Math.floor(Math.random() * manyQuotes.length)];
      // split quote into array to have author on separate line
      quoteArr = randomQuote.split(' ~');
      // and put quote in quoteHolder well
      $('#quoteHolder3').html('<p>' + quoteArr[0] + '</p><p class="text-right">~ ' + quoteArr[1] + '</p>');
      }
  */

  /*
    $('#saveQuote').click(function(e){
      // tell browser not to do default action
      e.preventDefault();
      // get quote from quoteHolder

  //$('#saveQuote').click(placeQuote2);

  //  function placeQuote2() {
  // / get quote from quoteHolder
      var quote2  = $('#quoteHolder').text();

  $('#quoteHolder2').html(quote2);

      }

  */

  $('#tweetIt').click(function(e) {
    // tell browser not to do default action
    e.preventDefault();
    // get quote from quoteHolder
    var quote = $('#quoteHolder').text();

    // trigger new window with Twitter dialog
    window.open('http://twitter.com/share?url=undefined&text=' + quote, 'twitterwindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 225) + ', left=' + $(window).width() / 2 + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
  });

  $('#tweetIt1').click(function(e) {
    // tell browser not to do default action
    e.preventDefault();
    // get quote from quoteHolder
    var quote1 = $('#quoteHolder1').text();

    // trigger new window with Twitter dialog
    window.open('http://twitter.com/share?url=undefined&text=' + quote1, 'twitterwindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 225) + ', left=' + $(window).width() / 2 + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
  });

  $('#tweetIt2').click(function(e) {
    // tell browser not to do default action
    e.preventDefault();
    // get quote from quoteHolder
    var quote2 = $('#quoteHolder2').text();

    // trigger new window with Twitter dialog
    window.open('http://twitter.com/share?url=undefined&text=' + quote2, 'twitterwindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 225) + ', left=' + $(window).width() / 2 + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
  });

  $('#tweetIt3').click(function(e) {
    // tell browser not to do default action
    e.preventDefault();
    // get quote from quoteHolder
    var quote3 = $('#quoteHolder3').text();

    // trigger new window with Twitter dialog
    window.open('http://twitter.com/share?url=undefined&text=' + quote3, 'twitterwindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 225) + ', left=' + $(window).width() / 2 + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
  });

});