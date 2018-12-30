import React, {Component} from "react";
import "./Home.css";

class Home extends Component {

	render() {
		return (
			<div id="home_section">
				<div className="cropPicture centre">
					<img src="images/cute_kid.png" alt="Smiling Boy" />
				</div>
				<div className="centre">
					<p className="content-featured">Our vision is a world where misfortune is overcome through shared response. Where the humanity and courage inherent in each individual is recognized.</p>
				</div>
				<div className="center_photos">
		            <div className="one-half">
		                <div className="iconbox icon-top">
	                        <div className="iconbox-icon"><img src="images/sfsp_numbers.png" alt="SFSP Food" /></div>
	                        <p>Equal Heart has served over 3 million meals to children in Texas, Arkansas and Colorado over the past four years.</p>
		                </div>
		           </div>

		           <div className="one-half column-last">
		                <div className="iconbox icon-top">
	                        <div className="iconbox-icon"><img src="images/cacfp_numbers.png" alt="CACFP" /></div>
	                        <p>Equal Heart is expanding to Arizona, California and Illinois to further our outreach in our goal to provide nutrious meals to underserved communities.</p>
		                </div>
		            </div>
				</div>
				<div className="center_photos">
		        	<div className="one-half">
		                <div className="iconbox icon-top">
	                    	<div className="iconbox-icon"><img src="images/title_page_bottom_left.png" alt="SFSP Food" /></div>
	                        <p>Equal Heart works to end hunger in the United States. We do this through direct service by increasing access to healthy food sources.</p>
		                </div>
		           </div>

		           <div className="one-half column-last">
		                <div className="iconbox icon-top">
	                    	<div className="iconbox-icon"><img src="images/title_page_bottom_right.png" alt="SFSP Team" /></div>
	                        <p>Equal Heart partners with organizations to leverage existing funding streams which results in expanded services to those facing adversity.</p>
		                </div>
		            </div>
				</div>
				<section className="container clearfix">
				    <h1>Food Insecurity</h1>
				    <div>
					    <img src="images/foodinsecurity.png" className="foodinsecurity" alt="Food Insecurity Chart" />
					    <p>To help address food insecurity, Equal Heart provides nutritious food to families year round with our Mobile Food Access Network.  Food insecurity exists throughout the country. But not everyone struggling with hunger qualifies for federal nutrition assistance. Almost 20% of Dallas County residents experienced food insecurity in 2015.  Of that number, 23% were not eligible for any nutrition assistance.  One in five children in North Texas lives in poverty, with more than 260,000 kids in the area considered food insecure, according to a biennial study released Tuesday from Children’s Health and the University of Texas at Dallas.  </p>
					</div>
				</section>
				<div id='vista'><img src='images/AmeriCorps_VISTALogo4C_black.png' alt="AmeriCorps VISTA" /></div>
			</div>
		);
	}
}
export default Home;