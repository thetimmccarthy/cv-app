import React, { Component } from 'react';
import SingleWorkExperience from './SingleWorkExperience';

class WorkExperience extends Component {

    constructor(props) {
        super(props);
        this.state = {
            work: {
                company: "company",
                position: "position",
                year_start: 1900,
                year_end: 2021,
                description: "description",
                id: 0
            },
            work_experience: [],
            addNew: false,
            count: 0
        }
        this.onAddNew = this.onAddNew.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onSubmitWork = this.onSubmitWork.bind(this);
    }

    onAddNew = (event) => {
        event.preventDefault();
        this.setState({
            addNew: !this.state.addNew
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

    onEdit = (newWorkInfo) => {
        
        let tempWorkExperiences = this.state.work_experience.map((work) => {
            if (work.id === newWorkInfo.id) {
                
                work.company = newWorkInfo.company;
                work.position = newWorkInfo.position;
                work.year_start = newWorkInfo.year_start;
                work.year_end = newWorkInfo.year_end;
                work.description = newWorkInfo.description
            } 

            return work           
        });
        
        this.setState({
            work_experience: tempWorkExperiences
        });
    }

    onSubmitWork = (event) => {
        event.preventDefault();

        let tempWork = {
            company: this.state.work.company,
            position: this.state.work.position,
            year_start: this.state.work.year_start,
            year_end: this.state.work.year_end,
            description: this.state.work.description,
            id: this.state.count
        }
        
        this.setState({
            work: {
                company: "company",
                position: "position",
                year_start: 1900,
                year_end: 2021,
                description: "description",
                id: 0
            },
            work_experience: [...this.state.work_experience, tempWork],
            addNew: !this.state.addNew,
            count: this.state.count + 1
        })
    }




    render() {
        let enterWork;
        
        if (this.state.addNew) {
            enterWork = (
                <div>
                <form onSubmit={this.onSubmitWork}>
                    <div className="form-floating">
                        <label htmlFor="position">Company</label>                            
                        <input type="text" className="form-control" id="company" name="company"
                            value={this.state.work.company} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="position"> Position </label>                            
                        <input type="text" className="form-control" id="position" name="position"                                
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
                            value={this.state.work.description} onChange={this.onChange} />
                    </div>                  
                    <input type="submit" value="submit" className="btn btn-primary"/>                        
                </form>
                <br/>
                <form onSubmit={this.onAddNew}> 
                    <input type="submit" value="Cancel" className="btn btn-primary" />
                </form>                                   
                </div>
            )
        
        } else {
            enterWork = (
                <form onSubmit={this.onAddNew}>
                    <input type="submit" value={'Add Work Experience!'} className="btn btn-primary"/>
                </form>
            )
        }
        return (
            <div>
                <div>
                    {this.state.work_experience.map((work) => {
                        return <SingleWorkExperience company={work.company} position={work.position} 
                            year_start={work.year_start} year_end={work.year_end} 
                            description={work.description} id={work.id} onEdit={this.onEdit}/>
                    })}
                </div>
                {enterWork}
                
            </div>
        )
    }
}

export default WorkExperience;