import React, { Component } from 'react';

class SingleEducation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            school: {
                name: this.props.name,
                degree: this.props.degree,
                major: this.props.major,
                year: this.props.year,
                id: this.props.id
            },
            edit: false
        }

        this.isEdit = this.isEdit.bind(this);
        this.submitEduEdit = this.submitEduEdit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    isEdit = (event) => {
        event.preventDefault();
        this.setState({
            edit: !this.state.edit
        })
    }

    submitEduEdit = (event) => {
        event.preventDefault();
        let edittedInfo = this.state.school;        
        this.props.onEdit(edittedInfo);
        this.setState({
            edit: !this.state.edit
        })
        
        // console.log(event.target);
    }

    onChange = (event) => {
        event.preventDefault();
        let toChange = event.target.name;
        
        this.setState({
            school: {
                ...this.state.school,
               [toChange]: event.target.value
            }
        })
    }

    render() {
        
        let edu;
        if(!this.state.edit) {
            edu = (
                <div>
                    <h3>{this.state.school.name}</h3>
                    <h3>{this.state.school.degree}</h3>
                    <h3>{this.state.school.major}</h3>
                    <h3>{this.state.school.year}</h3>
                    <form onSubmit={this.isEdit}>
                        <input type="submit" value="Edit"/>
                    </form>
                </div>
            )
        } else {
            edu = (
                <div>
                    <form onSubmit={this.submitEduEdit}>
                        <div className="form-floating">
                            <label htmlFor="name">School Name</label>                            
                            <input type="text"  className="form-control" id="name" name="name" value={this.state.school.name} onChange={this.onChange} />
                        </div>                        
                        <div className="form-group">
                            <label htmlFor="degree"> Degree </label>                            
                            <input type="text" className="form-control" id="degree" name="degree"                                
                                value={this.state.school.degree} onChange={this.onChange} />
                        </div>                            
                        <div className="form-group">
                            <label htmlFor="major">Major</label>                            
                            <input type="text" className="form-control" id="major" name="major" value={this.state.school.major} onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="year"> Year </label>                            
                            <input type="number" className="form-control" id="year" name="year"                                
                                value={this.state.school.year} onChange={this.onChange} />
                        </div>                  
                        <input type="submit" value="Submit" className="btn btn-primary"/>    
                    </form>
                </div>
            )
        }
        
        return edu;
    }
}

export default SingleEducation;