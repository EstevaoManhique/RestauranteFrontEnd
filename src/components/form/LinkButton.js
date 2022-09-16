import {Link} from 'react-router-dom'

function LinkButton({to, text, handleOnClick}){
    return(
        <Link onClick={handleOnClick} className="btn btn-danger" to={to}>
            {text}
        </Link>
    )
}

export default LinkButton