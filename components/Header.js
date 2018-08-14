import React from "react";
import { Link } from "../routes";

export default () => (
  <nav className="navbar navbar-expand sm navbar-light bg-light mb-3">
    <div className="container">
      <Link route="/">
        <a href="" className="navbar-brand">
          CrowdChain
        </a>
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link route="/campaigns">
            <a href="" className="nav-link">
              Campaigns
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link route="/campaigns/new">
            <a href="" className="nav-link">
              +
            </a>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);
