import React, { Component } from 'react';


class SingleWorkExperience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            work: {
                company: this.props.company,
                position: this.props.position,
                year_start: this.props.year_start,
                year_end: this.props.year_end,
                description: this.props.description,
                id: this.props.id
            },
            edit: false
        }
        this.isEdit = this.isEdit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.submitWorkEdit = this.submitWorkEdit.bind(this);
    }

    isEdit = (event) => {
        event.preventDefault();
        this.setState({
            edit: !this.state.edit
        });
    }
    
    onChange = (event) => {
        event.preventDefault();
        let toChange = event.target.name;
        this.setState({
            work: {
                ...this.state.work,
                [toChange]: event.target.value
            }            
        });
    }

    submitWorkEdit = (event) => {
        event.preventDefault();
        let edittedInfo = this.state.work;

        this.props.onEdit(edittedInfo);
        this.setState({
            edit: !this.state.edit
        })
    }
    

    render() {
        let work;

        if (!this.state.edit) {
            work = (
                <div>                    
                    <h3>{this.props.company}</h3>
                    <h3>{this.state.work.position}</h3>
                    <h3>{this.state.work.year_start} - {this.state.work.year_end}</h3>
                    <p>{this.state.work.description}</p>
                    <form onSubmit={this.isEdit}>
                        <input type="submit" value="edit" className="btn btn-primary"/>
                    </form>
                    <br/>
                </div>
            )
        } else {
            work = (
                <form onSubmit={this.submitWorkEdit}>
                    <div className="form-floating">
                        <label htmlFor="position">Company</label>                            
                        <input type="text"  className="form-control" id="company" name="company" 
                            value={this.state.work.company} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="position"> Position </label>                            
                        <input type="text" className="form-control" id="position" name="postion"                                
                            value={this.state.work.position} onChange={this.onChange} />
                    </div>                  
                    <div className="form-group">
                        <label htmlFor="year_start">Year Started</label>                            
                        <input type="number" className="form-control" id="year_start" name="year_start" 
                            value={this.state.work.year_start} onChange={this.onChange} />
                    </div>                      
                    <div className="form-group">
                        <label htmlFor="year_end">Year Left</label>                            
                        <input type="number" className="form-control" id="year_end" name="year_end" 
                            value={this.state.work.year_end} onChange={this.onChange} />
                    </div>                                  
                    <div className="form-group">
                        <label htmlFor="description"> Description </label>                            
                        <input type="text" className="form-control" id="description" name="description"                                
                            value={this.state.work.description} onChange={this.onChange}  />
                    </div>                  
                    <input type="submit" value="submit" className="btn btn-primary"/>                        
                </form>                            
            )
        }
        
        return work
    }
}

export default SingleWorkExperience;