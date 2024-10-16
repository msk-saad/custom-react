function customRender (element, container) {
  /* The issue with this code is it is not modular in setting attributes
  const domElement = document.createElement(element.type);
  domElement.innerHTML = element.children;
  domElement.setAttribute('href', element.props.href);
  domElement.setAttribute('target', element.props.target);

  container.appendChild(domElement);
  */ 

  const domElement = document.createElement(element.type);
  domElement.innerHTML = element.children;
  for (const prop in element.props) {
    if (prop === 'children') continue;
    domElement.setAttribute(prop, element.props[prop])
  }
  container.appendChild(domElement);
}

const reactElement = {
  type: 'a',
  props: {
    href: 'https://www.google.com',
    target: '_blank'
  },
  children: 'Click to visit google'
}

const mainContainer = document.querySelector('#root');
customRender(reactElement, mainContainer)




/* 

If we are using react render, using the above reactElement will throw an error,
as react will expect some sort of syntax that is predefined in react.

the syntax that we can follow is

const reactElement = React.createElement(
  'a',
  {href: 'https://www.google.com', target: '_blank'},
  'Click to visit google'
);

*/


/*

In react just like how we use components { example: <App  /> }. we can also use props/variables or functions

Example:

1- 
const anotherElement = (
  <a href = "https://www.google.com" target = "_blank">Click to visit google</a>
)


2-
function reactElement () {
  return (
    <>
      <h1>Hello world!</h1>
    </>
  )
}


--- React-Render method 

ReactDOM.createRoot(document.getElementById('root')).render (
  reactElement() --> This will work;
  <reactElement /> --> This will work;
  <anotherElement /> --> This will work;
  anotherElement --> This will work
)

*/