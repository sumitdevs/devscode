import React, {useState} from 'react';
import Skill from './Skill';
const skill = [
    {
      heading: 'Web Development',
      items: [
        'Expertise in HTML, CSS, and JavaScript.',
        'Specialization in building dynamic and responsive web applications using React.js.'
      ]
    },
    {
      heading: 'Front-End Development',
      items: [
        'HTML, CSS, JavaScript, React.js for building modern and responsive web applications.',
        'Experience with TypeScript for enhanced code quality.',
        'Familiarity with CSS preprocessors like SASS and LESS.',
        'Expert in UI/UX design principles and accessibility standards.'
      ]
    },
    {
      heading: 'Back-End Development',
      items: [
        'Proficient in server-side development using Node.js and Express.js.',
        'Experience with databases like MongoDB, MySQL, and PostgreSQL.',
        'Knowledge of building scalable and secure APIs.',
        'Experience with authentication mechanisms like JWT and OAuth.'
      ]
    },
    {
      heading: 'DevOps & Cloud',
      items: [
        'Experience with cloud platforms such as AWS, Azure, and Google Cloud.',
        'Proficient in containerization technologies like Docker and Kubernetes.',
        'Knowledge of CI/CD pipelines for automated deployment and testing.',
        'Understanding of infrastructure-as-code tools like Terraform and Ansible.'
      ]
    },
    {
      heading: 'Version Control & Collaboration',
      items: [
        'Proficient in using Git and GitHub for version control.',
        'Experience with collaborative workflows like Gitflow.',
        'Knowledge of branching strategies for managing feature development.',
        'Proficient in resolving merge conflicts and performing code reviews.'
      ]
    },
    {
      heading: 'Testing & Debugging',
      items: [
        'Experience with automated testing frameworks like Jest and Mocha.',
        'Proficient in writing unit, integration, and end-to-end tests.',
        'Skilled in debugging front-end and back-end issues.',
        'Knowledge of Test-Driven Development (TDD) and Behavior-Driven Development (BDD).'
      ]
    }
];
function Service() {
    const [skillList, setSkillList] = useState([...skill]);
    return (
        <div className='mt-10 md:mt-16'>
            <div className='grid gap-8 md:gap-10 lg:grid-cols-2'>
                <div className='flex flex-col gap-2 '>
                    <h2 className='text-2xl md:text-4xl font-mulish font-semibold'>My Expertises</h2>
                    <p className='text-lg font-light'>Immersed in the realms of design and the web, my focal point revolves around crafting seamless digital experiences. Every service I offer is driven by a singular goal – to deliver impactful and elevating digital experiences accessible to all</p>
                </div>
                <div className='flex flex-col gap-2 '>
                    <h2 className='text-2xl md:text-4xl font-mulish font-semibold'>My Digital Tools Proficiency.</h2>
                    <p className='text-lg font-light '>Immersed in the realms of design and the web, my focal point revolves around crafting seamless digital experiences. Every service I offer is driven by a singular goal – to deliver impactful and elevating digital experiences accessible to all</p>
                </div>
                 {skillList.map((data,idx)=>(<Skill key={idx} id={idx} skill={data} /> ))}
                <div>
                </div>
            </div>
        </div>
    )
}




export default Service;