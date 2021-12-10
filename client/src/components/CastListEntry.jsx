import React from 'react';
import CastDetail from './CastDetail.jsx';

const CastListEntry = ({ cast }) => (

    <div>
        <ul>
            <li>
                {cast.person.name} <a href="/<CastDetail />" >{cast.person.url} </a>
            </li>
        </ul>
    </div>

)

export default CastListEntry;


{/* <li>{cast.person.name} <a href={cast.person.url} >{cast.person.url}</a> </li>

<span className="input-group-btn">
  <Link to="/login" />Click to login</Link>
</span> */}