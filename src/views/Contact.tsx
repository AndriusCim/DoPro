import React from "react";
import { Heading, Pane, Textarea, Label, TextInput } from "evergreen-ui";

const Contact: React.FC = () => {
  return (
    <>
      <div className="cs-d-flex cs-align-items-center cs-justify-content-center">
        <Heading size={900}>
          <div style={{ margin: 80 }} className="cs-color-green">
            Have some questions?
          </div>
        </Heading>
      </div>
      <div className="cs-d-flex cs-align-items-center cs-justify-content-center">
        <img height={300} src="src/styles/mail.png" alt="" />
        <div style={{ width: 400 }}>
          <Pane>
            <Label marginBottom={4} display="block">
              Your name
            </Label>
            <TextInput required width="100%" />

            <Label marginBottom={4} display="block">
              Your email adress
            </Label>
            <TextInput required width="100%" />

            <Label marginBottom={4} display="block">
              Your message
            </Label>
            <Textarea required />
          </Pane>
        </div>
      </div>
    </>
  );
};

export default Contact;
