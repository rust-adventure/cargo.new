import { h } from "preact";

export default (props) => (
  <div>
    <h1>Deploy a Serverless Function to Netlify!</h1>
    <p>Cross compiles to musl with Netlify's auto-build support.</p>
    <a href="https://app.netlify.com/start/deploy?repository=https://github.com/rust-adventure/netlify-serverless-example-small">
      <img src="https://www.netlify.com/img/deploy/button.svg" />
    </a>
  </div>
);
