import React from 'react';
import { loadCampaigns } from '../../model/campaigns/campaignsReq';
import Icon from '../../components/Icon/Icon';
import Campaigns from '../../components/Campaigns/Campaigns';

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
                <Campaigns
                    items={this.state.campaigns}
                />
            </React.Fragment>
        );
    }
}

export default CampaignsView;
