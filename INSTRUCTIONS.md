# Instructions

## Task

1. This task's starting point is the App component's h1 element that reads: "Task: Add three Card elements". However, there is no Card component's JS file in this starting code. Thus, the first task is to add a `Card.js` file, and inside of that file, declare a `Card` function. 
2. Inside the `Card.js` file's `Card` function, add a `return` statement with two parentheses after it, to allow the `return` statement to spread onto several lines.
3. Inside the `return` statement, add a wrapping `div` element.
4. Inside the wrapping `div` element, add an `h2` element, and under it, an `h3` element.
5. Pass the `props` object to the `Card` function.
6. Inside the h2 element you've already added, add the JSX expression of: `{props.h2}`.
7. Inside the h3 element you've already added, add the JSX expression of: `{props.h3}`.
8. Back inside the App component, import the Card component.
9. Inside the App component's return statement, under the h1 element, add three `<Card />` JSX elements.
10. Add the `h2` prop to the first `<Card />` element, like this: `h2="First card's h2"`.
11. Add the `h3` prop to the first `<Card />` element, like this: `h3="First card's h3"`.
12. Add the `h2` and `h3` props to the second `<Card />` element, with the `h2` reading: "Second card's h2", and the `h3` reading "Second card's h3".
13. Add the `h2` and `h3` props to the third `<Card />` element, with the `h2` reading: "Third card's h2", and the `h3` reading "Third card's h3".
14. Add the `className` attribute the Card.js file's `Card` function's return statement's wrapping `div` element.
