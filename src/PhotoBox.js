import React, {Component} from "react";

class PhotoBox extends Component {
	render() {
		return (
	        <div className="one-half">
	            <div className="iconbox icon-top">
	                <div className="iconbox-icon"><img src={this.props.box.photo} alt={this.props.box.alt} /></div>
	                <p>{this.props.box.text}</p>
	            </div>
	       </div>
		);
	}
}
export default PhotoBox;