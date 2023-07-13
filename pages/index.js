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
        <div className={styles.left}>
          <img src="/media/profile.png" alt="Nivrithi Krishnan" className={styles.logo} />
        </div>
        <div className={styles.right}>
          <h1> Hi, I'm Nivrithi! 👋 </h1>
          <p> I am currently a senior undergraduate student studying Computer Science. </p>
          <p> Growing up, I have always had a passion for anything involving arts and crafts and creative-problem solving, but it wasn't until my dad introduced me to programming in the beginning of high school that I discovered my love for computer science. Through my coursework and experiences, I am constantly understanding the numerous applications of CS and its ability to challenge us to find innovative solutions to complex problems. Currently, I am especially interested in further investigating the intersection between technology, design, and AI. </p>
          <p> In the past,  I’ve researched and developed an algorithm to analyze & parse flight data at NASA Ames Research Center, designed and developed several new features for <a href="https://www.tadanow.com/">Tada's</a> platform,and served as both a product designer and full-stack web developer for <a href="https://linktr.ee/includedavis"> #include at Davis</a>. This summer, I will be exploring the intricacies of building scalable and reliable cloud storage solutions as a SWE intern for Microsoft’s Azure Core team. </p>
          <p>You can reach me through any of the socials below, I’d love to chat!</p>
          <br></br>
          <Socials />
        </div>
      </main>
      <footer>
      </footer>
    </Layout>
  )
}
