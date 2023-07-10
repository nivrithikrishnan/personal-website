import "../styles/global.css";
 
export default function MyApp({ Component, pageProps }) {
  return (
    <>
        <link href="https://fonts.googleapis.com/css2?family=Carrois+Gothic+SC&family=Inria+Serif:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
        </link>
      <Component {...pageProps} />
    </>
  )
}