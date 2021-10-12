import React, {Component} from 'react'; (7.4K gzipped: 3.1K)
import ItemList from '../ItemList';
import itemDetails, {Field} from '../itemDetails';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';
import RowBlock from '../rowblock';

export default class characterpage extends Component {
    gotService = new gotService();

    state = {
        selectedChar: null, 
        error: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedChar: id
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

        const itemList = (
            <ItemList
            onItemSelected={this.onItemSelected}
            getDate={this.gotService.getALLCharacter}
            renderItem={({name, gender}) => `${name} (${gender})`}/>
        )

        const ItemDetails = (
            <ItemDetails
            itemId={this.state.selectedChar}
            getDate={this.gotService.getCharacter} >
            <Field field='gender' label='Gender'/>
            <Field field='born' label='Born'/>
            <Field field='died' label='Died'/>
            <Field field='culture' label='Culture'/>
            </ItemDetails>
        )
        return (
            <RowBlock left={itemList} right={itemDetails} />
        )
    }
}