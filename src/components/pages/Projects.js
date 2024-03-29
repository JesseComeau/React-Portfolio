//Project images
import TacoBoutHoppinessImg from "../../images/TacoBoutHoppiness.jpg";
import workdayScheduleImg from "../../images/WordaySchedule.jpg";
import WeatherDashboardImg from "../../images/WeatherDashboard.jpg";
import ManyFestImg from "../../images/ManyFest.jpg";
import TechBlogImg from "../../images/TechBlog.jpg";
import NoteTakerImg from "../../images/NoteTaker.jpg";
import TextEditorImg from "../../images/TextEditor.jpg";
import BookSearchEngineImg from "../../images/BookSearchEngine.jpg";
import GetOnBoardImg from "../../images/GetOnBoard.jpg";

// Icons
import BootstrapIcon from "../../images/skills/bootstrap.svg";
import CSS3Icon from "../../images/skills/CSS3.svg";
import ExpressIcon from "../../images/skills/express.svg";
import GraphQLIcon from "../../images/skills/graphql.svg";
import HerokuIcon from "../../images/skills/heroku.svg";
import HTML5Icon from "../../images/skills/html5.svg";
import JavascriptIcon from "../../images/skills/javascript.svg";
import MongoDBIcon from "../../images/skills/mongodb.svg";
import mysqlIcon from "../../images/skills/mysql.svg";
import nodeIcon from "../../images/skills/nodejs.svg";
import reactIcon from "../../images/skills/react.svg";
import tailwindIcon from "../../images/skills/tailwindcss.svg";
import pythonIcon from "../../images/skills/python.svg";
// import webpackIcon from '../../images/skills/webpack.svg'

function Projects() {
  return (
    <section className="container2">
      <div className="sectionProjects h2">Projects</div>

      <div className="phase1 h3 pt-5 mx-auto" id="Phase1">
        <a href="Projects"> </a>Phase 1
      </div>

      <article className="homework1">
        <div className="card h-100" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={workdayScheduleImg}
            alt="Homework 1"
          ></img>
          <div className="card-body h-75">
            <h5 className="card-title">Workday Schedule</h5>
            <p className="card-text">
              Created an application utilizing Moment.JS to create a workday
              scheduler that saves to local storage.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="d-flex justify-content-around my-1">
                <a
                  href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={HTML5Icon} alt="HTML5" />
                </a>
                <a
                  href="https://www.w3.org/TR/CSS/#css"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={CSS3Icon} alt="CSS3" />
                </a>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={JavascriptIcon} alt="Javascript" />
                </a>
              </div>
            </li>
          </ul>
          <div className="card-body">
            <a
              href="https://github.com/JesseComeau/Workschedule"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              Repo
            </a>
            <a
              href="https://jessecomeau.github.io/Workschedule/"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              Deployed link
            </a>
          </div>
        </div>
      </article>

      <article className="homework2">
        <div className="card h-100" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={WeatherDashboardImg}
            alt="Homework 2"
          ></img>
          <div className="card-body h-75">
            <h5 className="card-title">Weather App</h5>
            <p className="card-text">
              Created an application that displays a forecast of the weather
              using the OpenWeather API.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="d-flex justify-content-around my-1">
                <a
                  href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={HTML5Icon} alt="HTML5" />
                </a>
                <a
                  href="https://www.w3.org/TR/CSS/#css"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={CSS3Icon} alt="CSS3" />
                </a>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={JavascriptIcon} alt="Javascript" />
                </a>
              </div>
            </li>
          </ul>
          <div className="card-body">
            <a
              href="https://github.com/JesseComeau/WeatherApp"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              Repo
            </a>
            <a
              href="https://jessecomeau.github.io/WeatherApp/"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              Deployed link
            </a>
          </div>
        </div>
      </article>

      <section className="project1 h-50">
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={TacoBoutHoppinessImg}
            alt="Taco Bout Hoppiness"
          ></img>
          <div className="card-body h-25">
            <h5 className="card-title">Taco Bout Hoppinesss</h5>
            <h6>Group Project - Project 1</h6>
            <p className="card-text">
              The team used three different APIs(Open Weather, Open brewey DB,
              and Documenu) to convert the user's Zipcode to Latitude/Longitude
              coordinates, then retreive nearby breweries and Mexican
              restaurants. Each of the returned results displays the business
              name, address, website(if available) in addition to brewery
              categories and restaurant menus.
            </p>
            <p>
              Personal Contribution - Owned and implemented the Javascript API
              integration of the OpenBrewery API. Assisted with the initial
              implementation of the HTML and CSS, along with generating the
              template literal.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="d-flex justify-content-around my-3">
                <a
                  href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={HTML5Icon} alt="HTML5" />
                </a>
                <a
                  href="https://www.w3.org/TR/CSS/#css"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={CSS3Icon} alt="CSS3" />
                </a>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={JavascriptIcon} alt="Javascript" />
                </a>
                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={tailwindIcon} alt="Tailwind" />
                </a>
              </div>
            </li>
          </ul>
          <div className="card-body h-50">
            <a
              href="https://github.com/JesseComeau/Taco-bout-Hoppiness"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              Repo
            </a>
            <a
              href="https://jessecomeau.github.io/Taco-bout-Hoppiness/"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              Deployed link
            </a>
          </div>
        </div>
      </section>

      <div className="phase2 h3 pt-5 mx-auto" id="Phase2">
        <a href="Projects"> </a>Phase 2
      </div>

      <section className="project2 h-50">
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={ManyFestImg} alt="ManyFest"></img>
          <div className="card-body h-25">
            <h5 className="card-title">ManyFest</h5>
            <h6>Group Project - Project 2</h6>
            <p className="card-text">
              The team utilized Node/Express, Sequilize/MySQL, Handlebars, AWS
              S3, Multer, and the Tailwinds CLI to create an application to
              track personal collections and get inspired recent items added by
              others on the home page.
            </p>
            <p>
              Personal Contribution - Designed the base layout of the pages
              utilizes tailwind components. Implemented modals. Created models
              and routes for the backend. Utilizing handlebars on various pages
              and elements. Created the static about us page. Maintained Heroku
              deployments.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="d-flex justify-content-around my-3">
                <a
                  href="https://nodejs.org/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={nodeIcon} alt="Node.JS" />
                </a>
                <a
                  href="https://expressjs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={ExpressIcon} alt="Express" />
                </a>
                <a
                  href="https://www.mysql.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={mysqlIcon} alt="MySQL" />
                </a>
                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={tailwindIcon} alt="Tailwind" />
                </a>
                <a
                  href="https://www.heroku.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={HerokuIcon} alt="Heroku" />
                </a>
              </div>
            </li>
          </ul>
          <div className="card-body h-50">
            <a
              href="https://github.com/JesseComeau/ManyFest"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              Repo
            </a>
            <a
              href="https://manyfestapp.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              Deployed link
            </a>
          </div>
        </div>
      </section>

      <article className="homework3">
        <div className="card h-100" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={NoteTakerImg}
            alt="Homework 3"
          ></img>
          <div className="card-body h-75">
            <h5 className="card-title">Note Taker App</h5>
            <p className="card-text">
              Created an application that utilizes Express to add/delete
              notation from a stored db.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="d-flex justify-content-around my-1">
                <a
                  href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={HTML5Icon} alt="HTML5" />
                </a>
                <a
                  href="https://www.w3.org/TR/CSS/#css"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={CSS3Icon} alt="CSS3" />
                </a>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={JavascriptIcon} alt="Javascript" />
                </a>
                <a
                  href="https://nodejs.org/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={nodeIcon} alt="Node.JS" />
                </a>
                <a
                  href="https://expressjs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={ExpressIcon} alt="Express" />
                </a>
              </div>
            </li>
          </ul>
          <div className="card-body">
            <a
              href="https://github.com/JesseComeau/Note_Taker"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              Repo
            </a>
            <a
              href="https://note-taker-01ra.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              Deployed link
            </a>
          </div>
        </div>
      </article>

      <article className="homework4">
        <div className="card h-100" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={TechBlogImg}
            alt="Homework 4"
          ></img>
          <div className="card-body h-75">
            <h5 className="card-title">Tech Blog</h5>
            <p className="card-text">
              Created a wordpress style site utilizing Node, Express, and a SQL
              database incorporating user signup/login and cookies.
            </p>
            <p className="card-text">
              Deployed to Heroku utilizing Jaws DB for the backend database.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="d-flex justify-content-around my-1">
                <a
                  href="https://nodejs.org/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={nodeIcon} alt="Node.JS" />
                </a>
                <a
                  href="https://expressjs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={ExpressIcon} alt="Express" />
                </a>
                <a
                  href="https://www.mysql.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={mysqlIcon} alt="MySQL" />
                </a>
                <a
                  href="https://www.heroku.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={HerokuIcon} alt="Heroku" />
                </a>
              </div>
            </li>
          </ul>
          <div className="card-body">
            <a
              href="https://github.com/JesseComeau/Tech_Blog"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              Repo
            </a>
            <a
              href="https://techblog-jc.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              Deployed link
            </a>
          </div>
        </div>
      </article>

      <div className="phase3 h3 pt-5 mx-auto" id="Phase3">
        <a href="Projects" content="Phase 3"> </a>Phase 3
      </div>

      <section className="project3 h-50">
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={GetOnBoardImg}
            alt="GetOnBoard"
          ></img>
          <div className="card-body h-25">
            <h5 className="card-title">Get On Board!</h5>
            <h6>Group Project - Project 3</h6>
            <p className="card-text">
              Full Stack Mern application utilizing Node/Express, MongoDB,
              Apollo, React/React-Router, JWT, and the Bootstrap CDN to create
              an application to track personal board game collections and
              initiate and schedule board game events with friends.
            </p>
            <p>
              Personal Contribution - Created and imlemented
              models/typeDefs/Resolvers on the backend and linked to the front
              end. Maintained queries and mutations to deliver what was required
              on the front end, while mimimizing unnecessary data. Maintained
              consistent heroku deploys. Input validation and authentication.
              Styling on multiple pages, and much of the functionality on the
              dashboard view.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="d-flex justify-content-around my-3">
                <a
                  href="https://nodejs.org/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={nodeIcon} alt="Node.JS" />
                </a>
                <a
                  href="https://expressjs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={ExpressIcon} alt="Express" />
                </a>
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={reactIcon} alt="react" />
                </a>
                <a
                  href="https://getbootstrap.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={BootstrapIcon} alt="BootStrap" />
                </a>
                <a
                  href="https://www.mongodb.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={MongoDBIcon} alt="MongoDB" />
                </a>
                <a
                  href="https://graphql.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={GraphQLIcon} alt="GraphQL" />
                </a>
                <a
                  href="https://www.heroku.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={HerokuIcon} alt="Heroku" />
                </a>
              </div>
            </li>
          </ul>
          <div className="card-body h-50">
            <a
              href="https://github.com/P3T1-StaleMates/GetOnBoard"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              Repo
            </a>
            <a
              href="https://p3-getonboard.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              Deployed link
            </a>
          </div>
        </div>
      </section>

      <section className="project3-cont h-50">
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={GetOnBoardImg}
            alt="GetOnBoard"
          ></img>
          <div className="card-body h-25">
            <h5 className="card-title">Get On Board - Continued</h5>
            <h6>Personal additions to project.</h6>
            <p className="card-text">
              Personal additions to the project after submission. Utilizing additional time to
            </p>
            <ul>
              <li>Updated structure of the repository and removed unnecessary files.</li>
            </ul>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="d-flex justify-content-around my-3">
                <a
                  href="https://nodejs.org/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={nodeIcon} alt="Node.JS" />
                </a>
                <a
                  href="https://expressjs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={ExpressIcon} alt="Express" />
                </a>
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={reactIcon} alt="react" />
                </a>
                <a
                  href="https://getbootstrap.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={BootstrapIcon} alt="BootStrap" />
                </a>
                <a
                  href="https://www.mongodb.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={MongoDBIcon} alt="MongoDB" />
                </a>
                <a
                  href="https://graphql.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={GraphQLIcon} alt="GraphQL" />
                </a>
                <a
                  href="https://www.heroku.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={HerokuIcon} alt="Heroku" />
                </a>
              </div>
            </li>
          </ul>
          <div className="card-body h-50">
            <a
              href="https://github.com/P3T1-StaleMates/GetOnBoard"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              Repo
            </a>
            <a
              href="https://p3-getonboard.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              Deployed link
            </a>
          </div>
        </div>
      </section>

      <article className="homework5">
        <div className="card h-100" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={TextEditorImg}
            alt="Homework 5"
          ></img>
          <div className="card-body h-75">
            <h5 className="card-title">PWA Text Editor</h5>
            <p className="card-text">
              Progressive Web Application utilizing indexDB, local storage and a
              service worker.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="d-flex justify-content-around my-1.5">
                <a
                  href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={HTML5Icon} alt="HTML5" />
                </a>
                <a
                  href="https://www.w3.org/TR/CSS/#css"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={CSS3Icon} alt="CSS3" />
                </a>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={JavascriptIcon} alt="Javascript" />
                </a>
                <a
                  href="https://nodejs.org/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={nodeIcon} alt="Node.JS" />
                </a>
                <a
                  href="https://expressjs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={ExpressIcon} alt="Express" />
                </a>
              </div>
            </li>
          </ul>
          <div className="card-body">
            <a
              href="https://github.com/JesseComeau/Text-Editor"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              Repo
            </a>
            <a
              href="https://text-editor-im29.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              Deployed link
            </a>
          </div>
        </div>
      </article>

      <article className="homework6">
        <div className="card h-100" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={BookSearchEngineImg}
            alt="Homework 6"
          ></img>
          <div className="card-body h-75">
            <h5 className="card-title">Book Search Engine</h5>
            <p className="card-text">
              A Full Stack MERN utilizing Application utilizing React, MongoDB
              and graphQL APIs. Utilizes locally stored data to reduce
              redundancy in titles.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="d-flex justify-content-around my-1">
                <a
                  href="https://nodejs.org/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={nodeIcon} alt="Node.JS" />
                </a>
                <a
                  href="https://expressjs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={ExpressIcon} alt="Express" />
                </a>
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={reactIcon} alt="react" />
                </a>
                <a
                  href="https://getbootstrap.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={BootstrapIcon} alt="BootStrap" />
                </a>
                <a
                  href="https://www.mongodb.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={MongoDBIcon} alt="MongoDB" />
                </a>
                <a
                  href="https://graphql.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={GraphQLIcon} alt="GraphQL" />
                </a>
                {/* <a
                  href="https://www.heroku.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={HerokuIcon} alt="Heroku" />
                </a> */}
              </div>
            </li>
          </ul>
          <div className="card-body">
            <a
              href="https://github.com/JesseComeau/Book-Search-Engine"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              Repo
            </a>
            <a
              href="https://book-search-engine-1p38.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              Deployed link
            </a>
          </div>
        </div>
      </article>

      {/* Personal Projects */}

      <div className="PersonalProjects h3 pt-5 mx-auto" id="Personal">
        <a href="Projects"> </a>Personal Projects
      </div>

      <article className="python">
        <div className="card h-100" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={workdayScheduleImg}
            alt="Python Newsfeed"
          ></img>
          <div className="card-body h-75">
            <h5 className="card-title">Python Newsfeed</h5>
            <p className="card-text h6">
              Coming Soon
            </p>
            <p className="card-text">

              Creating an application using Python.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="d-flex justify-content-around my-1">
                <a
                  href="https://www.python.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={pythonIcon} alt="HTML5" />
                </a>
                {/* <a
                  href="https://www.w3.org/TR/CSS/#css"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={CSS3Icon} alt="CSS3" />
                </a>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noopener noreferrer"
                > */}
                  {/* <img className="icon" src={JavascriptIcon} alt="Javascript" />
                </a> */}
              </div>
            </li>
          </ul>
          <div className="card-body">
            <a
              href="https://github.com/JesseComeau/python-newsfeed"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              Repo
            </a>
            <a
              href="https://jessecomeau.github.io/Workschedule/"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link text-secondary"
            ><del>
                Deployed link
              </del>
            </a>
          </div>
        </div>
      </article>

    </section>
  );
}

export default Projects;
