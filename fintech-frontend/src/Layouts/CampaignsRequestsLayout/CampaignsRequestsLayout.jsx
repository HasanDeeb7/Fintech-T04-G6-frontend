import React from "react";
import CampaignsRequests from "../../Components/CampaignsRequests/CampaignsRequests";

function CampaignsRequestsLayout() {
  return (
    <div>
      <>
        <h1 style={{ marginBottom: " 30px" }}>All Requests</h1>
        <CampaignsRequests />
      </>
    </div>
  );
}

export default CampaignsRequestsLayout;