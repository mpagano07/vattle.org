import React, { Component } from 'react';
import { CountryDropdown } from 'react-country-region-selector';
import { Button, Input } from 'react-materialize';
import 'react-credit-cards/lib/styles-compiled.css';
import CreditCardInput from 'react-credit-card-input';
import Cards from 'react-credit-cards'

import * as EmailValidator from 'email-validator';

export default class Registro extends Component {
    //aca va el formulario, el que puse es un demo para el post.
    constructor(props) {
        super(props);
        this.state = {
            tipo: 'Free',
            nombre: '',
            apellido: '',
            email: '',
            country: '',
            cnumber: '',
            cexpiry: '',
            ccvc: '',
        };
    }



    selectCountry(val) {
        this.setState({ country: val });
    }

    handleUserSubmit(event) {
        this.setState({
            [event.target.name]: event.target.value

        })
    }
    //datos de tarjeta
    payment() {
        if (this.state.tipo === 'premium') {
            return (<div>
                <CreditCardInput containerClassName="creditcard" inputClassName="inputCC"
                    cardNumberInputProps={{ onChange: e => this.handleUserSubmit(e), name: "cnumber" }}
                    cardExpiryInputProps={{ onChange: e => this.handleUserSubmit(e), name: "cexpiry" }}
                    cardNameInputProps={{ onChange: e => this.handleUserSubmit(e), name: "cname" }}
                    cardCVCInputProps={{ onChange: e => this.handleUserSubmit(e), name: "ccvc" }}
                />


                <Cards
                    number={this.state.cnumber}
                    name={this.state.nombre + " " + this.state.apellido }
                    expiry={this.state.cexpiry}
                    cvc={this.state.ccvc}
                />

            </div>);
        }
    }
    
    //POST

    checkInput() {
        let res = false;


        if ((this.state.nombre.length > 0) &&
            (this.state.apellido.length > 0) &&
            (this.state.email.length > 0) &&
            (this.state.country.length > 0)) {
            res = true;
        };

        if (this.state.tipo === "premium") {
            if ((this.state.cnumber.length > 0) &&
                (this.state.cexpiry.length > 0) &&
                (this.state.ccvc.length > 0)) {
            } else {
                res = false;
            }
        }

        if (!EmailValidator.validate(this.state.email)) {
            res = false;
        }
        return res;
    }
    //POST
    register() {

        if (this.checkInput()) { // checkInput()
            this.fetchData();
            console.log(this.state);
            setTimeout(() => {
                this.props.history.push('/users');
            }, 2000);
        } else {
            window.Materialize.toast('Datos Incorrectos', 1000);
        }

    }
    
    fetchData() {

        let userPost = {
            tipo: this.state.tipo,
            nombre: this.state.nombre +" "+ this.state.apellido,
            email: this.state.email,
            pais: this.state.country,
        };


        fetch('https://server-subscripcion-jsbrbnwqfv.now.sh/subscripciones', {
            method: 'post',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userPost, '\t')
        })
            .then(JSON.stringify(userPost, '\t'))
            .then(function (data) {
                console.log('Request succeeded with JSON response', data);
                window.Materialize.toast('Request succeeded with JSON response', 1000);
            })
            .catch(function (error) {
                console.log('Request failed', error);
                window.Materialize.toast('Request failed', 1000);
            });
    }

    render() {

        const { country } = this.state;

        return (

            <div id="signup">
                <form>

                    <Input s={12} type='select' label="Choose Your Settings" defaultValue='2' name="tipo" onChange={(event) => this.handleUserSubmit(event)}>
                        <option value='free'>Free</option>
                        <option value='premium'>Premium</option>
                    </Input>

                    <Input placeholder="Nombre" type="text" name="nombre" onChange={(event) => this.handleUserSubmit(event)} />
                    <Input placeholder="Apellido" type="text" validate name="apellido" onChange={(event) => this.handleUserSubmit(event)} />
                    <Input placeholder="Email" type="text" validate name="email" onChange={(event) => this.handleUserSubmit(event)} /><br />

                    <CountryDropdown
                        value={country}
                        onChange={(val) => this.selectCountry(val)}
                        style={{ display: 'block' }} />

                </form>

                <div className="ccDiv"> {this.payment()} </div>

                <Button className="slategray" textclassname="white" onClick={() => { this.register() }}>Subscribirse</Button>

            </div>

        );

    }
}