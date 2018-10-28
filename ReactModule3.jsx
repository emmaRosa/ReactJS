class GenerateForm extends React.Component {
  render() {
    const enableButton = this.props.fName && this.props.lName ? false : true
    return (
      <div className="container">
        <hr/>
           <h2>Registration Form</h2>
         <hr/>
        <form className="col-12">
          <Input id="fName" text="First name" onChangeInput={(event) => this.props.onChangeForm(event, 'fName')} value={this.props.fName} />
          <Input id="lName" text="Last name" onChangeInput={(event) => this.props.onChangeForm(event, 'lName')} value={this.props.lName} />
          <Select onChangeSelect={(event) => this.props.onChangeForm(event, 'activity')} selected={this.props.activity} />
          <div>
            <label>Check all that apply: </label>
          </div>
          <div className="form-group">
            <Checkbox id="check1" text="Dietary Restrictions" value="Dietary" onChangeCheckbox={(event) => this.props.onChangeRestrictions(event)} checked={this.props.restrictions.Dietary} />
            <Checkbox id="check2" text="Physical Disabilities" value="Physical" onChangeCheckbox={(event) => this.props.onChangeRestrictions(event)} checked={this.props.restrictions.Physical} />
            <Checkbox id="check3" text="Medical Needs" value="Medical" onChangeCheckbox={(event) => this.props.onChangeRestrictions(event)} checked={this.props.restrictions.Medical} />
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.props.onFormSubmit} disabled={enableButton}>Submit</button>
        </form>
      </div>
    )
  }
}
class Input extends React.Component {
  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.id}>{this.props.text}</label>
        <input type="text" className="form-control" id={this.props.id} placeholder={this.props.text} onChange={this.props.onChangeInput} value={this.props.value} />
      </div>
    )
  }
}
class Select extends React.Component {
  render() {
    let options = ['--ACTIVITIES--', 'Superhero Camp', 'Rock Climbing', 'Cooking Class', 'Quidditch League']
    return (
      <div className="form-group">
        <label htmlFor="select1">Select Activity</label>
        <select className="form-control" id="select1" onChange={this.props.onChangeSelect}>
          {
            options.map((option, index) => <option key={index} value={option} selected={this.props.selected===option ? true : false}>{option}</option>)
                        }
        </select>
      </div>
    )
  }
}
class Checkbox extends React.Component {
  render() {
    return (
      <div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id={this.props.id} value={this.props.value} onChange={this.props.onChangeCheckbox} checked={this.props.checked} />
          <label className="form-check-label" htmlFor={this.props.id}>{this.props.text}</label>
        </div>
      </div>
    )
  }
}
class DataGrid extends React.Component {
  render() {
    if (this.props.users.length === 0) {
      return null
    } else {
      return (
        <div className="row">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Remove</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Activity</th>
                <th scope="col">Restrictions</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.users.map((user, index) => {
                  return (
                    <tr>
                      <th scope="row"><button className="btn btn-danger" onClick={() => this.props.onRemoveUser(user.id)}>X</button></th>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.activity}</td>
                      <td>{user.restrictions}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      )
    }
  }
}


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inc: 0,
      fName: '',
      lName: '',
      activity: '',
      restrictions: {
        Dietary: false,
        Physical: false,
        Medical: false,
      },
      users: []
    }
  }
  removeUser = (id) => {
    let users = [...this.state.users]
    users = users.filter( el => el.id !== id );
    this.setState({ users: users })
  }
  formChange = (event, key) => {
    this.setState({ [key]: event.target.value })
  }
  restrictionsChange = (event) => {
    const newRestrictions = {...this.state.restrictions}
    newRestrictions[event.target.value] = !newRestrictions[event.target.value]
    this.setState({ restrictions: {...newRestrictions} })
  }
  formSubmit = (event) => {
    event.preventDefault()
    const user = {
      id: this.state.inc,
      firstName: this.state.fName,
      lastName: this.state.lName,
      activity: this.state.activity,
      restrictions: this.parseRestrictions()
    }
    this.setState(prevState => ({
      inc: prevState.inc + 1,
      fName: '',
      lName: '',
      activity: '',
      restrictions: { Dietary: false, Physical: false, Medical: false },
      users: [...prevState.users, user]
    }))
  }
  parseRestrictions = () => {
    const obj = {...this.state.restrictions};
    const keys = Object.keys(obj);
    return keys.filter(key => obj[key]);
  }
  render() {
    return (
      <div className="row">
        <div className="col-6">
        <GenerateForm onChangeForm={this.formChange} onChangeRestrictions={this.restrictionsChange} onFormSubmit={this.formSubmit} {...this.state}/>
          </div>
         <div className="col-6">
        <DataGrid users={this.state.users} onRemoveUser={this.removeUser} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
