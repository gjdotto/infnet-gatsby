import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const bottomNavigationHeight = "48px";

export function BottomNavigation() {
  return (
    <div className="bottom-navigation">
      <Link className="item" to="/" title="Ver favoritos">
        Home
      </Link>
      <Link className="item" to="/contact" title="Ir para home">
        Contato
      </Link>
      <span className="item">
        <StaticImage
          src="https://github.com/gjdotto.png"
          alt="Foto de Dotto"
          width={36}
          height={36}
          style={{
            borderRadius: "calc(36px / 2)",
          }}
        />
      </span>
      <style jsx>{`
        .bottom-navigation {
          display: flex;
          align-items: center;
          justify-content: space-around;
          background-color: #6ebcea;
          border-top: 1px solid #ccc;
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          height: ${bottomNavigationHeight};
        }

        .item {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }

        :global(body) {
          padding-bottom: ${bottomNavigationHeight};
        }

        @media (min-width: 600px) {
          .bottom-navigation {
            display: none !important; 
          }
        }
      `}</style>
    </div>
  );
}
