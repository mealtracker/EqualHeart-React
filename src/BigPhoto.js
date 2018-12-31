import React, {Component} from "react";
import "./BigPhoto.css";

class BigPhoto extends Component {
	render() {
		return (
			<div>
				<div className="cropPicture centre slide-in">
                    <div className="slogan" id="slogan">
                        supporting people in times of adversity
                    </div>
					<img src={this.props.data.photo} alt={this.props.data.alt} />
				</div>
				<div className="centre">
					<p className="content-featured"><span>{this.props.data.text}</span></p>
				</div>
			</div>
		);
	}
}
export default BigPhoto;
