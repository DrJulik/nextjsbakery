import { GlobalProvider } from "../context/GlobalContext";
import Header from "components/Header";
import "../sass/styles.scss";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
function MyApp({ Component, pageProps }) {
	return (
		<GlobalProvider>
			<DefaultSeo {...SEO} />
			<div className="container">
				<Header />
				<Component {...pageProps} />
			</div>
		</GlobalProvider>
	);
}

export default MyApp;
