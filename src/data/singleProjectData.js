// Import images
import Image1 from '../images/ui-project-1.jpg';
import Image2 from '../images/web-project-2.jpg';
import Image3 from '../images/mobile-project-2.jpg';
import Image4 from '../images/mobile-project-1.jpg';
import Image5 from '../images/web-project-1.png';
import Image6 from '../images/ui-project-2.jpg';
// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const singleProjectData = {
	ProjectHeader: {
		title: 'Project Management UI',
		publishDate: 'Jul 26, 2021',
		tags: 'UI / Frontend',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Bkav Project Management UI',
			img: Image1,
		},
		{
			id: 2,
			title: 'CMC Project Management UI',
			img: Image2,
		},
		{
			id: 3,
			title: 'FPT Project Management UI',
			img: Image3,
		},
	],
	ProjectInfo: {
		ClientHeading: 'About Client',
		CompanyInfo: [
			{
				id: 1,
				title: 'Name',
				details: 'Company Ltd',
			},
			{
				id: 2,
				title: 'Services',
				details: 'UI Design & Frontend Development',
			},
			{
				id: 3,
				title: 'Website',
				details: 'https://www.bkav.com/',
			},
			{
				id: 4,
				title: 'Phone',
				details: '0979 022 810',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'To design a modern, clean, and user-friendly project management application for a leading tech company.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'HTML',
					'CSS',
					'JavaScript',
					'Vue.js',
					'TailwindCSS',
					'AdobeXD',
				],
			},
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
				id: 1,
				details:
					'A simple portfolio starter theme built with React and Tailwind CSS. This is the React version of vuejs-tailwindcss-portfolio.',
			},
			{
				id: 3,
				details:
					'The main challenge was to create an intuitive UI that allows users to easily manage their projects, tasks, and team collaboration all in one place.',
			},
			{
				id: 4,
				details:
					'Ensuring seamless integration with backend services and maintaining high performance across different devices was also a significant challenge.',
			},
		],
		SocialSharingHeading: 'Share This',
		SocialSharing: [
			{
				id: 1,
				name: 'Twitter',
				icon: <FiTwitter />,
				url: 'https://www.instagram.com/phamthanhdd/#',
			},
			{
				id: 2,
				name: 'Instagram',
				icon: <FiInstagram />,
				url: 'https://www.instagram.com/phamthanhdd/#',
			},
			{
				id: 3,
				name: 'Facebook',
				icon: <FiFacebook />,
				url: 'https://www.facebook.com/pham.thanh.ao.948400',
			},
			{
				id: 4,
				name: 'LinkedIn',
				icon: <FiLinkedin />,
				url: 'https://www.linkedin.com/in/%C4%91%E1%BA%A1o-ph%E1%BA%A1m-049733285/',
			},
			{
				id: 5,
				name: 'Youtube',
				icon: <FiYoutube />,
				url: 'https://www.youtube.com',
			},
		],
	},
	RelatedProject: {
		title: 'Related Projects',
		Projects: [
			{
				id: 1,
				title: 'Mobile UI',
				img: Image4,
			},
			{
				id: 2,
				title: 'Web Application',
				img: Image5,
			},
			{
				id: 3,
				title: 'UI Design',
				img: Image6,
			},
			{
				id: 4,
				title: 'Bkav Mobile App UI',
				img: Image3,
			},
		],
	},
};
