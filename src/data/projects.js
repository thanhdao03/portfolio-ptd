// Import images
import WebImage1 from '../images/web-1.png';
import WebImage2 from '../images/web-2.png';
import WebImage3 from '../images/web-3.png';
import WebImage4 from '../images/web-4.png';
import WebImage5 from '../images/web-5.png';
import WebImage6 from '../images/web-6.png';

export const projectsData = [
	{
		id: 1,
		title: 'Admin Dashboard',
		category: 'Web Application',
		img: WebImage1,
		ProjectHeader: {
			title: 'Project Management UI - From Context',
			publishDate: 'Jul 26, 2024',
			tags: 'UI / Frontend',
		},
		url: "https://dashboard-react-ptd.vercel.app/dashboard",
		github: "https://github.com/thanhdao03/Dashboard-react-PTD",
		tags: [
			"ReactJS", "Material Ui", "Admin Dashboard", "Firebase", "Auth", "Responsive"
		]
	},
	{
		id: 2,
		title: 'Chat App Realtime',
		category: 'Web Application',
		img: WebImage2,
		url: "https://chat-app-realtime-ochre.vercel.app/",
		github: "https://github.com/thanhdao03/ChatApp-Realtime-FrontEnd",
		tags: [
			"ReactJS", "ExpressJS", "Socket.io", "Zustand", "Tailwind CSS", "DaisyUI", "MongoDB"
		]
	},
	{
		id: 3,
		title: 'Pizza Delivery App',
		category: 'Web Application',
		img: WebImage3,
		url: "https://fast-react-pizza-phamdao.vercel.app/",
		github: "https://github.com/thanhdao03/Fast-React-Pizza-App-main",
		tags: [
			"ReactJS", "Ecommerce", "Tailwind CSS", "Redux Toolkit", "Mobile First", "Vite"
		]
	},
	{
		id: 4,
		title: 'Todo App Design',
		category: 'Web Application',
		img: WebImage4,
		url: "https://dashboard-react-ptd.vercel.app/dashboard",
		github: "https://todo-app-thanhdao.vercel.app/",
		tags: [
			"ReactJS", "CSS", "Redux Toolkit", "Mobile First", "Vite", "Dark Mode"
		]
	},
	{
		id: 5,
		title: 'Portfolio Project',
		category: 'Web Application',
		img: WebImage5,
		url: "https://react-portfolio-ptd.netlify.app/",
		github: "https://github.com/thanhdao03/Portfolio-PTD",
		tags: [
			"ReactJS", "Tailwind CSS", "Dark Mode", "Responsive", "Context API", "Custom Hooks"
		]
	},
	{
		id: 6,
		title: 'Booking Tours Travel',
		category: 'Web Application',
		img: WebImage6,
		url: "https://react-portfolio-ptd.netlify.app/",
		github: "https://github.com/thanhdao03/Tours-travels",
		tags: [
			"ReactJS", "ExpressJS", "MongoDB", "Bootstrap", "Responsive", "RESTful API", "Auth"
		]
	},
];
