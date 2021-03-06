import React, {Component} from 'react'; (7.4K gzipped: 3.1K)
import gotService from '../itemDetails';
import itemDetails, {Field} from '../itemDetails';

export default class BooksItem extends Component {
    gotService = new gotService();

render () {
    return (
        <ItemDetails 
        itemId={this.props.bookId}
        getData={this.gotService.getBook} >
            <Field field='numberOfPages' label='Number Of Pages'/>
            <Field field='publisher' label='Publisher'/>
            <Field field='released' label='Released'/>
        </ItemDetails> 
    )
}
}