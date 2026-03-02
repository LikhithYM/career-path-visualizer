// Academic Career Tree Data
// Full hierarchy: 10th → Stream → Subject → Field → Degree → Branch → Sub-Branch → Job Roles

export const NODE_TYPES = {
    ROOT: 'root',
    STREAM: 'stream',
    SUBJECT: 'subject',
    FIELD: 'field',
    DEGREE: 'degree',
    BRANCH: 'branch',
    SUBBRANCH: 'subbranch',
    JOB: 'job',
};

export const academicNodes = [
    // ─── ROOT ───────────────────────────────────────────────
    {
        id: 'root',
        label: 'After 10th',
        subtitle: 'Choose Your Path',
        type: NODE_TYPES.ROOT,
        parent: null,
        description: 'Your journey begins here. After completing 10th grade, you have three main academic streams to choose from. Each stream opens unique career opportunities.',
        emoji: '🎓',
        exams: {
            ug: ['NTSE', 'Olympiads', 'State Polytechnic Entrance', 'ITI Entrance'],
            scholarships: ['NTSE Scholarship'],
            government: ['SSLC / State Board', 'CBSE 10th', 'ICSE 10th', 'NIOS'],
        },
    },

    // ─── STREAMS ────────────────────────────────────────────
    {
        id: 'science',
        label: 'Science',
        subtitle: 'PCM / PCB',
        type: NODE_TYPES.STREAM,
        parent: 'root',
        description: 'Science stream focuses on Physics, Chemistry, Biology, Mathematics and related subjects. It opens doors to engineering, medicine, research and technology fields.',
        emoji: '🔬',
    },
    {
        id: 'commerce',
        label: 'Commerce',
        subtitle: 'Business & Finance',
        type: NODE_TYPES.STREAM,
        parent: 'root',
        description: 'Commerce stream covers Accounts, Business Studies, Economics and Mathematics. Best for careers in finance, business, banking and entrepreneurship.',
        emoji: '💼',
        exams: {
            ug: ['CA Foundation', 'CS Foundation', 'CMA Foundation', 'IPMAT', 'CUET'],
        },
    },
    {
        id: 'arts',
        label: 'Arts / Humanities',
        subtitle: 'Creative & Social',
        type: NODE_TYPES.STREAM,
        parent: 'root',
        description: 'Arts stream covers History, Geography, Political Science, Languages, Psychology and Sociology. Best for careers in law, journalism, design and social sciences.',
        emoji: '🎨',
        exams: {
            ug: ['CLAT', 'AILET', 'NID DAT', 'NIFT Entrance', 'CUET'],
            government: ['UPSC', 'SSC', 'State PSC'],
        },
    },

    // ─── SCIENCE SUBJECT COMBINATIONS ───────────────────────
    {
        id: 'pcmc',
        label: 'PCMC',
        subtitle: 'Physics, Chemistry, Math, CS',
        type: NODE_TYPES.SUBJECT,
        parent: 'science',
        description: 'Physics + Chemistry + Mathematics + Computer Science. Ideal for software engineering, data science, and technology careers.',
        emoji: '💻',
        exams: {
            ug: ['JEE Main', 'JEE Advanced', 'KCET / State CET', 'COMEDK', 'BITSAT', 'VITEEE', 'SRMJEEE'],
        },
    },
    {
        id: 'pcmb',
        label: 'PCMB',
        subtitle: 'Physics, Chemistry, Math, Biology',
        type: NODE_TYPES.SUBJECT,
        parent: 'science',
        description: 'Physics + Chemistry + Mathematics + Biology. The most versatile combination, opening paths to both engineering and medical fields.',
        emoji: '⚗️',
        exams: {
            ug: ['JEE Main', 'JEE Advanced', 'KCET', 'COMEDK', 'NEET UG', 'IISER Aptitude Test', 'CUET', 'State CET'],
        },
    },
    {
        id: 'pcme',
        label: 'PCME',
        subtitle: 'Physics, Chemistry, Math, Electronics',
        type: NODE_TYPES.SUBJECT,
        parent: 'science',
        description: 'Physics + Chemistry + Mathematics + Electronics. Great for electrical, electronics, and embedded systems careers.',
        emoji: '⚡',
        exams: {
            ug: ['JEE Main', 'JEE Advanced', 'KCET / State CET', 'COMEDK', 'BITSAT', 'VITEEE', 'SRMJEEE'],
        },
    },
    {
        id: 'pcms',
        label: 'PCMS',
        subtitle: 'Physics, Chemistry, Math, Statistics',
        type: NODE_TYPES.SUBJECT,
        parent: 'science',
        description: 'Physics + Chemistry + Mathematics + Statistics. Ideal for actuarial science, data analytics, and research careers.',
        emoji: '📊',
        exams: {
            ug: ['JEE Main', 'JEE Advanced', 'KCET / State CET', 'COMEDK', 'BITSAT', 'VITEEE', 'SRMJEEE'],
        },
    },

    // ─── PCMB MAJOR FIELDS ──────────────────────────────────
    {
        id: 'engineering',
        label: 'Engineering',
        subtitle: 'B.Tech / B.E',
        type: NODE_TYPES.FIELD,
        parent: 'pcmb',
        description: 'Engineering is a 4-year undergraduate program covering design, analysis, and development of systems and structures. Entry via JEE/State CET.',
        emoji: '⚙️',
        exams: {
            pg: ['GATE', 'TANCET', 'PG CET'],
            government: ['UPSC Engineering Services', 'SSC JE', 'RRB JE', 'ISRO Scientist', 'DRDO Scientist'],
        },
    },
    {
        id: 'medical',
        label: 'Medical',
        subtitle: 'MBBS, BDS, BAMS...',
        type: NODE_TYPES.FIELD,
        parent: 'pcmb',
        description: 'Medical field includes various health sciences programs. Entry to MBBS via NEET-UG. Career in clinical practice, research, or hospital management.',
        emoji: '🏥',
        exams: {
            ug: ['NEET UG'],
            pg: ['NEET PG', 'INI CET', 'NEET SS'],
        },
    },
    {
        id: 'biotechnology-field',
        label: 'Biotechnology',
        subtitle: 'B.Sc / B.Tech Biotech',
        type: NODE_TYPES.FIELD,
        parent: 'pcmb',
        description: 'Biotechnology combines biology and technology for developing products and processes in healthcare, agriculture, and environmental management.',
        emoji: '🧬',
        exams: {
            ug: ['IISER Aptitude Test', 'CUET'],
            pg: ['GAT-B', 'CSIR NET'],
        },
    },
    {
        id: 'pharmacy-field',
        label: 'Pharmacy',
        subtitle: 'B.Pharm / D.Pharm',
        type: NODE_TYPES.FIELD,
        parent: 'pcmb',
        description: 'Pharmacy education covers drug formulation, pharmacology, and pharmaceutical sciences for careers in drug development and healthcare.',
        emoji: '💊',
        exams: {
            pg: ['GPAT'],
            ug: ['State CET'],
        },
    },
    {
        id: 'research-field',
        label: 'Research',
        subtitle: 'B.Sc Research',
        type: NODE_TYPES.FIELD,
        parent: 'pcmb',
        description: 'Pure science research path focusing on fundamental discoveries in physics, chemistry, biology, or interdisciplinary sciences.',
        emoji: '🔭',
    },

    // ─── PCMC MAJOR FIELDS ──────────────────────────────────
    {
        id: 'bca',
        label: 'BCA',
        subtitle: 'Bachelor of Computer Applications',
        type: NODE_TYPES.FIELD,
        parent: 'pcmc',
        description: 'BCA is a 3-year professional degree focusing on computer applications, programming, and software development.',
        emoji: '📱',
    },

    // ─── MEDICAL DEGREES ────────────────────────────────────
    {
        id: 'mbbs',
        label: 'MBBS',
        subtitle: '5.5 Year Medical Degree',
        type: NODE_TYPES.DEGREE,
        parent: 'medical',
        description: 'Bachelor of Medicine, Bachelor of Surgery. The primary medical degree in India. 5.5 years including 1 year internship. Entrance via NEET-UG.',
        emoji: '👨‍⚕️',
    },
    {
        id: 'bds',
        label: 'BDS',
        subtitle: 'Dental Surgery',
        type: NODE_TYPES.DEGREE,
        parent: 'medical',
        description: 'Bachelor of Dental Surgery. 4-year program plus 1-year internship. Focuses on oral health, dental procedures and maxillofacial treatments.',
        emoji: '🦷',
        exams: {
            ug: ['NEET UG'],
            pg: ['NEET MDS'],
        },
    },
    {
        id: 'bams',
        label: 'BAMS',
        subtitle: 'Ayurvedic Medicine',
        type: NODE_TYPES.DEGREE,
        parent: 'medical',
        description: 'Bachelor of Ayurvedic Medicine and Surgery. 5.5-year course integrating traditional Ayurvedic principles with modern medical sciences.',
        emoji: '🌿',
    },
    {
        id: 'bhms',
        label: 'BHMS',
        subtitle: 'Homeopathy',
        type: NODE_TYPES.DEGREE,
        parent: 'medical',
        description: 'Bachelor of Homeopathic Medicine and Surgery. 5.5-year program in homeopathic treatment systems.',
        emoji: '🌱',
    },
    {
        id: 'bpt',
        label: 'BPT',
        subtitle: 'Physiotherapy',
        type: NODE_TYPES.DEGREE,
        parent: 'medical',
        description: 'Bachelor of Physiotherapy. 4.5-year program training in physical rehabilitation, sports medicine, and musculoskeletal therapy.',
        emoji: '🏃',
    },
    {
        id: 'nursing',
        label: 'B.Sc Nursing',
        subtitle: 'Healthcare Nursing',
        type: NODE_TYPES.DEGREE,
        parent: 'medical',
        description: 'Bachelor of Science in Nursing. 4-year program training nurses for clinical care, community health, and patient management.',
        emoji: '👩‍⚕️',
    },

    // ─── MBBS POST-GRADUATION PATHS ─────────────────────────
    {
        id: 'md',
        label: 'MD',
        subtitle: 'Doctor of Medicine',
        type: NODE_TYPES.BRANCH,
        parent: 'mbbs',
        description: 'MD is a 3-year post-graduate medical degree specializing in non-surgical medical disciplines like Pediatrics, Dermatology, Radiology, etc.',
        emoji: '🧠',
    },
    {
        id: 'ms',
        label: 'MS',
        subtitle: 'Master of Surgery',
        type: NODE_TYPES.BRANCH,
        parent: 'mbbs',
        description: 'MS is a 3-year surgical post-graduate specialization covering General Surgery, Orthopedics, ENT, Ophthalmology, and more.',
        emoji: '🔪',
    },
    {
        id: 'clinical-practice',
        label: 'Clinical Practice',
        subtitle: 'Senior Resident / GP',
        type: NODE_TYPES.BRANCH,
        parent: 'mbbs',
        description: 'Direct clinical practice as a General Practitioner or Senior Resident in hospitals and clinics serving patients.',
        emoji: '🏥',
    },
    {
        id: 'hospital-admin',
        label: 'Hospital Administration',
        subtitle: 'MHA / MBA-Hospital',
        type: NODE_TYPES.BRANCH,
        parent: 'mbbs',
        description: 'Combining medical knowledge with management to run hospitals, clinics, and healthcare organizations efficiently.',
        emoji: '🏢',
    },
    {
        id: 'medical-research',
        label: 'Medical Research',
        subtitle: 'PhD / Research',
        type: NODE_TYPES.BRANCH,
        parent: 'mbbs',
        description: 'Pursuing PhD in medical sciences, clinical trials, drug development, or public health research at ICMR, AIIMS etc.',
        emoji: '🔬',
    },
    {
        id: 'govt-medical-officer',
        label: 'Govt Medical Officer',
        subtitle: 'UPSC / State PSC',
        type: NODE_TYPES.BRANCH,
        parent: 'mbbs',
        description: 'Joining government health services as a Medical Officer through civil services examinations or state PSC selection.',
        emoji: '🏛️',
    },

    // ─── MD SPECIALIZATIONS → JOB ROLES ────────────────────
    {
        id: 'md-pediatrics-job',
        label: 'Pediatrician',
        subtitle: 'Child Specialist',
        type: NODE_TYPES.JOB,
        parent: 'md',
        description: 'Specialist doctor for infants, children, and adolescents.',
        emoji: '👶',
    },
    {
        id: 'md-dermatology-job',
        label: 'Dermatologist',
        subtitle: 'Skin Specialist',
        type: NODE_TYPES.JOB,
        parent: 'md',
        description: 'Diagnoses and treats skin, hair and nail disorders.',
        emoji: '🧴',
    },
    {
        id: 'md-radiology-job',
        label: 'Radiologist',
        subtitle: 'Medical Imaging',
        type: NODE_TYPES.JOB,
        parent: 'md',
        description: 'Interprets medical images (X-ray, MRI, CT) for diagnosis.',
        emoji: '📸',
    },
    {
        id: 'md-psychiatry-job',
        label: 'Psychiatrist',
        subtitle: 'Mental Health',
        type: NODE_TYPES.JOB,
        parent: 'md',
        description: 'Diagnoses and treats mental health conditions and disorders.',
        emoji: '🧘',
    },
    {
        id: 'md-cardiology-job',
        label: 'Cardiologist',
        subtitle: 'Heart Specialist',
        type: NODE_TYPES.JOB,
        parent: 'md',
        description: 'Specialist in diagnosing and treating heart diseases.',
        emoji: '❤️',
    },

    // ─── ENGINEERING BRANCHES ────────────────────────────────
    {
        id: 'cse',
        label: 'Computer Science Eng.',
        subtitle: 'CSE',
        type: NODE_TYPES.DEGREE,
        parent: 'engineering',
        description: 'The most sought-after engineering branch. Covers programming, algorithms, OS, databases, and software systems.',
        emoji: '💻',
        exams: {
            pg: ['GATE', 'GRE'],
            government: ['UPSC', 'SSC CGL', 'IBPS IT Officer'],
            abroad: ['TOEFL', 'IELTS'],
        },
    },
    {
        id: 'ece',
        label: 'Electronics & Comm. Eng.',
        subtitle: 'ECE',
        type: NODE_TYPES.DEGREE,
        parent: 'engineering',
        description: 'Covers electronic circuits, communication systems, signal processing, VLSI, and embedded systems.',
        emoji: '📡',
    },
    {
        id: 'mech',
        label: 'Mechanical Engineering',
        subtitle: 'Mech',
        type: NODE_TYPES.DEGREE,
        parent: 'engineering',
        description: 'Focuses on design, analysis, manufacturing, and maintenance of mechanical systems and machinery.',
        emoji: '⚙️',
    },
    {
        id: 'civil',
        label: 'Civil Engineering',
        subtitle: 'Civil',
        type: NODE_TYPES.DEGREE,
        parent: 'engineering',
        description: 'Infrastructure design, construction management, structural analysis, and environmental engineering.',
        emoji: '🏗️',
    },
    {
        id: 'electrical',
        label: 'Electrical Engineering',
        subtitle: 'EE',
        type: NODE_TYPES.DEGREE,
        parent: 'engineering',
        description: 'Power systems, electric machines, control systems, and high-voltage engineering.',
        emoji: '⚡',
    },
    {
        id: 'ai-eng',
        label: 'AI & Machine Learning',
        subtitle: 'AI/ML Engineering',
        type: NODE_TYPES.DEGREE,
        parent: 'engineering',
        description: 'Specializes in artificial intelligence, machine learning algorithms, neural networks, and intelligent systems.',
        emoji: '🤖',
    },
    {
        id: 'is',
        label: 'Information Science',
        subtitle: 'IS & Engineering',
        type: NODE_TYPES.DEGREE,
        parent: 'engineering',
        description: 'Covers information systems, databases, networking, and software applications.',
        emoji: '📊',
    },

    // ─── CSE SUB-BRANCHES ────────────────────────────────────
    {
        id: 'software-dev',
        label: 'Software Development',
        subtitle: 'Full Stack / Backend',
        type: NODE_TYPES.BRANCH,
        parent: 'cse',
        description: 'Building web, mobile and enterprise software applications. Covers frontend, backend, APIs, and system architecture.',
        emoji: '🛠️',
    },
    {
        id: 'ai-sub',
        label: 'Artificial Intelligence',
        subtitle: 'AI & Deep Learning',
        type: NODE_TYPES.BRANCH,
        parent: 'cse',
        description: 'Deep Learning, NLP, Computer Vision, Reinforcement Learning, and AI system development.',
        emoji: '🤖',
        exams: {
            pg: ['GATE (CS/AI)', 'GRE', 'CSIR NET', 'UGC NET'],
            abroad: ['TOEFL', 'IELTS'],
        },
    },
    {
        id: 'data-science',
        label: 'Data Science',
        subtitle: 'Analytics & ML',
        type: NODE_TYPES.BRANCH,
        parent: 'cse',
        description: 'Statistical analysis, machine learning, data visualization, and predictive modeling for business insights.',
        emoji: '📈',
        exams: {
            pg: ['GATE (CS/AI)', 'GRE', 'CSIR NET', 'UGC NET'],
            abroad: ['TOEFL', 'IELTS'],
        },
    },
    {
        id: 'cybersecurity',
        label: 'Cybersecurity',
        subtitle: 'Security & Ethical Hacking',
        type: NODE_TYPES.BRANCH,
        parent: 'cse',
        description: 'Network security, ethical hacking, penetration testing, cryptography, and digital forensics.',
        emoji: '🔐',
    },
    {
        id: 'cloud-computing',
        label: 'Cloud Computing',
        subtitle: 'AWS / Azure / GCP',
        type: NODE_TYPES.BRANCH,
        parent: 'cse',
        description: 'Cloud infrastructure, DevOps, microservices, containerization and cloud-native application development.',
        emoji: '☁️',
    },
    {
        id: 'game-dev',
        label: 'Game Development',
        subtitle: 'Unity / Unreal Engine',
        type: NODE_TYPES.BRANCH,
        parent: 'cse',
        description: 'Game design, 3D graphics programming, physics engines, and immersive XR experience development.',
        emoji: '🎮',
    },

    // ─── DATA SCIENCE JOB ROLES ──────────────────────────────
    {
        id: 'data-analyst',
        label: 'Data Analyst',
        // subtitle: '₹4–12 LPA | High Demand',
        type: NODE_TYPES.JOB,
        parent: 'data-science',
        description: 'Analyzes data sets to derive actionable insights. Uses SQL, Excel, Python, Tableau, and Power BI.',
        emoji: '📊',
    },
    {
        id: 'data-scientist',
        label: 'Data Scientist',
        // subtitle: '₹8–30 LPA | Top Paid',
        type: NODE_TYPES.JOB,
        parent: 'data-science',
        description: 'Builds predictive models, statistical analyses, and ML pipelines for complex business problems.',
        emoji: '🧪',
    },
    {
        id: 'ml-engineer',
        label: 'ML Engineer',
        // subtitle: '₹10–35 LPA | Niche',
        type: NODE_TYPES.JOB,
        parent: 'data-science',
        description: 'Deploys ML models to production, builds ML infrastructure, and optimizes model performance.',
        emoji: '🤖',
    },
    {
        id: 'ai-engineer',
        label: 'AI Engineer',
        //subtitle: '₹12–40 LPA | High Growth',
        type: NODE_TYPES.JOB,
        parent: 'data-science',
        description: 'Builds AI applications, integrates LLMs, and develops intelligent automation systems.',
        emoji: '🚀',
    },
    {
        id: 'bi-analyst',
        label: 'BI Analyst',
        // subtitle: '₹5–18 LPA | Stable',
        type: NODE_TYPES.JOB,
        parent: 'data-science',
        description: 'Creates business intelligence dashboards and reports to drive strategic decisions.',
        emoji: '📉',
    },
    {
        id: 'research-scientist',
        label: 'Research Scientist',
        //subtitle: '₹8–25 LPA | Academic',
        type: NODE_TYPES.JOB,
        parent: 'data-science',
        description: 'Conducts original research in AI/ML, publishing papers in top conferences like NeurIPS, ICML.',
        emoji: '🔭',
    },

    // ─── SOFTWARE DEV JOB ROLES ──────────────────────────────
    {
        id: 'frontend-dev',
        label: 'Frontend Developer',
        //subtitle: '₹4–18 LPA',
        type: NODE_TYPES.JOB,
        parent: 'software-dev',
        description: 'Builds user interfaces and client-side web experiences using React, Vue, Angular, HTML/CSS.',
        emoji: '🎨',
    },
    {
        id: 'backend-dev',
        label: 'Backend Developer',
        //subtitle: '₹5–22 LPA',
        type: NODE_TYPES.JOB,
        parent: 'software-dev',
        description: 'Develops server-side logic, APIs, databases, and business logic using Node.js, Python, Java, Go.',
        emoji: '⚙️',
    },
    {
        id: 'fullstack-dev',
        label: 'Full Stack Developer',
        //subtitle: '₹6–25 LPA',
        type: NODE_TYPES.JOB,
        parent: 'software-dev',
        description: 'Handles both frontend and backend development across the entire web application stack.',
        emoji: '🛠️',
    },
    {
        id: 'mobile-dev',
        label: 'Mobile App Developer',
        //subtitle: '₹5–20 LPA',
        type: NODE_TYPES.JOB,
        parent: 'software-dev',
        description: 'Builds iOS and Android applications using Flutter, React Native, Swift, or Kotlin.',
        emoji: '📱',
    },
    {
        id: 'devops-engineer',
        label: 'DevOps Engineer',
        //subtitle: '₹8–28 LPA',
        type: NODE_TYPES.JOB,
        parent: 'software-dev',
        description: 'Manages CI/CD pipelines, infrastructure as code, and production deployments.',
        emoji: '🔄',
    },

    // ─── CYBERSECURITY JOB ROLES ─────────────────────────────
    {
        id: 'ethical-hacker',
        label: 'Ethical Hacker',
        //subtitle: '₹5–20 LPA',
        type: NODE_TYPES.JOB,
        parent: 'cybersecurity',
        description: 'Certified penetration tester identifying security vulnerabilities in systems and networks.',
        emoji: '🎭',
    },
    {
        id: 'security-analyst',
        label: 'Security Analyst',
        //subtitle: '₹6–22 LPA',
        type: NODE_TYPES.JOB,
        parent: 'cybersecurity',
        description: 'Monitors, detects, and responds to cyber threats and security incidents in SOC teams.',
        emoji: '🔐',
    },
    {
        id: 'cloud-security',
        label: 'Cloud Security Engineer',
        //subtitle: '₹10–35 LPA',
        type: NODE_TYPES.JOB,
        parent: 'cybersecurity',
        description: 'Secures cloud infrastructure and applications on AWS, Azure, and GCP platforms.',
        emoji: '☁️',
    },

    // ─── CLOUD COMPUTING JOB ROLES ───────────────────────────
    {
        id: 'cloud-architect',
        label: 'Cloud Architect',
        //subtitle: '₹15–50 LPA',
        type: NODE_TYPES.JOB,
        parent: 'cloud-computing',
        description: 'Designs scalable cloud infrastructure and solutions architecture for enterprises.',
        emoji: '🏛️',
    },
    {
        id: 'devops-cloud',
        label: 'DevOps / SRE',
        //subtitle: '₹10–35 LPA',
        type: NODE_TYPES.JOB,
        parent: 'cloud-computing',
        description: 'Site Reliability Engineer managing production systems, uptime, and deployment automation.',
        emoji: '🔧',
    },
    {
        id: 'kubernetes-engineer',
        label: 'Kubernetes Engineer',
        //subtitle: '₹12–40 LPA',
        type: NODE_TYPES.JOB,
        parent: 'cloud-computing',
        description: 'Container orchestration specialist managing microservices on Kubernetes clusters.',
        emoji: '🐳',
    },

    // ─── GAME DEVELOPMENT JOB ROLES ──────────────────────────
    {
        id: 'game-designer',
        label: 'Game Designer',
        //subtitle: '₹4–15 LPA',
        type: NODE_TYPES.JOB,
        parent: 'game-dev',
        description: 'Creates game mechanics, level design, storytelling, and player experience systems.',
        emoji: '🎲',
    },
    {
        id: 'game-programmer',
        label: 'Game Programmer',
        //subtitle: '₹5–20 LPA',
        type: NODE_TYPES.JOB,
        parent: 'game-dev',
        description: 'Develops game engines, AI, physics simulations, and gameplay features using C++, C#.',
        emoji: '👾',
    },
    {
        id: 'xr-developer',
        label: 'XR / VR Developer',
        //subtitle: '₹8–25 LPA',
        type: NODE_TYPES.JOB,
        parent: 'game-dev',
        description: 'Builds Virtual, Augmented, and Mixed Reality experiences for gaming and enterprise.',
        emoji: '🥽',
    },

    // ─── AI/ML ENGINEERING JOB ROLES ────────────────────────
    {
        id: 'ai-researcher',
        label: 'AI Researcher',
        //subtitle: '₹15–50 LPA',
        type: NODE_TYPES.JOB,
        parent: 'ai-sub',
        description: 'Advances the state of AI through novel research at top labs like DeepMind, OpenAI, Google Brain.',
        emoji: '🧬',
    },
    {
        id: 'nlp-engineer',
        label: 'NLP Engineer',
        //subtitle: '₹10–35 LPA',
        type: NODE_TYPES.JOB,
        parent: 'ai-sub',
        description: 'Builds natural language understanding systems, chatbots, and language models.',
        emoji: '💬',
    },
    {
        id: 'computer-vision',
        label: 'Computer Vision Engineer',
        //subtitle: '₹12–40 LPA',
        type: NODE_TYPES.JOB,
        parent: 'ai-sub',
        description: 'Develops image recognition, object detection, and video analysis systems.',
        emoji: '👁️',
    },

    // ─── COMMERCE STREAM ────────────────────────────────────
    {
        id: 'bcom',
        label: 'B.Com',
        subtitle: 'Bachelor of Commerce',
        type: NODE_TYPES.FIELD,
        parent: 'commerce',
        description: '3-year commerce degree covering accounting, finance, taxation, and business law.',
        emoji: '📚',
    },
    {
        id: 'bba',
        label: 'BBA',
        subtitle: 'Bachelor of Business Admin.',
        type: NODE_TYPES.FIELD,
        parent: 'commerce',
        description: '3-year management degree developing leadership, marketing, and business management skills.',
        emoji: '👔',
        exams: {
            pg: ['CAT', 'XAT', 'MAT', 'CMAT', 'SNAP', 'NMAT', 'GMAT'],
        },
    },
    {
        id: 'ca',
        label: 'CA',
        subtitle: 'Chartered Accountancy',
        type: NODE_TYPES.FIELD,
        parent: 'commerce',
        description: 'Professional qualification by ICAI covering auditing, taxation, financial reporting, and law.',
        emoji: '📋',
        exams: {
            ug: ['CA Foundation', 'CA Intermediate', 'CA Final'],
        },
    },
    {
        id: 'economics-field',
        label: 'Economics (Hons)',
        subtitle: 'B.A/B.Sc Economics',
        type: NODE_TYPES.FIELD,
        parent: 'commerce',
        description: 'Study of microeconomics, macroeconomics, econometrics, and economic policy.',
        emoji: '📈',
    },

    // ─── COMMERCE JOB ROLES ─────────────────────────────────
    {
        id: 'ca-job',
        label: 'Chartered Accountant',
        //subtitle: '₹7–30 LPA',
        type: NODE_TYPES.JOB,
        parent: 'ca',
        description: 'Manages financial records, auditing, tax filing, and provides financial advisory services.',
        emoji: '💰',
    },
    {
        id: 'investment-banker',
        label: 'Investment Banker',
        //subtitle: '₹10–50 LPA',
        type: NODE_TYPES.JOB,
        parent: 'bba',
        description: 'Facilitates mergers, acquisitions, IPOs, and capital raising for corporations.',
        emoji: '🏦',
    },
    {
        id: 'financial-analyst',
        label: 'Financial Analyst',
        //subtitle: '₹5–20 LPA',
        type: NODE_TYPES.JOB,
        parent: 'bcom',
        description: 'Analyzes financial data, prepares reports, and provides investment recommendations.',
        emoji: '📊',
    },
    {
        id: 'economist',
        label: 'Economist',
        //subtitle: '₹6–25 LPA',
        type: NODE_TYPES.JOB,
        parent: 'economics-field',
        description: 'Researches economic trends, advises governments and corporations on policy decisions.',
        emoji: '🌍',
    },

    // ─── ARTS STREAM ─────────────────────────────────────────
    {
        id: 'ba',
        label: 'B.A (Hons)',
        subtitle: 'Bachelor of Arts',
        type: NODE_TYPES.FIELD,
        parent: 'arts',
        description: '3-year arts degree in History, Political Science, Sociology, Literature, Psychology, or Languages.',
        emoji: '📜',
    },
    {
        id: 'law',
        label: 'Law (LLB)',
        subtitle: '3 or 5 Year LLB',
        type: NODE_TYPES.FIELD,
        parent: 'arts',
        description: '5-year integrated LLB (after 12th) or 3-year LLB (after graduation). Opens judiciary and legal careers.',
        emoji: '⚖️',
        exams: {
            ug: ['CLAT', 'AILET', 'LSAT India', 'MH CET Law'],
        },
    },
    {
        id: 'journalism',
        label: 'Mass Communication',
        subtitle: 'BJMC / Journalism',
        type: NODE_TYPES.FIELD,
        parent: 'arts',
        description: 'Journalism, broadcasting, digital media, public relations and communication programs.',
        emoji: '📰',
    },
    {
        id: 'design',
        label: 'Design (NID/NIFT)',
        subtitle: 'Fashion / Product / UX Design',
        type: NODE_TYPES.FIELD,
        parent: 'arts',
        description: 'Creative design programs at NID, NIFT covering graphic, fashion, product, and UX design.',
        emoji: '✏️',
        exams: {
            ug: ['NID DAT', 'NIFT Entrance', 'UCEED', 'CEED'],
        },
    },

    // ─── ARTS JOB ROLES ─────────────────────────────────────
    {
        id: 'lawyer',
        label: 'Advocate / Lawyer',
        //subtitle: '₹4–∞ LPA',
        type: NODE_TYPES.JOB,
        parent: 'law',
        description: 'Represents clients in court, provides legal advice, and drafts legal documents.',
        emoji: '⚖️',
    },
    {
        id: 'judge',
        label: 'Judge / Magistrate',
        subtitle: 'Government Service',
        type: NODE_TYPES.JOB,
        parent: 'law',
        description: 'Presides over court proceedings as part of the judicial system via judicial services exam.',
        emoji: '🏛️',
    },
    {
        id: 'journalist',
        label: 'Journalist / Reporter',
        //subtitle: '₹3–15 LPA',
        type: NODE_TYPES.JOB,
        parent: 'journalism',
        description: 'Investigates and reports news stories for print, broadcast, and digital media outlets.',
        emoji: '📺',
    },
    {
        id: 'ux-designer',
        label: 'UX/UI Designer',
        //subtitle: '₹5–22 LPA',
        type: NODE_TYPES.JOB,
        parent: 'design',
        description: 'Designs user interfaces and experiences for digital products using Figma, Adobe XD.',
        emoji: '🎨',
    },
    {
        id: 'psychologist',
        label: 'Psychologist',
        //subtitle: '₹3–15 LPA',
        type: NODE_TYPES.JOB,
        parent: 'ba',
        description: 'Assesses and treats mental and behavioral health conditions through counseling therapy.',
        emoji: '🧘',
    },
];

// Build lookup maps
export const nodeById = Object.fromEntries(academicNodes.map(n => [n.id, n]));

export const childrenMap = academicNodes.reduce((acc, node) => {
    if (node.parent) {
        if (!acc[node.parent]) acc[node.parent] = [];
        acc[node.parent].push(node);
    }
    return acc;
}, {});

// Shared children overrides: these parent IDs also get 'engineering' as a child
const SHARED_CHILDREN_OVERRIDES = {
    'pcmc': ['engineering'],
    'pcme': ['engineering'],
    'pcms': ['engineering'],
};

export function getChildren(nodeId) {
    const normal = childrenMap[nodeId] || [];
    const overrideIds = SHARED_CHILDREN_OVERRIDES[nodeId];
    if (!overrideIds) return normal;
    // Merge shared nodes (looked up by id) with existing children, avoiding duplicates
    const existing = new Set(normal.map(n => n.id));
    const shared = overrideIds
        .filter(id => !existing.has(id) && nodeById[id])
        .map(id => nodeById[id]);
    return [...shared, ...normal];
}

export function getNodePath(nodeId) {
    const path = [];
    let current = nodeById[nodeId];
    while (current) {
        path.unshift(current.label);
        current = current.parent ? nodeById[current.parent] : null;
    }
    return path;
}
