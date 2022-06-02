import { useToggle } from '../hooks/useToggle';

export const PageUseToggle = () => {
	const [userIsOnline, toggleUserIsOnline] = useToggle(false);
	const [layoutIsDark, toggleLayoutIsDark] = useToggle(true);
	const [projectIsFinished, toggleProjectIsFinished] = useToggle(false);

	return (
		<>
			<h2>useToggle</h2>
			{userIsOnline ? (
				<p>User is currently online.</p>
			) : (
				<p>User is logged out.</p>
			)}
			<button onClick={() => toggleUserIsOnline()}>
				Toggle online status
			</button>
			<button onClick={() => toggleUserIsOnline(true)}>Login</button>

			<button onClick={() => toggleUserIsOnline(false)}>Logout</button>

			<hr />
			{layoutIsDark ? <p>Layout is dark.</p> : <p>Layout is light.</p>}
			<button onClick={() => toggleLayoutIsDark()}>Change layout</button>
			<button onClick={() => toggleLayoutIsDark(true)}>
				set to dark
			</button>
			<button onClick={() => toggleLayoutIsDark(false)}>
				set to light
			</button>

			<hr />
			{projectIsFinished ? (
				<p>Project is finished.</p>
			) : (
				<p>Project is not yet complete.</p>
			)}
			<button onClick={() => toggleProjectIsFinished()}>
				Change project status
			</button>
			<button onClick={() => toggleProjectIsFinished(true)}>
				mark as finished
			</button>
			<button onClick={() => toggleProjectIsFinished(false)}>
				mark as NOT finished
			</button>
		</>
	);
};
