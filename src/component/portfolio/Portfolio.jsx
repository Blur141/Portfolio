import React, { Component} from 'react';
import { Helmet } from 'react-helmet';
import LocomotiveScroll from 'locomotive-scroll';
import './portfolio.css';
import '../responsive.css';
import './loco.css';
import Aboutimg from '../../assets/About.jpg';

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.scrollRef = React.createRef();
  }

  componentDidMount() {
    const scroll = new LocomotiveScroll({
      el: this.scrollRef.current,
      smooth: true,
      getScrollbarSize: () => 0, 
    });
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div id='main'ref={this.scrollRef} className='scroll-container'>
        <Helmet>
          <link href="https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css"rel="stylesheet"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Helmet>
        <div id='hero'>
          <div id='nav'>
            <a href='#'>Mohammed Niyas NF</a>
            <h4>I'm a fresher</h4>
          </div>
          <div id='heading'>
            <h1>Web Developer</h1>
            <div className='blocktext'>
              <h1 className='secondh1'>& UI Designer</h1>
              <h5>Based in India</h5>
            </div>
          </div>
          <div id='herofooter'>
            <a href='https://github.com/Blur141'>Github<i className="ri-arrow-right-up-line"></i></a>
            <a href='https://www.behance.net/Mohammedniyasnf'>Behance<i className="ri-arrow-right-up-line"></i></a>
            <a href='https://dribbble.com/Blur141'>Dribbble<i className="ri-arrow-right-up-line"></i></a>
          </div>
        </div>
        <div id='second'>
  <div class='about'>
    <div>
      <img className='img' src= {Aboutimg}></img>
    </div>
    
    <div id='abouttext'>
      <h1>About Me</h1>
      <p>
      Hi there! I'm Mohammed Niyas NF, a budding web developer<br/>and designer exploring the realms of HTML, CSS, Bootstrap,<br/>Tailwind CSS , and a touch of JavaScript and React.js.I've<br/>dabbled in Python, Django, MySQL, and Git too. My passion lies<br/>in crafting user-friendly interfaces, and I'm familiar with Figma<br/>for UI/UX design. I'm eager to kickstart my career in the industry<br/>and contribute my skills to exciting projects.</p>
      <a className='resume' href='#'>Resume<i className="ri-arrow-right-up-line"></i></a>
    </div>
  </div>
</div>
<div id='projects'>
  <div className='elem'>
    <a href='https://www.behance.net/gallery/172575147/Website-Presentation-Community-app-(huddleup)'>Huddle up</a>
    <h5>2022</h5>
  </div>
  <div className='elem'>
  <a href='https://github.com/Blur141/Portfolio-website-using-HTML-Tailwind-CSS-JS-Python-Django.git'>Portfolio</a>
    <h5>2023</h5>
  </div>
  <div className='elem elemlast'>
  <a href='https://dribbble.com/shots/22189288-Website-Redesign-Website-Chumbak'>Chumbak</a>
    <h5>2022</h5>
  </div>
</div>

<div id='contact'>
  <div className='details1'>
    <h5>mohammedniyas654@gmail.com</h5>
    <h5>+91-8921442580</h5>
    <h5>Kerala, India</h5>
    </div>

    <div id='footer'>
            <a href='https://github.com/Blur141'>Github<i className="ri-arrow-right-up-line"></i></a>
            <a href='https://www.behance.net/Mohammedniyasnf'>Behance<i className="ri-arrow-right-up-line"></i></a>
            <a href='https://dribbble.com/Blur141'>Dribbble<i className="ri-arrow-right-up-line"></i></a>
          </div>
</div>
      </div>
    )
  }
}
