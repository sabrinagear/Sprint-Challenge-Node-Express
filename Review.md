# Review Questions

## What is Node.js?

Node.js is an open-source, cross-platform runtime environment for executing javascript code outside of a browser. We often use node.js for building APIs and backend services.

## What is Express?

Express is a lightweight framework for building APIs that builds upon Node and provides a robust set of features for web and mobile applications.

## Mention two parts of Express that you learned about this week.

1. We learned about routing with express, which refers to determining how an application responds to a client request to a particular endpoint (i.e. a URI (or path) and a specific HTTP request method (GET, POST, and so on)).

2. We also learned about writing and implimenting middleware with express. Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle. The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.

## What is Middleware?

Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next() middleware function is commonly denoted by a variable named next. Middleware functions can execute any code, make changes to the request and the response objects, end the request-response cycle, and call the next middleware function in the stack.

## What is a Resource?

A "resource" is simply an object, which defines one or more methods. The app.resource() method returns a new Resource object, which can be used to further map pathnames, nest resources, and more.

## What can the API return to help clients know if a request was successful?

A status code. A message.

## How can we partition our application into sub-applications?

Express supports the ability to mount other Express apps, as a sort of host / sub-app scenario by creating new instances of the Express object, and using it in another Express object just like a router or other middleware.

## What is express.json() and why do we need it?

This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.

We need it because a req.body’s shape is based on user-controlled input, all properties and values in this object are untrusted and should be validated before trusting.
