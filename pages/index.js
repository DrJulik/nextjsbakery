import fetch from "isomorphic-unfetch";
import Cake from "components/Cake";
import Controls from "components/Controls";

export default function Home({ cakes, page, numberofCakes }) {
	const lastPage = Math.ceil(numberofCakes / 3);
	return (
		<main className="cake-display">
			<div className="cakes">
				{cakes.map((cake) => {
					return <Cake key={cake.id} cake={cake} />;
				})}
			</div>
			<Controls page={page} lastPage={lastPage} />
		</main>
	);
}
export async function getServerSideProps({ query: { page = 1 } }) {
	const { API_URL } = process.env;

	const start = +page === 1 ? 0 : (+page - 1) * 3;
	const numberOfCakesRes = await fetch(`${API_URL}/cakes/count`);
	const numberofCakes = await numberOfCakesRes.json();

	const res = await fetch(`${API_URL}/cakes?_limit=3&_start=${start}`);
	const data = await res.json();

	return {
		props: {
			cakes: data,
			page: +page,
			numberofCakes,
		},
	};
}

// export async function getStaticProps() {
// 	const { API_URL } = process.env;

// 	const res = await fetch(`${API_URL}/cakes?_limit=3`);
// 	const data = await res.json();

// 	return {
// 		props: {
// 			cakes: data,
// 		},
// 	};
// }
