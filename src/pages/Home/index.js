import React from 'react';

const ContentLayout = (props) => {
  const { active, children } = props;
  return (
    <div className="card-main relative">
      {children}
    </div>
  );
};

export default ContentLayout;