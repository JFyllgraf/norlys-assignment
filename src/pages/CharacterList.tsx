import { FC, ReactElement, useContext } from "react";
import { Link } from "react-router-dom";

import { CharacterContext } from "../App";


const CharacterList: FC = (): ReactElement => {
    const { characters } = useContext(CharacterContext);

    return (
        <div>
            <h1>Starwars Characters!</h1>
            <hr />
            {characters && characters.map((x, i) => (
                <Link key={i} to={`/details/${i}`}>
                    <p>{x.name}</p>
                </Link>
            ))}
        </div>
    )
}

export default CharacterList;