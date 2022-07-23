import React from "react";
import axios from "axios";

export default class SeedViewAll extends React.Component{
    state ={
        seed:[]
    }
    componentDidMount(){
        axios.get('http://localhost:8080/seed/viewall')
        .then(res=>{
            const seed = res.data;
            console.log(seed);
            this.setState({seed});
        }).catch((er)=>alert("Problem in fetching"))
    }
    render(){
        return(
            <div>
                <h1> Seed Details </h1>
                <div className="seed_details">
                    <ul className="view_ui">
                        {
                            this.state.seed.map((seed,Index)=>
                            <li key={Index}>
                                <ul>
                                <li>
                                seed_id:{seed.seedId}
                                </li>
                                <li>Name:{seed.commonName}</li>  
                                <li>
                                bloomTime:{seed.bloomTime}
                                </li>
                                <li>
                                watering:{seed.watering}
                                </li>
                                <li>
                                difficultyLevel:{seed.difficultyLevel}
                                </li>
                                <li>
                                    temperature:{seed.temperature}
                                </li>
                                <li>
                                    typeOfSeed:{seed.typeOfSeed}
                                </li>
                                <li>
                                seedDescription:{seed.seedDescription}
                                </li>
                                <li>
                                seedsStock:{seed.seedsStock} 
                                </li>
                                <li>
                                seedCost:{seed.seedCost}
                                </li>

                                </ul>
                                <br></br>
                            </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}