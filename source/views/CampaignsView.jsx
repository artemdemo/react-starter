import React from 'react';
import { loadCampaigns } from '../model/campaigns/campaignsReq';
import Icon from '../components/Icon/Icon';

class CampaignsView extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            campaigns: [],
        };
    }

    componentDidMount() {
        this.setState({ loading: true });
        loadCampaigns()
            .then(campaigns => this.setState({ campaigns }))
            .finally(() => this.setState({ loading: false }));
    }

    renderLoading() {
        if (this.state.loading) {
            return (
                <p>
                    Loading...
                </p>
            );
        }
        return null;
    }

    render() {
        return (
            <React.Fragment>
                <p>
                    <Icon name='globe' />
                    &nbsp;
                    Campaigns View
                </p>
                {this.renderLoading()}
                <div className='row'>
                    {this.state.campaigns.map((item, index) => (
                        <div
                            className='col-6 col-md-4'
                            key={`campaigns-view-item-${index}`}
                        >
                            <h3>{item.name}</h3>
                            <img
                                src={item.picture}
                                alt={item.name}
                            />
                            <p>
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        );
    }
}

export default CampaignsView;
