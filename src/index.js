import React from 'react';
import reactDom from 'react-dom';

const List = () =>{
    return (
        <ul>
            <li>Item list</li>
            <li>Item list</li>
            <li>Item list</li>
            <li>Item list</li>
            <li>Item list</li>
        </ul>
    )
}

const Text = () => {
    return(
        <>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est perspiciatis vel, excepturi et reiciendis quo voluptates quas consequatur ut maxime veniam voluptate officia quisquam laboriosam consectetur incidunt voluptas odit ratione.</p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est perspiciatis vel, excepturi et reiciendis quo voluptates quas consequatur ut maxime veniam voluptate officia quisquam laboriosam consectetur incidunt voluptas odit ratione.</p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est perspiciatis vel, excepturi et reiciendis quo voluptates quas consequatur ut maxime veniam voluptate officia quisquam laboriosam consectetur incidunt voluptas odit ratione.</p>
        </>
    )
}

const Hi = () => {
    return(
        <h1>Hiiii</h1>
    )
}

const App = () => {
  return(
    <div>
        <List/>
        <Text/>
        <Hi/>
    </div>
  )
}

reactDom.render(<App/>,document.getElementById('root'))