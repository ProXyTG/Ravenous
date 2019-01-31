import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

const BusinessList = ({businesses}) => {
    let renderBussinesses = (
      <div className="BusinessList">
      </div>
    );
    if (businesses === undefined) {
      renderBussinesses = (
        <div className="BusinessList">
        <h2>No results found.</h2>
        </div>
      );
    } else if (businesses.length === 0) {
      renderBussinesses = (
        <div className="BusinessList">
          <h2>No results found.</h2>
        </div>
      );
    } else {
      renderBussinesses = (
        <div className="BusinessList">
          {businesses.map(business => {
              return <Business key={business.id} business={business} />
          })};
        </div>
      );
    }
    return renderBussinesses;
};

export default BusinessList;
