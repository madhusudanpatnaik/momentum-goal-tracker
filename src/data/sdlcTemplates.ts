
import { SDLCTemplate } from '@/types/sdlc';

export const sdlcTemplates: SDLCTemplate[] = [
  {
    id: 'mvp-template',
    name: 'MVP Development',
    description: 'Build and launch a Minimum Viable Product with core features',
    type: 'mvp',
    estimatedDuration: 12,
    teamSize: 4,
    budget: 50000,
    tags: ['startup', 'agile', 'lean'],
    phases: [
      {
        id: 'discovery',
        name: 'Discovery & Planning',
        description: 'Define requirements and create project roadmap',
        duration: 2,
        order: 1,
        dependencies: [],
        milestones: ['Requirements Document', 'Project Roadmap', 'Team Formation'],
        deliverables: ['PRD', 'Technical Spec', 'Timeline'],
        tasks: [
          {
            id: 'market-research',
            title: 'Market Research & Analysis',
            description: 'Analyze target market, competitors, and user needs',
            estimatedHours: 40,
            priority: 'high',
            status: 'not-started',
            dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
            dependencies: [],
            tags: ['research', 'analysis'],
            category: 'research',
            complexity: 'medium'
          },
          {
            id: 'user-personas',
            title: 'Create User Personas',
            description: 'Define target user personas and user journey maps',
            estimatedHours: 24,
            priority: 'high',
            status: 'not-started',
            dueDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(),
            dependencies: ['market-research'],
            tags: ['ux', 'personas'],
            category: 'research',
            complexity: 'medium'
          },
          {
            id: 'requirements-gathering',
            title: 'Requirements Gathering',
            description: 'Define functional and non-functional requirements',
            estimatedHours: 32,
            priority: 'critical',
            status: 'not-started',
            dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
            dependencies: ['user-personas'],
            tags: ['requirements', 'documentation'],
            category: 'documentation',
            complexity: 'complex'
          }
        ]
      },
      {
        id: 'design',
        name: 'Design & Prototyping',
        description: 'Create UI/UX designs and interactive prototypes',
        duration: 3,
        order: 2,
        dependencies: ['discovery'],
        milestones: ['Design System', 'High-fidelity Mockups', 'Interactive Prototype'],
        deliverables: ['Wireframes', 'UI Designs', 'Prototype'],
        tasks: [
          {
            id: 'wireframes',
            title: 'Create Wireframes',
            description: 'Design low-fidelity wireframes for all key screens',
            estimatedHours: 32,
            priority: 'high',
            status: 'not-started',
            dueDate: new Date(Date.now() + 18 * 24 * 60 * 60 * 1000).toISOString(),
            dependencies: [],
            tags: ['wireframes', 'ux'],
            category: 'design',
            complexity: 'medium'
          },
          {
            id: 'design-system',
            title: 'Design System Creation',
            description: 'Create comprehensive design system with components',
            estimatedHours: 40,
            priority: 'high',
            status: 'not-started',
            dueDate: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000).toISOString(),
            dependencies: ['wireframes'],
            tags: ['design-system', 'components'],
            category: 'design',
            complexity: 'complex'
          },
          {
            id: 'ui-design',
            title: 'High-fidelity UI Design',
            description: 'Create pixel-perfect UI designs for all screens',
            estimatedHours: 48,
            priority: 'high',
            status: 'not-started',
            dueDate: new Date(Date.now() + 28 * 24 * 60 * 60 * 1000).toISOString(),
            dependencies: ['design-system'],
            tags: ['ui', 'visual-design'],
            category: 'design',
            complexity: 'complex'
          },
          {
            id: 'prototype',
            title: 'Interactive Prototype',
            description: 'Build clickable prototype for user testing',
            estimatedHours: 24,
            priority: 'medium',
            status: 'not-started',
            dueDate: new Date(Date.now() + 35 * 24 * 60 * 60 * 1000).toISOString(),
            dependencies: ['ui-design'],
            tags: ['prototype', 'testing'],
            category: 'design',
            complexity: 'medium'
          }
        ]
      },
      {
        id: 'development',
        name: 'Development Sprint',
        description: 'Build core MVP features and functionality',
        duration: 6,
        order: 3,
        dependencies: ['design'],
        milestones: ['Development Environment', 'Core Features', 'MVP Complete'],
        deliverables: ['Working MVP', 'API Documentation', 'Test Suite'],
        tasks: [
          {
            id: 'tech-stack',
            title: 'Technology Stack Setup',
            description: 'Set up development environment and choose tech stack',
            estimatedHours: 16,
            priority: 'critical',
            status: 'not-started',
            dueDate: new Date(Date.now() + 42 * 24 * 60 * 60 * 1000).toISOString(),
            dependencies: [],
            tags: ['setup', 'architecture'],
            category: 'development',
            complexity: 'medium'
          },
          {
            id: 'database-design',
            title: 'Database Design & Setup',
            description: 'Design database schema and set up data models',
            estimatedHours: 24,
            priority: 'critical',
            status: 'not-started',
            dueDate: new Date(Date.now() + 49 * 24 * 60 * 60 * 1000).toISOString(),
            dependencies: ['tech-stack'],
            tags: ['database', 'backend'],
            category: 'development',
            complexity: 'complex'
          },
          {
            id: 'auth-system',
            title: 'Authentication System',
            description: 'Implement user registration, login, and authentication',
            estimatedHours: 40,
            priority: 'critical',
            status: 'not-started',
            dueDate: new Date(Date.now() + 56 * 24 * 60 * 60 * 1000).toISOString(),
            dependencies: ['database-design'],
            tags: ['auth', 'security'],
            category: 'development',
            complexity: 'complex'
          },
          {
            id: 'core-features',
            title: 'Core Features Development',
            description: 'Implement essential MVP features and functionality',
            estimatedHours: 120,
            priority: 'critical',
            status: 'not-started',
            dueDate: new Date(Date.now() + 70 * 24 * 60 * 60 * 1000).toISOString(),
            dependencies: ['auth-system'],
            tags: ['features', 'frontend'],
            category: 'development',
            complexity: 'complex'
          },
          {
            id: 'api-development',
            title: 'API Development',
            description: 'Build RESTful APIs for frontend integration',
            estimatedHours: 60,
            priority: 'high',
            status: 'not-started',
            dueDate: new Date(Date.now() + 77 * 24 * 60 * 60 * 1000).toISOString(),
            dependencies: ['core-features'],
            tags: ['api', 'backend'],
            category: 'development',
            complexity: 'complex'
          }
        ]
      },
      {
        id: 'testing',
        name: 'Testing & QA',
        description: 'Comprehensive testing and quality assurance',
        duration: 2,
        order: 4,
        dependencies: ['development'],
        milestones: ['Test Plan', 'Bug Fixes', 'QA Approval'],
        deliverables: ['Test Results', 'Bug Reports', 'QA Sign-off'],
        tasks: [
          {
            id: 'unit-testing',
            title: 'Unit Testing',
            description: 'Write and execute unit tests for core functionality',
            estimatedHours: 32,
            priority: 'high',
            status: 'not-started',
            dueDate: new Date(Date.now() + 84 * 24 * 60 * 60 * 1000).toISOString(),
            dependencies: [],
            tags: ['testing', 'unit-tests'],
            category: 'testing',
            complexity: 'medium'
          },
          {
            id: 'integration-testing',
            title: 'Integration Testing',
            description: 'Test integration between different components',
            estimatedHours: 24,
            priority: 'high',
            status: 'not-started',
            dueDate: new Date(Date.now() + 91 * 24 * 60 * 60 * 1000).toISOString(),
            dependencies: ['unit-testing'],
            tags: ['testing', 'integration'],
            category: 'testing',
            complexity: 'medium'
          },
          {
            id: 'user-testing',
            title: 'User Acceptance Testing',
            description: 'Conduct user testing sessions and gather feedback',
            estimatedHours: 16,
            priority: 'medium',
            status: 'not-started',
            dueDate: new Date(Date.now() + 98 * 24 * 60 * 60 * 1000).toISOString(),
            dependencies: ['integration-testing'],
            tags: ['testing', 'user-feedback'],
            category: 'testing',
            complexity: 'simple'
          }
        ]
      },
      {
        id: 'launch',
        name: 'Launch & Deployment',
        description: 'Deploy MVP and execute go-to-market strategy',
        duration: 1,
        order: 5,
        dependencies: ['testing'],
        milestones: ['Production Deployment', 'Launch Campaign', 'Success Metrics'],
        deliverables: ['Live Application', 'Launch Report', 'Analytics Setup'],
        tasks: [
          {
            id: 'deployment-setup',
            title: 'Production Deployment Setup',
            description: 'Set up production environment and CI/CD pipeline',
            estimatedHours: 16,
            priority: 'critical',
            status: 'not-started',
            dueDate: new Date(Date.now() + 105 * 24 * 60 * 60 * 1000).toISOString(),
            dependencies: [],
            tags: ['deployment', 'devops'],
            category: 'deployment',
            complexity: 'complex'
          },
          {
            id: 'launch-campaign',
            title: 'Launch Campaign Execution',
            description: 'Execute marketing campaign and announce launch',
            estimatedHours: 24,
            priority: 'high',
            status: 'not-started',
            dueDate: new Date(Date.now() + 112 * 24 * 60 * 60 * 1000).toISOString(),
            dependencies: ['deployment-setup'],
            tags: ['marketing', 'launch'],
            category: 'marketing',
            complexity: 'medium'
          },
          {
            id: 'analytics-setup',
            title: 'Analytics & Monitoring',
            description: 'Set up analytics tracking and monitoring systems',
            estimatedHours: 8,
            priority: 'medium',
            status: 'not-started',
            dueDate: new Date(Date.now() + 119 * 24 * 60 * 60 * 1000).toISOString(),
            dependencies: ['deployment-setup'],
            tags: ['analytics', 'monitoring'],
            category: 'deployment',
            complexity: 'simple'
          }
        ]
      }
    ]
  },
  {
    id: 'saas-template',
    name: 'SaaS Platform Development',
    description: 'Build a comprehensive SaaS platform with subscription management',
    type: 'saas',
    estimatedDuration: 20,
    teamSize: 8,
    budget: 150000,
    tags: ['saas', 'subscription', 'scalable'],
    phases: [
      {
        id: 'saas-planning',
        name: 'Strategic Planning',
        description: 'Define SaaS strategy, pricing, and business model',
        duration: 3,
        order: 1,
        dependencies: [],
        milestones: ['Business Model', 'Pricing Strategy', 'Technical Architecture'],
        deliverables: ['Business Plan', 'Technical Spec', 'Pricing Model'],
        tasks: [
          {
            id: 'business-model',
            title: 'Business Model Definition',
            description: 'Define SaaS business model and revenue streams',
            estimatedHours: 40,
            priority: 'critical',
            status: 'not-started',
            dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
            dependencies: [],
            tags: ['business', 'strategy'],
            category: 'management',
            complexity: 'complex'
          },
          {
            id: 'pricing-strategy',
            title: 'Pricing Strategy',
            description: 'Develop tiered pricing strategy and subscription plans',
            estimatedHours: 32,
            priority: 'high',
            status: 'not-started',
            dueDate: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000).toISOString(),
            dependencies: ['business-model'],
            tags: ['pricing', 'monetization'],
            category: 'management',
            complexity: 'medium'
          }
        ]
      },
      {
        id: 'saas-architecture',
        name: 'Platform Architecture',
        description: 'Design scalable, multi-tenant architecture',
        duration: 4,
        order: 2,
        dependencies: ['saas-planning'],
        milestones: ['Architecture Design', 'Security Framework', 'Scalability Plan'],
        deliverables: ['System Architecture', 'Security Spec', 'Scalability Plan'],
        tasks: [
          {
            id: 'multi-tenant-design',
            title: 'Multi-tenant Architecture',
            description: 'Design multi-tenant database and application architecture',
            estimatedHours: 60,
            priority: 'critical',
            status: 'not-started',
            dueDate: new Date(Date.now() + 35 * 24 * 60 * 60 * 1000).toISOString(),
            dependencies: [],
            tags: ['architecture', 'multi-tenant'],
            category: 'development',
            complexity: 'complex'
          },
          {
            id: 'security-framework',
            title: 'Security Framework',
            description: 'Implement comprehensive security measures and compliance',
            estimatedHours: 48,
            priority: 'critical',
            status: 'not-started',
            dueDate: new Date(Date.now() + 42 * 24 * 60 * 60 * 1000).toISOString(),
            dependencies: ['multi-tenant-design'],
            tags: ['security', 'compliance'],
            category: 'development',
            complexity: 'complex'
          }
        ]
      }
    ]
  },
  {
    id: 'mobile-app-template',
    name: 'Mobile App Development',
    description: 'Build native or cross-platform mobile application',
    type: 'mobile-app',
    estimatedDuration: 16,
    teamSize: 6,
    budget: 80000,
    tags: ['mobile', 'ios', 'android', 'react-native'],
    phases: [
      {
        id: 'mobile-planning',
        name: 'App Planning & Design',
        description: 'Define app concept, user experience, and design system',
        duration: 3,
        order: 1,
        dependencies: [],
        milestones: ['App Concept', 'UX Design', 'Technical Plan'],
        deliverables: ['App Spec', 'UX Designs', 'Tech Stack'],
        tasks: [
          {
            id: 'app-concept',
            title: 'App Concept & Features',
            description: 'Define core app features and user experience',
            estimatedHours: 32,
            priority: 'critical',
            status: 'not-started',
            dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
            dependencies: [],
            tags: ['concept', 'features'],
            category: 'research',
            complexity: 'medium'
          },
          {
            id: 'platform-strategy',
            title: 'Platform Strategy',
            description: 'Choose between native, hybrid, or cross-platform development',
            estimatedHours: 16,
            priority: 'high',
            status: 'not-started',
            dueDate: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000).toISOString(),
            dependencies: ['app-concept'],
            tags: ['platform', 'strategy'],
            category: 'management',
            complexity: 'medium'
          }
        ]
      }
    ]
  },
  {
    id: 'enterprise-template',
    name: 'Enterprise Software Development',
    description: 'Build enterprise-grade software with advanced features',
    type: 'enterprise',
    estimatedDuration: 24,
    teamSize: 12,
    budget: 300000,
    tags: ['enterprise', 'scalable', 'complex'],
    phases: [
      {
        id: 'enterprise-analysis',
        name: 'Requirements Analysis',
        description: 'Comprehensive analysis of enterprise requirements',
        duration: 4,
        order: 1,
        dependencies: [],
        milestones: ['Requirements Document', 'Stakeholder Alignment', 'Project Charter'],
        deliverables: ['Requirements Spec', 'Project Plan', 'Risk Assessment'],
        tasks: [
          {
            id: 'stakeholder-analysis',
            title: 'Stakeholder Analysis',
            description: 'Identify and analyze all project stakeholders',
            estimatedHours: 24,
            priority: 'high',
            status: 'not-started',
            dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
            dependencies: [],
            tags: ['stakeholders', 'analysis'],
            category: 'management',
            complexity: 'medium'
          },
          {
            id: 'compliance-requirements',
            title: 'Compliance Requirements',
            description: 'Identify regulatory and compliance requirements',
            estimatedHours: 40,
            priority: 'critical',
            status: 'not-started',
            dueDate: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000).toISOString(),
            dependencies: ['stakeholder-analysis'],
            tags: ['compliance', 'regulations'],
            category: 'documentation',
            complexity: 'complex'
          }
        ]
      }
    ]
  }
];
