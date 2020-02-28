import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

export default function CharacterCard({ character }) {
  return (
    <div>
      <Card>
        <CardImg top width='100%' src={character.image} alt='Card image' />
        <CardBody>
          <CardTitle>
            <h2>{character.name}</h2>
          </CardTitle>
          <CardSubtitle>
            <span>Status: </span>
            <p>{character.status}</p>
          </CardSubtitle>
          <CardSubtitle>
            <span>Gender: </span>
            <p>{character.gender}</p>
          </CardSubtitle>
          <CardSubtitle>
            <span>Episodes: </span>
            <p>{character.episode.length}</p>
          </CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
}
