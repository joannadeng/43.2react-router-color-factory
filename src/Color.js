import {Link,useParams,Navigate} from 'react-router-dom'

const Color = ({colors}) => {
    const {color} = useParams();
    const colorNames = Object.keys(colors);
    if(colorNames.filter(e => e === color).length  === 0) {
        return <Navigate to='/colors' />
    }
    return (
        <div style={{ backgroundColor:colors[color]}}>
            {console.log(colors[color])}
            <h3> This is {color}</h3>
            <h3> ISN'T IT BEAUTIFUL?</h3>
            <h3> GO BACK!</h3>
        </div>
    )
}

export default Color;