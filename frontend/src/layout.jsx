import { Outlet, Link } from "react-router-dom";

export default function Layout({ currentUser, onSignOut }) {
	return (
		<div className="bg-light d-flex flex-column min-vh-100">
			{/* 1. Navigation Bar, from header.ejs */}
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
				<div className="container">
					<Link
						className="navbar-brand fw-bold d-flex align-items-center gap-2"
						to="/"
					>
						<i className="bi bi-journal-text text-primary"></i> DevBlog
					</Link>
					<div className="d-flex align-items-center gap-3">
						{currentUser ? (
							<>
								<span className="text-light small">
									Welcome, <strong>{currentUser.name}</strong>
								</span>
								<button
									onClick={onSignOut}
									className="btn btn-outline-light btn-sm"
								>
									Sign Out
								</button>
							</>
						) : (
							<>
								<Link
									to="/signin"
									className="btn btn-outline-light btn-sm"
								>
									Sign In
								</Link>
								<Link
									to="/signup"
									className="btn btn-primary btn-sm"
								>
									Sign Up
								</Link>
							</>
						)}
					</div>
				</div>
			</nav>

			{/* 2. Dynamic Content Area */}
			<main className="container my-4 flex-grow-1">
				<Outlet />
			</main>

			{/* 3. Footer, used to be footer.ejs */}
			<footer className="bg-dark text-white text-center py-3 mt-auto">
				<div className="container">
					<small>
						&copy; {new Date().getFullYear()} CS-312 Mini Project 4: React
						Frontend.
					</small>
				</div>
			</footer>
		</div>
	);
}
