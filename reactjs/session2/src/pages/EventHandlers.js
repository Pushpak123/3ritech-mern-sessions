import React from 'react';
import User from './User';

class EventHandlers extends React.Component {
    render() {
        return(
        <div className="row">
            <div className="col-sm-12 main__content">
                <h3>Main Content Area :: Event Handlers</h3>

                <hr />

                {/* users */}
                <User />

                <User />

                <User />
            </div>
        </div>
        );
    }
}

export default EventHandlers;