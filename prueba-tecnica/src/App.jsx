import {useEffect, useState} from "react";

const CAT_ENPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
//const CAT_ENPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`

export function App () {
    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {

        fetch(CAT_ENPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                const {fact} = data;
                setFact(fact)

                const threeFriestWords = fact.split(' ', 3).join(' ')
                console.log(threeFriestWords)

                fetch(`https://cataas.com/cat/says/${threeFriestWords}?fontSize=50&fontColor=red&json=true`)
                    .then(res => res.json())
                    .then(response => {response})
            })

    },[])

    return (
        <main>
            <h1>App de gatitos</h1>
            { fact && <p>Fact aleatorio: {fact}</p>}
        </main>
    )
}