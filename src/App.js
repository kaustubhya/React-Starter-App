import logo from './logo.svg';
import './App.css';

let name = "Harry";

function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact</li>
    </nav>
    <div className="container">
      <h1>Hello {name}</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, aperiam quidem. Provident voluptatum quas molestiae blanditiis nihil. Voluptates beatae reprehenderit veniam necessitatibus quam pariatur consequuntur, temporibus perspiciatis sed iure quo. </p>
    </div>
    </>
  );
}

export default App;
