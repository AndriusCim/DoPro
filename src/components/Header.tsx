import React from "react";
import { Link } from "react-router-dom";
import { Icon, Heading, Button } from "evergreen-ui";

const Header: React.FC = () => {
  return (
    <>
      <div className="header cs-d-flex">
        <Icon icon="tint" color="47B881" size={30} />
        <Heading size={500}>CORONA STATS</Heading>
        <Link className="cs-text-decoration-none" to="/">
          <Button className="cs-ml-lg" appearance="minimal" intent="success">
            Home
          </Button>
        </Link>
        <Link className="cs-text-decoration-none" to="/contact">
          <Button appearance="minimal" intent="success">
            Contact
          </Button>
        </Link>
        <Link className="cs-text-decoration-none" to="/about">
          <Button appearance="minimal" intent="success">
            About
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Header;
