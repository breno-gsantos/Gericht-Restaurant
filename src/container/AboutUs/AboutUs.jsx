import { images } from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='g letter' />
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img' />
        <p className='p__opensans'>We are a dedicated team of culinary enthusiasts passionate about delivering exceptional dining experiences. Combining our love for the art of cooking with impeccable service, we strive to create unforgettable moments for our customers.</p>
        <button className='custom__button' type='button'>Know More</button>
      </div>

      <div  className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt='about_knife' />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img' />
        <p className='p__opensans'>For 18 years, we have been shaping the culinary landscape with our passion for exquisite dining. From our humble beginnings to becoming a respected establishment, our dedication to culinary excellence has earned us a reputation for creating unforgettable experiences.
        </p>
        <button className='custom__button' type='button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
