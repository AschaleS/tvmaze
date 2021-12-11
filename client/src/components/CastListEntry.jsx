import React from 'react';
import CastDetail from './CastDetail.jsx';
import { Redirect } from 'react-router';


class CastListEntry extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <div>
                <span>
                    <a onClick={this.changeClass} href={this.props.cast.person.url} > {this.props.cast.person.name}</a>
                </span>

            </div>
        )
    }

}

export default CastListEntry;
