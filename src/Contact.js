import React, {Component} from "react";
import "./Contact.css" ;
import axios from 'axios'

class Contact extends Component {
	constructor (props) {
		super(props);
		this.state={
			fields_validated: {contact_name:false,contact_email:false,contact_subject:false,contact_message:false},
			contact_name:"",
			contact_email:"",
			contact_phone:"",
			contact_subject:"",
			contact_message:"",
		};
		this.emailCourage=this.emailCourage.bind(this);
		this.validate_form_input=this.validate_form_input.bind(this);
		this.validate_email_input=this.validate_email_input.bind(this);
		this.close_notification=this.close_notification.bind(this);
	}

	emailCourage(e) {
		e.preventDefault(); //prevent page from reloading which is a form's default behavior
		//validate fields again in case they just click the submit button.
		var validated_fields=this.state.fields_validated;
		var field, input,event;
		var all_fields_validated=true;

		for (field in validated_fields) {
			if (!validated_fields[field]) {
				all_fields_validated=false;
				//trigger event
				input = document.getElementById(field);
				if (field=="contact_email") {
					event = new Event('blur', { bubbles: false});
				} else {
					event = new Event('change', { bubbles: false});
				}


				//Toggling simulated=false or true and will not trigger the value change
				event.simulated = true;
				input.dispatchEvent(event);

			}
		}
		if (all_fields_validated) {
			validated_fields=this.state;
			delete validated_fields["fields_validated"]
			//now send email -- use axios as this sort of sucks
    		axios.post("back_end/send_contact_email.php", validated_fields)
		      .then(res => {
		      	if (res.data.success=="true") {
		        	document.getElementById("contact-notification-box-success").style.display="block";
					this.setState({
						fields_validated: {contact_name:false,contact_email:false,contact_subject:false,contact_message:false},
						contact_name:"",
						contact_email:"",
						contact_phone:"",
						contact_subject:"",
						contact_message:"",
					});
		        } else {
		        	document.getElementById("contact-notification-box-error").style.display="block";
		        }
		      })
  			.catch(function (err) {
              document.getElementById("contact-notification-box-error").style.display="block";
            });

		}
	}

	validate_email_input(event) {
		//because value= requires an onChange event
		//onChange event triggers after every letter
	    const target = event.target;
	    var field_value=target.value.trim();
	    var validated_fields=this.state.fields_validated
	    var errorLabel = target.parentNode.querySelector(".invalid_feedback");
		if (!field_value.includes("@")) {
			errorLabel.textContent="Please enter a valid email address.";
			target.focus();
		} else if (field_value=="") {
			errorLabel.textContent="This field is required.";
			target.focus();
		} else {
			errorLabel.textContent = "";
			validated_fields["contact_email"]=true;
			this.setState({
				contact_email: target.value,
				fields_validated:validated_fields
			});
		}

	}
	validate_form_input(event) {
	    const target = event.target;
	    const idx = target.id;
	    this.setState({
			[idx] :target.value
		});
	    const field_value = target.type === 'checkbox' ? target.checked : target.value.trim();

	    var validated_fields=this.state.fields_validated
	    var errorLabel = target.parentNode.querySelector(".invalid_feedback");

	    if (idx=="contact_email") {
	    	return;
	    } else if (idx=="contact_phone") {
			this.setState({
				fields_validated:validated_fields
			});
			return;
	    }


		if (field_value=="") {
            errorLabel.textContent = "This field is required.";
            target.focus();
		} else {
			errorLabel.textContent = "";
			validated_fields[idx]=true;
			this.setState({
				fields_validated:validated_fields
			});
		}

		return true;
	}

	close_notification(event) {
		const target = event.target;
		target.parentNode.style.display="none";
	}

	render() {
		var hidediv={display:"none"}
		return (
    	<div id='contact_form'>
		    <h1 className="page-title">Contact</h1>
	        <section id="main" className="three-fourths">
		        <h2>Contact Us</h2>
		        <p>We want to connect with anyone who needs our support.&nbsp;
		                Please email us at <a href="mailto:courage@equalheart.org">courage@equalheart.org</a> or use the form below. We look forward to building a shared response with you.</p>
		        <div id="contact-notification-box-success" className="notification-box notification-box-success" style={hidediv}>
		            <p>Your message has been successfully sent. We will get back to you as soon as possible.</p>
		            <div className="notification-close-button" onClick={this.close_notification}>x</div>
		        </div>

		        <div id="contact-notification-box-error" className="notification-box notification-box-error" style={hidediv}>
		            <p>Your message could not be sent because a server error occurred. Please try again.</p>
		            <div className="notification-close-button" onClick={this.close_notification}>x</div>
		        </div>

		        <form id="contact-form" className="content-form" onSubmit={this.emailCourage}>
		            <p>
		                <label>Name:<span className="note">*</span></label>
		                <input id="contact_name" type="text" name="contact_name" value={this.state.contact_name} onChange={this.validate_form_input} onBlur={this.validate_form_input} />
		                <span className="invalid_feedback"></span>
		            </p>
		            <p>
		                <label>Email:<span className="note">*</span></label>
		                <input id="contact_email" type="email" name="email" value={this.state.contact_email} onChange={this.validate_form_input} onBlur={this.validate_email_input} />
		                <label className="invalid_feedback"></label>
		            </p>
		            <p>
		                <label>Phone:</label>
		                <input id="contact_phone" type="telephone" name="phone" value={this.state.contact_phone} onChange={this.validate_form_input}  />
		            </p>
		            <p>
		                <label>Subject:<span className="note">*</span></label>
		                <input id="contact_subject" type="text" name="subject" value={this.state.contact_subject} onChange={this.validate_form_input} onBlur={this.validate_form_input} />
		                <label className="invalid_feedback"></label>
		            </p>
		            <p>
		                <label>Message:<span className="note">*</span></label>
		                <textarea id="contact_message" cols="68" rows="8" onChange={this.validate_form_input} value={this.state.contact_message} onBlur={this.validate_form_input} />
		                <label className="invalid_feedback"></label>
		            </p>

		            <p>
		                <input id="submit" className="button" type="submit" name="submit" value="Send Message" />
		            </p>
		        </form>
		        <p><span className="note">*</span> Required fields</p>
	        </section>

	        <aside id="sidebar" className="one-fourth column-last">
	            <div className="widget contact-info">
	                <h3>Contact Info</h3>
	                <p>You can also reach us here:</p>
	                <div>
	                    <p className="address"><img src="images/contact/home.png" alt="address" /> <strong>Address:</strong> 4848 Lemmon Ave #513  Dallas, TX  75219</p>
	                    <p className="phone"><img src="images/contact/phone.png" alt="phone" /> <strong>Phone:</strong>  (469) 526-3645</p>
	                    <p className="email"><img src="images/contact/mail.png" alt="email" /> <strong>Email:</strong> <a href="mailto:courage@equalheart.org">courage@equalheart.org</a></p>
	                </div>
	            </div>
	        </aside>
	    </div>

		);
	}
}
export default Contact;