import React, { Component } from "react";
import factory from "../ethereum/factory";
import Layout from "../components/Layout";
import { Link } from "../routes";

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns };
  }

  renderCampaigns = () => {
    const items = this.props.campaigns.map(address => (
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">{address}</h5>
          <Link className="card-text" route={`/campaigns/${address}`}>
            <a>
              <button className="btn btn-sm btn-outline-primary">
                View Campaign
              </button>
            </a>
          </Link>
        </div>
      </div>
    ));

    return items;
  };

  render() {
    return (
      <Layout>
        <div>
          <h1 className="mb-3">Open Campaigns</h1>
          <div className="row">
            <div className="col-lg-8">{this.renderCampaigns()}</div>
            <div className="col-lg-4">
              <Link route="/campaigns/new">
                <a>
                  <button className="btn btn-primary btn-block" type="button">
                    <i class="fas fa-plus-circle mr-2" />
                    Create Campaign
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default CampaignIndex;
