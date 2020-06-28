const contact = () => {
	return (
		<div>
			<div className="contact">
				<div className="form-group">
					<h2>Contact Us!</h2>
					<form>
						<div className="input-group">
							<label htmlFor="name">Name</label>
							<input type="text" name="name" placeholder="Name" />
						</div>
						<div className="input-group">
							<label htmlFor="email">Email Address</label>
							<input type="email" name="email" placeholder="Email" />
						</div>
						<div className="input-group">
							<label htmlFor="subject">Subject</label>
							<input type="text" name="subject" placeholder="Subject" />
						</div>
						<div className="input-group">
							<label htmlFor="name">Message</label>
							<textarea type="text" name="message" placeholder="Message" />
						</div>
						<input type="submit" value="Submit" />
					</form>
				</div>
				<div className="description">
					<h3>Representation</h3>
					<strong>Inge Sheridan</strong>
					<p>template.placeholder@gmail.com</p>
					<p>+1 (404) 555 0110</p>
					<h3>Press inquiries</h3>
					<strong>Claude Lavern</strong>
					<p>template.placeholder@gmail.com</p>
					<p>+1 (404) 555 0123</p>
				</div>
			</div>
		</div>
	);
};

export default contact;
