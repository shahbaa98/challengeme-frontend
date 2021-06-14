import React, { Component } from "react";
import Modal from "./Modal";
import "../style.css"
import axios from "axios";
/*const todoItems = [
    {
        id: 1,
        firstname: "Noura",
        lastname: "espanioly",
        username:"nouraes",
        password:"nouraess",
        therapistName:"aaa",
        NewUser: false,
    },
    {
        id: 2,
        firstname: "Shahbaa",
        lastname: "Shaalan",
        username:"ShahbaaSh",
        password:"Shaalan",
        therapistName:"aaa",
        NewUser: true,
    },
    {
        id: 3,
        firstname: "Uri",
        lastname: "Moser",
        username:"UriMo",
        password:"uri1234",
        therapistName:"bbb",
        NewUser: true,
    },
    {
        id: 4,
        firstname: "Fredi",
        lastname: "Fincheli",
        username:"FrediFin",
        password:"Fredi123",
        therapistName:"bbb",
        NewUser: true,
    },
];*/

class addNewChall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewCompleted: false,
            todoList: [],
            modal: false,
            activeItem: {
                firstname: "",
                lastname: "",
                username:"",
                password:"",
                therapistName:"",
                NewUser: true,
            },
        };
    }
    componentDidMount() {
        this.refreshList();
    }

    refreshList = () => {
        axios
            .get("/api/todos/")
            .then((res) => this.setState({ todoList: res.data }))
            .catch((err) => console.log(err));
    };
    toggle = () => {
        this.setState({ modal: !this.state.modal });
    };

    handleSubmit = (item) => {
        this.toggle();
        if (item.id) {
            axios
                .put(`/api/todos/${item.id}/`, item)
                .then((res) => this.refreshList());
            return;
        }
        axios
            .post("/api/todos/", item)
            .then((res) => this.refreshList());
    };

    handleDelete = (item) => {
        axios
            .delete(`/api/todos/${item.id}/`)
            .then((res) => this.refreshList());
    };


    createItem = () => {
        const item = { firstname: "", lastname: "", username:"", password:"", therapistName:"", NewUser: true };
        this.setState({ activeItem: item, modal: !this.state.modal });
    };

    editItem = (item) => {
        this.setState({ activeItem: item, modal: !this.state.modal });
    };

    displayCompleted = (status) => {
        if (status) {
            return this.setState({ viewCompleted: true });
        }

        return this.setState({ viewCompleted: false });
    };

    renderTabList = () => {
        return (
            <div className="nav nav-tabs">
        <span
            className={this.state.viewCompleted ? "nav-link active" : "nav-link"}
            onClick={() => this.displayCompleted(true)}
        >
          תלמידים חדשים
        </span>
                <span
                    className={this.state.viewCompleted ? "nav-link" : "nav-link active"}
                    onClick={() => this.displayCompleted(false)}
                >
          תלמידים
        </span>
            </div>
        );
    };

    renderItems = () => {
        const { viewCompleted } = this.state;
        const newItems = this.state.todoList.filter(
            (item) => item.NewUser === viewCompleted
        );

        return newItems.map((item) => (
            <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
            >
        <span
            className={`todo-title mr-2 ${
                this.state.viewCompleted ? "completed-todo" : ""
            }`}
            title={item.username}
        >
          {item.username}
        </span>
                <span>
          <button
              className="btn btn-secondary mr-2"
              onClick={() => this.editItem(item)}

          >
            Edit
          </button>
          <button
              className="btn btn-danger"
              onClick={() => this.handleDelete(item)}
          >
            Delete
          </button>
        </span>
            </li>
        ));
    };

    render() {
        return (
            <main className="app-com">
                <h1 className="text-white text-uppercase text-center my-4">משתמש חדש</h1>
                <br/>
                <div className="row">
                    <div className="col-md-6 col-sm-10 mx-auto p-0">
                        <div className="card p-3">
                            <div className="mb-4">
                                <button
                                    className="btn btn-primary"
                                    onClick={this.createItem}
                                >
                                    הוסף תלמיד חדש
                                </button>
                            </div>
                            {this.renderTabList()}
                            <ul className="list-group list-group-flush border-top-0">
                                {this.renderItems()}
                            </ul>
                        </div>
                    </div>
                </div>
                {this.state.modal ? (
                    <Modal
                        activeItem={this.state.activeItem}
                        toggle={this.toggle}
                        onSave={this.handleSubmit}
                    />
                ) : null}
            </main>

        );
    }
}

export default addNewChall
