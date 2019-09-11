import React, { useEffect, useState } from 'react';
import blogService from './services/blogs';
import loginService from './services/loginService';
import Blog from './components/Blog';
import LoginForm from './components/LoginForm';
import BlogForm from './components/BlogForm';
import Notification from './components/Notification';

function App() {
	const [ blogs, setBlogs ] = useState([ {} ]);
	const [ user, setUser ] = useState(null);
	const [ login, setLogin ] = useState({ username: '', password: '' });
	const [ notification, setNotification ] = useState({ status: null, success: true, message: '' });

	// get all blogs
	useEffect(() => {
		const getBlogs = async () => {
			const allBlogs = await blogService.getAll();
			setBlogs(allBlogs);
		};
		getBlogs();
	}, []);

	// get user if stored locally
	useEffect(() => {
		const loggedUserJSON = window.localStorage.getItem('loggedUser');
		if (loggedUserJSON) {
			const user = JSON.parse(loggedUserJSON);
			blogService.setToken(user.token);
			setUser(user);
		}
	}, []);

	// handlers
	const loginHandler = async (event) => {
		event.preventDefault();

		try {
			const user = await loginService.login(login.username, login.password);

			// save user locally
			window.localStorage.setItem('loggedUser', JSON.stringify(user));

			blogService.setToken(user.token);
			setUser(user);
			setLogin({ username: '', password: '' });
		} catch (error) {
			setNotification({
				status  : true,
				success : false,
				message : `Wrong username or password`
			});
			setTimeout(() => {
				setNotification({ status: null });
			}, 5000);
		}
	};

	const logoutHandler = async () => {
		window.localStorage.clear();
		setUser(null);
	};

	// turn blogs to HTML
	const blogItems = blogs.map((blog, index) => <Blog key={index} blog={blog} />);

	// return login if not logged in
	if (user === null) {
		return (
			<div>
				<h2>Log in</h2>
				<Notification notification={notification} />
				<LoginForm loginHandler={loginHandler} setLogin={setLogin} login={login} />
			</div>
		);
	}

	// return blogs if logged in
	return (
		<div className="App">
			<div>
				<h2>Blogs</h2>
				<Notification notification={notification} />
				<div>
					{user.name} logged in
					<input type="button" value="logout" onClick={logoutHandler} />
				</div>
				<br />
				<BlogForm blogs={blogs} setBlogs={setBlogs} setNotification={setNotification} />
				<br />

				<h3>Blog posts</h3>
				<div>{blogItems}</div>
			</div>
		</div>
	);
}

export default App;
