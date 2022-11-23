import React from "react";
import { graphql, PageProps, HeadProps } from "gatsby";
import { Layout } from "../layout/Layout";
import { ProfileHeader, ProfileHeaderProps } from "../components/ProfileHeader";
import { MetaHead } from "../components/MetaHead";
import { ContactForm } from "../components/FormContato";

export default function Contact({ data }: PageProps) {
  const profileHeaderProps = (data as any).json as ProfileHeaderProps;

  return (
    <Layout>
      <article>
        <header>
          <ProfileHeader
            {...profileHeaderProps}
            publishCount={(data as any).allMarkdownRemark.pageInfo.totalCount}
          />
        </header>
        <section className="feed-container">
            <ContactForm />
        </section>
      </article>
    </Layout>
  );
}

export const pageQuery = graphql`
  {
    json {
      perfil
      bio
      link
      name
      role
      username
    }
    allMarkdownRemark(limit: 9, sort: {frontmatter: {date: DESC}}) {
      pageInfo {
        totalCount
        currentPage
        pageCount
        hasNextPage
        hasPreviousPage
      }
      nodes {
        fields {
          slug
        }
      }
    }
  }
`;

export const Head = ({ data }: HeadProps) => {
  const { name, bio } = (data as any).json;
  return <MetaHead title={`We Travel | ${name}`} description={bio} />;
};
