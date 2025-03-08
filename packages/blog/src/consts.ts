import type { Site, Page, Links, Socials } from '@types';

// Global
export const SITE: Site = {
	TITLE: 'Dex Blog',
	DESCRIPTION:
		'Welcome to my blog! I write about software development, technology, and other topics I am passionate about.',
	AUTHOR: 'Cliff Johnson',
};

// Blog Page
export const BLOG: Page = {
	TITLE: 'Blog',
	DESCRIPTION: 'Writing on topics I am passionate about.',
};

// Search Page
export const SEARCH: Page = {
	TITLE: 'Search',
	DESCRIPTION: 'Search all posts by keyword.',
};

// Links
export const LINKS: Links = [
	{
		TEXT: 'Blog',
		HREF: '/',
	},
	{
		TEXT: 'dexv2.com',
		HREF: 'https://dexv2.com',
	},
];

// Socials
export const SOCIALS: Socials = [
	{
		NAME: 'Github',
		ICON: 'github',
		TEXT: 'dex2dot0',
		HREF: 'https://github.com/dex2dot0',
	},
	{
		NAME: 'LinkedIn',
		ICON: 'linkedin',
		TEXT: 'Cliff Johnson',
		HREF: 'https://www.linkedin.com/in/cliffjjohnson/',
	},
];
