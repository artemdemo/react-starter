import * as campaignsConst from './campaignsConst';

export function loadCampaigns() {
    return {
        type: campaignsConst.LOAD_CAMPAIGNS,
    };
}

export function campaignsLoaded(data) {
    return {
        type: campaignsConst.CAMPAIGNS_LOADED,
        data,
    };
}

export function campaignsLoadingError(err = true) {
    return {
        type: campaignsConst.CAMPAIGNS_LOADING_ERROR,
        err,
    };
}
