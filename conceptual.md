### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
### React is a front-end library/framework for Javascript that is used for quicker development because it integrates HTML and CSS into Javascript and allows for manipulation of the DOM thru components. It would be used if there is repetition or uniformity in your app or if you want quicker development and less headache.

- What is Babel?
### Babel is a program that translates/transpiles JSX code into a language the browser can understand to render JSX code into the DOM

- What is JSX?
### JSX is a mixture of JS and HTML coding used in React.js

- How is a Component created in React?
### A component is created with a root component first and inserted typically in a file called App.js which will serve its first component in a root element. Components are objects/functions.

- What are some difference between state and props? 
### Props is more like properties that are unchanging while state refers to a changing "state" in the program so is variable from time to time depending on user usage. A state can be a toggle,, more more than 2 options. Properties are mostly just static data/info about a component

- What does "downward data flow" refer to in React?
### DDF refers to Reacts flow of data from parent to child and from the top component to the lower components.

- What is a controlled component? 
### Is a component which uses props to determine its state

- What is an uncontrolled component?
### Is a component which uses DOM elemets or client-side input to control it

- What is the purpose of the `key` prop when rendering a list of components?
### The "key" prop is an index to the list and allows the particular item in the list to be identified and leads to more organization

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
### An array index is a last resort choice because the list can change. Items can be moved aroudn and be deleted so eth index can get messed up.

- Describe useEffect.  What use cases is it used for in React components?
### useEffect is used when a component renders, you may want to fetch data from an API. UseEffect is a builtin hook that runs after a rendering of a specific component.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
### a useRef is used for accessing an underlying DOM element or setting and clearing timers. A change in the value of ref does not cause a rerender. 

- When would you use a ref? When wouldn't you use one?
### Setting a timer for code to run or controlling a DOM element (use sparingly). You shouldnt really be using useRef to manipulate the DOM

- What is a custom hook in React? When would you want to write one?
### A custom hook is a self-written function that can be used repeatedly. You should write one if the same logic/function is used across many components. This can help refactor and unclutter your code. 