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
	                        <p>Equal Heart had a great summer serving meals in Dallas, Austin, Houston and Denver</p>
		                </div>
		           </div>

		           <div className="one-half column-last">
		                <div className="iconbox icon-top">
	                        <div className="iconbox-icon"><img src="images/cacfp_numbers.png" alt="CACFP" /></div>
	                        <p>Equal Heart is looking forward to another school year where we can provide nutritious meals during after school activities.</p>
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
			</div>
		);
	}
}
export default Home;