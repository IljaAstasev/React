import React, {Component} from 'react'; (7.4K gzipped: 3.1K)
import ItemList from '../itemList';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';
import {withRouter} from 'react-router-dom'; 10.1K (gzipped: 4.1K)

export class BooksPage extends Component {
    gotService = new gotService();

    state = {
        selectedBook: null, 
        error: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedBook: id 
        })
    }
    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }
        return (
            <ItemList
            inItemSelected={(itemId) => {
                this.props.history.push(itemId)
            }}

            getDate={this.gotService.getALLBooks}
            renderItem={({name}) => name}/>
        )
    }
}

export default withRouter(BooksPage);