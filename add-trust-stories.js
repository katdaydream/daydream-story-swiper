const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

// 50 trust-the-designer stories
const newStories = `
    {"t":"Every word on your website was chosen for a reason. When you swap out a heading because you prefer different phrasing, you might be removing the exact keyword that gets you found on Google.","c":"trust-the-designer"},
    {"t":"Your designer isn't just making things pretty. They're building a system — every heading, every photo placement, every button is guiding your ideal client toward booking you.","c":"trust-the-designer"},
    {"t":"I know it's tempting to rearrange your homepage because it doesn't feel like you. But it was designed to feel like your CLIENT — the one who's about to book you.","c":"trust-the-designer"},
    {"t":"When you move a photo from the top of the page to the bottom because you like it better there, you might be breaking the visual flow that was designed to keep visitors scrolling.","c":"trust-the-designer"},
    {"t":"Your website isn't a scrapbook. It's a sales tool. Every element is placed strategically to convert visitors into inquiries. Trust the strategy behind the design.","c":"trust-the-designer"},
    {"t":"The heading that says what you do and where you do it might feel boring to you. But it's exactly what Google needs to rank you and exactly what clients need to trust you.","c":"trust-the-designer"},
    {"t":"You hired a designer because you wanted expert results. Redesigning it yourself after launch is like hiring a chef and then seasoning the dish yourself before it leaves the kitchen.","c":"trust-the-designer"},
    {"t":"That white space you want to fill? It's doing a job. White space makes your content breathable, scannable, and professional. Cramming in more content makes it feel overwhelming.","c":"trust-the-designer"},
    {"t":"Your designer tested that button color, that font size, that layout on multiple devices. What looks off on your laptop might look perfect on the phone where 70% of your clients will see it.","c":"trust-the-designer"},
    {"t":"When you change the call-to-action from 'Book a Consultation' to 'Let's Chat,' you're making it vaguer. Clear beats cute when it comes to getting people to take action.","c":"trust-the-designer"},
    {"t":"Every photo on your site was placed to tell a story in a specific order. Moving them around because you have a favorite disrupts the narrative that was designed to build trust.","c":"trust-the-designer"},
    {"t":"Your designer writes headings that include the words people actually search on Google. Changing them to something clever or poetic might sound better to you but disappears from search results.","c":"trust-the-designer"},
    {"t":"I get it — it's your business and you want it to feel like you. But your website's job isn't to make you happy. It's to make your ideal client confident enough to reach out.","c":"trust-the-designer"},
    {"t":"The font your designer chose wasn't random. It was selected for readability, brand alignment, and web performance. Swapping it for something you saw on Pinterest could hurt all three.","c":"trust-the-designer"},
    {"t":"Your about page is structured to build credibility in a specific order — hook, story, credentials, call to action. Rearranging it because you want your bio first breaks the persuasion flow.","c":"trust-the-designer"},
    {"t":"Adding a wall of text to a page designed with concise copy is like turning a clean, modern room into a cluttered storage closet. Less copy, strategically placed, converts better.","c":"trust-the-designer"},
    {"t":"You might not love the photo your designer chose for the hero section. But they chose it because it's high quality, shows your work clearly, and loads fast. Your favorite photo might do none of those things.","c":"trust-the-designer"},
    {"t":"When you add your own pages, sections, or pop-ups without consulting your designer, you risk breaking the site structure that Google uses to understand and rank your content.","c":"trust-the-designer"},
    {"t":"Your designer built your site with a content hierarchy — H1, H2, H3 headings in a specific order. Changing heading sizes because you want something bigger can confuse Google about what your page is about.","c":"trust-the-designer"},
    {"t":"That testimonial placement wasn't random. Social proof works best at specific points in the page flow — right before a call to action, not buried at the bottom where nobody scrolls.","c":"trust-the-designer"},
    {"t":"Changing your brand colors on your website because you're tired of them doesn't just affect aesthetics — it breaks brand consistency across every platform where clients encounter you.","c":"trust-the-designer"},
    {"t":"Your designer gave you three portfolio images per row for a reason. Adding more makes them too small to appreciate. Showing fewer wastes valuable scroll space. Three is the sweet spot.","c":"trust-the-designer"},
    {"t":"The reason your designer said no to that carousel slider isn't because they're being difficult. It's because sliders kill page speed, hurt SEO, and most visitors never click past the first slide.","c":"trust-the-designer"},
    {"t":"You wouldn't tell your accountant how to file your taxes or your doctor how to read your labs. Your web designer studied conversion, user experience, and SEO strategy. Let them do their job.","c":"trust-the-designer"},
    {"t":"When you add a music player, auto-playing video, or animation to your site, you're adding seconds to your load time. Every second costs you visitors. Your designer left those out on purpose.","c":"trust-the-designer"},
    {"t":"Your services page lists things in a specific order because that's the order that makes sense for someone learning about your business for the first time. Your favorite service might not be where the story should start.","c":"trust-the-designer"},
    {"t":"The footer your designer built contains your location, services, and contact info — not because it looks nice, but because Google reads it on every page and uses it for local SEO.","c":"trust-the-designer"},
    {"t":"Changing your page URLs after launch because you want them shorter or different can break your Google rankings, your backlinks, and any saved bookmarks your clients have.","c":"trust-the-designer"},
    {"t":"Your designer chose those specific images because they're optimized for web — right file size, right dimensions, right format. Uploading your own unoptimized photos can slow your site down dramatically.","c":"trust-the-designer"},
    {"t":"That contact form has specific fields for a reason. Event date, budget range, and event type help you qualify leads before you ever get on the phone. Removing fields because the form feels long costs you valuable info.","c":"trust-the-designer"},
    {"t":"Your website was designed with a mobile-first approach because that's where most of your clients browse. The desktop version you're tweaking might look great on your monitor but isn't where bookings happen.","c":"trust-the-designer"},
    {"t":"The blog section your designer added isn't just for show. It's the engine that drives long-tail keyword rankings over time. Deleting it because you don't plan to blog removes a major growth channel.","c":"trust-the-designer"},
    {"t":"Your designer aligned your text left, not centered, because left-aligned text is easier to read in paragraphs. Centering everything because it looks balanced actually makes it harder to scan.","c":"trust-the-designer"},
    {"t":"That FAQ page your designer created isn't filler content. Those questions are based on what people actually search on Google. Each answer is a chance to rank for a long-tail keyword.","c":"trust-the-designer"},
    {"t":"When you paste text from Word or another website into your site editor, you're often pasting hidden formatting that breaks your design. Always paste as plain text and let the site styling handle the rest.","c":"trust-the-designer"},
    {"t":"Your designer's revision process exists so you can give feedback within the design system they built. Logging into the backend and making changes yourself can create problems they can't see or fix.","c":"trust-the-designer"},
    {"t":"The navigation menu has a limited number of items because decision fatigue is real. Adding every page to the menu doesn't help visitors — it overwhelms them. Simple menus convert better.","c":"trust-the-designer"},
    {"t":"Your homepage doesn't need to say everything about your business. It needs to say the right things — enough to build interest and guide visitors deeper into your site where the details live.","c":"trust-the-designer"},
    {"t":"Changing your meta descriptions to something you wrote yourself might feel more authentic, but if it doesn't include your target keywords and a call to action, fewer people will click your Google listing.","c":"trust-the-designer"},
    {"t":"Your designer spent time on image alt text — describing each photo with keywords and location. Deleting or ignoring alt text removes an accessibility feature AND an SEO signal.","c":"trust-the-designer"},
    {"t":"The reason your designer asks you not to install random plugins or apps is because each one adds code, slows your site, and can conflict with your design. More plugins doesn't mean better functionality.","c":"trust-the-designer"},
    {"t":"Your site was designed with a color contrast ratio that meets accessibility standards. Changing colors to lighter or softer tones might make text unreadable for some visitors.","c":"trust-the-designer"},
    {"t":"That landing page your designer built for your city has a specific structure — headline, intro, services, testimonial, CTA. Each section builds on the last. Rearranging them breaks the persuasion sequence.","c":"trust-the-designer"},
    {"t":"When you tell your designer you want your site to look like a competitor's, remember — you hired a designer to make you stand out, not blend in. Trust their vision for YOUR brand.","c":"trust-the-designer"},
    {"t":"Your designer doesn't push back on your ideas to be difficult. They push back because they've seen what works and what doesn't across dozens of client sites. Experience is what you're paying for.","c":"trust-the-designer"},
    {"t":"The launch version of your site is version one, not the final version. Trust the foundation your designer built and let the data — not your feelings — guide what changes next.","c":"trust-the-designer"},
    {"t":"Your website is a collaboration, not a DIY project with a helper. You bring the business expertise. Your designer brings the strategy, structure, and technical skill. Both matter.","c":"trust-the-designer"},
    {"t":"If something on your site bugs you, tell your designer. Don't fix it yourself. They can adjust it within the system they built. Your fix might solve one thing and break three others.","c":"trust-the-designer"},
    {"t":"The best client-designer relationships are built on trust. You trusted them enough to hire them. Now trust them enough to let them deliver what they're best at.","c":"trust-the-designer"},
    {"t":"Six months from now, when your site is bringing in consistent inquiries from Google, you'll be glad you didn't change that heading, move that photo, or rewrite that copy. The strategy works — let it.","c":"trust-the-designer"},`;

// 1. Insert stories before the closing ]; of allStories
if (!html.includes('"c":"trust-the-designer"}')) {
  html = html.replace(/(\s*\];[\s\S]*?\/\/ Filter)/, newStories + '\n  $1');
  if (!html.includes('"c":"trust-the-designer"}')) {
    // fallback: find the last story entry and insert after it
    const marker = '];';
    const idx = html.indexOf(marker);
    if (idx !== -1) {
      html = html.slice(0, idx) + newStories + '\n  ' + html.slice(idx);
    }
  }
} else {
  console.log('Stories already present, skipping story insertion.');
}

// 2. Add filter button "Trust the Process" with data-cat="trust-the-designer"
const filterBtnHtml = `<button class="filter-btn" data-cat="trust-the-designer">Trust the Process</button>`;
if (!html.includes('data-cat="trust-the-designer"')) {
  // Insert before closing </div> of filter buttons container
  // Find the last filter button and insert after it
  const lastBtnMarker = html.lastIndexOf('</button>');
  if (lastBtnMarker !== -1) {
    html = html.slice(0, lastBtnMarker + 9) + '\n        ' + filterBtnHtml + html.slice(lastBtnMarker + 9);
  }
} else {
  console.log('Filter button already present, skipping.');
}

// 3. Add color for the category
const colorEntry = `'trust-the-designer': '#7c3aed'`;
if (!html.includes("'trust-the-designer'")) {
  // Find the categoryColors object and insert the new color
  // Look for the last color entry pattern like 'something': '#xxxxxx'
  const colorPattern = /'[a-z-]+':\s*'#[0-9a-fA-F]+'/g;
  let lastMatch;
  let match;
  while ((match = colorPattern.exec(html)) !== null) {
    lastMatch = match;
  }
  if (lastMatch) {
    const insertPos = lastMatch.index + lastMatch[0].length;
    html = html.slice(0, insertPos) + ',\n        ' + colorEntry + html.slice(insertPos);
  }
} else {
  console.log('Color already present, skipping.');
}

fs.writeFileSync(filePath, html, 'utf8');
console.log('Done! trust-the-designer category added successfully.');
