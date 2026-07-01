import "../../chunks/index-server.js";
import { a as head, b as escape_html, i as ensure_array_like, n as attr_style, t as attr_class, y as attr } from "../../chunks/server.js";
import { t as pb } from "../../chunks/pb.js";
//#region src/routes/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const navLinks = [
			{
				label: "Programs",
				href: "#programs",
				icon: "M4 20V8l8-4 8 4v12H4Zm4-2h8v-6H8v6Z"
			},
			{
				label: "Registration",
				href: "#registration",
				icon: "M7 2v2H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3h-2V2h-2v2H9V2H7Zm12 7H5v10h14V9Z"
			},
			{
				label: "Features",
				href: "#features",
				icon: "M4 4h16v3H4V4Zm0 6h10v3H4v-3Zm0 6h16v3H4v-3Z"
			}
		];
		const registrationLinks = [
			{
				title: "Player Registration",
				description: "Create a participant profile and join a youth program.",
				href: "/register/player",
				accent: "red",
				color: "#f97316",
				icon: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm7 8v-2a5 5 0 0 0-5-5h-4a5 5 0 0 0-5 5v2h14Z"
			},
			{
				title: "Program Registration",
				description: "Set up a new club, season, or community program.",
				href: "/register/program",
				accent: "blue",
				color: "#38bdf8",
				icon: "M4 20V8l8-4 8 4v12H4Zm4-2h8v-6H8v6Zm2-8h4V8h-4v2Z"
			},
			{
				title: "Coach Registration",
				description: "Add a coach, director, or volunteer to your staff.",
				href: "/register/coach",
				accent: "gold",
				color: "#f59e0b",
				icon: "M12 2 1 7v2h22V7L12 2Zm-7 9h3v9H5v-9Zm5 0h4v9h-4v-9Zm6 0h3v9h-3v-9ZM2 22h20v-2H2v2Z"
			}
		];
		const statCards = [
			{
				value: "10+",
				label: "core modules",
				color: "#f97316",
				icon: "M4 19h16v2H2V3h2v16Zm3-2V8h3v9H7Zm5 0V5h3v12h-3Zm5 0v-6h3v6h-3Z"
			},
			{
				value: "3",
				label: "registration paths",
				color: "#38bdf8",
				icon: "M6 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm12 0a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
			},
			{
				value: "1",
				label: "clean dashboard flow",
				color: "#f59e0b",
				icon: "M5 3h14a2 2 0 0 1 2 2v14l-4-2-4 2-4-2-4 2V5a2 2 0 0 1 2-2Z"
			}
		];
		const modules = [
			{
				title: "Organizations",
				description: "Keep clubs, schools, and community partners organized.",
				color: "#f97316",
				icon: "M4 20V8l8-4 8 4v12H4Zm4-2h8v-6H8v6Zm2-8h4V8h-4v2Z"
			},
			{
				title: "Participants",
				description: "Track player profiles, status, and progress across programs.",
				color: "#22c55e",
				icon: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm7 8v-2a5 5 0 0 0-5-5h-4a5 5 0 0 0-5 5v2h14Z"
			},
			{
				title: "Parents",
				description: "Stay connected with guardians and family communication.",
				color: "#ec4899",
				icon: "M16 11a4 4 0 1 0-3.5-5.94A4 4 0 0 0 16 11ZM8 12a3 3 0 1 0-2.6-4.5A3 3 0 0 0 8 12Zm8 1c-2.42 0-4.5 1.34-5.5 3.28A6 6 0 0 1 16 17h6v-1a3 3 0 0 0-3-3h-1ZM8 14c-2.76 0-5 1.79-5 4v1h6.5a6 6 0 0 1 2.1-3.62A5.5 5.5 0 0 0 8 14Z"
			},
			{
				title: "Program Directors",
				description: "Manage staff roles, scheduling, and day-to-day operations.",
				color: "#38bdf8",
				icon: "M12 2 1 7v2h22V7L12 2Zm-7 9h3v9H5v-9Zm5 0h4v9h-4v-9Zm6 0h3v9h-3v-9ZM2 22h20v-2H2v2Z"
			},
			{
				title: "Seasons",
				description: "Plan session windows, dates, and recurring program cycles.",
				color: "#f59e0b",
				icon: "M7 2v2H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3h-2V2h-2v2H9V2H7Zm12 7H5v10h14V9Z"
			},
			{
				title: "Teams",
				description: "Group players, coaches, and practice assignments together.",
				color: "#a855f7",
				icon: "M6 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm12 0a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 10a4 4 0 0 0-4 4v4h4v-4h1.5a6.5 6.5 0 0 1 2.5.5V10H4Zm20 4a4 4 0 0 0-4-4h-4.5v4.5a6.5 6.5 0 0 1 2.5-.5H19v4h5v-4Z"
			},
			{
				title: "Badges",
				description: "Celebrate milestones, skills, and achievements visibly.",
				color: "#14b8a6",
				icon: "M12 2 8 4v5a4 4 0 0 0 8 0V4l-4-2Zm0 12-2.5 1.5.8 2.9L12 17l1.7 1.4.8-2.9L12 14Zm-6 8 6-3 6 3-1.2-6.7A6 6 0 0 1 6 16.3L6 22Z"
			},
			{
				title: "Certifications",
				description: "Record completed certifications and coach qualifications.",
				color: "#eab308",
				icon: "M6 2h9l5 5v15H6V2Zm9 1.5V8h4.5L15 3.5ZM9 12h7v2H9v-2Zm0 4h7v2H9v-2Z"
			},
			{
				title: "Statistics",
				description: "Monitor attendance, progress, and program performance.",
				color: "#ef4444",
				icon: "M4 19h16v2H2V3h2v16Zm3-2V8h3v9H7Zm5 0V5h3v12h-3Zm5 0v-6h3v6h-3Z"
			},
			{
				title: "Curriculum",
				description: "Organize lessons, drills, and development paths.",
				color: "#60a5fa",
				icon: "M5 3h14a2 2 0 0 1 2 2v14l-4-2-4 2-4-2-4 2V5a2 2 0 0 1 2-2Zm2 4v2h10V7H7Zm0 4v2h10v-2H7Zm0 4v2h6v-2H7Z"
			}
		];
		let isAuthenticated = pb.authStore.isValid;
		head("1uha8ag", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>FGL_YOUTH</title>`);
			});
			$$renderer.push(`<meta name="description" content="FGL Youth Development and FLIHub starter app"/>`);
		});
		$$renderer.push(`<div class="page-shell svelte-1uha8ag"><div class="ambient-icons svelte-1uha8ag" aria-hidden="true"><svg class="ambient-icon ambient-icon-1 svelte-1uha8ag" viewBox="0 0 24 24" focusable="false"><path${attr("d", modules[0].icon)}></path></svg> <svg class="ambient-icon ambient-icon-2 svelte-1uha8ag" viewBox="0 0 24 24" focusable="false"><path${attr("d", modules[2].icon)}></path></svg> <svg class="ambient-icon ambient-icon-3 svelte-1uha8ag" viewBox="0 0 24 24" focusable="false"><path${attr("d", modules[5].icon)}></path></svg> <svg class="ambient-icon ambient-icon-4 svelte-1uha8ag" viewBox="0 0 24 24" focusable="false"><path${attr("d", registrationLinks[1].icon)}></path></svg></div> <header class="topbar svelte-1uha8ag"><a class="brand svelte-1uha8ag" href="/" aria-label="FGL Youth home"><img class="brand-logo svelte-1uha8ag" src="/fliGolf_rwb-01.png" alt="FGL Youth logo"/></a> <nav class="nav svelte-1uha8ag" aria-label="Primary"><!--[-->`);
		const each_array = ensure_array_like(navLinks);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let link = each_array[$$index];
			$$renderer.push(`<a${attr("href", link.href)} class="svelte-1uha8ag"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" class="svelte-1uha8ag"><path${attr("d", link.icon)}></path></svg> <span>${escape_html(link.label)}</span></a>`);
		}
		$$renderer.push(`<!--]--></nav> <a class="topbar-cta svelte-1uha8ag" href="#registration"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" class="svelte-1uha8ag"><path d="M12 2v20m-8-8h16"></path></svg> <span>Register Now</span></a></header> <section class="hero svelte-1uha8ag"><div class="hero-copy svelte-1uha8ag"><p class="eyebrow svelte-1uha8ag">FGL Youth Development</p> <h1 class="svelte-1uha8ag">EVERY KID CAN FLI</h1> <p class="svelte-1uha8ag">A modern youth disc golf platform for programs, registrations, participant profiles,
        badges, certifications, statistics, curriculum tracking, and day-to-day administration.</p> <div class="hero-actions svelte-1uha8ag"><a class="primary-action svelte-1uha8ag" href="#registration"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" class="svelte-1uha8ag"><path d="M12 5v14m-7-7h14"></path></svg> <span>Start Registration</span></a> <a class="secondary-action svelte-1uha8ag" href="#programs"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" class="svelte-1uha8ag"><path d="M4 12h10m-4-4 4 4-4 4M4 5h16v14H4z"></path></svg> <span>Explore Features</span></a></div></div> <aside class="hero-panel svelte-1uha8ag" aria-label="Registration preview"><div class="hero-card hero-card-primary svelte-1uha8ag"><div class="hero-card-watermark svelte-1uha8ag" aria-hidden="true"${attr_style(`--watermark-color: ${registrationLinks[0].color};`)}><svg viewBox="0 0 24 24" focusable="false" aria-hidden="true" class="svelte-1uha8ag"><path${attr("d", registrationLinks[0].icon)}></path></svg></div> <span class="registration-badge hero-badge svelte-1uha8ag">Open now</span> <div class="registration-icon hero-icon svelte-1uha8ag" aria-hidden="true"><svg viewBox="0 0 24 24" role="presentation" focusable="false" class="svelte-1uha8ag"><path d="M7 2v2H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3h-2V2h-2v2H9V2H7Zm12 7H5v10h14V9Z"></path></svg></div> <h3 class="svelte-1uha8ag">Season registration</h3> <p class="svelte-1uha8ag">Make enrollment simple for players, families, and staff.</p></div> <div class="hero-card hero-card-secondary svelte-1uha8ag"><div class="hero-card-watermark hero-card-watermark-secondary svelte-1uha8ag" aria-hidden="true"${attr_style(`--watermark-color: ${statCards[1].color};`)}><svg viewBox="0 0 24 24" focusable="false" aria-hidden="true" class="svelte-1uha8ag"><path${attr("d", statCards[1].icon)}></path></svg></div> <span class="registration-badge hero-badge svelte-1uha8ag">Built to grow</span> <div class="registration-icon hero-icon svelte-1uha8ag" aria-hidden="true"><svg viewBox="0 0 24 24" role="presentation" focusable="false" class="svelte-1uha8ag"><path d="M4 19h16v2H2V3h2v16Zm3-2V8h3v9H7Zm5 0V5h3v12h-3Zm5 0v-6h3v6h-3Z"></path></svg></div> <h3 class="svelte-1uha8ag">Modern program stack</h3> <p class="svelte-1uha8ag">Track participants, teams, certifications, and progress in one place.</p></div></aside></section> <section class="section-heading svelte-1uha8ag" id="registration"><p class="eyebrow svelte-1uha8ag">Registration</p> <h2 class="svelte-1uha8ag"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" class="svelte-1uha8ag"><path d="M7 2v2H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3h-2V2h-2v2H9V2H7Zm12 7H5v10h14V9Z"></path></svg> <span>Fast links for the most common signups.</span></h2></section> <section class="registration-grid svelte-1uha8ag"><!--[-->`);
		const each_array_1 = ensure_array_like(registrationLinks);
		for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
			let item = each_array_1[$$index_1];
			$$renderer.push(`<a${attr_class(`registration-card ${item.accent}`, "svelte-1uha8ag")}${attr("href", item.href)}${attr_style(`--card-color: ${item.color};`)}><div class="registration-card-watermark svelte-1uha8ag" aria-hidden="true"${attr_style(`--watermark-color: ${item.color};`)}><svg viewBox="0 0 24 24" role="presentation" focusable="false" class="svelte-1uha8ag"><path${attr("d", item.icon)}></path></svg></div> <span class="registration-badge svelte-1uha8ag">Open link</span> <div class="registration-icon svelte-1uha8ag" aria-hidden="true"><svg viewBox="0 0 24 24" role="presentation" focusable="false" class="svelte-1uha8ag"><path${attr("d", item.icon)}></path></svg></div> <h3 class="svelte-1uha8ag">${escape_html(item.title)}</h3> <p class="svelte-1uha8ag">${escape_html(item.description)}</p></a>`);
		}
		$$renderer.push(`<!--]--></section> `);
		if (isAuthenticated) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<section class="section-heading svelte-1uha8ag" id="programs"><p class="eyebrow svelte-1uha8ag">Features</p> <h2 class="svelte-1uha8ag"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" class="svelte-1uha8ag"><path d="M4 4h16v3H4V4Zm0 6h10v3H4v-3Zm0 6h16v3H4v-3Z"></path></svg> <span>Everything the landing page should point people toward.</span></h2></section> <section class="grid svelte-1uha8ag" id="features"><!--[-->`);
			const each_array_2 = ensure_array_like(modules);
			for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
				let module = each_array_2[$$index_2];
				$$renderer.push(`<article class="card svelte-1uha8ag"${attr_style(`--card-color: ${module.color};`)}><div class="card-watermark svelte-1uha8ag" aria-hidden="true"${attr_style(`--watermark-color: ${module.color};`)}><svg viewBox="0 0 24 24" role="presentation" focusable="false" class="svelte-1uha8ag"><path${attr("d", module.icon)}></path></svg></div> <div class="card-icon svelte-1uha8ag" aria-hidden="true"><svg viewBox="0 0 24 24" role="presentation" focusable="false" class="svelte-1uha8ag"><path${attr("d", module.icon)}></path></svg></div> <h2 class="svelte-1uha8ag">${escape_html(module.title)}</h2> <p class="svelte-1uha8ag">${escape_html(module.description)}</p></article>`);
			}
			$$renderer.push(`<!--]--></section>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<section class="section-heading svelte-1uha8ag" id="programs"><p class="eyebrow svelte-1uha8ag">Features</p> <h2 class="svelte-1uha8ag"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" class="svelte-1uha8ag"><path d="M7 2v2H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3h-2V2h-2v2H9V2H7Zm12 7H5v10h14V9Z"></path></svg> <span>Sign in to view the internal feature modules.</span></h2></section>`);
		}
		$$renderer.push(`<!--]--></div>`);
	});
}
//#endregion
export { _page as default };
