export namespace MenuZhCN {
    export const PORTAL_MENUS = [
        {
            objectID: "1-1",
            title: "开始",
            description: "提供Joker智能可视化开发平台的基础信息，引导用户快速入门，熟悉平台的核心功能与操作流程。",
            children: [
                {
                    objectID: "1-1-1",
                    title: "简介",
                    path: "/cn/portal/introduction",
                    description:
                        "Joker智能可视化开发平台是一款云端可视化开发工具，支持前端项目、后端服务以及AI智能体的可视化开发。通过低代码开发模式，以直观的可视化界面减少代码编写量，降低开发门槛，显著提升开发效率。"
                },
                {
                    objectID: "1-1-2",
                    title: "了解门户",
                    path: "/cn/portal/basic",
                    description:
                        "Joker智能可视化开发平台主要分为门户和工作台两个操作区。本章节主要介绍门户的具体内容和各项功能，帮助用户快速上手。"
                }
            ]
        },
        {
            objectID: "1-2",
            title: "新手入门",
            description: "帮助用户快速熟悉并使用门户功能，迅速融入Joker智能开发平台的操作环境。",
            children: [
                {
                    objectID: "1-2-1",
                    title: "登录/注册",
                    path: "/cn/portal/register",
                    description:
                        "在使用Joker智能开发平台之前，用户需要先完成账号注册。本章节以SaaS版为例，详细介绍低代码平台账号的注册流程，确保用户顺利开启平台使用之旅。"
                },
                {
                    objectID: "1-2-2",
                    title: "创建团队",
                    path: "/cn/portal/create-org",
                    description: "本章节将一步一步指导用户如何创建一个团队或组织，助力用户搭建协作基础架构。"
                },
                {
                    objectID: "1-2-3",
                    title: "创建仓库",
                    path: "/cn/portal/create-rep",
                    description:
                        "详细介绍创建仓库的具体步骤，并分析不同仓库类型的特点，帮助用户根据实际需求合理选择仓库类型，快速搭建项目所需仓库。"
                },
                {
                    objectID: "1-2-4",
                    title: "了解仓库功能",
                    path: "/cn/portal/rep-info",
                    description:
                        "聚焦仓库的基础能力，从文件存储、版本管理到权限设置等方面，帮助用户快速熟悉仓库功能，实现高效运用。"
                }
            ]
        },
        {
            objectID: "1-3",
            title: "团队/组织",
            description: "提供团队/组织相关的详细帮助文档，涵盖团队管理、成员协作等多方面内容。",
            children: [
                {
                    objectID: "1-3-1",
                    title: "了解团队/组织",
                    path: "/cn/portal/org-info",
                    description: "介绍团队/组织的基本架构和各项功能，帮助用户理解团队协作模式。"
                },
                {
                    objectID: "1-3-2",
                    title: "成员管理",
                    path: "/cn/portal/org-member",
                    description:
                        "全面介绍团队成员的管理方法，包括成员申请加入、邀请新成员，以及团队成员的具体管理和身份配置等内容，保障团队协作顺畅。"
                },
                {
                    objectID: "1-3-3",
                    title: "转让团队/组织",
                    path: "/cn/portal/org-transfer",
                    description: "详细说明转让团队/组织拥有者身份的具体流程和注意事项。"
                }
            ]
        },
        {
            objectID: "1-4",
            title: "仓库",
            description: "包含仓库的详细说明文档，覆盖仓库管理的各个环节。",
            children: [
                {
                    objectID: "1-4-1",
                    title: "仓库信息",
                    path: "/cn/portal/rep-base",
                    description:
                        "在仓库管理中，根据实际需求修改仓库信息是常见操作。本章节介绍修改仓库信息的具体方法及平台支持的可修改内容，助力用户灵活高效管理仓库。"
                },
                {
                    objectID: "1-4-2",
                    title: "仓库类型",
                    path: "/cn/portal/rep-kind",
                    description:
                        "详细阐述不同仓库类型之间的差异，以及各自的适用场景，帮助用户根据项目特点选择合适的仓库类型。"
                },
                {
                    objectID: "1-4-3",
                    title: "议题",
                    path: "/cn/portal/rep-issues",
                    description: "介绍仓库中议题的创建、编辑、跟踪等相关操作，方便团队成员围绕特定问题进行讨论和解决。"
                },
                {
                    objectID: "1-4-4",
                    title: "关注仓库",
                    path: "/cn/portal/rep-follow",
                    description: "讲解关注仓库的操作方法，以及查看已关注仓库的途径，帮助用户及时获取关注仓库的动态。"
                },
                {
                    objectID: "1-4-5",
                    title: "克隆仓库",
                    path: "/cn/portal/rep-clone",
                    description: "详细阐述克隆仓库的具体操作步骤，方便用户复制已有仓库用于开发或备份。"
                },
                {
                    objectID: "1-4-6",
                    title: "创建版本",
                    path: "/cn/portal/rep-version",
                    description:
                        "在软件开发和项目管理中，仓库版本管理至关重要。本章节介绍创建仓库发行版的方法、发布新版本的流程以及版本维护要点。"
                },
                {
                    objectID: "1-4-7",
                    title: "转移仓库所属权",
                    path: "/cn/portal/rep-transfer",
                    description:
                        "在团队协作中，有时需要转移仓库所有权。本章节讲解转移仓库所有权的流程与要点，此操作仅限管理员可见。"
                },
                {
                    objectID: "1-4-8",
                    title: "删除仓库",
                    path: "/cn/portal/rep-delete",
                    description:
                        "介绍删除仓库的具体步骤和限制条件，提醒用户注意此操作仅对管理员可见，且删除后数据无法恢复。"
                },
                {
                    objectID: "1-4-9",
                    title: "归档仓库",
                    path: "/cn/portal/rep-archive",
                    description: "介绍对仓库进行归档的具体步骤和要点，帮助用户合理管理仓库资源。"
                }
            ]
        },
        {
            objectID: "1-5",
            title: "个人中心",
            description: "提供个人中心相关的详细说明，帮助用户管理个人信息和操作记录。",
            children: [
                {
                    objectID: "1-5-1",
                    title: "个人主页",
                    path: "/cn/portal/personal-main",
                    description:
                        "介绍个人主页展示个人信息、活动动态以及参与项目情况的各项功能，帮助用户充分利用这一展示窗口。"
                },
                {
                    objectID: "1-5-2",
                    title: "资料修改",
                    path: "/cn/portal/personal-info",
                    description: "介绍如何修改个人信息，帮助用户保持信息准确和展示个性化。"
                },
                {
                    objectID: "1-5-3",
                    title: "密码修改",
                    path: "/cn/portal/personal-password",
                    description: "强调定期修改密码对账号安全的重要性，介绍修改个人密码的具体步骤。"
                },
                {
                    objectID: "1-5-4",
                    title: "消息中心",
                    path: "/cn/portal/personal-message",
                    description: "讲解消息中心整合各类通知的功能和使用方法，帮助用户及时掌握平台动态和业务进展。"
                },
                {
                    objectID: "1-5-5",
                    title: "我的仓库",
                    path: "/cn/portal/personal-my-repository",
                    description: "介绍“我的仓库”集中管理和查看个人所涉及仓库的基本功能，方便用户高效管理项目资源。"
                },
                {
                    objectID: "1-5-6",
                    title: "我的组织",
                    path: "/cn/portal/personal-my-org",
                    description: "介绍“我的组织”管理个人所属团队或组织关系的各项基本功能，助力团队协作。"
                },
                {
                    objectID: "1-5-7",
                    title: "我的议题",
                    path: "/cn/portal/personal-my-issues",
                    description: "介绍“我的议题”功能，帮助用户高效梳理和跟进与自己相关的议题，提升工作效率。"
                }
            ]
        }
    ];

    export const WORKBENCH_MENUS = [
        {
            objectID: "2-1",
            title: "新手入门",
            description: "涵盖工作台的基础信息，引导用户快速上手，熟悉开发环境和基本操作。",
            children: [
                {
                    objectID: "2-1-1",
                    title: "了解工作台",
                    path: "/cn/workbench/basic",
                    description:
                        "深入了解工作台的定义、功能区域划分以及各区域的具体功能，帮助用户迅速适应开发环境，高效开展开发工作。"
                },
                {
                    objectID: "2-1-2",
                    title: "了解前端项目",
                    path: "/cn/workbench/front-end",
                    description: "阐述前端项目的功能及便捷开发能力，包括组件开发、页面管理等方面。"
                },
                {
                    objectID: "2-1-3",
                    title: "了解服务端项目",
                    path: "/cn/workbench/back-end",
                    description: "阐述服务端项目的功能及便捷开发能力，涉及数据模型设计、控制器设计等内容。"
                },
                {
                    objectID: "2-1-4",
                    title: "如何安装扩展",
                    path: "/cn/workbench/install-package",
                    description: "介绍安装扩展和NPM依赖的方法，分析两者的区别和适用场景。"
                },
                {
                    objectID: "2-1-5",
                    title: "代码检查及版本发布",
                    path: "/cn/workbench/check-code-version",
                    description: "介绍平台的代码检查能力，以及版本发布过程中完整进行代码检查的方法和要点。"
                },
                {
                    objectID: "2-1-6",
                    title: "环境部署",
                    path: "/cn/workbench/deploy",
                    description: "介绍平台提供的在线项目构建，并将其部署到云端服务的操作过程。"
                }
            ]
        },
        {
            objectID: "2-2",
            title: "前端开发",
            description: "提供详细的前端类型仓库帮助文档，覆盖前端开发的各个环节。",
            children: [
                {
                    objectID: "2-2-1",
                    title: "组件开发",
                    path: "/cn/workbench/component",
                    description: "讲解组件开发的具体流程，以及组件具备的各类属性与方法，帮助开发者掌握组件开发要点。"
                },
                {
                    objectID: "2-2-2",
                    title: "组件状态数据",
                    path: "/cn/workbench/component-data",
                    description: "讲解如何维护组件中的状态数据，包括参数约束、内部响应式数据及内部私有变量。"
                },
                {
                    objectID: "2-2-3",
                    title: "组件生命周期",
                    path: "/cn/workbench/component-life",
                    description: "介绍组件生命周期的创建和维护，帮助开发者理解组件从创建到销毁的全过程。"
                },
                {
                    objectID: "2-2-4",
                    title: "组件方法",
                    path: "/cn/workbench/component-method",
                    description: "介绍组件方法的创建与维护，助力开发者灵活运用组件功能。"
                },
                {
                    objectID: "2-2-5",
                    title: "组件布局",
                    path: "/cn/workbench/component-layout",
                    description: "介绍组件的布局功能，包括布局编排、常用快捷方式以及组件区块、组件事件等高级用法。"
                },
                {
                    objectID: "2-2-6",
                    title: "基础组件",
                    path: "/cn/workbench/component-base",
                    description: "讲述平台提供的基础布局组件，帮助开发者构建页面基础结构。"
                },
                {
                    objectID: "2-2-7",
                    title: "组件区块",
                    path: "/cn/workbench/component-section",
                    description: "阐述组件区块的概念和所能实现的功能，拓展组件开发的应用场景。"
                },
                {
                    objectID: "2-2-8",
                    title: "组件事件",
                    path: "/cn/workbench/component-event",
                    description: "介绍组件事件的注册、对外提供以及参数传递等相关内容。"
                },
                {
                    objectID: "2-2-9",
                    title: "请求管理",
                    path: "/cn/workbench/requester",
                    description: "讲述在前端应用类型项目中如何管理API接口，通过可视化方式快速实现请求。"
                },
                {
                    objectID: "2-2-10",
                    title: "页面管理",
                    path: "/cn/workbench/page",
                    description: "阐述如何维护“前端 - 应用”项目中的页面，实现嵌套页面布局和页面路由信息配置。"
                },
                {
                    objectID: "2-2-11",
                    title: "路由管理",
                    path: "/cn/workbench/router",
                    description: "阐述路由相关知识，包括默认路由地址和路由守卫等内容。"
                },
                {
                    objectID: "2-2-12",
                    title: "样式管理",
                    path: "/cn/workbench/style",
                    description: "介绍项目内样式管理的实现方式，包括组件内部私有样式和项目全局样式管理。"
                },
                {
                    objectID: "2-2-13",
                    title: "全局方法",
                    path: "/cn/workbench/global",
                    description: "围绕前端项目中的全局方法展开，讲解其实现公共业务逻辑、跨组件或页面调用的功能。"
                },
                {
                    objectID: "2-2-14",
                    title: "事件总线",
                    path: "/cn/workbench/event-bus",
                    description: "在项目内如何通过事件总线实现页面/组件之间的事件数据通讯。"
                },
                {
                    objectID: "2-2-15",
                    title: "字体图标",
                    path: "/cn/workbench/font-icon",
                    description: "如何在平台内对项目中的字体图标进行维护，以及如何高效快速地运用这些字体图标。"
                }
            ]
        },
        {
            objectID: "2-3",
            title: "服务端",
            description: "提供详细的服务端开发帮助文档，助力开发者掌握服务端开发要点。",
            children: [
                {
                    objectID: "2-3-1",
                    title: "数据模型设计",
                    path: "/cn/workbench/server-db",
                    description: "阐述在服务端应用项目里如何创建和管理数据模型，为服务端开发奠定基础。"
                },
                {
                    objectID: "2-3-2",
                    title: "控制器设计",
                    path: "/cn/workbench/server-controller",
                    description: "阐述控制器相关内容，强调其作为服务端应用API接口设计枢纽和唯一请求入口的核心地位。"
                },
                {
                    objectID: "2-3-3",
                    title: "缓存设计",
                    path: "/cn/workbench/server-cache",
                    description: "讲述在服务端应用中实现缓存功能的开发方法和具体配置。"
                },
                {
                    objectID: "2-3-4",
                    title: "数据操作",
                    path: "/cn/workbench/db-option",
                    description:
                        "聚焦于如何对数据库进行各类操作，包括基本的增删改查和高级的分组查询、聚合统计查询等，讲解“数据库操作”节点在业务逻辑编排中的使用方法。"
                }
            ]
        },
        {
            objectID: "2-4",
            title: "通用",
            description: "提供通用开发相关的详细帮助文档，涵盖多个开发环节的通用知识和操作。",
            children: [
                {
                    objectID: "2-4-1",
                    title: "组件/方法集发布",
                    path: "/cn/workbench/package-release",
                    description: "讲解如何开展组件库/方法集类型仓库的版本发布工作，以及如何选择公开能力。"
                },
                {
                    objectID: "2-4-2",
                    title: "逻辑编排",
                    path: "/cn/workbench/workflow",
                    description: "阐述逻辑编排的基本功能，以及如何借助这些功能快速实现业务逻辑。"
                },
                {
                    objectID: "2-4-3",
                    title: "环境变量",
                    path: "/cn/workbench/env",
                    description: "介绍应用类型项目中的环境变量相关功能，帮助开发者根据不同环境配置项目。"
                },
                {
                    objectID: "2-4-4",
                    title: "全局变量",
                    path: "/cn/workbench/globalData",
                    description: "介绍全局变量允许开发者在项目内创建统一变量并在多文件共享使用的功能。"
                },
                {
                    objectID: "2-4-5",
                    title: "运行调试",
                    path: "/cn/workbench/debugger",
                    description: "讲述如何快速实现应用类型仓库项目的运行调试，帮助开发者及时发现和解决问题。"
                },
                {
                    objectID: "2-4-6",
                    title: "代码生成",
                    path: "/cn/workbench/generate",
                    description: "讲解如何进行代码生成并导出到本地，提高开发效率。"
                },
                {
                    objectID: "2-4-7",
                    title: "字段维护",
                    path: "/cn/workbench/property",
                    description: "维护参数或属性的方法，作为JOKER开发平台常用关键功能，助力开发者精准管理项目字段。"
                },
                {
                    objectID: "2-4-8",
                    title: "方法返回类型推导",
                    path: "/cn/workbench/workflow-return-type",
                    description:
                        "平台的方法返回类型推导，在特定场景开启，能依变量推导，经特定操作后，随逻辑编排保存生效，极大简化声明工作。"
                }
            ]
        }
    ];

    export let allMenus = [...PORTAL_MENUS, ...WORKBENCH_MENUS];
}

export namespace MenuEn {
    export const PORTAL_MENUS = [
        {
            objectID: "1-1",
            title: "Getting Started",
            description:
                "Provides basic information about the Joker Intelligent Visual Development Platform, guiding users to quickly get started and familiarize themselves with the platform's core functions and operation processes.",
            children: [
                {
                    objectID: "1-1-1",
                    title: "Introduction",
                    path: "/portal/introduction",
                    description:
                        "Joker Intelligent Visual Development Platform is a cloud-based visual development tool that supports visual development of front-end projects, back-end services, and AI agents. Through the low-code development model, the intuitive visual interface reduces code writing, lowers the development threshold, and significantly improves development efficiency."
                },
                {
                    objectID: "1-1-2",
                    title: "Understanding the Portal",
                    path: "/portal/basic",
                    description:
                        "The Joker Intelligent Visual Development Platform is mainly divided into two operation areas: the Portal and the Workbench. This chapter mainly introduces the specific content and various functions of the Portal to help users get started quickly."
                }
            ]
        },
        {
            objectID: "1-2",
            title: "New User Guide",
            description:
                "Helps users quickly familiarize themselves with and use Portal functions, and quickly adapt to the operation environment of the Joker Intelligent Development Platform.",
            children: [
                {
                    objectID: "1-2-1",
                    title: "Login/Registration",
                    path: "/portal/register",
                    description:
                        "Before using the Joker Intelligent Development Platform, users need to complete account registration first. This chapter takes the SaaS version as an example to introduce the registration process of the low-code platform account in detail, ensuring that users can start using the platform smoothly."
                },
                {
                    objectID: "1-2-2",
                    title: "Create Team",
                    path: "/portal/create-org",
                    description:
                        "This chapter will guide users step by step on how to create a team or organization, helping users build a collaborative infrastructure."
                },
                {
                    objectID: "1-2-3",
                    title: "Create Repository",
                    path: "/portal/create-rep",
                    description:
                        "Introduces the specific steps of creating a repository in detail, and analyzes the characteristics of different repository types to help users reasonably select the repository type according to actual needs and quickly build the repository required for the project."
                },
                {
                    objectID: "1-2-4",
                    title: "Understanding Repository Functions",
                    path: "/portal/rep-info",
                    description:
                        "Focuses on the basic capabilities of the repository, from file storage, version management to permission settings, etc., to help users quickly familiarize themselves with repository functions and achieve efficient use."
                }
            ]
        },
        {
            objectID: "1-3",
            title: "Team/Organization",
            description:
                "Provides detailed help documentation related to teams/organizations, covering many aspects such as team management and member collaboration.",
            children: [
                {
                    objectID: "1-3-1",
                    title: "Understanding Teams/Organizations",
                    path: "/portal/org-info",
                    description:
                        "Introduces the basic architecture and various functions of teams/organizations to help users understand the team collaboration model."
                },
                {
                    objectID: "1-3-2",
                    title: "Member Management",
                    path: "/portal/org-member",
                    description:
                        "Comprehensively introduces the management methods of team members, including member application to join, inviting new members, as well as the specific management and identity configuration of team members, to ensure smooth team collaboration."
                },
                {
                    objectID: "1-3-3",
                    title: "Transfer Team/Organization",
                    path: "/portal/org-transfer",
                    description:
                        "Explains the specific process and precautions for transferring the ownership of a team/organization in detail."
                }
            ]
        },
        {
            objectID: "1-4",
            title: "Repository",
            description:
                "Contains detailed documentation of the repository, covering all aspects of repository management.",
            children: [
                {
                    objectID: "1-4-1",
                    title: "Repository Information",
                    path: "/portal/rep-base",
                    description:
                        "In repository management, modifying repository information according to actual needs is a common operation. This chapter introduces the specific methods of modifying repository information and the modifiable contents supported by the platform, helping users manage repositories flexibly and efficiently."
                },
                {
                    objectID: "1-4-2",
                    title: "Repository Types",
                    path: "/portal/rep-kind",
                    description:
                        "Elaborates on the differences between different repository types and their respective application scenarios, helping users select suitable repository types according to project characteristics."
                },
                {
                    objectID: "1-4-3",
                    title: "Issues",
                    path: "/portal/rep-issues",
                    description:
                        "Introduces the creation, editing, tracking and other related operations of issues in the repository, making it convenient for team members to discuss and solve specific problems."
                },
                {
                    objectID: "1-4-4",
                    title: "Follow Repository",
                    path: "/portal/rep-follow",
                    description:
                        "Explains the operation method of following a repository and the way to view followed repositories, helping users to obtain the dynamics of followed repositories in a timely manner."
                },
                {
                    objectID: "1-4-5",
                    title: "Clone Repository",
                    path: "/portal/rep-clone",
                    description:
                        "Elaborates on the specific operation steps of cloning a repository, making it convenient for users to copy existing repositories for development or backup."
                },
                {
                    objectID: "1-4-6",
                    title: "Create Version",
                    path: "/portal/rep-version",
                    description:
                        "In software development and project management, repository version management is crucial. This chapter introduces the method of creating a repository release, the process of releasing a new version, and the key points of version maintenance."
                },
                {
                    objectID: "1-4-7",
                    title: "Transfer Repository Ownership",
                    path: "/portal/rep-transfer",
                    description:
                        "In team collaboration, it is sometimes necessary to transfer the ownership of a repository. This chapter explains the process and key points of transferring repository ownership, which is only visible to administrators."
                },
                {
                    objectID: "1-4-8",
                    title: "Delete Repository",
                    path: "/portal/rep-delete",
                    description:
                        "Introduces the specific steps and restrictive conditions for deleting a repository, reminding users that this operation is only visible to administrators and the data cannot be recovered after deletion."
                },
                {
                    objectID: "1-4-9",
                    title: "Archive Repository",
                    path: "/portal/rep-archive",
                    description:
                        "Introduces the specific steps and key points for archiving a repository, helping users manage repository resources reasonably."
                }
            ]
        },
        {
            objectID: "1-5",
            title: "Personal Center",
            description:
                "Provides detailed instructions related to the personal center to help users manage personal information and operation records.",
            children: [
                {
                    objectID: "1-5-1",
                    title: "Personal Home",
                    path: "/portal/personal-main",
                    description:
                        "Introduces the various functions of the personal home page that displays personal information, activity dynamics, and participation in projects, helping users make full use of this display window."
                },
                {
                    objectID: "1-5-2",
                    title: "Edit Profile",
                    path: "/portal/personal-info",
                    description:
                        "Introduces how to modify personal information to help users keep information accurate and display personalization."
                },
                {
                    objectID: "1-5-3",
                    title: "Change Password",
                    path: "/portal/personal-password",
                    description:
                        "Emphasizes the importance of regularly changing passwords for account security and introduces the specific steps to change personal passwords."
                },
                {
                    objectID: "1-5-4",
                    title: "Message Center",
                    path: "/portal/personal-message",
                    description:
                        "Explains the functions and usage methods of the message center that integrates various notifications, helping users to keep abreast of platform dynamics and business progress in a timely manner."
                },
                {
                    objectID: "1-5-5",
                    title: "My Repositories",
                    path: "/portal/personal-my-repository",
                    description:
                        "Introduces the basic function of 'My Repositories' to centrally manage and view the repositories involved by individuals, making it convenient for users to manage project resources efficiently."
                },
                {
                    objectID: "1-5-6",
                    title: "My Organizations",
                    path: "/portal/personal-my-org",
                    description:
                        "Introduces the basic functions of 'My Organizations' to manage the relationship between individuals and their teams or organizations, contributing to team collaboration."
                },
                {
                    objectID: "1-5-7",
                    title: "My Issues",
                    path: "/portal/personal-my-issues",
                    description:
                        "Introduces the 'My Issues' function to help users efficiently sort out and follow up on issues related to themselves, improving work efficiency."
                }
            ]
        }
    ];

    export const WORKBENCH_MENUS = [
        {
            objectID: "2-1",
            title: "New User Guide",
            description:
                "Covers basic information about the Workbench, guiding users to get started quickly and familiarize themselves with the development environment and basic operations.",
            children: [
                {
                    objectID: "2-1-1",
                    title: "Understanding the Workbench",
                    path: "/workbench/basic",
                    description:
                        "Gain an in-depth understanding of the definition of the Workbench, the division of functional areas, and the specific functions of each area, helping users quickly adapt to the development environment and carry out development work efficiently."
                },
                {
                    objectID: "2-1-2",
                    title: "Understanding Front-end Projects",
                    path: "/workbench/front-end",
                    description:
                        "Elaborates on the functions and convenient development capabilities of front-end projects, including component development, page management, etc."
                },
                {
                    objectID: "2-1-3",
                    title: "Understanding Back-end Projects",
                    path: "/workbench/back-end",
                    description:
                        "Elaborates on the functions and convenient development capabilities of back-end projects, involving data model design, controller design, etc."
                },
                {
                    objectID: "2-1-4",
                    title: "How to Install Extensions",
                    path: "/workbench/install-package",
                    description:
                        "Introduces the methods of installing extensions and NPM dependencies, and analyzes the differences and application scenarios between them."
                },
                {
                    objectID: "2-1-5",
                    title: "Code Inspection and Version Release",
                    path: "/workbench/check-code-version",
                    description:
                        "Introduces the platform's code inspection capabilities, as well as the methods and key points for completing code inspection in the version release process."
                },
                {
                    objectID: "2-1-6",
                    title: "Environment Deployment",
                    path: "/workbench/deploy",
                    description:
                        "Introduces the operation process of the platform-provided online project construction and deploying it to cloud services."
                }
            ]
        },
        {
            objectID: "2-2",
            title: "Front-end Development",
            description:
                "Provides detailed help documentation for front-end type repositories, covering all aspects of front-end development.",
            children: [
                {
                    objectID: "2-2-1",
                    title: "Component Development",
                    path: "/workbench/component",
                    description:
                        "Explains the specific process of component development, as well as the various attributes and methods of components, helping developers master the key points of component development."
                },
                {
                    objectID: "2-2-2",
                    title: "Component State Data",
                    path: "/workbench/component-data",
                    description:
                        "Explains how to maintain state data in components, including parameter constraints, internal responsive data, and internal private variables."
                },
                {
                    objectID: "2-2-3",
                    title: "Component Lifecycle",
                    path: "/workbench/component-life",
                    description:
                        "Introduces the creation and maintenance of the component lifecycle, helping developers understand the whole process of components from creation to destruction."
                },
                {
                    objectID: "2-2-4",
                    title: "Component Methods",
                    path: "/workbench/component-method",
                    description:
                        "Introduces the creation and maintenance of component methods, helping developers flexibly use component functions."
                },
                {
                    objectID: "2-2-5",
                    title: "Component Layout",
                    path: "/workbench/component-layout",
                    description:
                        "Introduces the layout functions of components, including layout orchestration, common shortcuts, and advanced usage such as component blocks and component events."
                },
                {
                    objectID: "2-2-6",
                    title: "Basic Components",
                    path: "/workbench/component-base",
                    description:
                        "Describes the basic layout components provided by the platform to help developers build the basic structure of pages."
                },
                {
                    objectID: "2-2-7",
                    title: "Component Blocks",
                    path: "/workbench/component-section",
                    description:
                        "Elaborates on the concept of component blocks and the functions they can achieve, expanding the application scenarios of component development."
                },
                {
                    objectID: "2-2-8",
                    title: "Component Events",
                    path: "/workbench/component-event",
                    description:
                        "Introduces the registration of component events, providing them externally, and parameter passing and other related contents."
                },
                {
                    objectID: "2-2-9",
                    title: "Request Management",
                    path: "/workbench/requester",
                    description:
                        "Describes how to manage API interfaces in front-end application type projects, and quickly realize requests through a visual way."
                },
                {
                    objectID: "2-2-10",
                    title: "Page Management",
                    path: "/workbench/page",
                    description:
                        "Elaborates on how to maintain pages in 'front-end - application' projects, realizing nested page layouts and page routing information configuration."
                },
                {
                    objectID: "2-2-11",
                    title: "Routing Management",
                    path: "/workbench/router",
                    description:
                        "Elaborates on routing-related knowledge, including default routing addresses and routing guards, etc."
                },
                {
                    objectID: "2-2-12",
                    title: "Style Management",
                    path: "/workbench/style",
                    description:
                        "Introduces the implementation methods of style management in the project, including internal private styles of components and global style management of the project."
                },
                {
                    objectID: "2-2-13",
                    title: "Global Methods",
                    path: "/workbench/global",
                    description:
                        "Focuses on the global methods in front-end projects, explaining their functions of implementing public business logic and cross-component or page calls."
                },
                {
                    objectID: "2-2-14",
                    title: "Event Bus",
                    path: "/workbench/event-bus",
                    description:
                        "How to use the event bus to realize event data communication between pages/components in the project."
                },
                {
                    objectID: "2-2-15",
                    title: "Font Icons",
                    path: "/workbench/font-icon",
                    description:
                        "How to maintain font icons in the project within the platform, and how to use these font icons efficiently and quickly."
                }
            ]
        },
        {
            objectID: "2-3",
            title: "Server-side",
            description:
                "Provides detailed help documentation for server-side development, helping developers master the key points of server-side development.",
            children: [
                {
                    objectID: "2-3-1",
                    title: "Data Model Design",
                    path: "/workbench/server-db",
                    description:
                        "Elaborates on how to create and manage data models in server-side application projects, laying the foundation for server-side development."
                },
                {
                    objectID: "2-3-2",
                    title: "Controller Design",
                    path: "/workbench/server-controller",
                    description:
                        "Elaborates on controller-related contents, emphasizing its core position as the hub of server-side application API interface design and the only request entry."
                },
                {
                    objectID: "2-3-3",
                    title: "Cache Design",
                    path: "/workbench/server-cache",
                    description:
                        "Describes the development methods and specific configurations for implementing cache functions in server-side applications."
                },
                {
                    objectID: "2-3-4",
                    title: "Data Operations",
                    path: "/workbench/db-option",
                    description:
                        "Focuses on how to perform various operations on the database, including basic CRUD and advanced grouping queries, aggregation statistical queries, etc., and explains the use of the 'database operation' node in business logic orchestration."
                }
            ]
        },
        {
            objectID: "2-4",
            title: "General",
            description:
                "Provides detailed help documentation related to general development, covering general knowledge and operations in multiple development links.",
            children: [
                {
                    objectID: "2-4-1",
                    title: "Component/Method Set Release",
                    path: "/workbench/package-release",
                    description:
                        "Explains how to carry out the version release work of component library/method set type repositories, and how to select public capabilities."
                },
                {
                    objectID: "2-4-2",
                    title: "Logic Orchestration",
                    path: "/workbench/workflow",
                    description:
                        "Elaborates on the basic functions of logic orchestration and how to use these functions to quickly realize business logic."
                },
                {
                    objectID: "2-4-3",
                    title: "Environment Variables",
                    path: "/workbench/env",
                    description:
                        "Introduces the environment variable-related functions in application type projects, helping developers configure projects according to different environments."
                },
                {
                    objectID: "2-4-4",
                    title: "Global Variables",
                    path: "/workbench/globalData",
                    description:
                        "Introduces the function that global variables allow developers to create unified variables in the project and share them in multiple files."
                },
                {
                    objectID: "2-4-5",
                    title: "Run and Debug",
                    path: "/workbench/debugger",
                    description:
                        "Describes how to quickly realize the run and debug of application type repository projects, helping developers to find and solve problems in a timely manner."
                },
                {
                    objectID: "2-4-6",
                    title: "Code Generation",
                    path: "/workbench/generate",
                    description:
                        "Explains how to generate code and export it to the local machine to improve development efficiency."
                },
                {
                    objectID: "2-4-7",
                    title: "Field Maintenance",
                    path: "/workbench/property",
                    description:
                        "Methods for maintaining parameters or attributes, as a common key function of the JOKER development platform, helping developers accurately manage project fields."
                },
                {
                    objectID: "2-4-8",
                    title: "Method Return Type Inference",
                    path: "/workbench/workflow-return-type",
                    description:
                        "The platform's method return type inference is enabled in specific scenarios, can be derived based on variables, and takes effect with the saving of logic orchestration after specific operations, greatly simplifying the declaration work."
                }
            ]
        }
    ];

    export let allMenus = [...PORTAL_MENUS, ...WORKBENCH_MENUS];
}
