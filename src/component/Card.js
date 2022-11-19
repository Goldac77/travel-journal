import {MdLocationPin} from 'react-icons/md'

function Card(props) {
    return(
        <div className="card-div">
            <div className="img-div">
                <img src={props.imageUrl} alt="" />
            </div>

            <div className="content-div">
                <div className='ctn-1'>
                    <span className='pin'><MdLocationPin/></span> <span className='location'>{props.location.toUpperCase()} </span>
                    <a href={props.googleMapsUrl} target="_blank" rel="noreferrer">View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>

                <div className='ctn-2'>
                    <span className='date'>{props.startDate} - {props.endDate}</span> <br/>
                    <span className='des'>{props.description}</span>
                </div>
            </div>

        </div>
    )
}

export default Card