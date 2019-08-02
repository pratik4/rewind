import React from 'react'
import bg from './banner.png'
import axios from 'axios'
import AWS from 'aws-sdk'

const formbg = {
    backgroundImage: `url(${bg})`,
    backgroundPosition: `center`,
    backgroundSize:`cover`,
    position:`relative`,
}





function SolutionBeleive() {
    return (
        <section>
            <div className="hero">
                <div className="hero-body">
                    <div className="container">
                        <div className="title is-spaced has-text-centered">We Believe</div>
                        <div className="subtitle has-text-centered">One Man's Trash is another man's treasure</div>
                        <div className="content has-text-centered">
                            <p>60% of the trash is recyclable, of which most of the trash is dumped into landfills, or burned or released in the ocean. We aim to revive our age old tradition of circular thinking and embrace the value of trash. using our innovative technology and network of kabadiwalas we recover post-consumer products make it available to our recyclers and manufacturers to convert it into new product.  </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function SolutionWork() {
    return (
        <section>
            <div className="hero">
                <div className="hero-body">
                    <div className="tile">
                        <div className="tile is-vertical">
                            <div className="tile">
                                <div className="tile is-parent is-vertical is-4">
                                    <div className="tile is-child">
                                        <div className="title is-4 is-spaced has-text-centered"> You Sell</div>
                                        <div className="subtitle is-6 has-text-centered"> Use rewind to schedule your pickups to sell things you wish to throw. We provide all the tools to accurately weight and calcualte the prices like a pro. </div>
                                    </div>
                                    <div className="tile is-child">
                                        <div className="title is-4 is-spaced has-text-centered"> We Buy </div>
                                        <div className="subtitle is-6 has-text-centered"> Demand a pickup request as per your needs. No more going out and selling your trash. Now you can manage with a few taps.Super Flexible. Super Convenient. </div>
                                    </div>
                                    <div className="tile is-child">
                                        <div className="title is-4 is-spaced has-text-centered">They Recycle</div>
                                        <div className="subtitle is-6 has-text-centered">In India 70% of the trash which is thrown in the dustbins end up in landfills. They shouldn't be thrown away at the first place. They can be reused and recycled. Our platform enables you to sell whatever you with to throw in the garbage.  </div>
                                    </div>
                                </div>
                                <div className="tile is-parent">
                                    <div className="tile is-child">
                                        <figure className="image">
                                            <img style={{margin:`40px`}} src="http://getrewind.in/asset/how%20we%20work.png" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


class SolutionForm extends React.Component {
    state = {
        sellername:"",
        number:"",
        address:"",
    }


    sendEmailNotif = (formdata) => {
        var sns = new AWS.SNS()
        console.log('sendEmailNotif', formdata)
        console.log(formdata.Pickuprequest.sellername)
        var params = {
            //Message: 'Hello topic', /* required */
            Message: `Name: ${formdata.Pickuprequest.sellername} \nContact: ${formdata.Pickuprequest.number} \naddress: ${formdata.Pickuprequest.address}`,
            Subject: 'Rewind: Pickup Request',
            TopicArn: 'arn:aws:sns:us-east-1:884980640203:pickup_request'
        };

        sns.publish(params, function(err, data) {
            if (err) console.log(err, err.stack); // an error occurred
            else     console.log(data);           // successful response
        });


    }
    onSubmit = (e) => {
        e.preventDefault();
        var formdata = {
            "Pickuprequest":{
                "sellername":this.state.sellername,
                "number":this.state.number,
                "address":this.state.address,
            }

        }
        console.log('onsubmit', formdata)

        console.log(JSON.stringify(formdata))
            axios({
                method: 'post',
                url: 'https://7vatf7gmu5.execute-api.ap-southeast-1.amazonaws.com/dev/pickup',
                data: JSON.stringify(formdata)
              })
              .then((response) => {
                  this.sendEmailNotif(formdata)
                  console.log(response.data)
              })
              .catch((error) => {
                  console.log(error)
              })
    }
    nameState = (e) => {
        this.setState({
            sellername: e.target.value
        })
    }



    contactState = (e) => {
        this.setState({
            number: e.target.value
        })
}

    addressState = (e) => {
        this.setState({
            address: e.target.value
        })
    }

render() {
    AWS.config.region = 'us-east-1';
        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                    IdentityPoolId: 'us-east-1:ec6cf5f8-b07a-496e-885f-03f187e3bc9a',
        });

    return (
        <section className="hero is-primary is-fullheight-with-navbar" style={formbg}>
            <div className="hero-body">
                <div className="container">
                    <div className="title has-text-centered is-vcentered" >
                        We Collect Whatever you wish to throw
                    </div>

                    <div className="columns">
                    <div className="column is-4-tablet is-4-desktop is-4-widescreen solution-form">
                    <div class="field">
                      <div class="control has-icons-left">
                        <input class="input is-medium solution-form-input" style={{background:`transparent`}} onChange={this.nameState} type="text" placeholder="Your Name" />
                        <span class="icon is-small is-left">
                          <i class="fa fa-user"></i>
                        </span>
                      </div>
                    </div>
                      <div className="field">
                          <p className="control has-icons-left">
                              <input className="input is-medium  solution-form-input" style={{background:`transparent`}} onChange={this.contactState} type="tel" placeholder="Contact Number"/>
                              <span className="icon is-small is-left">
                                  <i className="fa fa-phone"></i>
                              </span>
                          </p>

                      </div>

                      <div className="field">
                          <p className="control has-icons-left">
                              <input className="input is-medium  solution-form-input" style={{background:`transparent`}} onChange={this.addressState} type="text" placeholder="Enter Your Address"/>
                              <span className="icon is-small is-left">
                                  <i className="fa fa-map-marker"></i>
                              </span>
                          </p>
                      </div>
                    <div className="field ">
                        <div className="control" style={{textAlign:`center`}}>
                            <button onClick={this.onSubmit} className="button is-primary is-fullwidth is-medium"> Book Request </button>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
}

export function SolutionRewind() {
    return (
        <section>
        <div className="hero">
        <div className="hero-body">
        <div className="container">
            <div className="tile">
                <div className="tile is-4 is-parent">
                    <div className="card">
                        <div className="card-image is-flex" style={{justifyContent:`center`}}>
                            <figure className="image is-128x128">
                                <img src="http://getrewind.in/asset/problem.svg"/>
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="content has-text-centered">
                                Use rewind to schedule your pickups to sell things you wish to throw. We provide all the tools to accurately weight and calcualte the prices like a pro.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tile is-4 is-parent">
                    <div className="card">
                        <div className="card-image is-flex" style={{justifyContent:`center`}}>
                            <figure className="image is-128x128">
                                <img src="http://getrewind.in/asset/act.svg"/>
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="content has-text-centered">
                                We buy anything. From newspapers, cardboards,plastics to furnitures and electronics. We buy thngs from you and rewind its journey as a raw material.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tile is-4 is-parent">
                    <div className="card is-spaced">
                        <div className="card-image is-flex" style={{justifyContent:`center`}}>
                            <figure className="image is-128x128">
                                <img src="http://getrewind.in/asset/learn.svg"/>
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="content has-text-centered">
                                Whatever we buy, we segregate it and send it to our recyclers who use it as a raw material to manufacture a new product.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
       </section>
    )
}

export default function Solution() {

    return (
        <>
        <SolutionForm />
        <section>
          <div className="hero">
            <div className="hero-body">
              <div className="container">
                <div className="trash-Problem">
                  <div className="title has-text-centered is-spaced">
                    The Trash Problem
                  </div>
                  <div className="subtitle has-text-centered">
                    Trash is becoming larger and larger problem for us and for the environment.
                    As we continue to waste more and more, the landfills are growing taller and taller and are reaching the height of skyscrapers.
                    The toxic gases from the landfills significantly impacts our health as well as increase pollution.
                  </div>
                  <div className="has-text-centered">
                      <a href="/why-should-we-recycle" className="button is-primary is-medium is-rounded">
                        Why Should We Recycle
                      </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <SolutionRewind />
        <SolutionBeleive />

        <SolutionWork />
    </>

    )

}
