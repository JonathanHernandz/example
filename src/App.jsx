import React from "react";
import './App.css';
class App extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
      axios
      .get("https://open.er-api.com/v6/latest/USD")
      .then(response =>
        response.data.results.map(user => (

          // username: `${user.USD}`,
          // email: `${user.email}`,
          // image: `${user.picture.thumbnail}`
          console.log(user)
          )
        )
      )
      console.log(response.name)
      .then(users => {
        this.setState({
          users,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {
      const { isLoading, users } = this.state;
      return (
        <React.Fragment>
          <h2>Random User</h2>
          <div>
            {!isLoading ? (
              users.map(user => {
                const { username, name, email, image } = user;
                return (
                  <div key={username}>
                    <p>{name}</p>
                    <div>
                      <img src={image} alt={name} />
                    </div>
                    <p>{email}</p>
                    <hr />
                  </div>
                );
              })
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </React.Fragment>
      );
    }
}
   
export default App;
