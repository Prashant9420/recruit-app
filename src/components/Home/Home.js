import React from 'react';
import styles from './home.module.css';
import Header from '../Header/Header';
import { useNavigate } from 'react-router';

function Home() {
  const navigate=useNavigate();
  return (
    <div className={styles.App}>
      <Header/>
      <div className={styles.con1}>
      <div className={styles.search} onClick={()=>navigate('/search')}>Search Candidates</div>

      <section className={styles.Features}>
        <h2>Key Features</h2>
        <ul>
          <li>Automated Job Posting</li>
          <li>Smart Applicant Tracking</li>
          <li>Effortless Screening and Shortlisting</li>
          <li>Collaborative Hiring</li>
          <li>Automated Communication</li>
          <li>Powerful Analytics and Reporting</li>
        </ul>
      </section>
      </div>
      <div className={styles.con2}>
      <section className={styles.Benefits}>
        <h2>Benefits for Hiring Managers and HR Professionals</h2>
        <ul>
          <li>Save Time and Effort</li>
          <li>Enhance Efficiency</li>
          <li>Access to Top Talent</li>
          <li>Improved Candidate Experience</li>
          <li>Data-Driven Decision Making</li>
        </ul>
      </section>
      </div>
      <div className={styles.con3}>
      <section className={styles.footer}>
        <h2>Try StreamlineRecruit Today and Experience the Future of Recruitment!</h2>
        <p>Sign up now for a free trial and discover how StreamlineRecruit can transform your hiring process. Streamline your recruitment workflow, save time, and hire the best talent effortlessly. Join thousands of satisfied hiring managers and HR professionals who have already revolutionized their recruitment experience with StreamlineRecruit.</p>
      </section>
      </div>
    </div>
  );
}

export default Home;
