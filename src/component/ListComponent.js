import React, { Component } from 'react'
import Person from './Person'

export class ListComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            person_list : []
        }
    }

    componentDidMount(){
        this.setState({
            person_list:[
                {
                    id:1,
                    name:'vipin',
                    age:25,
                    skill:'Angular',
                    avatar:'https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-8-avatar-2754583_120515.png'
                },
                {
                    id:2,
                    name:'aman',
                    age:18,
                    skill:'Python',
                    avatar:'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'
                },
                {
                    id:3,
                    name:'beauty',
                    age:23,
                    skill:'React',
                    avatar:'https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png'
                },
                {
                    id:4,
                    name:'Person',
                    age:30,
                    skill:'Vue',
                    avatar:'https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-vector-stock-91602735.jpg'
                }
            ]
        })
    }


    render() {
        //key props not accissible in child component
        //use index as key when you dont have unique id 
        return (
            <div>
                <h4>Person List :</h4>
                <ul>
                    {
                        this.state.person_list.map((person,index) =>{
                            return <Person key={person.id} person={person} />
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default ListComponent
