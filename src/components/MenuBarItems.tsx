import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function MenuBarItems() {
  return (
    <div className="menu-bar-items">
      <a className="item" href="/" title="Home">
        Home
      </a>
      <a className="item" href="/contact" title="Ir para Contato">
        Contato
      </a>
      <span className="item">
        <StaticImage
          src="https://github.com/gjdotto.png"
          alt="Foto de Perfil"
          width={35}
          height={35}
          style={{
            borderRadius: "calc(35px/2)",
          }}
        />
      </span>
      <style jsx>{`
        .menu-bar-items {
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        .item {
          display: flex;
          align-items: center;
          color: #fff;
        }

        .item:not(:first-child) {
          margin-left: 22px;
        }
      `}</style>
    </div>
  );
}
