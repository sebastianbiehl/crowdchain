import React, { Component } from "react";
import Campaign from "../ethereum/campaign";
import web3 from "../ethereum/web3";
import Router from "next/router";

class ContributeForm extends Component {
  state = {
    contribution: "",
    error: "",
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();
    const campaign = Campaign(this.props.address);
    try {
      this.setState({ loading: true, error: "" });
      const accounts = await web3.eth.getAccounts();
      await campaign.methods
        .contribute()
        .send({ from: accounts[0], value: this.state.contribution });
      this.setState({ loading: false });
      Router.push(`/campaigns/${campaign.options.address}`);
    } catch (err) {
      this.setState({ loading: false, error: err.message });
    }
  };

  render() {
    let errorMessage, btnCreate;
    if (this.state.error) {
      errorMessage = (
        <div className="alert alert-danger mt-3 pb-1">
          <strong>Oops!</strong>
          <p>{this.state.error}</p>
        </div>
      );
    }

    btnCreate = (
      <button className="input-control btn btn-primary btn-block mb-5">
        Contribute!
      </button>
    );
    if (this.state.loading) {
      btnCreate = (
        <button className="input-control btn btn-primary disabled mb-5">
          <i className="fa fa-spinner fa-spin " /> Waiting for response from
          Ethereum Network
        </button>
      );
    }

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h5 className="mb-3">Contribute to this campaign!</h5>
          <div className="input-group">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter amount"
              value={this.state.contribution}
              onChange={event =>
                this.setState({ contribution: event.target.value })
              }
            />
            <div className="input-group-append">
              <span className="input-group-text">wei</span>
            </div>
          </div>
          {btnCreate}
        </form>
        {errorMessage}
      </div>
    );
  }
}

export default ContributeForm;
