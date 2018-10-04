import React, { Component } from 'react';
import { Col, Card, CardTitle, Button } from 'react-materialize';

export default class Home extends Component {

    nextPath(path) {
        this.props.history.push(path);
    }

    render() {

        return (

            <div class="home">
                <Col m={4} s={4} class="Card">
                    <Card horizontal header={<CardTitle image="https://bnetcmsus-a.akamaihd.net/cms/blog_header/po/POLUHZRX4GVM1534196982929.jpg"></CardTitle>}>
                        <h2>World of Warcraft: Battle for Azeroth</h2>
                        <p>Azeroth paid a terrible price to end the apocalyptic march of the Legion's crusade
                            but even as the world's wounds are tended, it is the shattered trust between the Alliance and Horde
                            that may prove hardest to mend.
      </p>
                        <Button className="slategray" onClick={() => this.nextPath('/registro')}> PLAY NOW! </Button>
                    </Card>
                </Col>

                <Col m={4} s={4} class="Card2">
                    <Card horizontal header={<CardTitle image="https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTc6j8bTV3N2m4CBQKAT1cS6lUOQX.ngdSgiLRMdAu32DtzDJKUuzN1aOTJPFi7RvCaG_JZJBF7TU37nEBObS0xnS6oexMnX_VmFbdu1_AVM3gPqcljwPx9mL3nBEEGiHRvwz1VPBNPlVPoJ.39_fHs1EepEJunV8KgSqlTbNGimJs-&h=1080&w=1920&format=jpg"></CardTitle>}>
                        <h2>Overwatch</h2>
                        <p>Fight For the Future
                              Soldiers. Scientists. Adventurers. Oddities.
                          In a time of global crisis, an international task force of heroes banded together to
                           restore peace to a war-torn world: OVERWATCH.
                          Overwatch ended the crisis, and helped maintain peace in the decades that followed, inspiring an era of exploration, innovation, and discovery.
      </p>
                        <Button className="slategray" onClick={() => this.nextPath('/registro')}> PLAY NOW! </Button>
                    </Card>
                </Col>
            </div>
        );
    }
}