import React from 'react';
import { connect } from 'react-redux';
import { loadCampaigns } from '../model/campaigns/campaignsActions';
import Icon from '../components/Icon/Icon';

class CampaignsView extends React.PureComponent {
    componentDidMount() {
        const { loadCampaigns } = this.props;
        loadCampaigns();
    }

    render() {
        const { campaigns } = this.props;
        return (
            <React.Fragment>
                <p>
                    <Icon name='globe' />
                    &nbsp;
                    Campaigns View
                </p>
                <div className='row'>
                    {campaigns.data.map((item, index) => (
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

export default connect(
    state => ({
        campaigns: state.campaigns,
    }), {
        loadCampaigns,
    },
)(CampaignsView);
