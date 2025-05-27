'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    // Languages & Frameworks
    'Python', 'Java', 'Go', 'SQL', 'React', 'Redux', 'Ruby on Rails', 'TypeScript',
    // AWS & Cloud
    'AWS EC2', 'Lambda', 'Kinesis', 'DynamoDB', 'Redshift', 'AppSync', 'CloudWatch',
    // Infrastructure & Tools
    'Kubernetes', 'Terraform', 'Kafka', 'Neo4j', 'Docker', 'GraphQL', 'REST APIs',
    // Payment & E-commerce
    'Stripe', 'PayPal', 'Shopify', 'QuickBooks Online',
    // Expertise
    'Low-latency Systems', 'High-throughput Pipelines', 'Distributed Systems',
    'Event Sourcing', 'Data Ingestion', 'Machine Learning', 'System Security',
    // Development Tools
    'Git', 'Jenkins', 'JUnit', 'SLA Monitoring',
    // Project Management
    'Confluence', 'Jira',
    // AI/ML
    'LLMs (GPT-4, Claude)', 'NLP Transformers', 'OpenAI'
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-slate-100 mb-8">Skills & Education</h2>
          
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-slate-300"
          >
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-blue-400">Georgia Institute of Technology</h3>
              <p>Masters in Computer Science - Specialization in Machine Learning</p>
              <p className="text-slate-400">Atlanta, GA</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-blue-400">California Polytechnic State University</h3>
              <p>Bachelors in Computer Science</p>
              <p className="text-slate-400">San Luis Obispo, CA</p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            ref={ref}
            className="flex flex-wrap justify-center gap-3"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-4 py-2 bg-slate-800 text-slate-300 rounded-full text-sm hover:bg-slate-700 transition-colors"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 