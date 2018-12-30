import React, {Component} from "react";
import PhotoBox from "./PhotoBox";
import "./Home.css";
	var boxes = [
		{"key":0,"photo":"images/chart_meals.png", "alt":"Chart","text":"Equal Heart has served over 3 million meals to children in Texas, Arkansas and Colorado over the past four years."},
		{"key":1,"photo":"images/US-Map-places.png", "alt":"US Map","text":"Equal Heart is expanding to Arizona, California and Illinois in our goal to provide nutrious meals to underserved communities."},
		{"key":2,"photo":"images/title_page_bottom_left.png", "alt":"SFSP Food","text":"Equal Heart works to end hunger in the United States. We do this through direct service by increasing access to healthy food sources."},
		{"key":3,"photo":"images/title_page_bottom_right.png", "alt":"SFSP Team","text":"Equal Heart partners with organizations to leverage existing funding streams which results in expanded services to those facing adversity."},
	];
	var render_boxes=[];
	boxes.forEach(function(box){
		render_boxes.push(<PhotoBox key={box.key} box={box} />)
	});

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
					{render_boxes}
				</div>
				<section className="container clearfix">
				    <h1>Food Insecurity</h1>
				    <div>
					    <img src="images/foodinsecurity.png" className="foodinsecurity" alt="Food Insecurity Chart" />
					    <span>To help address food insecurity, Equal Heart provides nutritious food to families year round with our Mobile Food Access Network.  Food insecurity exists throughout the country. But not everyone struggling with hunger qualifies for federal nutrition assistance. Almost 20% of Dallas County residents experienced food insecurity in 2015.  Of that number, 23% were not eligible for any nutrition assistance.  One in five children in North Texas lives in poverty, with more than 260,000 kids in the area considered food insecure, according to a biennial study released Tuesday from Children’s Health and the University of Texas at Dallas.  </span>
					</div>
				</section>
				<div id='vista'><img src='images/AmeriCorps_VISTALogo4C_black.png' alt="AmeriCorps VISTA" /></div>
			</div>
		);
	}
}
export default Home;