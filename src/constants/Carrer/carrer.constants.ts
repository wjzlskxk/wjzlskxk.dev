export interface CareerItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements?: string[];
  stacks: string[];
}

export const careerItems: CareerItem[] = [
  {
    id: "business",
    company: "SSiS",
    role: "Assistant",
    period: "2025.10 - 현재",
    location: "Seoul, KR",
    description:
      "수급(권)자들의 자산을 조사하여 복지 서비스 제공에 필요한 기초자료를 구축 및 자격을 결정함을 도와줍니다.",
    achievements: [],
    stacks: ["비공개입니다."],
  },
  {
    id: "Internship",
    company: "Klaim in Ceeya",
    role: "Serverless Backend Developer Intern",
    period: "2024.12 - 2025.02",
    location: "Online",
    description: "4세대 서버인 Serverless 환경에서 AWS Lambda 기반 백엔드 개발을 경험했습니다.",
    achievements: [
      "AWS Lambda와 API Gateway를 활용한 서버리스 아키텍처 설계 및 구현",
      "DynamoDB를 이용한 NoSQL 데이터베이스 설계 및 최적화",
      "Scrum Master로서 팀의 애자일 프로세스 관리 및 스프린트 계획 수립",
    ],
    stacks: ["AWS Lambda", "API Gateway", "DynamoDB", "Typescript", "Git"],
  },
  {
    id: "club",
    company: "B1ND",
    role: "Frontend Developer",
    period: "2023.08 - 2025.02",
    location: "Daegu, KR",
    description: "교내 스마트스쿨 서비스 개발 동아리 B1ND에서 프론트엔드 개발자로 활동했습니다.",
    achievements: [
      "교내 스마트스쿨 서비스의 프론트엔드 개발 및 유지보수 담당",
      "Recoil을 활용한 상태 관리 및 Styled-Components를 이용한 UI 구현",
      "Storybook을 통한 디자인 시스템 개발 및 문서화 경험",
      "GitHub Projects와 Notion을 활용한 프로젝트 관리 및 협업 경험",
      "npm 패키지 배포 경험",
    ],
    stacks: ["React", "TypeScript", "Recoil", "Storybook", "Styled-Components", "GitHub Projects", "Notion"],
  },
];