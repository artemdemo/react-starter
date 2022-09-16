import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { loadCampaigns } from '../model/campaigns/campaignsReq';
import { Campaigns, TCampaign } from '../containers/Campaigns/Campaigns';
import { useTranslation } from '../../hooks/useTranslation';
import { HttpContext } from '../../contexts/http/HttpContext';

export const CampaignsView: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [campaigns, setCampaigns] = useState<TCampaign[]>([]);
  const { t } = useTranslation();
  const { httpClient } = useContext(HttpContext);

  useEffect(() => {
    loadCampaigns(httpClient)
      .then((campaigns) => setCampaigns(campaigns))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <p>
        <FontAwesomeIcon icon={faGlobe} />
        &nbsp; Campaigns View
      </p>
      {isLoading ? <p>{t('loading')}</p> : <Campaigns items={campaigns} />}
    </>
  );
};
