# Control Flow Lab

## Overview

In this lab, we will practice working with functions in JavaScript.

## Objectives

1. Practice writing `function myFunctionName() { }` statements.

2. Practice returning values from within functions.

3. Practice writing functions that accept arguments

## Introduction

You have been hired to assist Ed Sheeran's tour management team in the US, and
tasked with writing some helpful tools for the team in JavaScript.  There are a
few reoccurring challenges the team has been having lately that they need help
with.

The key word here is _reoccurring_.  In JavaScript, when we have to do the same
thing two or more times, it is way more efficient if we write that code _once_
instead of writing the same code over and over.  We can then place our code
inside a function, calling that function _as many times as we need_.

In this lab, we're going to practice and explore how functions make our jobs as
coders way easier and less repetitive.

### Converting to UK Time

For our first task, we need to convert the current local time to UK time (the
team has accidentally called a few times after he has gone to bed). So, if we're
on the east coast, and it's 4:30pm, it's actually _9:30pm_ in the UK, 5 hours
ahead.  On the west coast, 4:30pm is actually 12:30am, 8 hours ahead and _Ed is
definitely asleep_.

JavaScript has some handy built in functions for getting the time, so at any
time, we can run the following line to get the current hour wherever we
currently are:

```js
new Date().getHours()
```

This returns the current hour based on the 24 hour clock, so _13_ is 1pm, _16_
is 4pm, etc... if the number is greater than 12, subtract 12 to get the current
hour.  So, if we were writing from the east coast and needed to convert to UK
time, we would write:

```js
new Date().getHours() + 5 //returns whatever hour it is plus 5
```

and for the west coast

```js
new Date().getHours() + 8 //returns whatever hour it is plus 8
```

Writing this isn't too bad, but it is easy to forget the specific parts, and
wouldn't it be better if we had a shorter alternative, anyway? Well, we could
write a _function_ with an easy to remember name, like `getUKTime` that always
returned the hour in UK time:

```js
function getUKTime() {
  new Date().getHours() + 5
}

getUKTime()
// => UK time compared to Eastern Standard Time
```

With this function written, every time the management team needs to call Ed,
they don't need to remember the specific syntax of writing `new
Date().getHours()`.  Depending on the time of day, the results of `getUKTime()`
will be different, but the code is always the same!

### Challenge 1

Write the function `getUKTime()` as you see it above, but feel free to change
the amount of hours added to get accurate time (if you're not on the east coast).

Run `learn` to see how you did!

### Discount Tickets

Ed Sheeran is a nice guy.  He sometimes gives 20% off discount tickets to his
shows.  Depending on the original price of the ticket, the tour management team
needs a quick way to calculate this discount, regardless of what the original
price is.  

This is a great use case for adding _arguments_ into a function.  An argument is
an _input_, something we pass in when we call the function that is used inside
the function.  Arguments act similar to variables within a function; we can name
them whatever we want, and call that name inside the function knowing that it
represents whatever _will_ get passed in when the function is called.

If we had a 100 dollar ticket, for instance, `100` would be the argument being
passed in, and we would want our function to take off 20%, in this case,
returning `80`. If that original price changed to `56` dollars, the discounted
price would change to `44.8`.  We pass arguments in by adding them inside the
parentheses at the end of the function name, like so:

```js
function myFunctionWithArguments(myArgument) {
  //do some stuff with myArgument
  //return a dynamic result - the return value is typically dependent on the passed in argument
}
```

So a real example might be:

```js
function doubleTheInput(input) {
  return input * 2;
}

doubleTheInput(5)
// => 10
doubleTheInput(1)
// => 2
doubleTheInput(-40)
// => -80
doubleTheInput(500)
// => 1000
```

### Challenge 2

Write a function called `discountTicket` that takes in the original ticket price
as an argument and returns a price with 20% off.

### Challenge 3: Tweets to Fans

Ed Sheeran has a lot of fans out there, and they love tweeting at him.  There
are so many tweets that he can't reply to all of them, so he has asked you to
write a simple function that, given a fan's twitter account name, returns a
_string_ thanking the fan for their support.  

Write a function called `tweetReply` that takes in a string argument (the fan's
name) and adds the name in to a short thank you statement: "Hey (insert fan
here), thanks so much for the support! I really appreciate it!"

Good luck! Ed Sheeran appreciates your hard work!
