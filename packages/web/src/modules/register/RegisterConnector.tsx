import * as React from "react";
import { RegisterController } from "@homeaway/controller";
import { RegisterView } from "./ui/RegisterView";

export class RegisterConnector extends React.PureComponent {
  dummySubmit = async (values: any) => {
    console.log(values);
    return null;
  };

  render() {
    return (
      <React.Fragment>
        <RegisterController />
        <RegisterView submit={this.dummySubmit} />;
      </React.Fragment>
    );
  }
}
