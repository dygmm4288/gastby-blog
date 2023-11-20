/*  */
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import Seo from "../../components/seo"

const BlogPost = ({ data }) => {
  const {
    category,
    createdAt,
    description,
    id,
    references,
    tags,
    title,
    updatedAt,
    slug,
    content,
    thumbnailLocal,
    thumbnailLocalImage,
  } = data.contentfulPost
  console.log({
    /* category,
    createdAt,
    description,
    id,
    references,
    tags,
    title,
    updatedAt,
    slug,
    content,
    thumbnailLocal, */
    // thumbnailLocalSrc,
    thumbnailLocalImage,
  })
  const image = getImage(thumbnailLocalImage.childImageSharp.gatsbyImageData)
  return (
    <div>
      <p>id : {id}</p>
      <p>태그 : {tags.toString()}</p>
      <p>제목 : {title}</p>
      <p>카테고리 : {category}</p>
      <p>작성일 : {createdAt}</p>
      <p>수정일 : {updatedAt}</p>
      <p>slug : {slug}</p>
      <p>요약 : {description}</p>
      <GatsbyImage image={image} alt="썸네일 사진" />
      {
        <div
          dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }}
        ></div>
      }
      <p>참고문헌 : {references}</p>
    </div>
  )
}

export const query = () => graphql`
  query postQuery {
    contentfulPost {
      category
      createdAt(locale: "")
      description
      id
      references
      tags
      title
      updatedAt(locale: "")
      slug
      thumbnailLocal
      content {
        childMarkdownRemark {
          html
        }
      }
      thumbnailLocalImage {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.title} />
export default BlogPost
