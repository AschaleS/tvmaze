import React from 'react';
import CastListEntry from './CastListEntry.jsx';

const CastList = (props) => (
  <div>
    {
      props.casts.map((cast, key) => {
        return (
          <CastListEntry cast={cast} key={key} />
        )
      })
    }
  </div>
)

export default CastList;