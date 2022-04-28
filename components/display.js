import { useRecoilState, useRecoilValue } from "recoil";
import { nameState, charState } from './states'


export default function Display(){
    const [name, setName] = useRecoilState(nameState)
    const charName = useRecoilValue(charState)

    return (
        <div>
            <p>My name is {name}</p>
            <p>My name has {charName} characters</p>
        </div>
    )
}
