export type LocalizedText = {
  zh: string;
  en: string;
};

export type Project = {
  slug: string;
  index: string;
  title: LocalizedText;
  eyebrow: LocalizedText;
  summary: LocalizedText;
  context: LocalizedText;
  challenge: LocalizedText;
  contribution: LocalizedText[];
  outcome: LocalizedText;
  stack: string[];
  theme: "signal" | "ledger" | "commons";
  externalUrl: string;
  placeholder: boolean;
};

export type ArticleSection = {
  heading: LocalizedText;
  paragraphs: LocalizedText[];
};

export type Article = {
  slug: string;
  index: string;
  title: LocalizedText;
  excerpt: LocalizedText;
  category: LocalizedText;
  date: string;
  readTime: LocalizedText;
  thesis: LocalizedText;
  sections: ArticleSection[];
  status: LocalizedText;
};

export const profile = {
  name: "Kv",
  email: "kevinyang20070105@gmail.com",
  githubLabel: "kevinyang20070105-blip",
  githubUrl: "https://github.com/kevinyang20070105-blip",
  wechat: "kevin132435y",
  role: {
    zh: "Web3 × AI 研究者、独立开发者与学生",
    en: "Web3 × AI researcher, independent developer & student",
  },
  shortBio: {
    zh: "我研究开放网络与智能系统如何从新奇技术变成可信赖的日常基础设施，并通过原型与写作把复杂问题变得可理解、可验证。",
    en: "I study how open networks and intelligent systems become trustworthy everyday infrastructure—then make complex ideas understandable and testable through prototypes and writing.",
  },
  availability: {
    zh: "正在寻找研究、产品与工程交叉方向的实习和合作机会。",
    en: "Open to internships and collaborations across research, product, and engineering.",
  },
};

export const navItems = [
  { href: "/", label: { zh: "首页", en: "Home" } },
  { href: "/about", label: { zh: "关于", en: "About" } },
  { href: "/projects", label: { zh: "项目", en: "Projects" } },
  { href: "/writing", label: { zh: "文章", en: "Writing" } },
  { href: "/contact", label: { zh: "联系", en: "Contact" } },
];

// CONTENT PLACEHOLDERS:
// These case studies define the intended structure and design tone. Replace
// titles, claims, contributions, metrics, links and technologies with verified
// resume content before public promotion.
export const projects: Project[] = [
  {
    slug: "prooflens",
    index: "01",
    title: { zh: "ProofLens 研究终端", en: "ProofLens Research Terminal" },
    eyebrow: { zh: "研究工具 · 概念原型", en: "Research tooling · Concept prototype" },
    summary: {
      zh: "一个面向 Web3 与 AI 研究的多源工作台，把结论、来源和反证路径放在同一张可追溯的研究图谱中。",
      en: "A multi-source workspace for Web3 and AI research that keeps claims, evidence, and counterarguments in one traceable research graph.",
    },
    context: {
      zh: "研究结论常被分散在论文、治理论坛、链上数据与社交讨论中。真正困难的不是找到更多信息，而是判断哪些信息值得相信。",
      en: "Research evidence is scattered across papers, governance forums, onchain data, and social discussion. The hard part is not finding more information—it is deciding what deserves trust.",
    },
    challenge: {
      zh: "如何让快速信息检索与严谨证据核验共存，同时保留每个结论的来源、时间和不确定性？",
      en: "How might fast retrieval coexist with rigorous verification while preserving the source, timing, and uncertainty behind every conclusion?",
    },
    contribution: [
      { zh: "定义从问题拆解、证据采集到结论审阅的端到端工作流", en: "Defined an end-to-end flow from question framing to evidence review" },
      { zh: "设计证据卡片、来源置信度与反例提示的交互模型", en: "Designed interaction models for evidence cards, source confidence, and counterexamples" },
      { zh: "构建可运行的界面原型，用于验证信息层级和研究节奏", en: "Built a working interface prototype to test hierarchy and research rhythm" },
    ],
    outcome: {
      zh: "待替换：补充真实测试对象、效率变化与研究质量指标。当前内容仅展示案例结构。",
      en: "Replace with verified users, efficiency change, and research-quality metrics. Current copy demonstrates the case-study structure only.",
    },
    stack: ["TypeScript", "Next.js", "LLM workflows", "Knowledge graphs"],
    theme: "signal",
    externalUrl: profile.githubUrl,
    placeholder: true,
  },
  {
    slug: "agent-ledger",
    index: "02",
    title: { zh: "Agent Ledger", en: "Agent Ledger" },
    eyebrow: { zh: "可信 AI · 系统探索", en: "Trustworthy AI · Systems exploration" },
    summary: {
      zh: "为自主智能体设计的轻量级审计层，让每次工具调用、关键判断和外部影响都能被理解与复核。",
      en: "A lightweight audit layer for autonomous agents, making tool calls, consequential decisions, and external effects understandable and reviewable.",
    },
    context: {
      zh: "智能体开始代表人完成越来越长的任务链，但传统日志更关心系统是否运行，而不是人是否能理解它为何这样行动。",
      en: "Agents increasingly complete long task chains on our behalf, while conventional logs explain whether a system ran—not why it acted the way it did.",
    },
    challenge: {
      zh: "如何在不淹没用户的前提下，呈现真正影响信任的决策节点，并允许人类及时介入？",
      en: "How can we surface the decisions that materially affect trust—without overwhelming people—and still make intervention timely?",
    },
    contribution: [
      { zh: "梳理智能体任务中的授权、执行、验证与回滚边界", en: "Mapped authorization, execution, verification, and rollback boundaries" },
      { zh: "提出面向人类审阅的事件模型与风险分级", en: "Proposed a human-reviewable event model and risk taxonomy" },
      { zh: "将系统约束转译成可操作的产品界面", en: "Translated system constraints into actionable product interfaces" },
    ],
    outcome: {
      zh: "待替换：补充真实仓库、演示链接、测试结论与个人贡献范围。",
      en: "Replace with a real repository, demo, test findings, and verified scope of contribution.",
    },
    stack: ["AI agents", "Event sourcing", "Policy design", "React"],
    theme: "ledger",
    externalUrl: profile.githubUrl,
    placeholder: true,
  },
  {
    slug: "commons-signals",
    index: "03",
    title: { zh: "Commons Signals", en: "Commons Signals" },
    eyebrow: { zh: "公共物品 · 数据叙事", en: "Public goods · Data narrative" },
    summary: {
      zh: "一项关于 Web3 公共物品价值衡量的研究实验，用多维信号代替单一融资数字讲述长期影响。",
      en: "A research experiment on measuring Web3 public-good value, using multidimensional signals instead of a single funding number to describe long-term impact.",
    },
    context: {
      zh: "开源基础设施的影响往往在很久之后才显现，而短期、单一指标容易奖励可见度而忽略复利价值。",
      en: "The impact of open infrastructure often appears much later, while short-term single metrics can reward visibility and miss compounding value.",
    },
    challenge: {
      zh: "如何把使用、依赖、治理参与和生态外溢组合成一种诚实、可读且不制造虚假精确度的叙事？",
      en: "How might usage, dependency, governance, and ecosystem spillovers form an honest, legible narrative without creating false precision?",
    },
    contribution: [
      { zh: "比较现有公共物品资助与影响衡量框架", en: "Compared existing public-goods funding and impact frameworks" },
      { zh: "设计兼顾定量信号与定性语境的展示结构", en: "Designed a presentation model combining quantitative signals and qualitative context" },
      { zh: "撰写研究叙事并搭建交互式数据故事原型", en: "Authored the research narrative and prototyped an interactive data story" },
    ],
    outcome: {
      zh: "待替换：补充真实数据源、研究样本、发布渠道与读者反馈。",
      en: "Replace with verified data sources, sample scope, publication channel, and reader feedback.",
    },
    stack: ["Onchain data", "Research", "Data visualization", "Storytelling"],
    theme: "commons",
    externalUrl: profile.githubUrl,
    placeholder: true,
  },
];

export const articles: Article[] = [
  {
    slug: "trust-is-a-product-surface",
    index: "01",
    title: { zh: "信任不是后台机制，而是产品界面", en: "Trust Is a Product Surface" },
    excerpt: {
      zh: "当 AI 与 Web3 系统替用户做出更多决定，信任必须从抽象承诺变成可看见、可干预的交互。",
      en: "As AI and Web3 systems make more decisions for people, trust must move from an abstract promise to a visible, interruptible interaction.",
    },
    category: { zh: "可信系统", en: "Trustworthy systems" },
    date: "2026-06-18",
    readTime: { zh: "6 分钟", en: "6 min read" },
    thesis: {
      zh: "一个系统值得信任，不只因为它内部安全，还因为普通人能够理解它正在做什么、为何这样做，以及什么时候可以说“不”。",
      en: "A system earns trust not only through internal safety, but by helping ordinary people understand what it is doing, why, and when they can say no.",
    },
    status: { zh: "示例草稿", en: "Sample draft" },
    sections: [
      {
        heading: { zh: "从机制正确到体验可信", en: "From correct mechanisms to trustworthy experience" },
        paragraphs: [
          {
            zh: "技术团队常把信任当成后台属性：权限模型是否严谨、签名是否有效、日志是否完整。这些都重要，但用户真正接触到的是一次授权、一条提示和一个无法撤回的动作。",
            en: "Technical teams often treat trust as a backend property: rigorous permissions, valid signatures, complete logs. These matter, but users encounter trust as a permission request, a message, and sometimes an irreversible action.",
          },
          {
            zh: "如果风险只存在于架构图里，却没有映射到界面中的解释、边界与退出路径，那么系统的安全性很难转化为人的安全感。",
            en: "When risk exists only in architecture diagrams and never appears as explanation, boundaries, and exit paths in the interface, system safety rarely becomes felt safety.",
          },
        ],
      },
      {
        heading: { zh: "把关键时刻设计出来", en: "Design the consequential moments" },
        paragraphs: [
          {
            zh: "可信产品不需要展示每一条日志。它需要识别那些会改变资金、身份、公开信息或外部关系的节点，并在这些节点提供足够的语境。",
            en: "A trustworthy product does not need to expose every log. It needs to recognize the moments that change money, identity, public information, or external relationships—and provide enough context there.",
          },
          {
            zh: "这意味着更好的预览、更明确的授权范围、更诚实的不确定性表达，以及真实可用的撤销和恢复机制。",
            en: "That means better previews, clearer authorization scope, honest expressions of uncertainty, and recovery paths that work in practice.",
          },
        ],
      },
    ],
  },
  {
    slug: "from-protocols-to-products",
    index: "02",
    title: { zh: "从协议到产品：基础设施如何被普通人使用", en: "From Protocols to Products" },
    excerpt: {
      zh: "真正改变世界的基础设施，最终都会隐藏复杂度，同时保留用户理解关键选择的能力。",
      en: "Infrastructure that changes the world eventually hides complexity while preserving people's ability to understand consequential choices.",
    },
    category: { zh: "Web3 产品", en: "Web3 product" },
    date: "2026-05-07",
    readTime: { zh: "7 分钟", en: "7 min read" },
    thesis: {
      zh: "Web3 的下一阶段不是让所有人学习协议细节，而是让协议优势在不增加认知负担的前提下变得可感知。",
      en: "The next phase of Web3 is not teaching everyone protocol details, but making protocol advantages perceptible without adding cognitive load.",
    },
    status: { zh: "示例草稿", en: "Sample draft" },
    sections: [
      {
        heading: { zh: "复杂度不会消失，只会迁移", en: "Complexity does not disappear—it moves" },
        paragraphs: [
          {
            zh: "助记词、Gas、跨链与签名并不是去中心化的价值本身，而是当前实现暴露给用户的成本。产品成熟的标志，是把这些成本迁移到更可靠的系统层。",
            en: "Seed phrases, gas, bridging, and signatures are not decentralization's value; they are costs exposed by current implementations. Product maturity moves those costs into more reliable system layers.",
          },
          {
            zh: "隐藏复杂度并不等于隐藏权力。好的抽象应该让日常操作更简单，同时在关键时刻仍能解释资产、权限和风险去了哪里。",
            en: "Hiding complexity should not mean hiding power. Good abstractions simplify everyday actions while still explaining where assets, permissions, and risk go when it matters.",
          },
        ],
      },
      {
        heading: { zh: "以结果而不是术语开始", en: "Start with outcomes, not vocabulary" },
        paragraphs: [
          {
            zh: "普通人需要的是更便宜的跨境协作、更可携带的数字身份、更透明的组织规则，而不是一组新的缩写。产品应该从这些结果倒推技术。",
            en: "People need cheaper cross-border coordination, portable digital identity, and transparent organizational rules—not another set of acronyms. Products should work backward from those outcomes.",
          },
        ],
      },
    ],
  },
  {
    slug: "research-as-a-reproducible-system",
    index: "03",
    title: { zh: "把研究变成可复现的系统", en: "Research as a Reproducible System" },
    excerpt: {
      zh: "在信息生成速度超过验证速度的时代，优秀研究的差异不只是观点，而是别人能否复核你的路径。",
      en: "When information is generated faster than it can be verified, strong research is distinguished not only by conclusions but by whether others can retrace the path.",
    },
    category: { zh: "研究方法", en: "Research method" },
    date: "2026-03-24",
    readTime: { zh: "5 分钟", en: "5 min read" },
    thesis: {
      zh: "把问题、来源、判断和反证组织成可复核的链条，能让 AI 加速研究而不稀释研究质量。",
      en: "Organizing questions, sources, judgments, and counterevidence into a reviewable chain lets AI accelerate research without diluting its quality.",
    },
    status: { zh: "示例草稿", en: "Sample draft" },
    sections: [
      {
        heading: { zh: "答案不是研究产物的全部", en: "The answer is not the whole research artifact" },
        paragraphs: [
          {
            zh: "一份结论脱离来源与形成过程后，很快会变成另一个需要被验证的断言。真正可复用的研究，需要同时保存问题边界、关键来源和判断依据。",
            en: "Once separated from its sources and formation process, a conclusion quickly becomes another claim to verify. Reusable research preserves the question boundary, key evidence, and reasoning together.",
          },
          {
            zh: "AI 可以压缩检索和整理时间，但不能替代对证据质量、时效性和利益关系的判断。这些判断应该被显式记录，而不是留在研究者脑中。",
            en: "AI can compress retrieval and synthesis time, but cannot replace judgment about evidence quality, recency, and incentives. Those judgments should be recorded explicitly rather than left in a researcher's head.",
          },
        ],
      },
      {
        heading: { zh: "为反证留下位置", en: "Make room for disconfirmation" },
        paragraphs: [
          {
            zh: "好的研究系统不会只收集支持当前假设的资料。它会主动记录哪些证据可能推翻结论，以及出现什么变化时需要重新评估。",
            en: "A good research system does not only collect evidence that supports the current hypothesis. It records what could disprove the conclusion and what changes should trigger reevaluation.",
          },
        ],
      },
    ],
  },
];

export const focusAreas = [
  {
    number: "01",
    title: { zh: "可信智能体", en: "Trustworthy agents" },
    text: { zh: "研究 AI 智能体的授权边界、可解释操作与人类监督机制。", en: "Authorization boundaries, legible action, and meaningful human oversight for AI agents." },
  },
  {
    number: "02",
    title: { zh: "开放基础设施", en: "Open infrastructure" },
    text: { zh: "关注身份、协作与价值流动如何在开放网络上形成更好的产品。", en: "How identity, coordination, and value flow can become better products on open networks." },
  },
  {
    number: "03",
    title: { zh: "可复现研究", en: "Reproducible research" },
    text: { zh: "把来源、推理、不确定性和反证路径变成研究产物的一部分。", en: "Making sources, reasoning, uncertainty, and disconfirmation part of the research artifact." },
  },
];

export const capabilities = [
  { zh: "研究框架与信息综合", en: "Research framing & synthesis" },
  { zh: "产品策略与交互原型", en: "Product strategy & prototyping" },
  { zh: "前端开发与快速验证", en: "Front-end development & validation" },
  { zh: "中英双语技术写作", en: "Bilingual technical writing" },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
