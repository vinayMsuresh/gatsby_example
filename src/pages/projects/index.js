import { graphql, Link } from 'gatsby';
import React from 'react'
import Layout from '../../components/Layout'
import '../../styles/project.css';
export default function Portfolio({ data }) {
  const projects = data.allMarkdownRemark.nodes;
  return (
    <Layout>
        <div className='portfolio'>
            <h2>PortFolio page</h2>
            <h3> This is the page where portfolio's displayed</h3>
            <div className='projects'>
              { projects.map(project => (
                <Link to={`/projects/${project.frontmatter.slug}`} key={project.id} >
                  <div>
                    <h3>{project.frontmatter.title}</h3>
                    <p>{project.frontmatter.stack}</p>
                  </div>
                </Link>
              ))}
            </div>
        </div>
    </Layout>
  )
}

export const query = graphql`
query ProjectsPage {
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        title
        stack
        slug
      }
      id
    }
  }
}`
