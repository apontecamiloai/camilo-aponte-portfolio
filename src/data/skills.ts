export interface SkillGroupData {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroupData[] = [
  {
    title: 'Knowledge Management',
    skills: [
      'Knowledge Management',
      'Technical Documentation',
      'Knowledge-Centered Service (KCS) principles',
      'Documentation Governance',
      'Content Lifecycle Management',
      'Semantic Search',
      'Bilingual Content (English/Spanish)',
    ],
  },
  {
    title: 'AI Engineering',
    skills: [
      'Agentic AI',
      'Conversational AI',
      'Prompt Engineering',
      'Knowledge Engineering',
      'Retrieval-Augmented Generation',
      'LLM Evaluation',
      'AI-assisted Software Engineering',
    ],
  },
  {
    title: 'Software & Automation',
    skills: [
      'Python',
      'Playwright',
      'SQLite',
      'REST APIs',
      'Browser Automation',
      'Workflow Automation',
      'API Integration',
      'Data Contract Design',
      'n8n',
    ],
  },
  {
    title: 'Platforms',
    skills: [
      'Claude Code',
      'Claude Agent SDK',
      'OpenAI GPTs',
      'Intercom Fin AI',
      'ClickUp',
      'Linear',
      'Slack',
      'Notion',
      'GitLab',
      'Google Workspace',
    ],
  },
  {
    title: 'Currently Developing Expertise',
    skills: [
      'LangChain',
      'LangGraph',
      'Advanced RAG',
      'Qdrant',
      'Pinecone',
      'Flowise',
      'Langflow',
      'MCP',
      'LangSmith',
      'OpenAI Agents SDK',
    ],
  },
];
