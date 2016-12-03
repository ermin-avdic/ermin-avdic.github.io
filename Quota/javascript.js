$(document).ready(function(){

  var randomNum;
  var randomQuote;
  var quotes;
  var authors;
  var getAuthor;

  function getQuote(){
    quotes = ["When 900 years old, you reach… Look as good, you will not.", "He’s holding a thermal detonator!",
     "Great, kid. Don’t get cocky", "You can’t win, Darth. Strike me down, and I will become more powerful than you could possibly imagine.",
      "Fear is the path to the dark side.", "Don't call me a mindless philosopher, you overweight glob of grease.", "Do. Or do not. There is no try",
       "Oh, come on. I don't sound really much like Peter Griffin.", "There. Proof. Garfield's eyes look like a pair of tits.",
        "The correct animal for inter-species super soldier is the koala. You would wind up with an army so cute, it couldn't be attacked.",
         "I'll get the blankets, you Google how to have child-like fun.", "A neutron walks into a bar and asks how much for a drink. The bartender replies 'for you, no charge'.",
          "Hey, you guys ready to let the dogs out?"];

    authors = ["Yoda", "C-3PO", "Han Solo", "Obi Wan Kenobi", "Yoda", "C-3PO", "Yoda", "Ted", "Ted", "Sheldon", "Sheldon", "Sheldon", "Alan"];


    randomNum = Math.floor((Math.random()*quotes.length));
    randomQuote = quotes[randomNum];
    getAuthor = authors[randomNum];


    $("#quote").text(randomQuote);
    $("#author").text("-" + getAuthor);
  };

  getQuote();

  $("#tweet-quote").on("click", function(){
    window.open("https://twitter.com/intent/tweet?text=" + randomQuote + " -" + getAuthor);
  });

  $("#new-quote").on("click", function(){
    getQuote();
  });

});
