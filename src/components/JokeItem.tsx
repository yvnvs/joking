import React from 'react'
import {CardWrapper, CardTop, CardBottom, Setup, Delivery} from "./styled/index"
import { Joke,Flags,Category, FlagsKeys } from '../common/types'

interface JokeItemProps{
    joke:Joke;
}

const JokeItem: React.FC<JokeItemProps> = ({joke}) => {
    const flags = Object.keys(joke.flags).filter((key)=> joke.flags[key as FlagsKeys]).join(" , ");
  return (
    <CardWrapper>
        <CardTop>
            {joke.type ==="single" ? (
                <p>{joke.joke}</p>
            ) : (
                <>
                <Setup>{joke.setup}</Setup>
                <Delivery>{joke.delivery}</Delivery>
                </>
            )}
            <CardBottom>
                <p>{joke.category}</p>
                <div>{flags}</div>
            </CardBottom>
        </CardTop>
    </CardWrapper>
  )
}

export default JokeItem 