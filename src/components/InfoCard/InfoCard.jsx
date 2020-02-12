import React from 'react';
import PropTypes from 'prop-types';
import './InfoCard.css';

function InfoCard({
  MSRP,
  vehicleName,
  dealerName,
  dealerPhoneNumber,
  dealerRating,
}) {
  return (
    <div className="infoCard__container">
      <h2>MSRP</h2>
      <p>{MSRP}</p>
      <h2>Vehicle name</h2>
      <p>{vehicleName}</p>
      <h2>Dealer name</h2>
      <p>{dealerName}</p>
      <h2>Dealer phone number</h2>
      <p>{dealerPhoneNumber}</p>
      <h2>Dealer raiting</h2>
      <p>{dealerRating}</p>
    </div>
  );
}

InfoCard.propTypes = {
  MSRP: PropTypes.string,
  vehicleName: PropTypes.string,
  dealerName: PropTypes.string,
  dealerPhoneNumber: PropTypes.string,
  dealerRating: PropTypes.string,
};

export default InfoCard;
