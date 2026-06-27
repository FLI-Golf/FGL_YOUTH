import { i as head, r as ensure_array_like, t as attr_class, v as attr, y as escape_html } from "../../chunks/server.js";
//#region src/routes/+page.svelte
function _page($$renderer) {
	const navLinks = [
		{
			label: "Programs",
			href: "#programs"
		},
		{
			label: "Registration",
			href: "#registration"
		},
		{
			label: "Features",
			href: "#features"
		}
	];
	const registrationLinks = [
		{
			title: "Player Registration",
			description: "Create a participant profile and join a youth program.",
			href: "/register/player",
			accent: "red"
		},
		{
			title: "Program Registration",
			description: "Set up a new club, season, or community program.",
			href: "/register/program",
			accent: "blue"
		},
		{
			title: "Coach Registration",
			description: "Add a coach, director, or volunteer to your staff.",
			href: "/register/coach",
			accent: "gold"
		}
	];
	const modules = [
		{
			title: "Organizations",
			description: "Keep clubs, schools, and community partners organized.",
			icon: "M4 20V8l8-4 8 4v12H4Zm4-2h8v-6H8v6Zm2-8h4V8h-4v2Z"
		},
		{
			title: "Participants",
			description: "Track player profiles, status, and progress across programs.",
			icon: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm7 8v-2a5 5 0 0 0-5-5h-4a5 5 0 0 0-5 5v2h14Z"
		},
		{
			title: "Parents",
			description: "Stay connected with guardians and family communication.",
			icon: "M16 11a4 4 0 1 0-3.5-5.94A4 4 0 0 0 16 11ZM8 12a3 3 0 1 0-2.6-4.5A3 3 0 0 0 8 12Zm8 1c-2.42 0-4.5 1.34-5.5 3.28A6 6 0 0 1 16 17h6v-1a3 3 0 0 0-3-3h-1ZM8 14c-2.76 0-5 1.79-5 4v1h6.5a6 6 0 0 1 2.1-3.62A5.5 5.5 0 0 0 8 14Z"
		},
		{
			title: "Program Directors",
			description: "Manage staff roles, scheduling, and day-to-day operations.",
			icon: "M12 2 1 7v2h22V7L12 2Zm-7 9h3v9H5v-9Zm5 0h4v9h-4v-9Zm6 0h3v9h-3v-9ZM2 22h20v-2H2v2Z"
		},
		{
			title: "Seasons",
			description: "Plan session windows, dates, and recurring program cycles.",
			icon: "M7 2v2H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3h-2V2h-2v2H9V2H7Zm12 7H5v10h14V9Z"
		},
		{
			title: "Teams",
			description: "Group players, coaches, and practice assignments together.",
			icon: "M6 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm12 0a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 10a4 4 0 0 0-4 4v4h4v-4h1.5a6.5 6.5 0 0 1 2.5.5V10H4Zm20 4a4 4 0 0 0-4-4h-4.5v4.5a6.5 6.5 0 0 1 2.5-.5H19v4h5v-4Z"
		},
		{
			title: "Badges",
			description: "Celebrate milestones, skills, and achievements visibly.",
			icon: "M12 2 8 4v5a4 4 0 0 0 8 0V4l-4-2Zm0 12-2.5 1.5.8 2.9L12 17l1.7 1.4.8-2.9L12 14Zm-6 8 6-3 6 3-1.2-6.7A6 6 0 0 1 6 16.3L6 22Z"
		},
		{
			title: "Certifications",
			description: "Record completed certifications and coach qualifications.",
			icon: "M6 2h9l5 5v15H6V2Zm9 1.5V8h4.5L15 3.5ZM9 12h7v2H9v-2Zm0 4h7v2H9v-2Z"
		},
		{
			title: "Statistics",
			description: "Monitor attendance, progress, and program performance.",
			icon: "M4 19h16v2H2V3h2v16Zm3-2V8h3v9H7Zm5 0V5h3v12h-3Zm5 0v-6h3v6h-3Z"
		},
		{
			title: "Curriculum",
			description: "Organize lessons, drills, and development paths.",
			icon: "M5 3h14a2 2 0 0 1 2 2v14l-4-2-4 2-4-2-4 2V5a2 2 0 0 1 2-2Zm2 4v2h10V7H7Zm0 4v2h10v-2H7Zm0 4v2h6v-2H7Z"
		}
	];
	head("1uha8ag", $$renderer, ($$renderer) => {
		$$renderer.title(($$renderer) => {
			$$renderer.push(`<title>FGL_YOUTH</title>`);
		});
		$$renderer.push(`<meta name="description" content="FGL Youth Development and FLIHub starter app"/>`);
	});
	$$renderer.push(`<div class="page-shell svelte-1uha8ag"><header class="topbar svelte-1uha8ag"><a class="brand svelte-1uha8ag" href="/" aria-label="FGL Youth home"><img class="brand-logo svelte-1uha8ag" src="/fliGolf_rwb-01.png" alt="FGL Youth logo"/></a> <nav class="nav svelte-1uha8ag" aria-label="Primary"><!--[-->`);
	const each_array = ensure_array_like(navLinks);
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let link = each_array[$$index];
		$$renderer.push(`<a${attr("href", link.href)} class="svelte-1uha8ag">${escape_html(link.label)}</a>`);
	}
	$$renderer.push(`<!--]--></nav> <a class="topbar-cta svelte-1uha8ag" href="#registration">Register Now</a></header> <section class="hero svelte-1uha8ag"><div class="hero-copy svelte-1uha8ag"><p class="eyebrow svelte-1uha8ag">FGL Youth Development</p> <h1 class="svelte-1uha8ag">Every kid can FLI.</h1> <p class="svelte-1uha8ag">A modern youth disc golf platform for programs, registrations, participant profiles,
        badges, certifications, statistics, curriculum tracking, and day-to-day administration.</p> <div class="hero-actions svelte-1uha8ag"><a class="primary-action svelte-1uha8ag" href="#registration">Start Registration</a> <a class="secondary-action svelte-1uha8ag" href="#programs">Explore Features</a></div> <div class="hero-metrics svelte-1uha8ag" aria-label="Platform highlights"><div class="svelte-1uha8ag"><strong class="svelte-1uha8ag">10+</strong> <span class="svelte-1uha8ag">core modules</span></div> <div class="svelte-1uha8ag"><strong class="svelte-1uha8ag">3</strong> <span class="svelte-1uha8ag">registration paths</span></div> <div class="svelte-1uha8ag"><strong class="svelte-1uha8ag">1</strong> <span class="svelte-1uha8ag">clean dashboard flow</span></div></div></div> <aside class="hero-panel svelte-1uha8ag" aria-label="Registration preview"><div class="hero-card hero-card-primary svelte-1uha8ag"><span class="svelte-1uha8ag">Now open</span> <strong class="svelte-1uha8ag">Season registration</strong> <p class="svelte-1uha8ag">Make enrollment simple for players, families, and staff.</p></div> <div class="hero-card hero-card-secondary svelte-1uha8ag"><span class="svelte-1uha8ag">Built for growth</span> <strong class="svelte-1uha8ag">Modern program stack</strong> <p class="svelte-1uha8ag">Track participants, teams, certifications, and progress in one place.</p></div></aside></section> <section class="section-heading svelte-1uha8ag" id="registration"><p class="eyebrow svelte-1uha8ag">Registration</p> <h2 class="svelte-1uha8ag">Fast links for the most common signups.</h2></section> <section class="registration-grid svelte-1uha8ag"><!--[-->`);
	const each_array_1 = ensure_array_like(registrationLinks);
	for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
		let item = each_array_1[$$index_1];
		$$renderer.push(`<a${attr_class(`registration-card ${item.accent}`, "svelte-1uha8ag")}${attr("href", item.href)}><span class="registration-badge svelte-1uha8ag">Open link</span> <h3 class="svelte-1uha8ag">${escape_html(item.title)}</h3> <p class="svelte-1uha8ag">${escape_html(item.description)}</p></a>`);
	}
	$$renderer.push(`<!--]--></section> <section class="section-heading svelte-1uha8ag" id="programs"><p class="eyebrow svelte-1uha8ag">Features</p> <h2 class="svelte-1uha8ag">Everything the landing page should point people toward.</h2></section> <section class="grid svelte-1uha8ag" id="features"><!--[-->`);
	const each_array_2 = ensure_array_like(modules);
	for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
		let module = each_array_2[$$index_2];
		$$renderer.push(`<article class="card svelte-1uha8ag"><div class="card-icon svelte-1uha8ag" aria-hidden="true"><svg viewBox="0 0 24 24" role="presentation" focusable="false" class="svelte-1uha8ag"><path${attr("d", module.icon)}></path></svg></div> <h2 class="svelte-1uha8ag">${escape_html(module.title)}</h2> <p class="svelte-1uha8ag">${escape_html(module.description)}</p></article>`);
	}
	$$renderer.push(`<!--]--></section></div>`);
}
//#endregion
export { _page as default };
