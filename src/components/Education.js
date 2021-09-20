import React, { Component } from 'react';
import SingleEducation from './SingleEducation'

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            school: {
                name: "name",
                degree: "degree",
                major: "major",
                year: 2021,
                id: 0
            },
            schools: [],
            addNew: false,
            count: 0
        }
    this.onAddNew = this.onAddNew.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onSubmitSchool = this.onSubmitSchool.bind(this);
    }

    onAddNew = (event) => {
        event.preventDefault();
        this.setState({
            addNew: !this.state.addNew
        })
    }

    onEdit = (newSchoolInfo) => {
        console.log("SCHOOLS: ", this.state.schools)
        console.log("INFO: ", newSchoolInfo)
        let tempSchools = this.state.schools.map((school) => {
            if (school.id === newSchoolInfo.id) {                
                school.name = newSchoolInfo.name;
                school.major = newSchoolInfo.major;
                school.degree = newSchoolInfo.degree;
                school.year = newSchoolInfo.year;

            } 
            return school            
        });
        
        this.setState({
            schools: tempSchools
        });
    }
    
    onSubmitSchool = (event) => {
        event.preventDefault();        
        let tempSchool = {
            name: this.state.school.name,
            major: this.state.school.major,
            degree: this.state.school.degree,
            year: this.state.school.year,
            id: this.state.count
        }
        
        this.setState({
            school: {
                name: "name",
                degree: "degree",
                major: "major",
                year: 2021,
                id: 0
            },
            schools: [tempSchool, ...this.state.schools],
            addNew: !this.state.addNew,
            count: this.state.count + 1
        });
        
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

    render () {
        
        let enterEducation;
        
        if (this.state.addNew) {
            enterEducation = (
                <div>
                    <form onSubmit={this.onSubmitSchool}>
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
                        <input type="submit" value="submit" className="btn btn-primary"/>                        
                    </form>                           
                    <br/>
                    <form onSubmit={this.onAddNew}> 
                        <input type="submit" value="Cancel" className="btn btn-primary" />
                    </form>     
                </div>
            )
        } else {
            enterEducation = (
                <form onSubmit={this.onAddNew}>
                    <input type="submit" value={'Add school!'} className="btn btn-primary"/>
                </form>
            )
        }
        return (
            <div>
                <div>                    
                    {this.state.schools.map((school) => {
                        return <SingleEducation name={school.name} degree={school.degree} major={school.major} year={school.year} id={school.id} onEdit={this.onEdit}/>
                    })}                    
                </div>
                {enterEducation}
                
            </div>
        )
    }
}

export default Education;