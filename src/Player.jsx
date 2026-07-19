import { useState } from "react"

export default function Player () {
    const [goal, setGoal] = useState(0);

    const [three, setThrees] = useState(0)

    const handleGoal = () => {
        const updateGoal = goal + 1;
        setGoal(updateGoal);
    }

    const handleBrace = () => {
        const updateBrace = goal + 2;
        setGoal(updateBrace)
    }

    const handleThree = () => {
        const updateThree = goal + 3;
        const updateThrees = three + 1;
        setThrees(updateThrees)
        setGoal(updateThree)
    }
    return (
        <div>
            <h1>Player: Footballer </h1>
            <h3>
                Hat-Tricks:{three}
            </h3>
            {
                goal > 10 && <p> You are the top of the table</p>
            }
            <h2>Goals:{goal}</h2>
            <button onClick={handleGoal}>Goal</button>
            <button onClick={handleBrace}>Brace</button>
            <button onClick={handleThree}>Hat-trick</button>
            

        </div>
    )
}