import fetch from "isomorphic-unfetch";
import Cake from "components/Cake";
import Controls from "components/Controls";
import { motion, AnimatePresence } from "framer-motion";

export default function Home({ cakes, page, numberofCakes, context }) {
	const lastPage = Math.ceil(numberofCakes / 3);
	console.log(cakes);
	return (
		<main className="cake-display">
			<div className="cakes">
				{cakes.map((cake) => {
					return (
						<AnimatePresence exitBeforeEnter>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.2 }}
								exit={{ opacity: 0, x: 300 }}
								key={cake._id}
							>
								<Cake key={cake._id} cake={cake} />
							</motion.div>
						</AnimatePresence>
					);
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
