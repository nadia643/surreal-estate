import React, { Component } from 'react';
import '../styles/add-property.css';
import axios from 'axios';
import Alert from '../components/Alert';

class AddPropertyPage extends Component {
  state = {
    fields: {
      title: '',
      type: 'Flat',
      bedrooms: '',
      bathrooms: '',
      price: '',
      city: 'Manchester',
      email: '',
    },
  };

  handleAddProperty = event => {
    event.preventDefault();
    this.setState({
      alertMessage: '',
      isSuccess: false,
      isError: false,
    });

    axios.post('http://localhost:3000/api/v1/PropertyListing', {
      title: this.state.fields.title,
      type: this.state.fields.type,
      bedrooms: this.state.fields.bedrooms,
      bathrooms: this.state.fields.bathrooms,
      price: this.state.fields.price,
      city: this.state.fields.city,
      email: this.state.fields.email,
      alertMessage: '',
      isSuccess: false,
      isError: false,
    })
      .then(() => this.setState({
        isSuccess: true,
        alertMessage: 'Property added.',
      }))
      .catch(() => {
        this.setState({
          alertMessage: 'Server error. Please try again later.',
          isError: true,
        });
      });
  };

  render() {
    return (
      <div>
        {this.state.isSuccess && <Alert message={this.state.alertMessage} success />}
        {this.state.isError && <Alert message={this.state.alertMessage} />}
        <form onSubmit={this.handleAddProperty}>
          <div className="title">
            <input
              name="title"
              value={this.state.fields.title}
              onChange={this.handleFieldChange}
              placeholder="title"
            />
          </div>
          <div className="type">
            <select
              name="type"
              value={this.state.fields.type}
              onChange={this.handleFieldChange}
              placeholder="type"
            >
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </div>
          <div className="bedrooms">
            {' '}
            <input
              name="bedrooms"
              value={this.state.fields.bedrooms}
              onChange={this.handleFieldChange}
              placeholder="bedrooms"
            />{' '}
          </div>
          <div className="bathrooms">
            {' '}
            <input
              name="bathrooms"
              value={this.state.fields.bathrooms}
              onChange={this.handleFieldChange}
              placeholder="bathrooms"
            />{' '}
          </div>
          <div className="price">
            {' '}
            <input
              name="price"
              value={this.state.fields.price}
              onChange={this.handleFieldChange}
              placeholder="price"
            />{' '}
          </div>
          <div className="city">
            {' '}
            <select
              name="city"
              value={this.state.fields.city}
              onChange={this.handleFieldChange}
              placeholder="city"
            >
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </div>
          <div className="email">
            {' '}
            <input
              name="email"
              value={this.state.fields.email}
              onChange={this.handleFieldChange}
              placeholder="email"
            />{' '}
          </div>
          <div className="button">
            {' '}
            <button type="submit">Add</button>{' '}
          </div>
        </form>
      </div>
    );
  }

  handleFieldChange = event => {
    this.setState({
      fields: {
        ...this.state.fields,
        [event.target.name]: event.target.value,
      },
    });
  };
}

export default AddPropertyPage;
