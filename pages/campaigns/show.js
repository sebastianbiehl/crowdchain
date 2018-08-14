import React, { Component } from "react";
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";
import ContributeForm from "../../components/ContributeForm";

class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);
    const summary = await campaign.methods.getSummary().call();

    return {
      minContribution: {
        value: summary[0],
        label: "Minimum Contribution",
        meta: "The minimum amount to enter the campaign as a contributor."
      },
      balance: {
        value: summary[1],
        label: "Campaign balance",
        meta: "The total amount of money currently available for this campaign."
      },
      requestsCount: {
        value: summary[2],
        label: "Spending Requests",
        meta: "Requests by the manager to spend money from the campaign."
      },
      approversCount: {
        value: summary[3],
        label: "Contributors",
        meta: "The total amount of contributors to this campaign."
      },
      manager: {
        value: summary[4],
        label: "Manager",
        meta:
          "The manager created this campaign and can issue spending requests."
      },
      address: props.query.address
    };
  }

  createCards = () => {
    const propsObj = { ...this.props };
    const labels = Object.keys(propsObj);
    const cards = labels.map((name, index) => {
      let classCol = "col-lg-6";
      if (name === "manager") {
        classCol = "mx-auto";
      }
      if (name !== "url" && name !== "address") {
        return (
          <div key={name + index} className={classCol}>
            <div className="card border-primary mb-3">
              <div className="card-body">
                <div className="card-text text-center">
                  <h5 className="badge badge-primary p-2">
                    {this.props[name].value}
                  </h5>
                  <p className="text-muted">{this.props[name].label}</p>
                  <small>{this.props[name].meta}</small>
                </div>
              </div>
            </div>
          </div>
        );
      }
    });
    return cards;
  };

  render() {
    return (
      <Layout>
        <h1 className="h2">Campaign Details</h1>
        <div className="row mt-5">
          <div className="col-lg-8">
            <div className="row">{this.createCards()}</div>
          </div>
          <div className="col-lg-4">
            <ContributeForm address={this.props.address} />
            <h5>New spending request?</h5>
            <button className="btn btn-primary mt-3 btn-block">
              View Requests
            </button>
          </div>
        </div>
      </Layout>
    );
  }
}

export default CampaignShow;
