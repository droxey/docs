<!-- TITLE: Callbacks Lesson Plan -->
<!-- SUBTITLE: Written for my interview at Make School. -->

# Lesson Plan - Callbacks

## [1:00] Objectives

* Expand upon students' knowledge of `functions` and `variables`.
* Establish what a `callback` refers to in Computer Science.
* Introduce the relationship between a `function` and a `callback`.
* Experience first-class functions first-hand via a live-action `callback` demonstration in JavaScript.

## [7:00] Callbacks: Theory and Implementation

### [1:15] Variables vs Functions

* Inform students that a `function` can be a variable, too! Functions are just another type of value.
* All programming languages do not adhere to this principle, however. Lucky for us, JavaScript is but one example of a language that implements **first-class functions: the ability to store functions as variables**.
* Since a `function` can be a variable, that means we can pass a `function` as an argument to another `function`.
* When a `function` is passed to another `function`, we use a technique known as a `callback` in programming.

### [1:00] Introducing Callbacks

* We now know we save functions in variables then pass them as arguments to functions. What does that mean?
* Developers typically intend for the `function` receiving the callback to "do some work," then call back the `function` the developer passed in. When this `callback function` is executed, the results of the trigger function are passed to the `callback function`. We can then use that data in our programs effectively.

### [4:00] Live Code: Simple Callback

* Open up your editor and create a new JavaScript file.
* Inform students that you'll now create a simple callback that effectively demonstrates it's usage. Remember the Marco Polo game you used to play as a kid? Let's recreate that together right here, right now.

```javascript
// 01-marco-polo.js
// Introducing basic callbacks by implementing a simple version of a childhood game.

function getShoutResponse(phrase) {
  if (phrase === "Marco") {
    console.log("Marco? Polo!");
  } else {
    console.log(`${phrase}? Who?!`);
  }
}

function shoutItOut(phrase, respondToShout) {
  respondToShout(phrase);
}

shoutItOut("Marco", getShoutResponse);
shoutItOut("Dani", getShoutResponse);
```

* Key points to cover:
    * Passing a `function` to another `function` does not require the use of parenthesis. Parenthesis execute a `function` immediately. That isn't what we want here!  We want to run the `function` when someone shouts "Marco!"
    * Rule of thumb: don't include parenthesis when passing a `function` as an argument --- unless you intend to use the **result** of that `function`.

* Let's refactor the code a little and implement a different approach to a `callback`: **anonymous functions**.

* Anonymous functions are aptly named --- remember `shoutItOut` and `getShoutResponse` in our last example? In order to declare those functions, I had to think up a name for them. With anonymous callbacks, one need not name the callback function. Upon completion of `shoutItOut`, the body of the anonymous callback `function` is executed.

```javascript
// 02-marco-polo-refactor.js
// Introducing anonymous functions, closures, and lexical scope.

function shoutItOut(phrase) {
  return function() {
    if (phrase === "Marco") {
      console.log(`${phrase}? Who?!`);
    } else {
      console.log(`${phrase} who?!`);
    }
  };
}

shoutItOut("Marco")();
shoutItOut("Dani")();
```

### [0:45] Recap

1. We can store `functions` in variables, just like any other value.
1. A `callback` is just a `function` that is passed to another `function` as one of it's arguments.
1. A `function`, and therefore, a `callback`, can have a name, or can be implemented anonymously.

## [10:00] Activity - Puck.js

* The best way to understand a new concept in programming is through direct experience. In this activity, we'll demonstrate what a `callback` looks like in real-life via physical, tactile buttons that trigger a change to a website.

* Distribute a Puck.js device to each side of the room. Hand it to a student, and let them know they'll be assisting you in your demonstration today.

* Inform students that this might look like an ordinary, round white puck to them --- what if you told them these were special buttons that could communicate with a website you've created?

* Today, we're going to experience the power of a `callback` via a live action demonstration.

* Share the website's User Story with your students:
    1. User **opens up website in Chrome**.
    1. System **greets User with instructions**.
    1. User **pairs Puck.js device** with Chrome.
    1. User **"clicks" Puck.js device** in order to **trigger a `callback`**.
    1. System **responds to trigger** and **executes a `callback`** that:
        1. **Visualizes** the **trigger and `callback` code**.
        1. **Generates** a **random RGB color**.
        1. **Changes** the **background color** on the site to the aforementioned **generated RGB color.**
        1. **Lights up an LED** of the **corresponding color** on the User's Puck.js device.

* Ask students to press down on the Puck.js device you've distributed.
    * **Ask**: what happens when you press down?
    * **Answer**: It clicks!

* Great! It clicks. A "click" is one example of an **event handler** -- a "trigger" that invokes another action. Callbacks allow us to write some custom code in response to that trigger. On the web, event handlers are a great example of callbacks in action!
    * **Ask**: what are some other "events" that might occur on a webpage?
    * **Answer**: form submission, typing, resizing the browser, location updates, notifications, etc.

* After a few answers, fill in with additional event handlers you've encountered as a developer. Let students know that the code we write to respond to these events are called `callback` functions.

* Let's see that first hand, so we can better understand what that means for us as software developers!

* Open up the [demo site](https://droxey.com/teach-callbacks/) in Chrome.

* Inform students that you've created a website that will respond to each button's "click event" via a `callback`.

* Ask a student to click their button and hold it up for the room to see.
    * **Ask**: Observe the changes to the device and website. What changed?
    * **Answer**: LED lights up. Background on the website changes.

* Ask the other student to click their button.
    * **Ask**: Did the same thing happen?
    * **Answer**: The background and LED are a different color, without a doubt. However, the same process occurred, despite a different button being clicked. The experience of generating a random color and viewing it on the site and device is still the same!

* That's the power of callbacks! They allow us to write custom code with the intention of doing some work after something else has happened. Devs love callbacks --- syntactically, they assist in adhering to DRY development principles, allowing us to leverage the same `callback` code for groups of similar items --- just like our buttons today. Simply put: we can change the behavior of our program simply by switching up the functions we pass around. Pretty powerful, right?

## [2:00] Wrap Up and Dismiss

* Check in with students and ask if they have any questions regarding callbacks: theory, callback, or demonstration. If no questions, cold call a student:
    * **Ask**: OK, last one. One sentence, in your own words: what's a `callback`?
    * **Answer**: Code that executes in response to an action or trigger.

* Praise students for grasping a difficult programming concept this afternoon, then dismiss the class.
