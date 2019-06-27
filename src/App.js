import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer'


const customers = [{
  'id':1,
  'image': 'https://placeimg.com/64/64/1',
  'name': 'kevin',
  'birthday': '903112436',
  'gender': 'male',
  'job': 'student'
},
{
  'id':2,
  'image': 'https://placeimg.com/64/64/2',
  'name': 'Mark',
  'birthday': '1234455',
  'gender': 'male',
  'job': 'swe'
},
{
  'id':3,
  'image': 'https://placeimg.com/64/64/3',
  'name': 'christina',
  'birthday': '54321',
  'gender': 'female',
  'job': 'data science'
}
]

class App extends Component {
  /* render should always include return*/
    render(){
      /* when using map, must use key */
        return (
          <div>
            {
              customers.map(c => {
                return (
                  <Customer
                  key = {c.id}
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}
                  />
                )
              })
            }
          </div>
        );
    }
}

export default App;