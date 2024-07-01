import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Icon from "./components/icon";
import Experience from "./components/Experience";
import Skill from "./components/Skill";
import Project from "./components/Project";
import {
  FormContainer,
  FormField,
  FormTextArea,
  SubmitButton,
} from "./components/forms";

import experiences from "./data/experiences";
import skills from "./data/skills";
import projects from "./data/projects";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Name required"),
  email: Yup.string().email("Invalid email").required("Email required"),
  subject: Yup.string().required("Subject required"),
  message: Yup.string()
    .min(10, "Too Short!")
    .max(500, "Too Long!")
    .required("Message required"),
});

const socials = [
  { icon: "telegram", to: "https://www.telegram.com/tchoforwilson" },
  { icon: "whatsapp", to: "https://wa.link/6oqk9y" },
  { icon: "twitter", to: "https://twitter.com/lacdohwilson" },
  {
    icon: "linkedin1",
    to: "https://www.linkedin.com/in/lac-doh-wilson",
  },
];

const App = () => {
  const [navActive, setNavActive] = useState();

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  useEffect(() => {
    setNavActive(window.matchMedia("max-width: 600px"));

    const handleScroll = () => {
      const header = document.querySelector("nav");
      header.classList.toggle("sticky", window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <nav className="nav">
        <Link className="nav__logo" to="index.html">
          Developer
        </Link>
        {navActive ? (
          <Icon name="menu" className="nav__toggle" onClick={toggleNav} />
        ) : (
          <Icon name="cross" className="nav__toggle" onClick={toggleNav} />
        )}
        <div className={`nav__container ${!navActive ? "active" : ""}`}>
          <ul className="nav__menu">
            <li className="nav__item">
              <Icon name="home" className="nav__icon" />
              <Link className="nav__link" to="/">
                home
              </Link>
            </li>
            <li className="nav__item">
              <Icon name="user" className="nav__icon" />
              <Link className="nav__link" to="#about">
                about
              </Link>
            </li>
            <li className="nav__item">
              <Icon name="clipboard1" className="nav__icon" />
              <Link className="nav__link" to="#projects">
                porfolio
              </Link>
            </li>
            <li className="nav__item">
              <Icon name="mail" className="nav__icon" />
              <Link className="nav__link" to="#contact">
                contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <header className="header">
        <div className="hero">
          <h1>
            Hi there ! I'm <span>Wilson.</span>
          </h1>
          <p>I'm a full stack developer base in Douala, Cameroon.</p>
          <Link to="#">more about me</Link>
        </div>
        <div className="hero-content">
          <div className="hero-content__text">
            <p>
              <span>Full stack</span> means <span>Full solution</span>
            </p>
            <p>Let's build together</p>
            <p>
              <span>tchoforwilson@gmail.com</span>
            </p>
            <p>+237 654 954 778</p>
          </div>
          <div className="hero-social">
            <div className="hero-social__img">
              <Icon name="user" className="hero-social__icon" />
            </div>
            <div className="hero-links">
              {socials.map((item) => (
                <Link key={item.to} to={item.to} className="hero-links__item">
                  <Icon
                    key={item.icon}
                    name={item.icon}
                    className="hero-links__icon"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>
      <main className="main">
        {/** Section About */}
        <section className="about" id="about">
          <h2 className="heading-secondary">
            About <span>Me</span>
          </h2>
          <div className="about-content">
            <div className="about-img">
              <img src={require("./assets/images/about.png")} alt="about" />
            </div>
            <div className="about-text">
              <p className="about-description">
                I'm a full stack developer with the aim of crafting clean,
                creative and user-friendly applications. I build beautiful and
                powerful web and mobile applications.
              </p>
              <div className="about-info">
                <div className="about-info__texts">
                  <p>
                    <Icon name="briefcase" className="about-icon" />
                    Specialty: <strong> Software Development</strong>
                  </p>
                  <p>
                    <Icon name="file-text" className="about-icon" />
                    Experience: <strong> 5 years</strong>
                  </p>
                  <p>
                    <Icon name="user" className="about-icon" />
                    Freelance: <strong> Available</strong>
                  </p>
                </div>
                <div className="about-info__texts">
                  <p>
                    <Icon name="phone" className="about-icon" />
                    Phone: <strong> +237 654 954 778</strong>
                  </p>
                  <p>
                    <Icon name="location2" className="about-icon" />
                    Address: <strong> Douala,Cameroon</strong>
                  </p>
                  <p>
                    <Icon name="mail" className="about-icon" />
                    Email: <strong> tchoforwilson@gmail.com</strong>
                  </p>
                </div>
              </div>
              <Link to="#" className="btn btn--cv">
                Download CV
              </Link>
            </div>
          </div>
        </section>

        {/** Section Experience */}
        <section className="experience" id="experience">
          <h2 className="heading-secondary">Work Expereince</h2>
          <div className="experience-content">
            {experiences.map((experience) => (
              <Experience
                key={`${experience.year} + ${experience.company}`}
                experience={experience}
              />
            ))}
          </div>
        </section>

        {/** Work done */}
        <section className="work-done" id="work-done">
          <div className="work-content">
            <div className="work">
              <div className="work__img">
                <Icon name="profile" className="work__icon" />
              </div>
              <strong className="work__counter">04</strong>
              <p className="work__text">Years experience</p>
            </div>
            <div className="work">
              <div className="work__img">
                <Icon name="briefcase1" className="work__icon" />
              </div>
              <strong className="work__counter">06</strong>
              <p className="work__text">Done projects</p>
            </div>
            <div className="work">
              <div className="work__img">
                <Icon name="office" className="work__icon" />
              </div>
              <strong className="work__counter">03</strong>
              <p className="work__text">Industries</p>
            </div>
          </div>
        </section>

        {/** Projects */}
        <section className="projects" id="projects">
          <h2 className="heading-secondary">
            Showcase <span>Projects</span>
          </h2>
          <div className="projects-content">
            {projects.map((project) => (
              <Project
                key={`${project.title}`}
                imgSrc={project.img}
                title={project.title}
                description={project.description}
                to={project.to}
                tools={project.tools}
              />
            ))}
          </div>
        </section>

        {/** Section skills */}
        <section className="skills" id="skills">
          <h2 className="heading-secondary">Skills</h2>
          <div className="skills-content">
            {skills.map((skill) => (
              <Skill
                key={skill.title}
                title={skill.title}
                width={skill.width}
              />
            ))}
          </div>
        </section>

        {/**  Section contact */}
        <section className="contact" id="contact">
          <h2 className="heading-secondary">
            Get <span>in touch</span>
          </h2>
          <div className="contact__container">
            <div className="contact__details">
              <div className="contact__item">
                <div className="contact__img">
                  <Icon name="mail" className="contact__icon" />
                </div>
                <p className="contact__text">tchoforwilson@gmail.com</p>
              </div>
              <div className="contact__item">
                <div className="contact__img">
                  <Icon name="phone" className="contact__icon" />
                </div>
                <p className="contact__text">+237 654 954 778</p>
              </div>
              <div className="contact__item">
                <div className="contact__img">
                  <Icon name="office" className="contact__icon" />
                </div>
                <p className="contact__text">Douala, Cameroon</p>
              </div>
            </div>
            <div className="contact__line">
              <span></span>
            </div>
            <div className="contact__content">
              <div className="contact__info">
                <h3 className="heading-tertiary contact__heading">
                  Send me a message
                </h3>
                <p className="contact__message">
                  Feel free to get in touch with me.
                </p>
                <p className="contact__message">
                  I am always open for work and discuss new project ideas.
                </p>
                <div className="contact__socials">
                  <h4 className="heading-quart">My socials:</h4>
                  <div className="socials">
                    <Link to="https://t.me/tchoforwilson" target="_blank">
                      <Icon name="telegram" className="socials__icon" />
                    </Link>
                    <Link to="https://twitter.com/lacdohwilson" target="_blank">
                      <Icon name="twitter" className="socials__icon" />
                    </Link>
                    <Link
                      to="www.linkedin.com/in/lac-doh-wilson"
                      target="_blank"
                    >
                      <Icon name="linkedin2" className="socials__icon" />
                    </Link>
                    <Link to="https://wa.link/6oqk9y" target="_blank">
                      <Icon name="whatsapp" className="socials__icon" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="contact__form-container">
                <FormContainer
                  validationSchema={validationSchema}
                  initialValues={{
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                  }}
                  onSubmit={handleSubmit}
                  className="contact__form"
                  id="contact-form"
                >
                  <div className="form__inline">
                    <FormField name="name" placeholder="Name" />
                    <FormField name="email" placeholder="Email" type="email" />
                    <FormField name="subject" placeholder="Subject" />
                  </div>
                  <div className="form__inline">
                    <FormTextArea name="message" placeholder="your message" />
                  </div>
                  <SubmitButton title="send" className="btn btn--submit" />
                </FormContainer>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>
          Copyright &copy; <span id="date">{new Date().getFullYear()}</span>{" "}
          Lac-doh-Wilson Tchofor. All right reserved
        </p>
      </footer>
    </Fragment>
  );
};

export default App;
