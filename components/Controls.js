import { useRouter } from "next/router";

const Controls = ({ page, lastPage }) => {
	const router = useRouter();
	return (
		<div className="controls">
			<button
				onClick={() => router.push(`/?page=${page - 1}`)}
				disabled={page <= 1}
			>
				Back
			</button>
			<button
				onClick={() => router.push(`/?page=${page + 1}`)}
				disabled={page >= lastPage}
			>
				Next
			</button>
		</div>
	);
};

export default Controls;
