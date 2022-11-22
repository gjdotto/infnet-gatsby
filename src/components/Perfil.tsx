import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

export type PerfilProps = {
  size?: number | string;
  alt: string;
} & ({ src: string } | { image: IGatsbyImageData });

export function Perfil({ size = "50px", alt, ...data }: PerfilProps) {
  return (
    <div className="perfil">
      {"src" in data && (
        <img src={data.src} width={size} height={size} alt={alt} />
      )}
      {"image" in data && (
        <GatsbyImage
          image={{ ...data.image, layout: "fullWidth" }}
          alt={alt}
          style={{
            borderRadius: `calc(${size}/2)`,
          }}
        />
      )}
      <style jsx>{`
        .perfil {
          width: ${size};
          height: ${size};
        }

        img {
          width: 100%;
          height: 100%;
          border-radius: calc(${size}/2);
          border-style: solid;
          border-color: #6eabd0;
        }
      `}</style>
    </div>
  );
}
