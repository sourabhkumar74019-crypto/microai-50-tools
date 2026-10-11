const AI_TOOLS = [
  // 1. MARKETING & CONTENT WRITING (10 Tools)
  { id: "cold-email", name: "Cold Email Generator", cat: "marketing", desc: "High-converting outreach emails", pro: false },
  { id: "ad-copy", name: "FB & Google Ad Copy", cat: "marketing", desc: "Attention-grabbing ad scripts", pro: false },
  { id: "blog-outline", name: "SEO Blog Outline Generator", cat: "marketing", desc: "Structured H2/H3 blog headings", pro: false },
  { id: "tweet-thread", name: "Viral Tweet Thread Crafter", cat: "marketing", desc: "Engaging Twitter threads", pro: false },
  { id: "copy-framework", name: "AIDA Copywriting Framework", cat: "marketing", desc: "Attention, Interest, Desire, Action", pro: false },
  { id: "product-desc", name: "E-Commerce Product Desc", cat: "marketing", desc: "Sales-focused product copy", pro: false },
  { id: "landing-hero", name: "Landing Page Headline Writer", cat: "marketing", desc: "High-converting hero headers", pro: false },
  { id: "quora-answer", name: "Quora Answer Generator", cat: "marketing", desc: "Detailed authority answers", pro: false },
  { id: "newsletter", name: "Email Newsletter Writer", cat: "marketing", desc: "Engaging subscriber updates", pro: false },
  { id: "bulk-ad", name: "Bulk Ad Copy Generator", cat: "marketing", desc: "Generate 10 ad variations at once", pro: true },

  // 2. YOUTUBE & SOCIAL MEDIA (10 Tools)
  { id: "yt-script", name: "YouTube Video Script Writer", cat: "youtube", desc: "Full video hook, intro & body script", pro: false },
  { id: "yt-title", name: "Clickworthy YouTube Titles", cat: "youtube", desc: "High-CTR title ideas", pro: false },
  { id: "yt-tags", name: "SEO Tags & Keywords Extractor", cat: "youtube", desc: "Rank video higher on YouTube", pro: false },
  { id: "insta-caption", name: "Instagram Caption & Hashtags", cat: "youtube", desc: "Viral reels & post captions", pro: false },
  { id: "tiktok-hook", name: "Shorts & Reels Hook Generator", cat: "youtube", desc: "Stop-scrolling first 3 seconds", pro: false },
  { id: "linkedin-post", name: "LinkedIn Professional Article", cat: "youtube", desc: "Thought leadership posts", pro: false },
  { id: "podcast-intro", name: "Podcast Script & Intro", cat: "youtube", desc: "Professional show outlines", pro: false },
  { id: "channel-desc", name: "YouTube Channel About Page", cat: "youtube", desc: "SEO optimized bio section", pro: false },
  { id: "community-post", name: "YouTube Community Poll & Post", cat: "youtube", desc: "Boost audience engagement", pro: false },
  { id: "url-analyzer", name: "URL Content & Video Summarizer", cat: "youtube", desc: "Scrape & analyze any webpage link", pro: true },

  // 3. CODING & DEVELOPER TOOLS (10 Tools)
  { id: "code-debugger", name: "AI Code Bug Fixer", cat: "coding", desc: "Paste broken code to fix instantly", pro: false },
  { id: "code-explain", name: "Code Explainer (Line-by-Line)", cat: "coding", desc: "Understand complex code snippets", pro: false },
  { id: "sql-query", name: "Natural Text to SQL Query", cat: "coding", desc: "Convert English sentences to SQL", pro: false },
  { id: "regex-gen", name: "Regex Pattern Generator", cat: "coding", desc: "Custom regular expressions", pro: false },
  { id: "html-converter", name: "Tailwind UI Code Generator", cat: "coding", desc: "Generate clean responsive UI", pro: false },
  { id: "json-formatter", name: "JSON Data Formatter & Fixer", cat: "coding", desc: "Clean & validate JSON objects", pro: false },
  { id: "api-doc", name: "API Documentation Writer", cat: "coding", desc: "Auto-generate endpoints docs", pro: false },
  { id: "code-refactor", name: "Code Optimizer & Speed Booster", cat: "coding", desc: "Make code run faster & cleaner", pro: false },
  { id: "git-commit", name: "Git Commit Message Writer", cat: "coding", desc: "Professional commit descriptions", pro: false },
  { id: "pdf-exporter", name: "1-Click PDF / DOCX Output Exporter", cat: "coding", desc: "Export results to formatted docs", pro: true },

  // 4. BUSINESS & STARTUP (10 Tools)
  { id: "business-pitch", name: "Elevator Pitch Deck Writer", cat: "business", desc: "Pitch startup to investors", pro: false },
  { id: "swot-analysis", name: "SWOT Analysis Generator", cat: "business", desc: "Strengths, Weaknesses, Ops, Threats", pro: false },
  { id: "brand-name", name: "Business & Brand Name Finder", cat: "business", desc: "Catchy available business names", pro: false },
  { id: "slogan-gen", name: "Tagline & Slogan Creator", cat: "business", desc: "Memorable company slogans", pro: false },
  { id: "value-prop", name: "Value Proposition Writer", cat: "business", desc: "Define your core business offer", pro: false },
  { id: "competitor-audit", name: "Competitor Analysis Report", cat: "business", desc: "Market advantage strategy", pro: false },
  { id: "job-description", name: "HR Job Description Creator", cat: "business", desc: "Hire top talent faster", pro: false },
  { id: "pricing-strategy", name: "SaaS Pricing Model Planner", cat: "business", desc: "Tiered pricing breakdowns", pro: false },
  { id: "cold-call", name: "B2B Sales Phone Call Script", cat: "business", desc: "Close clients over call", pro: false },
  { id: "brand-voice", name: "Custom Brand Voice Switcher", cat: "business", desc: "Save & auto-apply brand tone", pro: true },

  // 5. PRODUCTIVITY & WRITING (10 Tools)
  { id: "grammar-checker", name: "Grammar Fixer & Enhancer", cat: "writing", desc: "Fix typos & improve tone", pro: false },
  { id: "summarizer", name: "Long Article Summarizer", cat: "writing", desc: "Convert 5-page docs into bullets", pro: false },
  { id: "passive-active", name: "Passive to Active Voice", cat: "writing", desc: "Make sentences punchy & direct", pro: false },
  { id: "cover-letter", name: "Job Cover Letter Generator", cat: "writing", desc: "Tailored job application letter", pro: false },
  { id: "resume-bullet", name: "Resume Achievement Bullets", cat: "writing", desc: "High-impact resume points", pro: false },
  { id: "email-reply", name: "Professional Email Reply Generator", cat: "writing", desc: "Smart polite email replies", pro: false },
  { id: "story-creator", name: "Creative Story & Script Writer", cat: "writing", desc: "Fiction & narrative plots", pro: false },
  { id: "vocabulary-booster", name: "Vocabulary & Word Rephraser", cat: "writing", desc: "Upgrade simple words to professional", pro: false },
  { id: "meeting-notes", name: "Meeting Minutes Summarizer", cat: "writing", desc: "Extract action items from notes", pro: false },
  { id: "history-vault", name: "Cloud Saved History & Vault", cat: "writing", desc: "Save & access all past outputs", pro: true }
];
