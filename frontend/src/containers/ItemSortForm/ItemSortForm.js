import React, {Component, Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import {loadCategories} from "../../store/actions/category-list";
import {connect} from "react-redux";
import Select from "react-select";
import ItemList from "../ItemList/ItemList";


class ItemSortForm extends Component {

    componentDidMount() {
        this.props.loadCategories()
    }

    getCategoryOptions = () => {
        return this.props.categories.map(category => {
            return {value: category.id, label: category.name}
        });
    };

    selectChanged = (field, values) => {
        const categories = values.map(item => item.value);
        return categories
    };

    render() {
        // if (!this.props.categoryList) return null
        const selectOptions = this.getCategoryOptions();

        return <Fragment>
            {console.log(this.props)}

            <Select options={selectOptions} isMulti={true} name='categories'
                    onChange={(values) => this.selectChanged('categories', values)}
            />
            <ItemList
                sortedCategories={this.selectChanged}
            />
        </Fragment>
    }
}

const mapStateToProps = (state) => state.categoryList;
const mapDispatchToProps = (dispatch) => ({
    loadCategories: () => dispatch(loadCategories())
});


export default connect(mapStateToProps, mapDispatchToProps)(ItemSortForm);