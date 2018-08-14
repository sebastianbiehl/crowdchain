import React, { Component } from "react";

import { Router } from "../../routes";
import factory from "../../ethereum/factory";
import Layout from "../../components/Layout";
import web3 from "../../ethereum/web3";

class CampaignNew extends Component {
  state = {
    minContribution: "",
    error: "",
    loading: false,
    created: false
  };

  onSubmit = async event => {
    event.preventDefault();

    try {
      this.setState({ loading: true, error: "" });
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createCampaign(this.state.minContribution)
        .send({ from: accounts[0] });
      this.setState({ created: true, loading: false });
    } catch (err) {
      this.setState({ loading: false, error: err.message, created: false });
    }
  };

  render() {
    let errorMessage, btnCreate, createMessage;
    if (this.state.error) {
      errorMessage = (
        <div className="alert alert-danger mt-3 pb-1">
          <strong>Oops!</strong>
          <p>{this.state.error}</p>
        </div>
      );
    }

    if (this.state.created) {
      createMessage = (
        <div className="alert alert-success mt-3 pb-1">
          <strong>Success!</strong>
          <p>Your contract was successfully deployed to the Rinkeby Testnet.</p>
        </div>
      );
    }

    btnCreate = (
      <button className="btn input-control btn-primary btn-block">
        Create
      </button>
    );
    if (this.state.loading) {
      btnCreate = (
        <button className="input-control btn btn-primary disabled btn-block">
          <i className="fa fa-spinner fa-spin " /> Waiting for response from
          Ethereum Network
        </button>
      );
    }

    return (
      <Layout>
        <form onSubmit={this.onSubmit}>
          <h1 className="h2 text-center">Create a new Campaign</h1>
          <div className="form-group">
            <label htmlFor="contribution" className="font-weight-bold">
              Minimum contribution
            </label>
            <div className="input-group">
              <input
                type="text"
                placeholder="Enter amount"
                id="contribution"
                className="form-control"
                value={this.state.minContribution}
                onChange={event =>
                  this.setState({ minContribution: event.target.value })
                }
              />
              <div className="input-group-append">
                <span className="input-group-text">wei</span>
              </div>
            </div>
          </div>
          {btnCreate}
        </form>
        {errorMessage}
        {createMessage}
      </Layout>
    );
  }
}

export default CampaignNew;
