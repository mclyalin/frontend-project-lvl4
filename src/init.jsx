import React from 'react';

export default () => {
  const p = <p className="card-list">It works!</p>;
  const h5 = <h5 className="card-title">Project frontend l4 boilerplate</h5>;
  const cardBody = (
    <div className="card-body">
      {h5}
      {p}
    </div>
  );
  const card = <div className="card text-center">{cardBody}</div>;

  return card;
};
