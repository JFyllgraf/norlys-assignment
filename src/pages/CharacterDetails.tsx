import { FC, ReactElement, useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { CharacterContext } from "../App";
import { ICharacter } from "../models/character";

const CharacterDetails: FC = (): ReactElement => {
    const { id } = useParams<{ id: string }>();
    const { characters } = useContext(CharacterContext);
    const [character, setCharacter] = useState<ICharacter>();

    useEffect(() => {
        if (characters) {
            setCharacter(characters[parseInt(id)]);
        }
    }, [characters])

    return (
        <div>
            {character && 
                <div>
                    <h1>{character.name}</h1>
                    <hr />
                    <p>Born: {character.birth_year}</p>
                    <p>Height: {character.height}</p>
                    <p>Gender: {character.gender}</p>
                    <p>Film appearances: {character.films.length}</p>

                    <Link className="button" to={`/`}>Go back</Link>
                    <a className="button" onClick={() => alert(`${character?.name} added to favorites! (I promise)`)}>Add to favorites</a>
                </div>
            }
        </div>
    )
}

export default CharacterDetails;