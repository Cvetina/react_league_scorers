import React from 'react';
import ReactDOM from 'react-dom';
import {sortable} from 'react-sortable';
import style from './styles/Styles.scss';

class Item extends React.Component {
    componentDidUpdate(prevProps) {
        // if (prevProps !== this.props) {
        //     console.log("update", this.props.children)
        // }
    }
    // shouldComponentUpdate(prevProps) {
    //     if (prevProps === this.props) {
    //         return false
    //     }
    // }
    render() {
    console.log("render", this.props.children)
        return (
            <li {...this.props}>
                {this.props.children}
            </li>
        )
    }
}

var SortableItem = sortable(Item);

export class SortableList extends React.Component {

   constructor(props) {
        super(props);
        this.state = {
            items: props.items
        };
   }

    onSortItems = (items) => {
        this.setState({...this.state, items: items});
    }

    render() {
        const {items} = this.state;
        var listItems = items.map((item, i) => {
            return (
                <SortableItem key={item.id} onSortItems={this.onSortItems} items={items} sortId={i}>
                    {item.name}
                </SortableItem>
            );
        });

        return (
            <ul className='sortable-list'>
                {listItems}
            </ul>
        )
    }
};
