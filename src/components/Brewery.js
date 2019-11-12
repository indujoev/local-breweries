import React from 'react';
import BreweryDetail from './BreweryDetail';

class Brewery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trExpand: false
        };
        this.toggle = this.toggle.bind(this);

    }

    render() {
        let counter = this.props.breweryProps["counter"];
        let breweryId = this.props.breweryProps["brewery"]["id"];
        let breweryName = this.props.breweryProps["brewery"]["name"];
        let breweryType = this.props.breweryProps["brewery"]["brewery_type"];
        let breweryAddress = this.props.breweryProps["brewery"]["street"]+ ", " +
                             this.props.breweryProps["brewery"]["city"]+ ", " +
                             this.props.breweryProps["brewery"]["state"]+ " " +
                             this.props.breweryProps["brewery"]["postal_code"];
        let breweryWebsiteURL = this.props.breweryProps["brewery"]["website_url"];

        return (
            this.state.trExpand?(
                <tr onClick = {this.toggle}>
                    <td colSpan="5">
                        <BreweryDetail breweryId={breweryId}/>
                    </td>
                </tr>

            ):
            (
            <tr key= {counter} onClick = {this.toggle}>
                <td>{breweryName}</td>
                <td>{breweryType}</td>
                <td>{breweryAddress}</td>
                <td><a href={breweryWebsiteURL}>{breweryWebsiteURL}</a></td>
            </tr>
            )

        );

    }
    toggle() {
        this.setState({trExpand: !this.state.trExpand});
    }
}

export default Brewery;