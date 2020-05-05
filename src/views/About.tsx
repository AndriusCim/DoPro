import React from "react";
import { Heading, Text } from "evergreen-ui";

const About: React.FC = () => {
  return (
    <>
      <div className="cs-d-flex cs-align-items-center cs-justify-content-center">
        <div style={{ width: 400 }}>
          <Heading size={900}>
            <div className="cs-color-green">
              COVID-19 data and global information
            </div>
          </Heading>
          <div className="cs-mt-lg">
            <Text marginTop={10} size={500}>
              Since the beginning of the pandemic we have provided individual
              data of daily updates of confirmed cases and deaths from the Jonh
              Hopkins University database. We will continue to provide them here
              for consistency.
            </Text>
          </div>
        </div>
        <img height={400} src="src/styles/distance.png" alt="" />
      </div>
      <div className="cs-d-flex cs-align-items-center cs-justify-content-center">
        <img height={400} src="src/styles/medical.png" alt="" />
        <div style={{ width: 400 }}>
          <Heading size={900}>
            <div className="cs-color-green">Open for everyone</div>
          </Heading>
          <div className="cs-mt-lg">
            <Text marginTop={10} size={500}>
              Many are working hard to provide more data in better ways, but we
              have a long way to go. We are firm believers in open data. (There
              are, of course, limitations to open data because of privacy or
              security, but that's a discussion for another time). But open data
              is not simply about putting more data on the Internet. It's not
              just only about posting files and telling people where to find
              them.
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
