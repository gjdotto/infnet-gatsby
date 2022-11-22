import React from "react";
import { Perfil } from "./Perfil";

export type ProfileHeaderProps = {
  username: string;
  perfil: string;
  name: string;
  role: string;
  bio: string;
  link: string;
  publishCount: number;
};

export function ProfileHeader({
  perfil,
  bio,
  link,
  name,
  publishCount,
  role,
  username,
}: ProfileHeaderProps) {
  return (
    <div className="profile-header">
      <div className="row">
        <div className="perfil item">
          <Perfil src={perfil} size="170px" alt={`Foto de ${username}`} />
        </div>
      </div>
      <div className="row">
        <h2 className="username item">
          <span>{username}</span>
        </h2>
        <div className="publish-container item">
          <span className="publish-count">{publishCount}</span>{" "}
          <span>destinos alcançados</span>
        </div>
        <div className="name item">
          <span>{name}</span>
        </div>
        <div className="role item">
          <span>{role}</span>
        </div>
        <div className="bio item">
          <p>{bio}</p>
        </div>
        <div className="link item">
          <a href={link} title={`Foto de ${name}`} target="__blank">
            {new URL(link).host}
          </a>
        </div>
      </div>
      <style jsx>{`
        .profile-header {
          display: flex;
          padding: 40px 0 75px 0;
          justify-content: normal;
        }

        .item:not(:first-child) {
          margin-top: 4px;
        }

        .publish-container {
          margin: 16px 0 !important;
        }

        .publish-count {
          font-weight: bold;
          color: #125780;
        }

        .username {
          font-size: 28px;
          color: #125780;
        }

        .name {
          font-weight: bold;
          color: #3487b9;
        }

        .role {
          color: rgba(0, 0, 0, 0.7);
        }

        .perfil {
          display: flex;
          justify-content: center;
        }

        @media (max-width: 960px) {
          .profile-header {
            flex-direction: column;
          }
        }

        @media (min-width: 960px) {
          .profile-header {
            flex-direction: row;
            justify-content: normal;
          }

          .row {
            display: flex;
            justify-content: center;
            align-itens: center;
            flex-direction: column;
          }

          .perfil {
            width: 256px;
          }
        }
      `}</style>
    </div>
  );
}
