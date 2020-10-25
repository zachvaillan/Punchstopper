![Screenshot (19)](https://user-images.githubusercontent.com/68860003/97029606-80d57700-1512-11eb-8736-4cef2e815ddb.png)

Punchstopper, a Kickstarter clone, is a crowdfunding web application that allows users to create a project, and back (invest in) a project which returns a reward that corresponds to an investment range.

### Live Link: https://punchstopper-crowdfunding.herokuapp.com/#/

## Technologies Used

### Frontend
* React 
* Redux

### Backend
* Ruby on Rails

## User Auth

![Screenshot (20)](https://user-images.githubusercontent.com/68860003/97029778-bed29b00-1512-11eb-8d80-d14b612178df.png)

A viewer may create a new user account and use it to sign in. The login form and signup form render appropriate errors to the user. A viewer not wanting to create an account may use the demo login.

## Pseudo Carousel

I created a carousel like feature that renders different projects based on which "page" they are on within the recommended projects section. 

![Screenshot (27)](https://user-images.githubusercontent.com/68860003/97030289-65b73700-1513-11eb-9d21-20d8162fde77.png)

To do this, I added a class variable and changed its value based on the "page" number clicked. A conditional within the render will show a range of projects that correspondes to the class's page number. I had to do something similar for the project creation page. This time the entire page gave the illusion of changing, I also had to store the user input in the state and use it at the end of the form.

![Screenshot (26)](https://user-images.githubusercontent.com/68860003/97030397-8ed7c780-1513-11eb-998e-1d48fd5de424.png)

This time I used a page key in my state instead of using a class variable. This way I can use a function that sets state (specifically page) based on a click of a continue or go back button:  

```
handleNext(e){
        e.preventDefault();
        this.setState( (prevState) => ({page: prevState.page + 1}) )
    }
    
    <button className="proj-form-btn" onClick={this.handleNext}>Next: Project idea</button>
```
Finally, to submit I just dropped the page key from the state: 
```
handleSubmit(e){
        e.preventDefault();
        let project = Object.assign({}, this.state);
        delete project.page;
        this.props.createProject(project)
            .then( () => this.props.history.push(`/${this.props.currentUser.id}/projects`));
    }
```

## Going Forward 

I still need to finish some features of the site, such as implementing backing and rewards. I also need to set up AWS so that user's can upload their own profile picture for themselves and for the projects they are creating.
