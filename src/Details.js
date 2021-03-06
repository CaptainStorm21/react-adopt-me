import React, { Component } from "react";
import pet from "@frontendmasters/pet";
import Carousel from './Carousel';
import ErrorBoundry from './ErrorBoundry'

class Details extends Component {
  state = { loading: true };
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       loading: true
  //     };
  //   }
  componentDidMount() {
    //throw new Error ("lol");
    //use it for ajax calls
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city},
                   ${animal.contact.address.state} `,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false
      });
    }, console.error);
  }
  render() {
    if (this.state.loading) {
      return <h1>loading...</h1>;
    }

    const { animal, breed, location, description, name, media } = this.state;

    return (
      <div className="details ">
          <Carousel media = {media}/>
        <div>
          <h1> {name} </h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <p> {description} </p>
          <button> Adopt {name}</button>
        </div>
      </div>
    );
  }
}

export default function DetailsWithErrorBoundry (props) {
    return (
        <ErrorBoundry>
            <Details {...props}/>
        </ErrorBoundry>
    )
}

// import React from 'react'

// const Details = () => {
//     return (
//         <div>
//             <h1>Hello world</h1>
//         </div>
//     )
// }

// export default Details;
