import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import styles from '../styles/home.css';
import {GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
export default function Home({ data }) {
  const image = getImage(data.file.childImageSharp.gatsbyImageData);
  return (<Layout>
    <section className='header'>
      <div>
        <h2>Design pages</h2>
        <h3>Implement test and deploy</h3>
        <p>UI UX designers based on react and other frameworks</p>
        <Link className='btn' to='/projects'>Our Portfolio</Link>
      </div>
      <GatsbyImage image={image} alt='banner' />
      {/* <StaticImage src="../images/banner.png" alt="A dinosaur" style={{minHeight: '100%'}}/> */}
      {/* <img src="/feather.jpg" style={{width: '290px', height: '300px'}} /> */}

    </section>
  </Layout>)
}

export const query = graphql`
query Banner {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: FULL_WIDTH
        placeholder: BLURRED
        formats: [AUTO, WEBP]
        )
    }
  }
}`
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
