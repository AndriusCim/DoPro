import React from "react";
import { Icon, Heading, Button } from "evergreen-ui";

const Header: React.FC = () => {
  return (
    <>
      <div className="TopBar cs-d-flex">
        <Icon icon="tint" color="47B881" size={30} />
        <Heading size={500}>CORONA STATS</Heading>
        <Button className="cs-ml-lg" appearance="minimal" intent="success">
          Home
        </Button>
        <Button appearance="minimal" intent="success">
          Contact
        </Button>
        <Button appearance="minimal" intent="success">
          About
        </Button>
      </div>
    </>
  );
};

export default Header;
