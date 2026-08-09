
import React, { Component } from 'react'
export class MegaMenu extends Component {

    constructor(props) {
        super()

    }

    MenuItemClick = (event) => {
        event.target.classList.toggle("activeAll");
        var panel = event.target.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        }
        else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }


    render() {

        const CatList = this.props.data;
        const MyView = CatList.map((CatList, i) => {
            return <div key={i.toString()}>
                <button onClick={this.MenuItemClick} className='accordionAll'>
                    <img className='accordionMenuIconAll' alt='icon' src={CatList.category_image} />&nbsp; {CatList.category_name}
                </button>
                <div className='panelAll'>
                    <ul>
                        {
                            (CatList.subcategory_name).map((SubList,i)=>{
                                return <li><a className='accordionItemAll' href=''>{SubList.subcategory_name}</a></li>
                            })
                        }
                    </ul>
                </div>

            </div>
        });





        return (
            <div className='accordionMenuDivAll'>
                <div className='accordionMenuDivInsideAll'>
                    {MyView}
                </div>
            </div>
        )
    }
}

export default MegaMenu
