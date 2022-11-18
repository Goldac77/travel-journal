import {MdLocationPin} from 'react-icons/md'

function Card(props) {
    return(
        <div className="card-div">
            <div className="img-div">
                <img src={props.imageUrl} alt="" />
            </div>

            <div className="content-div">
                <div className='ctn-1'>
                    <MdLocationPin/> <span>{props.location}</span>
                    <a href={props.googleMapsUrl}> View on Google Maps</a>
                </div>
                <h2>{props.title}</h2>

                <div className='ctn-2'>
                    {props.startDate} - {props.endData}
                    {props.description}
                </div>
            </div>

        </div>
    )
}

export default Card