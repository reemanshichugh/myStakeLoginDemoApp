import React, { Component } from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';


export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Card className="GridcolSize2 newRegisterPage disabled-card">
            <CardBody>
                <Card className="dashboardPortfolioCard">
                    <CardHeader>DOCUMENTS</CardHeader>
                    <CardBody>
                        <div className="MainNewRegister">
                            <div className="iconregister">
                                <i className="fa fa-pencil-square-o fa-2x icon-newRegisterPage" aria-hidden="true"></i>
                            </div>
                            <div className="newRegisterType clearfix">
                                COMING SOON
                      </div>
                        </div>
                    </CardBody>
                </Card>
            </CardBody>
        </Card>
        );
  }
}
