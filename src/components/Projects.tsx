'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      company: 'Upsteer',
      role: 'Co-founder',
      location: 'New York, NY',
      period: 'August 2023 - Present',
      tech: 'React, Python, AWS',
      achievements: [
        'Architected and developed a Dockerized small business accounts receivable system utilizing Kubernetes and Terraform for efficient orchestration and infrastructure management and ensured live data consistency from Shopify, QBO, and SPS Commerce',
        'Developed real-time invoicing and transaction automation features with monthly B2B volume exceeding $350k monthly',
        'Implemented machine learning feature for 3-way matching for user orders, fulfillments/shipping, and invoicing via NPL transformers and open ai for auto-suggestions on mismatches and generating explanations or corrections',
        'Integrated third-party payment gateways using Stripe and PayPal APIs, facilitating seamless and secure online transactions'
      ]
    },
    {
      company: 'Amazon – Twitch',
      role: 'Senior Software Engineer',
      location: 'San Francisco, CA',
      period: 'August 2022 – July 2023',
      tech: 'React, Go, AWS',
      achievements: [
        'Built high-throughput advertising systems using DynamoDB, Kinesis, and Lambda to deliver real-time ad content to global users with millisecond-latency requirements',
        'Led and monitored global audio ads release which generated ad supply for a 150K increase in monthly ad revenue',
        'Designed and maintained distributed systems handling millions of user ad events daily with strong SLAs for throughput and fault tolerance'
      ]
    },
    {
      company: 'Amazon – Goodreads',
      role: 'Software Engineer',
      location: 'San Francisco, CA',
      period: 'May 2021 – August 2022',
      tech: 'React, Ruby on Rails, AWS',
      achievements: [
        'Created isomorphic React pages for user flagging feature, leveraging AppSync to fetch data that resolves GraphQL requests to REST APIs',
        'Developed banner ad slot for Goodreads homepage feed on react for GoogleAdManger and native ads for internal use',
        'Designed and led Policy tooling for rate limiting reviews and ratings for authors under attack from bad actors'
      ]
    },
    {
      company: 'Cisco Systems',
      role: 'Software Engineer',
      location: 'San Jose, CA',
      period: 'August 2019 – May 2021',
      tech: 'Java, Kafka, Neo4j, AWS',
      achievements: [
        'Developed and optimized Java-based backend services for real-time, low-latency network orchestration',
        'Developed multi-tenancy feature using Neo4j graphical DB and improved cluster management with Kafka',
        'Enhanced system security to achieve Federal Risk and Authorization Management Program compliance'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-slate-100 mb-12">
          Professional Experience
        </h2>

        <div
          ref={ref}
          className="space-y-12"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50"
            >
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-blue-400">{exp.company}</h3>
                  <p className="text-slate-300">{exp.role} - {exp.tech}</p>
                </div>
                <div className="text-right">
                  <p className="text-slate-400">{exp.location}</p>
                  <p className="text-slate-500">{exp.period}</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-slate-300">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-sm leading-relaxed">{achievement}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 