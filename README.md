# Async Workshop

You will learn on this workshop:

- Why javascript is working asynchron way. How does it affects the browser.
- How the promises are working?
- Error handling with promises.
- Async await syntax.
- How can you handle multiple promises.
- how can you create one of them.

## Setting up the repo

- Make sure that the [Live Server VS code extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) is installed.

## Async Demo

Why we need async Javascript?

- Start the live server.
- Open the `http://localhost:5500/demo`
- Check the responseiveness of the page:
  - Try out the on/off button.
  - Scroll the text.
  - Hover the buttons. 
- Click on the blocking button
  - check the responsivness again.
  - after the browser's unresponsive alert is shown, click to reload.
- Click the non blocking button
  - check the responsiveness again

## Task1: Handle a success promise

- Open the `http://localhost:5500/task1`
- Work in the `task1/task1.js`
- Fill the click handler for `waitButton`.

Requirements:

- [ ] After about a 2 secs waiting the `The promise is successfully resolved: ${promiseValue}` message should be shown.
- [ ] `then` syntax is used.

## Task2: Chain promises

- Open the `http://localhost:5500/task1`
- Work in the `task1/task1.js`
- Fill the click handler for `waitButton2`.

Requirements:

- [ ] After about a 2 secs waiting the `The 1st promise is resolved: ${promiseValue}.` message should be shown.
- [ ] After about a 4 secs later the `The 2nd promise is resolved: ${promiseValue}.` message should be shown.
- [ ] `then` syntax is used.


## Task3: Handle errors

- Open the `http://localhost:5500/task1`
- Work in the `task1/task1.js`
- Modify the click handler for `waitButton3`.

Requirements:

- [ ] The `waitForUncertainty` promise is used.
- [ ] If the promise is resolved as a success, the `Promise is resolved as a success: ${promiseValue}` should be shown as a normal message.
- [ ] If the promise is resolved as a failure, the `Promise is resolved as a failure: ${promiseValue}` should be shown as an error message (colored red).

## Task4: Use the async await syntax

- Open the `http://localhost:5500/task1`
- Work in the `task1/task1.js`

Requirements:
  - [ ] Modify the `waitButton` click event handler function to use async, await syntax.
  - [ ] Modify the `waitButton2` click event handler function to use async, await syntax, original 2 promises version. (2 secs, 4 secs)

## Task5: Handle errors with the async await syntax

- Open the `http://localhost:5500/task1`
- Work in the `task1/task1.js`

Requirements:
  - [ ] Modify the `waitButton3` click event handler function to use async, await syntax with error handling.

## Task6: Using fetch with parameters

- Open the `http://localhost:5500/task2`
- Work in the `task2/task2.js`
- Fill the event handler for `button1`
- Use Star Wars API to solve the tasks: `https://swapi.dev/`
- Use the `https://swapi.dev/people/${id}` endpoint.

Requirements:
  - [ ] When the `👾 Hey Luke!` button is clicked, show the name of the character whose ID is typed into the Character ID input field (Try `1` for Luke Skywalker).  
  - [ ] Async await syntax is used.

Tips:
  - You can use the `getCharacterId()` helper function.
  - Use the `https://swapi.dev/people/${id}` endpoint.
  - You can use `name` property of the response data.


## Task7: Multiple fetches

- Open the `http://localhost:5500/task2`
- Work in the `task2/task2.js`
- Fill the event handler for `button2`
- Use Star Wars API to solve the tasks: `https://swapi.dev/`

Requirements:
  - [ ] When the `🚀 Show their starship!` button is clicked, show the name of the character whose ID is typed into the Character ID input field (Try `1` for Luke Skywalker).
  - [ ] Show also the character's 1st starship name.
  - [ ] Async await syntax is used.

Tips:
  - Use the response data `starship` field. It contains urls.

## Task8: Multiple fetches at same time

- Open the `http://localhost:5500/task2`
- Work in the `task2/task2.js`
- Fill the event handler for `button3`
- Use Star Wars API to solve the tasks: `https://swapi.dev/`
- Use the `https://swapi.dev/people/${id}` endpoint.

Requirements:
  - [ ] When the `🚀🚀🚀 Show their starships!` button is clicked, show the name of the character whose ID is typed into the Character ID input field (Try `1` for Luke Skywalker).
  - [ ] Show also the character's all straship names concatenated with a coma (`,`). It should work for any number of starships.
  - [ ] Async await syntax is used.

Tips:
  - You can use `Promise.all()` or `Promise.allSettled()` to start multiple fetches.
  - You can use `array.join()` method to join an array with a given character.

# Task9, extra: Handle errors with fetch

- Open the `http://localhost:5500/task2`
- Work in the `task2/task2.js`
- Fill the event handler for `button1`
- Use Star Wars API to solve the tasks: `https://swapi.dev/`
- Use the `https://swapi.dev/people/${id}` endpoint.

Requirements:
  - [ ] If an invalid URL is used (`e.g.: https://oops.swapi.dev/people/${id}`), the `Error getting the character` error message should be shown.
  - [ ] If the response's status code is 404 `The character not found.` error message should be shown.
  - [ ] If the response's status code is something other than 2xx, `The response is wrong.` error message should be shown.

Tip:
  - Fetch promise is rejected only if the network connection is wrong.
  - You can use the `response.status` or `response.ok` to examine status codes or success of the HTTP message.

# Task, extra: Create a promise from an existing DOM API

- Open the `http://localhost:5500/loading-image`
- Work in the `loading-image/loading.js`
- Fill the event handler for `loadButton`
- This code loads an image. While the image is loading, it shows a loading text.
- If an error is happened, it shows an error message. You can try it out by modifying the `imageUrl` variable to something invalid.
- The code use the `img` DOM element's `load` and `error` events to handle these cases  


Requirements:
- [ ] Create a new promise which resolves success, if the image is loaded.
- [ ] The promise should resolve to failed, if there is some error during loading the image.
- [ ] The image should be shown on the page if the loading is finished with an error.
- [ ] The error message should be shown, if an error is happened.
- [ ] You can use either async await or then syntax.

Tips: 
  - Check the task1's `waitForUncertainty()` function to inspire yourself with a promise constructor syntax.
  - If a promise is failed, it's catch get a standard `Error` object. It has a `message` property.
