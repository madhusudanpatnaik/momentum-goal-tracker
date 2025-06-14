
import { SDLCTemplate } from '@/types/sdlc';

export const sdlcTemplates: SDLCTemplate[] = [
  {
    id: 'mvp-template',
    name: 'MVP Development',
    description: 'Build and launch a Minimum Viable Product',
    type: 'mvp',
    estimatedDuration: 12,
    phases: [
      {
        id: 'discovery',
        name: 'Discovery & Planning',
        description: 'Define requirements and create project roadmap',
        duration: 2,
        order: 1,
        dependencies: [],
        tasks: [
          {
            id: 'market-research',
            title: 'Market Research',
            description: 'Analyze target market and competitors',
            estimatedHours: 40,
            priority: 'high',
            status: 'not-started',
            dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
            dependencies: []
          },
          {
            id: 'requirements-gathering',
            title: 'Requirements Gathering',
            description: 'Define functional and non-functional requirements',
            estimatedHours: 32,
            priority: 'critical',
            status: 'not-started',
            dueDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(),
            dependencies: ['market-research']
          }
        ]
      },
      {
        id: 'design',
        name: 'Design & Prototyping',
        description: 'Create UI/UX designs and prototypes',
        duration: 3,
        order: 2,
        dependencies: ['discovery'],
        tasks: [
          {
            id: 'wireframes',
            title: 'Create Wireframes',
            description: 'Design low-fidelity wireframes',
            estimatedHours: 24,
            priority: 'high',
            status: 'not-started',
            dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
            dependencies: []
          },
          {
            id: 'ui-design',
            title: 'UI Design',
            description: 'Create high-fidelity UI designs',
            estimatedHours: 40,
            priority: 'high',
            status: 'not-started',
            dueDate: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000).toISOString(),
            dependencies: ['wireframes']
          }
        ]
      },
      {
        id: 'development',
        name: 'Development',
        description: 'Build the MVP features',
        duration: 6,
        order: 3,
        dependencies: ['design'],
        tasks: [
          {
            id: 'frontend-setup',
            title: 'Frontend Setup',
            description: 'Set up development environment and base structure',
            estimatedHours: 16,
            priority: 'critical',
            status: 'not-started',
            dueDate: new Date(Date.now() + 28 * 24 * 60 * 60 * 1000).toISOString(),
            dependencies: []
          },
          {
            id: 'core-features',
            title: 'Core Features Development',
            description: 'Implement essential MVP features',
            estimatedHours: 120,
            priority: 'critical',
            status: 'not-started',
            dueDate: new Date(Date.now() + 56 * 24 * 60 * 60 * 1000).toISOString(),
            dependencies: ['frontend-setup']
          }
        ]
      },
      {
        id: 'launch',
        name: 'Launch & Deployment',
        description: 'Deploy and launch the MVP',
        duration: 1,
        order: 4,
        dependencies: ['development'],
        tasks: [
          {
            id: 'deployment',
            title: 'Production Deployment',
            description: 'Deploy application to production environment',
            estimatedHours: 8,
            priority: 'critical',
            status: 'not-started',
            dueDate: new Date(Date.now() + 63 * 24 * 60 * 60 * 1000).toISOString(),
            dependencies: []
          },
          {
            id: 'launch-activities',
            title: 'Launch Activities',
            description: 'Execute go-to-market strategy',
            estimatedHours: 16,
            priority: 'high',
            status: 'not-started',
            dueDate: new Date(Date.now() + 70 * 24 * 60 * 60 * 1000).toISOString(),
            dependencies: ['deployment']
          }
        ]
      }
    ]
  },
  {
    id: 'product-launch-template',
    name: 'Product Launch',
    description: 'Full product launch with marketing and sales',
    type: 'product-launch',
    estimatedDuration: 16,
    phases: [
      {
        id: 'pre-launch',
        name: 'Pre-Launch Preparation',
        description: 'Prepare marketing materials and launch strategy',
        duration: 4,
        order: 1,
        dependencies: [],
        tasks: [
          {
            id: 'marketing-strategy',
            title: 'Marketing Strategy',
            description: 'Develop comprehensive marketing strategy',
            estimatedHours: 40,
            priority: 'high',
            status: 'not-started',
            dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
            dependencies: []
          },
          {
            id: 'content-creation',
            title: 'Content Creation',
            description: 'Create marketing content and materials',
            estimatedHours: 60,
            priority: 'high',
            status: 'not-started',
            dueDate: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000).toISOString(),
            dependencies: ['marketing-strategy']
          }
        ]
      },
      {
        id: 'launch-execution',
        name: 'Launch Execution',
        description: 'Execute the product launch',
        duration: 2,
        order: 2,
        dependencies: ['pre-launch'],
        tasks: [
          {
            id: 'launch-campaign',
            title: 'Launch Campaign',
            description: 'Execute marketing launch campaign',
            estimatedHours: 80,
            priority: 'critical',
            status: 'not-started',
            dueDate: new Date(Date.now() + 35 * 24 * 60 * 60 * 1000).toISOString(),
            dependencies: []
          }
        ]
      }
    ]
  },
  {
    id: 'fundraising-template',
    name: 'Fundraising Round',
    description: 'Prepare and execute fundraising activities',
    type: 'fundraising',
    estimatedDuration: 20,
    phases: [
      {
        id: 'preparation',
        name: 'Fundraising Preparation',
        description: 'Prepare pitch deck and financial documents',
        duration: 6,
        order: 1,
        dependencies: [],
        tasks: [
          {
            id: 'pitch-deck',
            title: 'Pitch Deck Creation',
            description: 'Create compelling investor pitch deck',
            estimatedHours: 60,
            priority: 'critical',
            status: 'not-started',
            dueDate: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000).toISOString(),
            dependencies: []
          },
          {
            id: 'financial-model',
            title: 'Financial Model',
            description: 'Build detailed financial projections',
            estimatedHours: 40,
            priority: 'critical',
            status: 'not-started',
            dueDate: new Date(Date.now() + 28 * 24 * 60 * 60 * 1000).toISOString(),
            dependencies: []
          }
        ]
      },
      {
        id: 'investor-outreach',
        name: 'Investor Outreach',
        description: 'Identify and contact potential investors',
        duration: 8,
        order: 2,
        dependencies: ['preparation'],
        tasks: [
          {
            id: 'investor-research',
            title: 'Investor Research',
            description: 'Research and identify target investors',
            estimatedHours: 32,
            priority: 'high',
            status: 'not-started',
            dueDate: new Date(Date.now() + 49 * 24 * 60 * 60 * 1000).toISOString(),
            dependencies: []
          }
        ]
      }
    ]
  }
];
