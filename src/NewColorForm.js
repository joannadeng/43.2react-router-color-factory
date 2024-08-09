import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

const NewColorForm = ({colors,setColors}) => {
    const initialColors = {
        name:"",
        color:""
    }
    const [data, setData] = useState(initialColors)
    const handleChange = e => {
        const {name,value} = e.target
        setData(data => ({
            ...data,
            [name]:value
        }))
    }
    
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        setColors( colors =>({...colors,[data.name]:data.color}) );
        navigate(-1);
        setData(initialColors)

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label htmlFor="name">Color name</label>
                <input 
                type="text"
                id="color"
                name="name"
                value={data.name}
                onChange={handleChange}
                />


                <label htmlFor="color">Color value</label>
                <input 
                type="color"
                id="color"
                name="color"
                value={data.color}
                onChange={handleChange}
                />

                <button>Add this color</button>
            </form>
        </div>
        
    )
}

export default NewColorForm;