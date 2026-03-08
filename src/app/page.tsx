import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Background blobs for premium glassmorphism vibe */}
      <div className={`${styles.bgBlob} ${styles.blob1}`}></div>
      <div className={`${styles.bgBlob} ${styles.blob2}`}></div>

      <div className="container">
        {/* Navigation */}
        <nav className={styles.nav}>
          <div className={styles.logo}>
            HWS <span>AI Club</span>
          </div>
          <div className={styles.navLinks}>
            <Link href="#about">About Us</Link>
            <Link href="#events">Events</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#contact" className="btn btn-outline" style={{ padding: "0.4rem 1.2rem", height: "auto" }}>
              Join Now
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.badge}>Innovating the Future</div>
          <h1 className={styles.title}>
            Discover AI at <span>HWS Colleges</span>
          </h1>
          <p className={styles.subtitle}>
            Join a passionate community of students dedicated to learning, building, and exploring Artificial Intelligence. No prior coding experience required—just curiosity.
          </p>
          <div className={styles.ctaGroup}>
            <button className="btn btn-primary">Become a Member</button>
            <button className="btn btn-outline">View Our Projects</button>
          </div>
        </section>

        {/* Features / Pillars */}
        <section className={styles.features}>
          <div className={`glass-panel ${styles.featureCard}`}>
            <div className={styles.featureIcon}>🤖</div>
            <h3 className={styles.featureTitle}>Workshops</h3>
            <p className={styles.featureDesc}>
              Learn the fundamentals of machine learning, neural networks, and generative AI through interactive hands-on sessions.
            </p>
          </div>

          <div className={`glass-panel ${styles.featureCard}`}>
            <div className={styles.featureIcon}>💡</div>
            <h3 className={styles.featureTitle}>Projects</h3>
            <p className={styles.featureDesc}>
              Collaborate on real-world AI applications. Build a portfolio of impactful projects that solve actual problems.
            </p>
          </div>

          <div className={`glass-panel ${styles.featureCard}`}>
            <div className={styles.featureIcon}>🚀</div>
            <h3 className={styles.featureTitle}>Networking</h3>
            <p className={styles.featureDesc}>
              Connect with alumni, professors, and industry professionals pushing the boundaries of artificial intelligence.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
