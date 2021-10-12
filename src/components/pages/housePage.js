import React, {Component} from 'react'; (7.4K gzipped: 3.1K)
import ItemList from '../ItemList';
import itemDetails, {Field} from '../itemDetails';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';
import RowBlock from '../rowBlock';

export default class HousesPage extends Component {
    gotService = new gotService();

    state = {
        selectedHouse: null, 
        error: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedHouse: id
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
            getData={this.gotService.getALLHouses}
            renderItem={({name}) => name} />
        )

        const ItemDetails = (
            <ItemDetails
            itemId={this.state.selectedHouses}
            getDate={this.gotService.getHouses} >
            <Field field='region' label='Region'/>
            <Field field='words' label='Words'/>
            <Field field='titles' label='Titles'/>
            <Field field='ancestralWeapons' label='Ancestral Weapons'/>
            </ItemDetails>
        )


        return (
            <RowBlock left={itemList} right={itemDetails} />
        )
    }
}