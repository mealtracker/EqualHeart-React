import React, {Component} from "react";
import './Services.css';

class Services extends Component {
	render() {
		return (
			<div id="services">
				<div className="cropPicture">
					<img src="images/services_big.jpg" alt="team member with children" id="services_big" />
				</div>
				<div className="centre">
					<p className="content-services"><span>We deliver federally funded meals free of charge to children at after-school and summer sites throughout the country. We are the largest nonprofit summer food sponsor in the state of Texas. In Dallas, we also provide nutritious food to families year round with our Mobile Food Access Network. Additionally, we engage and empower disconnected youth to facilitate our programs through AmeriCorps.</span></p>
				</div>
				<div className="centre">
			    	<div className="middle">
			            <div><img src="images/sfsp.png" alt="SFSP logo" /></div>
			            <div className='services'>
			  				For many children, the only meals they eat are at school.  Through our federally funded Summer Food Service Program, we work to ensure no child goes hungry during the summer. In Summer 2017, Equal Heart served over 425,000 meals to children in Dallas, Houston, Austin, and Denver, Colorado. In addition to delivering food to established summer programs and camps, we also lead the effort in feeding kids at their apartments through our Direct-to-Door program.
			            </div>
			        </div>
			        <div className="middle">
			            <div><img src="images/cacfp.png" alt="CACFP logo" /></div>
			            <div className='services'>
							Like other federally funded After School Supper Programs, ours is designed to meet the needs of children outside of school hours who might otherwise be at risk of going hungry. By pairing a healthy meal with engaging enrichment and educational activities, we help nourish the children while also helping families make ends meet by giving them an opportunity to redirect income they would otherwise spend on evening meals.
			            </div>
			        </div>
			        <div className="middle">
			            <div><img src="images/americorps.png" alt="AmeriCorps logo" /></div>
			            <div className='services'>
			            	Crucial staff within every program of Equal Heart is facilitated through AmeriCorps. With this partnership, we receive program support and in turn provide sustainable economic opportunities for the communities we strive to help. The result are programs that help individuals while they work to help themselves.
			            </div>
			        </div>
				</div>
			</div>
		);
	}
}
export default Services;