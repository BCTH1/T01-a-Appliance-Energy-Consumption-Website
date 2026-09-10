# Domestic Energy Efficiency in Australia

**Unit:** COS30045 Data Visualisation  
**Task:** T01 (a): Build Appliance Energy Consumption Website  
**Author:** Bosco  
**Live Site:** [https://t01-a-appliance-energy-consumption.vercel.app/](https://t01-a-appliance-energy-consumption.vercel.app/)  
**Repository:** [https://github.com/BCTH1/T01-a-Appliance-Energy-Consumption-Website](https://github.com/BCTH1/T01-a-Appliance-Energy-Consumption-Website)

---

## 1. Project Overview
This project is an interactive single-page demonstration website focused on household appliance energy consumption in the Australian market. It establishes the base front-end layout and deployment workflow required for upcoming data visualisations in COS30045.

### Core Features
* **Three Functional Views:** Home, Televisions, and About Us.
* **JavaScript Dynamic Navigation:** Seamlessly swaps views without full-page browser reloads.
* **Brand-Consistent Theme:** Navy, gold/amber, and warm cream styling derived from the power logo.
* **Interactive Feedback:** Hover animations on buttons, visual active tab indicator, and a power logo home link.
* **Continuous Deployment:** Managed with GitHub Desktop and deployed via Vercel.

---

## 2. GitHub Copilot Usage Log

| File / Component | Prompt / Trigger Context | Copilot Contribution |
| :--- | :--- | :--- |
| `index.html` | Prompted Copilot to draft copy referencing official Australian GEMS registry testing standards and ERL star rating mechanics. | Generated semantic HTML structure, section containers, and authentic copy summarizing GEMS benchmarks and star ratings. |
| `style.css` | Flexbox navbar and color consistency | Suggested CSS variables (`:root`), flex-based centering, and hover transition effects. |
| `script.js` | Tab switching logic without reloading | Autocompleted the `forEach` loop and `classList.toggle` syntax for switching active view classes. |
| Visual Tweaks | Adjusting power logo sizing | Assisted in writing `object-fit: cover` and circular clipping rules for the logo button. |

---

## 3. Reflection on Using GitHub Copilot

### Workflow & Productivity
Using GitHub Copilot significantly accelerated boilerplate scaffolding. Instead of writing repetitive DOM queries and CSS resets from scratch, inline tab-completions provided working syntax instantaneously. It was particularly effective at predicting standard patterns, such as toggling CSS classes across a NodeList.

### Challenges & Verification
While Copilot produced functional starter code, it required human review to ensure it aligned with the assignment brief:
* **Requirement Alignment:** Initial suggestions attempted to use traditional multi-page links (`<a href="about.html">`). I had to explicitly adjust the architecture to use button click listeners and Single-Page Application (SPA) DOM manipulation as required by the task.
* **Visual Accuracy:** Color palette and spacing suggestions were generic defaults. I manually extracted and refined the hex values (`#112233`, `#f59e0b`, `#fbf9f1`) to match the assignment sample interface.

### Conclusion
Copilot acts as an efficient coding partner for syntax autocomplete and structural drafting. However, understanding the core DOM manipulation mechanics remains essential to debug layout quirks and defend design decisions during demonstrations.

---

## 4. Code Architecture & Demonstration Notes

* **Page Swapping (`script.js`):**  
  The site uses a Single-Page Application pattern. All three pages exist in `index.html` under `<main class="page-section">`. In `style.css`, `.page-section` is set to `display: none;`, while `.page-section.active` is set to `display: block;`. When a tab or the power logo is clicked, JavaScript reads the `data-target` attribute and toggles the `.active` class on both the matching content container and the corresponding navigation button.
* **Logo Button:**  
  The logo button has an event listener bound to `switchPage("home")`, resetting the view to the Home tab and scrolling smoothly to the top of the viewport.
* **CSS Custom Properties:**  
  All theme colours are centralised inside the `:root` pseudo-class in `style.css` for easy adjustments across components.
