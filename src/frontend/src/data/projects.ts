/**
 * Projects Data Module
 * 
 * This file contains all the projects displayed in the Projects section.
 * To add a new project, simply copy the example below and add it to the projects array.
 * 
 * Each project requires:
 * - title: The name of your project
 * - description: A brief description of what the project does
 * - tech: An array of technologies/tools used (displayed as badges)
 * - github: The full GitHub URL to your project repository
 * 
 * Example project entry (copy and paste this, then modify):
 * 
 * {
 *   title: 'Your Project Name',
 *   description: 'A brief description of what your project does and its key features.',
 *   tech: ['Technology1', 'Technology2', 'Technology3'],
 *   github: 'https://github.com/yourusername/your-repo-name',
 * },
 */

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
}

export const projects: Project[] = [
  {
    title: 'RAG-Based AI Teaching Assistant',
    description: 'Built a Retrieval-Augmented Generation pipeline for academic query answering using semantic search and LLMs.',
    tech: ['Python', 'LangChain', 'FAISS', 'Streamlit'],
    github: 'https://github.com/vaibhavgaikwad0072/RAG-Based-AI-Teaching-Assistant',
  },
  {
    title: 'Text to SQL Chatbot using LLMs',
    description: 'Developed an AI chatbot that converts natural language into SQL queries and executes them on MySQL databases.',
    tech: ['Python', 'MySQL', 'LangChain', 'RAGAS', 'Streamlit'],
    github: 'https://github.com/vaibhavgaikwad0072/Text-To-SQL',
  },
  {
    title: 'Solar Panel Defect Classification',
    description: 'Deep learning model using EfficientNetB0 achieving 83% validation accuracy for defect detection.',
    tech: ['Python', 'TensorFlow', 'Streamlit'],
    github: 'https://github.com/vaibhavgaikwad0072/Solar-Panel-Defect-Classification',
  },
  {
    title: 'Movie Recommendation System',
    description: 'Implemented content-based and collaborative filtering for personalized recommendations.',
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
    github: 'https://github.com/vaibhavgaikwad0072/Moive-Recommendation-system',
  },
];
