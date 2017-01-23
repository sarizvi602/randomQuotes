//get random quotes from array by using random indices
function getQuote() {
  var currentIndex = 0;
  function getRandIndices(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  currentIndex = getRandIndices(0, quoteArray.length);

//To make sure no index repeats consecutively
  while (currentIndex === previousIndex) {
    currentIndex = getRandIndices(0, quoteArray.length);
  }
  previousIndex = currentIndex;

 //get quote and author from array
  document.getElementById("quote").innerHTML = quoteArray[currentIndex].quote;

  document.getElementById("author").innerHTML = quoteArray[currentIndex].author;
}

//Create tweet for the quote
function tweetQuote() {
  var tweetMsg = quoteArray[previousIndex].quote + " -" + quoteArray[previousIndex].author + " " + "@rizvi_blogette",
    tweetLink = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(tweetMsg);
  window.open(tweetLink, '_blank');
}

//push quote to links and buttons
document.addEventListener('DOMContentLoaded', getQuote);
document.getElementById("newQuoteButton").addEventListener('click', getQuote);
document.getElementById("twitterButton").addEventListener('click', tweetQuote);

var previousIndex = 0;
//array of quotes
var quoteArray = [{
  quote: "You can do anything, but not everything.",
  author: "David Allen"
}, {
  quote: "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.",
  author: "Antoine de Saint-Exupéry"
}, {
  quote: " We are what we repeatedly do; excellence, then, is not an act but a habit.",
  author: "Aristotle"
}, {
  quote: "Watch your thoughts; they become words. Watch your words; they become actions. Watch your actions; they become habits. Watch your habits; they become character. Watch your character; it becomes your destiny.",
  author: "Lao-Tze"
}, {
  quote: "Success usually comes to those who are too busy to be looking for it.",
  author: "Henry David Thoreau"
}, {
  quote: "The only way to do great work is to love what you do.",
  author: "Steve Jobs"
}, {
  quote: "You may have to fight a battle more than once to win it.",
  author: "Margaret Thatcher"
}, {
  quote: "The best revenge is massive success.",
  author: "Frank Sinatra"
}, {
  quote: "The question isn't who is going to let me; it's who is going to stop me.",
  author: "Ayn Rand"
}, {
  quote: "Example is not the main thing in influencing others. It is the only thing.",
  author: "Albert Schweitzer"
}, {
  quote: "Leaders must be close enough to relate to others, but far enough ahead to motivate them.",
  author: "John C. Maxwell"
}, {
  quote: "The mark of a great man is one who knows when to set aside the important things in order to accomplish the vital ones.",
  author: "Brandon Sanderson"
}, {
  quote: "Leadership is not about titles, positions, or flowcharts. It is about one life influencing another.",
  author: "John C. Maxwell"
}, {
  quote: "You have to be burning with an idea, or a problem, or a wrong that you want to right. If you're not passionate enough from the start, you'll never stick it out.",
  author: "Steve Jobs"
}, {
  quote: "A leader ... is like a shepherd. He stays behind the flock, letting the most nimble go out ahead, whereupon the others follow, not realizing that all along they are being directed from behind.",
  author: "Nelson Mandela"
}, {
  quote: "Being responsible sometimes means pissing people off.",
  author: "Colin Powell"
}, {
  quote: "Do you know that one of the great problems of our age is that we are governed by people who care more about feelings than they do about thoughts and ideas.",
  author: "Margaret Thatcher"
}, {
  quote: "A leader is a dealer in hope.",
  author: "Napoleon"
}, {
  quote: "The best executive is the one who has sense enough to pick good men to do what he wants done, and self-restraint to keep from meddling with them while they do it.",
  author: "Theodore Roosevelt"
}, {
  quote: "If you would convince a man that he does wrong, do right. But do not care to convince him. Men will believe what they see. Let them see.",
  author: "Henry David Thoreau"
}, {
  quote: "I cannot trust a man to control others who cannot control himself.",
  author: "Robert E. Lee"
}, {
  quote: "Consensus: the process of abandoning all beliefs, principles, values, and policies in search of something in which no one believes, but to which no one objects; the process of avoiding the very issues that have to be solved, merely because you cannot get agreement on the way ahead. What great cause would have been fought and won under the banner: 'I stand for consensus?'",
  author: "Margaret Thatcher"
}, {
  quote: "A leader takes people where they want to go. A great leader takes people where they don't necessarily want to go but ought to be.",
  author: "Rosalynn Carter"
}, {
  quote: "There is a difference between being a leader and being a boss. Both are based on authority. A boss demands blind obedience; a leader earns his authority through understanding and trust.",
  author: "Klaus Balkenhol"
}, {
  quote: "You get in life what you have the courage to ask for.",
  author: "Nancy D. Solomon"
}, {
  quote: "In the end, it is important to remember that we cannot become what we need to be by remaining what we are.",
  author: "Max De Pree"
}, {
  quote: "A leader isn't someone who forces others to make him stronger; a leader is someone willing to give his strength to others so that they may have the strength to stand on their own.",
  author: "Beth Revis"
}, {
  quote: "Always remember, Son, the best boss is the one who bosses the least. Whether it's cattle, or horses, or men, the least government is the best government.",
  author: "Ralph Moody"
}, {
  quote: "If you really want the key to success, start by doing the opposite of what everyone else is doing.",
  author: "Brad Szollose"
}, {
  quote: "'Give as few orders as possible,' his father had told him once long ago. 'Once you've given orders on a subject, you must always give orders on that subject.",
  author: "Frank Herbert (from Dune)"
}, {
  quote: "The art of leadership is saying no, not yes. It is very easy to say yes.",
  author: "Tony Blair"
}, {
  quote: "Wisdom equals knowledge plus courage. You have to not only know what to do and when to do it, but you have to also be brave enough to follow through.",
  author: "Jarod Kintz"
}, {
  quote: "In a battle between two ideas, the best one doesn't necessarily win. No, the idea that wins is the one with the most fearless heretic behind it.",
  author: "Seth Godin"
}, {
  quote: "If you want to build a ship, don't drum up the men to gather wood, divide the work, and give orders. Instead, teach them to yearn for the vast and endless sea.",
  author: "Antoine de Saint - Exupery"
},{
  quote: "Don't be afraid to give up the good to go for the great.",
  author: "John D. Rockefeller"
}, {
  quote: "If you can't explain it simply, you don't understand it well enough.",
  author: "Albert Einstein"
}, {
  quote: "There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.",
  author: "Ray Goforth"
}, {
  quote: "Success is the sum of small efforts, repeated day in and day out.",
  author: "Robert Collier"
}, {
  quote: "Courage is resistance to fear, mastery of fear -- not absence of fear.",
  author: "Mark Twain"
}, {
  quote: "Only put off until tomorrow what you are willing to die having left undone.",
  author: "Pablo Picasso"
}, {
  quote: "Twenty years from now, you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
  author: "Mark Twain"
}, {
  quote: "The successful warrior is the average man, with laserlike focus.",
  author: "Bruce Lee"
}, {
  quote: "You can't connect the dots looking forward; you can only connect them looking backward. So you have to trust that the dots will somehow connect in your future. You have to trust in something -- your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life.",
  author: "Steve Jobs"
}, {
  quote: "Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better.",
  author: "Jim Rohn"
}, {
  quote: "The No. 1 reason people fail in life is because they listen to their friends, family, and neighbors.",
  author: "Napoleon Hill"
}, {
  quote: "You may have to fight a battle more than once to win it.",
  author: "Margaret Thatcher"
}, {
  quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
  author: "Thomas A. Edison"
}, {
  quote: "What would you attempt to do if you knew you would not fail?",
  author: "Robert Schuller"
}, {
  quote: "Always bear in mind that your own resolution to success is more important than any other one thing.",
  author: "Abraham Lincoln"
}, {
  quote: "Successful and unsuccessful people do not vary greatly in their abilities. They vary in their desires to reach their potential.",
  author: "John Maxwell"
}, {
  quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
  author: "Maya Angelou"
}, {
  quote: "Much of the stress that people feel doesn't come from having too much to do. It comes from not finishing what they've started.",
  author: "David Allen"
}, {
  quote: "Focus on the journey, not the destination. Joy is found not in finishing an activity but in doing it.",
  author: "Greg Anderson"
}, {
  quote: "You never regret being kind.",
  author: "Nicole Shepherd",
}, {
  quote: "Success at the highest level comes down to one question: Can you decide that your happiness can come from someone else's success?",
  author: "Bill Walton"
}, {
  quote: "Do what you have always done and you'll get what you have always got.",
  author: "Sue Knight"
}, {
  quote: "Think of what you have rather than of what you lack. Of the things you have, select the best and then reflect how eagerly you would have sought them if you did not have them.",
  author: "Marcus Aurelius"
}, {
  quote: "Happiness is where we find it, but very rarely where we seek it.",
  author: "J.Petit Senn"
}, {
  quote: "To be content means that you realize you contain what you seek.",
  author: "Alan Cohen"
}, {
  quote: "Expecting life to treat you well because you are a good person is like expecting an angry bull not to charge because you are a vegetarian.",
  author: "Shari R.Barr"
}, {
  quote: "View your life from your funeral: Looking back at your life experiences, what have you accomplished? What would you have wanted to accomplish but didn't? What were the happy moments? What were the sad? What would you do again, and what wouldn't you do?",
  author: "Victor Frankl"
}, {
  quote: "Boredom is the feeling that everything is a waste of time...serenity, that nothing is.",
  author: "Thomas Szasz"
}, {
  quote: "To handle yourself, use your head; to handle others, use your heart.",
  author: "Eleanor Roosevelt"
}, {
  quote: "The mediocre teacher tells. The good teacher explains. The superior teacher demonstrates. The great teacher inspires.",
  author: "William Arthur Ward"
}, {
  quote: "Keep your fears to yourself, but share your courage with others.",
  author: "Robert Louis Stevenson"
}, {
  quote: "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets people to do the greatest things.",
  author: "Ronald Reagan"
}, {
  quote: "Power isn't control at all-power is strength, and giving that strength to others. A leader isn't someone who forces others to make him stronger; a leader is someone willing to give his strength to others that they may have the strength to stand on their own.",
  author: "Beth Revis"
}, {
  quote: "Don't tell people how to do things; tell them what to do and let them surprise you with their results.",
  author: "George S. Patton Jr"
}, {
  quote: "Leadership is the art of getting someone else to do something you want done because he wants to do it.",
  author: "Dwight D. Eisenhower"
}, {
  quote: "Victory has a hundred fathers and defeat is an orphan.",
  author: "John F. Kennedy"
}, {
  quote: "Management is doing things right; leadership is doing the right things.",
  author: "Peter F. Drucker"
}, {
  quote: "Example is not the main thing in influencing others. It is the only thing.",
  author: "Albert Schweitzer"
}, {
  quote: "Leaders must be close enough to relate to others, but far enough ahead to motivate them.",
  author: "John C. Maxwell"
}, {
  quote: "The mark of a great man is one who knows when to set aside the important things in order to accomplish the vital ones.",
  author: "Brandon Sanderson"
}, {
  quote: "Leadership is not about titles, positions, or flowcharts. It is about one life influencing another.",
  author: "John C. Maxwell"
}, {
  quote: "You have to be burning with an idea, or a problem, or a wrong that you want to right. If you're not passionate enough from the start, you'll never stick it out.",
  author: "Steve Jobs"
}, {
  quote: "A leader ... is like a shepherd. He stays behind the flock, letting the most nimble go out ahead, whereupon the others follow, not realizing that all along they are being directed from behind.",
  author: "Nelson Mandela"
}, {
  quote: "Being responsible sometimes means pissing people off.",
  author: "Colin Powell"
}, {
  quote: "Do you know that one of the great problems of our age is that we are governed by people who care more about feelings than they do about thoughts and ideas.",
  author: "Margaret Thatcher"
}, {
  quote: "A leader is a dealer in hope.",
  author: "Napoleon"
}, {
  quote: "The best executive is the one who has sense enough to pick good men to do what he wants done, and self-restraint to keep from meddling with them while they do it.",
  author: "Theodore Roosevelt"
}, {
  quote: "If you would convince a man that he does wrong, do right. But do not care to convince him. Men will believe what they see. Let them see.",
  author: "Henry David Thoreau"
}, {
  quote: "I cannot trust a man to control others who cannot control himself.",
  author: "Robert E. Lee"
}];