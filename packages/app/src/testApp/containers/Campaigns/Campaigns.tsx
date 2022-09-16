import React from 'react';

export type TCampaign = {
  name: string;
  picture: string;
  description: string;
};

type TProps = {
  items?: TCampaign[];
};

export const Campaigns: React.FC<TProps> = (props) => {
  const items = props.items || [];
  return (
    <div className="row" data-testid="campaigns-list">
      {items.map((item) => (
        <div
          className="col-6 col-md-4"
          key={`campaigns-item ${item.name}`}
          data-testid="single-campaign"
        >
          <h3>{item.name}</h3>
          <img src={item.picture} alt={item.name} />
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};
