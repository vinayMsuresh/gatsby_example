import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react'
import Layout from '../components/Layout'
import '../styles/projectDetails.css';
function projectDetails({data}) {
  const { html } = data.markdownRemark;
  const { title, stack, featuredImg} = data.markdownRemark.frontmatter;
  const image = getImage(featuredImg.childImageSharp.gatsbyImageData);
  console.log(data.markdownRemark.frontmatter)
  return (
    <Layout>
        <div className='details'>
            <h2>{title}</h2>
            <h3>{stack}</h3>
            <div className='featured'>
              <GatsbyImage image={image} alt='project details' />
            </div>
            <div className='html' dangerouslySetInnerHTML={{__html: html}} />
        </div>
    </Layout>
  )
}

export default projectDetails

export const query = graphql`
query projects($slug: String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    html
    frontmatter {
      title
      stack
      featuredImg {
        childImageSharp {
          gatsbyImageData(formats: AUTO, layout: FULL_WIDTH)
        }
      }
    }
  }
}`