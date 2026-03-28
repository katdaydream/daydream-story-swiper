const fs = require('fs');
const path = 'index.html';
let html = fs.readFileSync(path, 'utf8');

const newStories = [
{"t":"SEO is a marathon, not a sprint. If someone promises you page one in 30 days, they're either lying or using tactics that will get you penalized. Real rankings take real time.","c":"seo-expectations"},
{"t":"You're not ranking in a vacuum. Every other balloon artist, event planner, and florist in your area is also trying to show up on Google. SEO is a competitive sport.","c":"seo-expectations"},
{"t":"SEO is not a magic pill. It's a system. It works when you consistently show up with the right content, the right structure, and real value for the people searching.","c":"seo-expectations"},
{"t":"The first 3 months of SEO feel like nothing is happening. That's normal. Google is crawling, indexing, and evaluating your site. The results come after the groundwork is laid.","c":"seo-expectations"},
{"t":"If you stop doing SEO after your website launches, your competitors will pass you. SEO is maintenance, not a one-time project.","c":"seo-expectations"},
{"t":"A brand new website takes 6 to 12 months to start ranking for competitive terms. That's not slow — that's how Google works. Trust the process.","c":"seo-expectations"},
{"t":"SEO doesn't replace marketing. It's one piece of the puzzle. You still need great photos, a strong brand, and a reputation people trust.","c":"seo-expectations"},
{"t":"Ranking on Google doesn't mean instant bookings. It means visibility. You still need a website that converts visitors into inquiries.","c":"seo-expectations"},
{"t":"Your competitor who ranks above you probably started their SEO 2 years ago. You're not behind — you're just getting started. But you need to start now.","c":"seo-expectations"},
{"t":"Google doesn't owe you a ranking. You earn it by being the most helpful, most relevant, most trustworthy result for what someone searches.","c":"seo-expectations"},
{"t":"One blog post won't change your rankings overnight. But 12 blog posts over 12 months? That compounds into serious search visibility.","c":"seo-expectations"},
{"t":"SEO results are not linear. You might see nothing for months, then suddenly jump from page 5 to page 1. That's how the algorithm works — stair-steps, not a straight line.","c":"seo-expectations"},
{"t":"Paying for a website and paying for SEO are two different investments. A beautiful website without SEO is like a billboard in the desert — nobody sees it.","c":"seo-expectations"},
{"t":"Google's algorithm changes constantly. What worked last year might not work this year. That's why SEO is ongoing, not set-it-and-forget-it.","c":"seo-expectations"},
{"t":"If your only SEO strategy is posting on Instagram and hoping for the best, you don't have an SEO strategy. Social media and search engine optimization are different channels.","c":"seo-expectations"},
{"t":"Your website needs fresh content regularly. Google favors sites that are actively maintained. A website you haven't touched in a year looks abandoned to Google.","c":"seo-expectations"},
{"t":"SEO is an investment with compound returns. Month 1 might bring nothing. Month 6 brings a trickle. Month 12 brings a steady flow. Month 24 brings a pipeline.","c":"seo-expectations"},
{"t":"Don't compare your month 3 to someone else's year 3. They've been building content, earning reviews, and optimizing for years. Your time will come if you put in the work.","c":"seo-expectations"},
{"t":"Getting to page 1 is one thing. Staying there is another. Your competitors are always working to take your spot. SEO is an ongoing commitment.","c":"seo-expectations"},
{"t":"A single Google review won't move the needle. But 30 reviews mentioning your city and services? That's a ranking signal Google takes very seriously.","c":"seo-expectations"},
{"t":"SEO won't fix a bad business. If your service isn't great, your pricing is off, or your client experience is messy — Google traffic will just expose those problems faster.","c":"seo-expectations"},
{"t":"There's no secret hack that will get you to number one. The businesses that rank well do the boring work consistently: good content, clear structure, real reviews, fast site.","c":"seo-expectations"},
{"t":"You might rank for 100 keywords and still feel like nothing is happening because you're checking the wrong ones. Focus on keywords that actually lead to bookings.","c":"seo-expectations"},
{"t":"Google doesn't care how pretty your website is. It cares whether your content answers what people are searching for, whether your site loads fast, and whether people trust you.","c":"seo-expectations"},
{"t":"SEO is not just about your website. It's your Google Business Profile, your reviews, your directory listings, your content — a whole ecosystem working together.","c":"seo-expectations"},
{"t":"If you're expecting SEO to replace paid ads immediately, you'll be disappointed. SEO builds slowly and delivers long-term. Ads deliver fast but stop when you stop paying.","c":"seo-expectations"},
{"t":"The best time to start SEO was when you launched your business. The second best time is right now. Every day you wait is a day your competitors get further ahead.","c":"seo-expectations"},
{"t":"Ranking for your own business name is the bare minimum, not the goal. The real win is ranking for what clients search when they don't know your name yet.","c":"seo-expectations"},
{"t":"SEO takes patience, but it's not passive. You need to actively create content, ask for reviews, update your site, and monitor progress. Patience doesn't mean sitting still.","c":"seo-expectations"},
{"t":"A website redesign without SEO is a missed opportunity. Every time you rebuild your site, you should be improving search visibility, not just aesthetics.","c":"seo-expectations"},
{"t":"You won't rank for everything at once. Start with your primary city and core service, dominate that, then expand. Trying to rank everywhere for everything is how you rank nowhere.","c":"seo-expectations"},
{"t":"Google is not broken when you don't show up. It's working exactly as designed — showing the most relevant, trusted results. Your job is to become one of those results.","c":"seo-expectations"},
{"t":"SEO doesn't work in isolation. The businesses that rank best are also active in their community, getting press mentions, and building real authority offline too.","c":"seo-expectations"},
{"t":"Your website copy matters more than you think. Every word is either helping Google understand what you do or confusing it. Vague, flowery language hurts your rankings.","c":"seo-expectations"},
{"t":"Seasonal businesses need year-round SEO. If you only optimize before busy season, you're too late. Google needs time to process content before the searches start.","c":"seo-expectations"},
{"t":"Don't chase algorithm updates. Chase quality. Businesses that focus on genuinely being the best result always recover from algorithm changes. The ones gaming the system don't.","c":"seo-expectations"},
{"t":"More pages doesn't automatically mean better SEO. Ten well-written, strategically targeted pages will outperform 50 thin, unfocused pages every time.","c":"seo-expectations"},
{"t":"Your friend's cousin who knows a little about websites is not an SEO strategist. SEO is a specialized skill. Treat your online presence with the same professionalism as your craft.","c":"seo-expectations"},
{"t":"Backlinks are earned, not bought. If someone is selling you links, they're selling you a penalty waiting to happen. Real backlinks come from being worth linking to.","c":"seo-expectations"},
{"t":"SEO success looks different for every business. For some it's 10 inquiries a month. For others it's 2 high-budget leads. Define what success means for YOUR business.","c":"seo-expectations"},
{"t":"Your competitors ranking above you are not necessarily better at what they do. They're just better at telling Google what they do. That's what SEO fixes.","c":"seo-expectations"},
{"t":"A cheap SEO service that promises everything will deliver nothing. Quality SEO requires research, strategy, content creation, and ongoing optimization.","c":"seo-expectations"},
{"t":"You don't need to understand how Google's algorithm works. You need to understand your clients — what they search, what they need, and how to show up when they're looking.","c":"seo-expectations"},
{"t":"SEO is the only marketing channel that works while you sleep, while you're on vacation, and while you're at an event. But only if you've put in the effort upfront.","c":"seo-expectations"},
{"t":"Stop checking your rankings every day. Rankings fluctuate daily. Check monthly, look at trends over 3 to 6 months, and focus on inquiries and bookings — not position numbers.","c":"seo-expectations"},
{"t":"If your website has been live for 3 years with no SEO, you have 3 years of missed opportunity — but also 3 years of domain age that gives you a head start once you begin.","c":"seo-expectations"},
{"t":"SEO and word of mouth are not competing strategies. SEO catches the people your referrals miss — the ones searching Google who don't know anyone to ask.","c":"seo-expectations"},
{"t":"The ROI of SEO isn't immediate, but it's massive long-term. One well-ranked page can bring in inquiries for years without spending another dollar on ads.","c":"seo-expectations"},
{"t":"Google rewards consistency. One blog, one review, one page update — once a month, every month — will outperform any one-time SEO blitz.","c":"seo-expectations"},
{"t":"If you're reading this and thinking SEO sounds like a lot of work, you're right. But so is running a business. The businesses that invest in being found are the ones that stay booked.","c":"seo-expectations"}
];

// Insert stories before the closing ];  of the allStories array
const arrayEnd = html.indexOf('];', html.indexOf('allStories'));
if (arrayEnd === -1) { console.log('ERROR: Could not find allStories array end'); process.exit(1); }
const insertion = ',' + newStories.map(s => JSON.stringify(s)).join(',');
html = html.slice(0, arrayEnd) + insertion + html.slice(arrayEnd);

// Add the SEO Expectations filter button
html = html.replace(
  /(<button[^>]*data-cat="boundaries"[^>]*>)/,
  '$1Boundaries</button><button class="cat-btn" data-cat="seo-expectations"'
);

// If that didn't work, try a simpler approach
if (!html.includes('seo-expectations')) {
  html = html.replace('Boundaries</button>', 'Boundaries</button><button class="cat-btn" data-cat="seo-expectations">Expectations</button>');
}

// Add color for seo-expectations in the categoryColors object if it exists
html = html.replace(
  /"boundaries":\s*"[^"]*"/,
  match => match + ',"seo-expectations":"#9B59B6"'
);

fs.writeFileSync(path, html);
console.log('SUCCESS! Added 50 seo-expectations stories');
console.log('File size:', (fs.statSync(path).size / 1024).toFixed(1) + 'KB');
