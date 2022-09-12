import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import styles from '../styles/home.module.css';
export default function Home() {
  console.log(styles)
  return (<Layout>
    <section className='header'>
      <div>
        <h2>Design pages</h2>
        <h3>Implement test and deploy</h3>
        <p>UI UX designers based on react and other frameworks</p>
        <Link className='btn' to='/projects'>Our Portfolio</Link>
      </div>
      <img src="/feather.jpg" style={{width: '290px', height: '300px'}} />
    </section>
  </Layout>)
}

// export const query = graphql`
// query SiteInfo{
//   site {
//     siteMetadata {
//       description
//       title
//     }
//   }
// }
// `
