export interface Metric {
  value: string;
  label: string;
}

export const impactMetrics: Metric[] = [
  { value: '12', label: 'Internal services integrated' },
  { value: '11', label: 'Engineering teams' },
  { value: '19', label: 'Live Data Connectors' },
  { value: '17', label: 'Operational Procedures' },
  { value: '30% → 70%', label: 'Chatbot resolution rate' },
  { value: '95%', label: 'Average CSAT (14 months)' },
  { value: '250 → 2,056', label: 'Structured knowledge articles' },
  { value: '0 → 78', label: 'Guidance Prompts' },
];
