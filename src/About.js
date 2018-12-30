import React, {Component} from "react";
import "./About.css";

class About extends Component {

	render() {
		return (
			<div className="about">
				<div className="cropPicture">
					<img src="images/about1.jpg" alt="children with puppy" />
				</div>
				<div className="centre">
					<p className="content-services"><span>Equal Heart is a 501(c)3 nonprofit with operations in Texas, Arizona, Arkansas, California and Colorado. We are currently focused on alleviating hunger as we work to expand access to ensure every hungry individual has a daily meal no matter their circumstances.</span></p>
				</div>
		           <div className="middle centre">
		                <div><img src="images/baby.jpg" alt="baby in father's arm" className="baby" /></div>
		                <div className="services">
	                        <h2>Mission, Vision and Path</h2>
	                        <p>Our Mission is to support people in times of adversity.</p>
	                        <p>
	                            Our Vision is that misfortune is overcome through shared response because the humanity and courage in each individual is recognized.
	                        </p>
	                        <p>
	                            Our Path is to first recognize that each person, no matter their circumstances of birth or fortune, is created equal.  That in our hearts we all have the same dreams, aspirations and hopes.  For ourselves and for our children.
	                        </p>
		                </div>
		            </div>
		            <div className="middle centre">
			            <div><img src="images/about_mission.jpg" alt="buddies" /></div>
	                    <div className="services">
	                        <h2 className="iconbox-title">Partners</h2>
	                        <div id="partners">
	                            <div><a href="http://www.cornerstonedallas.org" rel="noopener noreferrer" target="_blank">Cornerstone Baptist Church</a></div>
	                            <div><a href="https://unitedwaydallas.org" rel="noopener noreferrer" target="_blank">United Way of Metropolitan Dallas</a></div>
	                            <div><a href="http://www.theheartofdallas.org" rel="noopener noreferrer" target="_blank">Heart of Dallas Young Professionals</a></div>
	                            <div><a href="https://www.baylor.edu/texashunger" rel="noopener noreferrer" target="_blank">Texas Hunger Initiative</a></div>
	                            <div><a href="http://giving.walmart.com/foundation" rel="noopener noreferrer" target="_blank">Walmart Foundation</a></div>
	                            <div><a href="https://www.pepsico.com/sustainability/Philanthropy" rel="noopener noreferrer" target="_blank">PepsiCo Foundation</a></div>
	                            <div><a href="http://www.bgcaustin.org" target="_blank" rel="noopener noreferrer" >Boys and Girls Club of Austin</a></div>
	                            <div><a href="http://www.schoolnutritionandfitness.com" target="_blank" rel="noopener noreferrer">Twelve Oaks Catering</a></div>
	                            <div><a href="http://www.squaremeals.org/" target="_blank" rel="noopener noreferrer">Texas Department of Agriculture</a></div>
		                	</div>
		                </div>
			        </div>
		            <div className="middle centre">
			            <div><img src="images/trophy_2015.png" alt="trophy" /></div>
			            <div className="services">
	                        <h2 className="iconbox-title">Awards</h2>

                        	<div className='hd5'>United Way of Metropolitan Dallas</div>
							<div className='hd6'>Ground Floor Fellow 2015-2016</div>
							<div className='hd5'>Heart of Dallas Young Professionals</div>
							<div className='hd6'>Winner of 2015 People's Choice Award</div>
							<div className='hd6'>2nd place in Fast Pitch competition</div>
							<div className='hd5'>Texas Hunger Initiative</div>
							<div className='hd6'>2015 Silver Sponsor Excellence in Summer Meals Award</div>
							<div className='hd6'>2016 Silver Sponsor Excellence in Summer Meals Award</div>

                        </div>
		            </div>
			</div>
		);
	}
}
export default About;