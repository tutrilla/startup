# Startup
For CS 260 Class

Website IP Address: 18.214.79.47

Website domain: recruitlang.com

**What is the application?**

This is a software that specializes in the management process of recruitling language specialists in the translation industry, ranging anywhere from translators, interpreters, voice talents, desktop publishers, etc.

## **Elevator Pitch**

Translation agencies are tasked to find the right linguists in order to ensure that the quality of the translation content is of an professional level. However, there are many things that go into the recruitment process of linguists in order to ensure that they are of professional grade. You may think that it is an easy process of just finding a person, giving them a test, and then adding them to your contact list, but there is many levels to consider, everything from seeing their translation quality, verifying that they are who they claim, and of course the paperwork. These recruitment teams often get overwhelmed with the amount that they have to juggle, and therefore relay on systems like task management systems or spreadsheets to organize their workflows. Recruitlang's purpose is to faciliate and ease that process, so that way vendor or resource managers can put their time and effort into recruiting the right talent instead of the majority of their time on figuring out on how to manage the workflow.

### **Key Features**

- Dashboard to see tasks
- Place to store applications
- Place to create requests for specific linguists of specific talents
- Place to manage the workflow, track progress of requests

## Design of recruitlang

It is going to have a login page as well as a dashboard initially. The login page will be the landing page initially.

Login page:

![Recruitlang's login page](Login%20page%20of%20recruitlang.png)

After signing in, you will be taken to the dashboard:

![Recruitlang's dashboard page](Dashboard%20of%20Recruitlang.jpg)

## Use of technology

HTML - HTML will be used in order to create the layout

CSS - CSS will be used in order to make the website design be more user friendly

Javascript - Javascript will be used to ensure that the website function accordingly

Node - Node will ensure that the server side of the website runs smoothly and efficiently

Database - A database will be used to store information for the website and make it so when another instance of the website is launched that the information is still there.

Websocket - You can see realtime changes to data on the dashboard.

## CSS Deliverable

For this deliverable, I styled the application

- Header, footer, and main content body

- Navigation elements: I built a navigation bar that is response

- Application elements: Use good and simple coloring

- Responsive to window resizing: My app resizing works

- Application text content: Font is consistent throughout application

- Application images: The logo is still there from the html deliverable

## Javascript Deliverable

For this devlierable, I added the javascript to the application

- Javascript support for future login: Added javascript to login

- Javascript support for future database data: Attempted to add that to the request page, but ran into issues where submitting the request wasn't working. Will troubleshoot this week to get that fixed

- Javascript support for future WebSocket: Amount of requests will be displayed on dashboard

## Startup Service Deliverable

For this deliverable, I integrated Node.js and Express into the application

- Create an HTTP service using Node.js and Express: I believe so?

- Frontend served using express static middleware: Yes, that is seen in the index.js

- Frontend calls third party service endpoints: Created a new tab called 'Inspiration' and that has a third party service call

- Your backend provides service endpoints: Yes, for getting and receiving language requests

- Your frontend calls your service endpoints: Yes, for getting and receiving language requests

## Startup DB Deliverable

For this deliverable, I integrated MongoDB into the application

- Created the MongoDB Atlas database

- Eliminated local storage and added on the database for getting and storing language requests

- It successfully stores the data into MongoDB

## Startup Login Deliverable

For this deliverable, I added the login functionality

- You can create a new user from the home page (will remove later as management systems have credentials provided from an authenticated user)

- Supports existing user authentication

- Stores user credentials in MongoDB in a secure fashion

- Restricts functionality based on authentication

## Midterm Study Guide

1. In the following code, what does the link element do?
- link elements can link other files to the html page.

2. In the following code, what does a div tag do?
- div tags are used to group and organize content in a web page. you can use javascript and CSS to target them and manipulate them.

3. In the following code, what is the difference between the #title and .grid selector?
-  #title selector is an ID selector, it styles an HTML element that contains the id attribute.
-  the .grid selector chooses an HTML element that has the 'class' attribute that matches.

4. In the following code, what is the difference between padding and margin?
- Padding is the space inside the border of a element.
- Margin is the space outside the border of an element.

5. Given this HTML and this CSS how will the images be displayed using flex?
- Flexbox is a layout model in CSS that is designed to make it easier to design complex and responsive layouts with a more predictable and efficient way of distributing space and aligning items within a container.

6. What does the following padding CSS do?
- I would imagine that it makes the output different

7. What does the following code using arrow syntax function declaration do?
-  It makes a function more concise
- function add(a, b) {
    return a + b;
}

- const add = (a, b) => a + b;


8. What does the following code using map with an array output?
- const doubledNumbers = numbers.map(function(number) {
    return number * 2;
}); where numbers is a array

9. What does the following code output using getElementByID and addEventListener?
- getElementByID grabs an element by its ID attribute
- addEventListener listens for a specified event on an HTML element. Events can be user interactions (e.g., clicks, mouseover, keypress), browser-related events (e.g., page load, resize), and more.

10. What does the following line of Javascript do using a # selector?
- \# = ID selector

11. Which of the following are true? (mark all that are true about the DOM)
- DOM represents a web document's structure in a heirarchical way.
- You can manipulate data with a DOM i.e let element = document.getElementById('demo');

12. By default, the HTML span element has a default CSS display property value of:
- The default CSS display property value for an HTML <span> element is inline.

13. How would you use CSS to change all the div elements to have a background color of red?
- div {
-    background-color: red;
- }

14. How would you display an image with a hyperlink in HTML?
- ```<a href="https://example.com">```
-    ```<img src="image.jpg" alt="Description of the image">```
- ```</a>```

15. In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
- Content, Padding, Border, Margin

16. Given the following HTML, what CSS would you use to set the text "troubl" to green and leave the "double" text unaffected?
- #myText {
-    color: green;
- }
17. What will the following code output when executed using a for loop and console.log?

18. How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
- let element = document.getElementById('byu');
- element.style.color = 'green';

19. What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
- In this order: ```<p>, <ol>, <ul>, <h2>, <h1>, <h3>```

20. How do you declare the document type to be html?
- <!DOCTYPE html>
21. What is valid javascript syntax for if, else, for, while, switch statements?

- if (condition) {
-     // Code to execute if the condition is true
- }

- if (condition) {
-    // Code to execute if the condition is true
- } else {
-    // Code to execute if the condition is false
- }

- for (initialization; condition; iteration) {
-    // Code to execute in each iteration
- }

- while (condition) {
-    // Code to execute as long as the condition is true
- }

- switch (expression) {
-    case value1:
-        // Code to execute if expression matches value1
-        break;
-    case value2:
-        // Code to execute if expression matches value2
-        break;
-    default:
-        // Code to execute if expression doesn't match any case
- }

22. What is the correct syntax for creating a javascript object?

- let person = {
-    firstName: "John",
-   lastName: "Doe",
-    age: 30,
-    email: "john@example.com"
- };

23. Is it possible to add new properties to javascript objects?
- Yes
- var myObject = {};
- myObject.newProperty = 'New Value';

- var person = {
-    firstName: "John",
-    lastName: "Doe"
- };

- // Adding a new property
- person.age = 30;

24. If you want to include JavaScript on an HTML page, which tag do you use?
- ```<script src="myscript.js"></script>```

25. Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
26. Which of the following correctly describes JSON?
- data structure that stores data in a format that is both human-readable and machine-readable

27. What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo do?
- chmod: Change file/directory permissions.
- pwd: Display the current working directory.
- cd: Change the current directory.
- ls: List files and directories.
- vim: Text editor for the console.
- nano: Simple text editor for the console.
- mkdir: Create a new directory.
- mv: Move or rename files/directories.
- rm: Remove/delete files or directories.
- man: Access command manuals.
- ssh: Securely connect to remote servers.
- ps: Display running processes.
- wget: Download files from the web.
- sudo: Execute commands with elevated privileges.

28. Which of the following console command creates a remote shell session?
- ssh username@domain.com

29. Which of the following is true when the -la parameter is specified for the ls console command?
- It lists all files and directories, including hidden ones with detailed information about each

30. Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
- Top-Level Domain (TLD): "click"
- Subdomains: "banana" (a subdomain of "fruit"), "fruit" (a subdomain of "bozo")
- Root Domain (Top-Level Domain): "click"
31. Is a web certificate necessary to use HTTPS?
- Yes
32. Can a DNS A record point to an IP address or another A record?
- No
33. Port 443, 80, 22 is reserved for which protocol?
- Port 443: Used for HTTPS, providing secure web communication with encryption.
- Port 80: Used for HTTP, providing standard web communication without encryption.
- Port 22: Used for SSH, enabling secure remote access to servers and network devices with 
34. What will the following code using Promises output when executed?
- Promise can be three states: Pending, Fulfilled, and Rejected
- Performs asynchronous operation

## Final Study Guide

1. What ports are used for HTTP, HTTPS, SSH?
- HTTP: 80, HTTPS: 443, SSH: 22

2. What do HTTP status codes in the 300, 400, 500 range indicate?
- 300 range: Redirection, 400 range: Client errors, 500 range: Server errors
3. What does the HTTP header content-type allows you to do?
- It specifies the media type of the resource and allows the server and the client to understand how to properly parse the content.

4. What do the following attributes of a cookie do?
- Domain: Specifies the domain for which the cookie is valid.
- Path: Specifies the URL path for which the cookie is valid.
- SameSite: Controls whether the cookie is sent with cross-site requests.
- HTTPOnly: Restricts access to the cookie to HTTP requests, preventing access from JavaScript.

5. Assuming the following Express middleware, what would be the console.log output for an HTTP GET request with a URL path of /foo/bar?

```
app.use('/foo', (req, res, next) => {
  console.log('Middleware executed');
  next();
});
```
- Middleware executed


6. Given the following Express service code: What does the following JavaScript fetch return?
```
app.get('/api/data', (req, res) => {
  res.json({ data: 'Hello, world!' });
});
```
- The fetch would return a JSON object: { data: 'Hello, world!' }.

7. Given the following MongoDB query:
- { cost: { $gt: 10 }, name: /fran.*/}
- What does it do?
- It retrieves documents where the "cost" is greater than 10 and the "name" field matches the regular expression /fran.*/.

8. How should you store user passwords in a database?
- User passwords should be securely hashed using a strong, adaptive hashing algorithm (such as bcrypt) with a unique salt for each user.

9. Assuming the following Node.js service code is executing with websockets, what will be logged to the console of the web browser?
```
const http = require('http');
const express = require('express');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle incoming messages
  socket.on('chat message', (message) => {
    console.log(`Message from client: ${message}`);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
```
- The server logs "A user connected" when a new WebSocket connection is established.
- It listens for messages with the event name 'chat message' and logs them.
- When a user disconnects, the server logs "User disconnected."

10. What is the WebSocket protocol used for?
- WebSocket is a communication protocol that provides full-duplex communication channels over a single, long-lived connection. It is commonly used for real-time applications.

11. What is JSX and how are the curly braces rendered?
- JSX is a syntax extension for JavaScript used with React. Curly braces in JSX are used for embedding JavaScript expressions or variables into the markup. They are evaluated and rendered as part of the resulting UI.
- Here is an example
```
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

const user = "John";
const element = <Greeting name={user} />;
ReactDOM.render(element, document.getElementById('root'));
```

12. Assuming a HTML document with a `<div id="root"></div>` element, what content will the following React component generate?
```
function Welcome(props) {
return <h1>Hello, {props.name}</h1>;
}

function App() {
return (
<div>
<Welcome name="Sara" />
<Welcome name="Cahal" />
<Welcome name="Edite" />
</div>
);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```
- The content will be a div containing three h1 elements with the names "Sara," "Cahal," and "Edite."

13. Assuming a HTML document with a '<div id="root"></div>' element, what content will the following React component generate?
```
    function Numbers() { 
      const numbers = [1, 2, 3, 4, 5];
      const listItems = numbers.map((number) =>
        <li>{number}</li>
      );
      return(<ul>{listItems}</ul>)
    }
    const root = ReactDOM.createRoot(document.getElementById('root')); 
    root.render(<Numbers/>);
```
- The content will be an unordered list (ul) containing five list items (li) with the numbers 1, 2, 3, 4, and 5.

14. What does the following React component do?
```
function Example() {
  // Declare a new state variable, which we'll call "count"  
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
- It is a React component that renders a paragraph displaying the current count and a button. Clicking the button increments the count.

15. What are React Hooks used for?
- React Hooks are functions that enable functional components to use state and lifecycle features that were previously only available in class components. They provide a way to reuse stateful logic across components.
- Here is an example:
```
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

ReactDOM.render(<Counter />, document.getElementById('root'));
```

16. What is the useEffect hook used for?
- The useEffect hook in React is used for performing side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM.
- Here is an example

```
import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from an API
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));

    // Cleanup function (optional)
    return () => {
      console.log('Component unmounted or dependencies changed.');
    };
  }, []); // Empty dependency array means useEffect runs once on mount

  return (
    <div>
      {data ? <p>Data: {data}</p> : <p>Loading...</p>}
    </div>
  );
}

ReactDOM.render(<DataFetcher />, document.getElementById('root'));

```

17. What does this code do?
```
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```
- It sets up routing using React Router. The application has routes for the home page ("/"), blogs ("/blogs"), contact ("/contact"), and a catch-all route for any other path, rendering corresponding components.

18. What role does npm play in web development?
- npm (Node Package Manager) is a package manager for JavaScript and the default package manager for Node.js. It is used to install, manage, and distribute packages or libraries (dependencies) for web development projects.

19. What does package.json do in a npm project?
- The package.json file in an npm project contains metadata about the project, as well as information about its dependencies, scripts, and other configuration settings. It is a central file that npm uses to manage the project.

20. What does the fetch function do?
- The fetch function is a modern JavaScript API used to make network requests (e.g., HTTP requests). It returns a Promise that resolves to the Response to that request, whether it is successful or not.

21. What does node.js do?
- Node.js is a JavaScript runtime environment that allows the execution of JavaScript code on the server side. It provides a platform for building scalable network applications and is commonly used for web development.

22. What does Vite do?
- Vite is a build tool for web development that aims to provide a faster and more efficient development experience. It is particularly well-suited for modern JavaScript frameworks like Vue.js and React. Vite focuses on fast development builds and server-side rendering.