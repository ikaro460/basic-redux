import { useSelector } from "react-redux"

export const FruitPage = ( ) => {
    const fruits = useSelector((state) => state.fruits);
    return (
        <div>
            {fruits.map((fruit)=>(

                <p key= {fruit}>{fruit}</p>
                ))
            }
        </div>
    )
}