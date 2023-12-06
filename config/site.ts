export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Next.js + NextUI (DEMO)",
	description: "NEXTUI Component Library DEMO.",
	navItems: [
	{
		label: "Table",
		href: "/tables",
	},
    {
      label: "Forms",
      href: "/forms",
    },
    {
      label: "Inputs",
      href: "/input",
    },
    {
      label: "Modals",
      href: "/modals",
    },
    {
      label: "Catalogs Mockup",
      href: "/catalogs",
    }
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};
