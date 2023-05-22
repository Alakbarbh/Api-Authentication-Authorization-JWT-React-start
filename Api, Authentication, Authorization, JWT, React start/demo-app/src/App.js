import images from './assets/images/Alakbar.jpg';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="App d-flex">
        <div className="container">
          <div className="image-name">
            <div className="image">
              <img src={images} />
            </div>
            <div className="name">
              <h5>Alakbar Hasanov</h5>
              <p>Software Developer</p>
            </div>

          </div>
          <div className="About">
            <p>About me:</p>
          </div>
          <div className="Have">
            <p>
              I have deep knowledge of C#,ASP.NET Core,Sql,algorithms and data
              structures.Additionaly,I have good knowledge of front-end and back-end technologies,including React,
              Angular,HTML,CSS,JavaScript and JQuery I'd be more than happy to discuss with you your project and deliver
              you high-quality solutions that meet your needs
            </p>
          </div>
          <div className="Skills">
            <ul>
              <li>C#</li>
              <li>ASP.NET Core</li>
              <li>WEB API</li>
              <li>SQL</li>
              <li>REACT</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>JQuery</li>
              <li>SASS</li>
              <li>GIT</li>
              <li>Software Architectura</li>
              <li>Algorithms</li>
              <li>OOP</li>
              <li>Solid Design Principles</li>
            </ul>

          </div>



        </div>
        <div className="Education">
          <p>Education:</p>
          <h5>Western Caspian Collage</h5>
          <p>September 2019</p>
          <h5>Code Academy</h5>
          <p>August 2022</p>
          <div className="Language">
            <p>Language:</p>
            <h6>Azerbaijan-Native</h6>
            <h6>English-Intermediate</h6>
            <h6>Turkish-Intermediate</h6>
          </div>
          <div className="Contacts">
            <p>Contacts:</p>
            <h6>+994 50 666 41 88</h6>
            <h6>alakbarbh@code.edu.az</h6>
          </div>
        </div>



      </div>

    </div>



  )
}

export default App;
