import {Link} from "react-router-dom"
import { Button } from "@mui/material";

const Plant =()=>{
    return(
        <div>
            Plant
            <ul><Button variant="outlined" color="success">Add</Button></ul>
            <ul><Button variant="outlined" color="error">Update</Button></ul>
            <ul><Button variant="outlined" color="warning">Delete</Button></ul>
            <ul><Button variant="outlined" color="secondary"> View </Button></ul>
        </div>
    )

}

export default Plant;