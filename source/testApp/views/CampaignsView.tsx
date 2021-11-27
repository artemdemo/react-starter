import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { loadCampaigns } from '../model/campaigns/campaignsReq';
import { Campaigns, TCampaign } from '../containers/Campaigns/Campaigns';
import { useTranslation } from '../../hooks/useTranslation';
import { HttpContext } from '../../contexts/http/HttpContext';

export const CampaignsView: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [campaigns, setCampaigns] = useState<TCampaign[]>([]);
  const { t } = useTranslation();
  const { httpClient } = useContext(HttpContext);

  useEffect(() => {
    setIsLoading(true);
    loadCampaigns(httpClient)
      .then((campaigns) => setCampaigns(campaigns))
      .finally(() => setIsLoading(false));
  }, []);

  const renderLoading = () => {
    if (isLoading) {
      return <p>{t('loading')}</p>;
    }
    return null;
  };

  return (
    <>
      <p>
        <FontAwesomeIcon icon={faGlobe} />
        &nbsp; Campaigns View
      </p>
      {renderLoading()}
      <Campaigns items={campaigns} />
    </>
  );
};
