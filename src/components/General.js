import React, { Component } from 'react';

class General extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
            name: "name",
            email: "email",
            phone: "phone",
            edit: true,
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (event) => {
        
        let toChange = event.target.name;
        
        this.setState({
            [toChange]: event.target.value
        })
        console.log(event.target)
        event.preventDefault();
    }

    onSubmit = (event) => {
        
        event.preventDefault();
        this.setState({
            edit: !this.state.edit
        });
    }
    render() {        
        if(this.state.edit) {                    
            return (
                <div>
                    <form onSubmit={this.onSubmit}>
                        <div class="form-floating">
                            <label for="name">Name:</label>                            
                            <input type="text"  class="form-control" id="name" name="name" value={this.state.name} onChange={this.onChange} />
                        </div>
                        <div class="form-group">
                            <label for="email">Email:</label>                            
                            <input type="email" class="form-control" id="email" name="email" value={this.state.email} onChange={this.onChange} />
                        </div>
                        <div class="form-group">
                            <label for="phone"> Phone: (format: 123-456-7890) </label>                            
                            <input type="tel" class="form-control" id="phone" name="phone"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                value={this.state.phone} onChange={this.onChange} />
                        </div>                            
                        <input type="submit" value="submit" class="btn btn-primary"/>                        
                    </form>                                
                </div>
            )
        } else {
            return (
                <div>
                    <h3>Name: {this.state.name}</h3>
                    <h3>Email: {this.state.email}</h3>
                    <h3>Phone: {this.state.phone}</h3>
                    <form onSubmit={this.onSubmit}>
                        <input type="submit" value="Edit" />
                    </form>
                </div>
            )
        }        
    }
}

export default General;