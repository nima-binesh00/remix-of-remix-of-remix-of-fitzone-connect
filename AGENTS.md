<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# AGENTS.md

- The original Astro repo (sudeep2003/Astro-Gym-Fitness-Website) was ported to this TanStack Start project; every Astro component/page lives as a React component in src/components plus routes in src/routes, keeping the same sections and content (translated to Persian).
- Site content is centralized in src/data/siteData.ts; edit copy, prices, schedules and trainer data there rather than in components.
- Times in siteData are stored as "H:MM AM/PM" (for sorting) and displayed via faTime() with Persian digits.
- Week schedule starts on Saturday (Persian week order) in fullSchedule.

- Serve site images through Lovable Assets JSON pointers and use their `.url` values so preview and published pages share stable media paths.
