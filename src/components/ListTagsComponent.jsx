import React, {Component} from 'react';
import TagService from "../services/TagService";

class ListTagsComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tags: []
        }
        this.addTag = this.addTag.bind(this);
    }
    componentDidMount() {
        TagService.getTag().then((res) => {
            this.setState({tags:res.data});
        });
    }

    addTag(){
        this.props.history.push('add-tag');
    }

    render() {
        return (
            <div>
                <h2 className={"text-center"}>Tags List</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Queue id</th>
                                <th>Queue name</th>
                                <th>Queue hostName</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.tags.map(
                                    tags =>
                                        <tr key={tags.id}>
                                            <td>{tags.queueName}</td>
                                            <td>{tags.hostName}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListTagsComponent;