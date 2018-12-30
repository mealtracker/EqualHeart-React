import React, {Component} from "react";
import "./Jobs.css";

class Jobs extends Component {
	render() {
		var padding={paddingTop:"30px"};
		return (
			<div id='hiring'>
				<h1>Spring and Summer 2019 Positions</h1>
				<div className='l1'>Equal Heart is recruiting individuals to serve as AmeriCorps Members to reduce community hunger and provide engagement for youth.  In exchange for their service, AmeriCorps Members receive a bi-weekly living allowance and an end-of-term education award. </div>
				<div className='l1'><b>Requirements:</b>  Applicants must meet the following minimum criteria:</div>

				<div className='l1 right'>&#10004; Available for the entire duration of the program </div>
				<div className='l1 right'>&#10004; 17 years old or older by program start date </div>
				<div className='l1 right'>&#10004; U.S. Citizen or Permanent Resident</div>
				<div className='l1 right'>&#10004; Commitment to serve the community! </div>
				<div className='l1 right'>&#10004; All service locations require a minimum of 20 hours/week. </div>

				<div className='l1' style={padding}><strong>Program Dates for Dallas Positions: </strong> January 6, 2019- August 31, 2019</div>
				<div><a href="https://americorps.equalheart.org/hiring_fall2018.html">Apply for service in and around Dallas, TX</a></div>
				<div className='l1'><strong>Program Dates for National Positions: </strong>  February 10, 2019 - August 24, 2019</div>
				<div><a href="https://americorps.equalheart.org/national_fall2018.html">Apply for National Positions</a></div>
			</div>
		);
	}
}
export default Jobs;