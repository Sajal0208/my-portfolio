import React from "react";
import blogs from "../data/blogs";
import styled from "styled-components";
import Title from "../Components/Title";
import { MainLayout, InnerLayout } from "../styles/Layout";

const BlogsPage = () => {
  return (
    <MainLayout>
      <BlogsStyled>
        <Title title={"Blogs"} span={"Blogs"} />
        <InnerLayout className={"blog"}>
          {blogs.map((blog) => {
            return (
              <div key={blog.id} className={"blog-item"}>
                <div className="image">
                  <img src={blog.image} alt="image" />
                </div>
                <div className="title">
                  <a href={blog.link}>{blog.title}</a>
                </div>
              </div>
            );
          })}
        </InnerLayout>
      </BlogsStyled>
    </MainLayout>
  );
};

const BlogsStyled = styled.div`
  .blog {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
    .blog-item {
      padding: 2rem 1rem;
      background-color: var(--background-dark-color);
    }
    .image {
      width: 100%;
      overflow: hidden;
      padding-bottom: 0.5rem;
      img {
        width: 100%;
        height: 90%;
        object-fit: cover;
        transition: 0.4s all ease-in-out;
        &:hover{
            cursor: pointer;
            transform: rotate(3deg) scale(1.1);
        }
      }
    }

    .title{
        a{
            font-size: 1.8rem;
            padding: 2rem 0;
            color: var(--white-color);
            cursor: pointer;
            transition: 0.4s all ease-in-out;
            &:hover{
                color: var(--primary-color);
            }
        }
    }
  }
`;

export default BlogsPage;
