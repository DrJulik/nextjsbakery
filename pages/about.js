import { NextSeo } from "next-seo";

const about = () => {
	const SEO = {
		title: "About page",
		description: "Just your normal about page",
	};

	return (
		<>
			<NextSeo {...SEO} />
			<div className="about">
				<img src="/about.jpeg" />
				<div className="description">
					<h3>About our Bakery!</h3>
					<p>
						Sadly this is not a real bakery! This is just my Next Js project
						with Strapi Backend. Maybe you will be happy to know that the
						project has really cool pagination, uses Context API and a lot of
						cool Next JS stuff. I even coded this whole cart thing.
					</p>
				</div>
			</div>
		</>
	);
};

export default about;
