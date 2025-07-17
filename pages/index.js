import Head from 'next/head';
import Layout from '../components/layouts/layout';
import Socials from '../components/layouts/socials';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Nivrithi Krishnan</title>
        <link rel="icon" href="/media/profile.png" />
      </Head>
      <main className={styles.container}>
        <div className={/*styles.left*/ styles.center}>
          <img src="/media/profile.png" alt="Nivrithi Krishnan" className={styles.logo} />
          <br></br>
          <br></br>
          <Socials />
        </div>
  {/*
        <div className={styles.right}>
          <h1> Hello, I'm Nivrithi! 👋 </h1>
          <p> I am currently a Software Engineer at Microsoft, based in Seattle & the Bay Area. </p>
          <p>Growing up, I always had a passion for anything involving arts and crafts and creative problem-solving. However, it wasn’t until my dad introduced me to programming in high school that I discovered computer science, and have since been captivated by its ability to challenge us to find innovative solutions to complex problems. I've spent my past few summers and idle moments exploring the numerous applications of technology, notably engineering at <a href="https://www.tadanow.com/">TadaNow</a>, NASA Ames Research Center, and <a href="https://linktr.ee/includedavis"> #include at Davis</a>. While I am still figuring out what path lies ahead for me, I am especially interested in investigating the interplay of society, technology, and design.</p>
          <p>When I am not creating I love exploring the many cafes & views of Seattle, <a href="https://www.goodreads.com/user/show/113843935-nivrithi">diving into a new book</a>, and capturing moments through my digital camera. </p>
          {<p> In the past,  I’ve researched and developed an algorithm to analyze & parse flight data at NASA Ames Research Center, designed and developed several new features for <a href="https://www.tadanow.com/">Tada's</a> platform and served as both a product designer and full-stack web developer for <a href="https://linktr.ee/includedavis"> #include at Davis</a>. </p>}
          <p>You can reach me through any of the socials below, I’d love to chat!</p>
          <br></br>
          <Socials />
        </div>
  */}
      </main>
      <footer>
      </footer>
    </Layout>
  )
}
