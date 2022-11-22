import React from "react";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { Link } from "gatsby";

export type FeedProps = {
  items: FeedItemProps[];
  pagination?: PaginationProps;
};

export type PaginationProps = {
  pageCount: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

export type FeedItemProps = {
  image: IGatsbyImageData;
  link: string;
  title: string;
};

export function Feed({ items, pagination }: FeedProps) {
  return (
    <div className="feed">
      <div className="feed-grid">
        {items.map((item, index) => (
          <FeedItem {...item} key={index} />
        ))}
      </div>
      {pagination && <Pagination {...pagination} />}
      <style jsx>{`
        .feed {
          padding: 8px 0;
        }

        .feed-grid {
          display: grid;
          gap: 16px;
          grid-template-columns: repeat(3, 1fr);
        }

        @media (max-width: 600px) {
          .feed-grid {
            gap: 1px !important;
          }
        }
      `}</style>
    </div>
  );
}

function FeedItem({ image, link, title }: FeedItemProps) {
  return (
    <Link to={link}>
      <GatsbyImage image={{ ...image, layout: "fullWidth" }} alt={title} />
    </Link>
  );
}

function Pagination({
  currentPage,
  hasNextPage,
  hasPreviousPage,
  pageCount,
}: PaginationProps) {
  return (
    <div className="pagination">
      <div className="pagination-desktop">
        {Array.from(
          { length: Math.ceil(pageCount) },
          (_, index) => index + 1
        ).map((page) => {
          if (page === currentPage) {
            return <span className="pagination-link current-page">{page}</span>;
          }

          return (
            <Link
              to={page === 1 ? "/" : `/pages/${page}`}
              key={page}
              className="reset-anchor"
              title={`Ir para a página ${page}`}
            >
              <span className="pagination-link">{page}</span>
            </Link>
          );
        })}
      </div>
      <div className="pagination-mobile">
        {hasPreviousPage && (
          <Link
            to={currentPage - 1 === 1 ? "/" : `/pages/${currentPage - 1}`}
            className="reset-anchor"
            title="Voltar uma página"
          >
            <span className={"pagination-link"}>
              <MdArrowLeft size="30px" aria-label="Página anterior" />
            </span>
          </Link>
        )}
        {hasNextPage && (
          <Link
            to={`/pages/${currentPage + 1}`}
            className="reset-anchor"
            title="Próxima página"
          >
            <span className={"pagination-link"}>
              <MdArrowRight size="30px" aria-label="Próxima página" />
            </span>
          </Link>
        )}
      </div>
      <style jsx>{`
        .pagination-desktop {
          display: none;
        }
        .pagination-mobile {
          display: flex;
        }
        @media (min-width: 600px) {
          .pagination-desktop {
            display: flex !important;
          }
          .pagination-mobile {
            display: none !important;
          }
        }
        .pagination-desktop,
        .pagination-mobile {
          justify-content: center;
          margin-top: 1em;
        }
        .pagination-link {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: red;
          margin: 1em;
          width: 35px;
          height: 35px;
          border-radius: 18px;
          background-color: #cde1ec;
          font-size: 12px;
        }
        .current-page {
          background-color: #1d6997;
          color: #fff;
        }
        .pagination-link:hover {
          opacity: 0.7;
        }
      `}</style>
    </div>
  );
}
