
import React, { Component} from 'react'
export class MegaMenu extends Component {

    constructor(props) {
        super()
        
    }

    MegaMenu() {
        var acc = document.getElementsByClassName("accordionAll");
        var accNum = acc.length;
        var i;
        for (i = 0; i < accNum; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("activeAll");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                }
                else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }
    }

    render() {

        const CatList = this.props.data;
        const MyView = CatList.map((CatList,i)=>{
            return <div key={i.toString()}>
                 <button className='accordionAll'>
                        <img className='accordionMenuIconAll' alt='icon' src={CatList.category_image} />&nbsp; {CatList.category_name}
                    </button>
                    <div className='panelAll'>
                        <ul>
                            <li><a className='accordionItemAll' href=''>Mobile & Tablet 1</a></li>
                            <li><a className='accordionItemAll' href=''>Mobile & Tablet 2</a></li>
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
