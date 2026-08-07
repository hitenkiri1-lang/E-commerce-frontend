import React, { Component, Fragment } from 'react'

export class MegaMenuMobile extends Component {

    constructor() {
        super()
        this.MegaMenu = this.MegaMenu.bind(this);
    }

    componentDidMount() {
        this.MegaMenu();
    }

    MegaMenu() {
        var acc = document.getElementsByClassName("accordionMobile");
        var accNum = acc.length;
        var i;
        for (i = 0; i < accNum; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("activeMobile");
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
        return (
            <div className='accordionMenuDivMobile'>
                <div className='accordionMenuDivInsideMobile'>
                    <button className='accordionMobile'>
                        <img className='accordionMenuIconMobile' alt='icon' src='https://cdn-icons-png.flaticon.com/512/1828/1828859.png' />&nbsp;Mobile & Tablet
                    </button>
                    <div className='panelMobile'>
                        <ul>
                            <li><a className='accordionItemMobile' href=''>Mobile & Tablet 1</a></li>
                            <li><a className='accordionItemMobile' href=''>Mobile & Tablet 2</a></li>
                        </ul>
                    </div>

                    <button className='accordionMobile'>
                        <img className='accordionMenuIconMobile' alt='icon' src='https://cdn-icons-png.flaticon.com/512/1828/1828859.png' />&nbsp;Mobile & Tablet
                    </button>
                    <div className='panelMobile'>
                        <ul>
                            <li><a className='accordionItemMobile' href=''>Mobile & Tablet 1</a></li>
                            <li><a className='accordionItemMobile' href=''>Mobile & Tablet 2</a></li>
                        </ul>
                    </div>

                    <button className='accordionMobile'>
                        <img className='accordionMenuIconMobile' alt='icon' src='https://cdn-icons-png.flaticon.com/512/1828/1828859.png' />&nbsp;Mobile & Tablet
                    </button>
                    <div className='panelMobile'>
                        <ul>
                            <li><a className='accordionItemMobile' href=''>Mobile & Tablet 1</a></li>
                            <li><a className='accordionItemMobile' href=''>Mobile & Tablet 2</a></li>
                        </ul>
                    </div>

                    <button className='accordionMobile'>
                        <img className='accordionMenuIconMobile' alt='icon' src='https://cdn-icons-png.flaticon.com/512/1828/1828859.png' />&nbsp;Mobile & Tablet
                    </button>
                    <div className='panelMobile'>
                        <ul>
                            <li><a className='accordionItemMobile' href=''>Mobile & Tablet 1</a></li>
                            <li><a className='accordionItemMobile' href=''>Mobile & Tablet 2</a></li>
                        </ul>
                    </div>

                    <button className='accordionMobile'>
                        <img className='accordionMenuIconMobile' alt='icon' src='https://cdn-icons-png.flaticon.com/512/1828/1828859.png' />&nbsp;Mobile & Tablet
                    </button>
                    <div className='panelMobile'>
                        <ul>
                            <li><a className='accordionItemMobile' href=''>Mobile & Tablet 1</a></li>
                            <li><a className='accordionItemMobile' href=''>Mobile & Tablet 2</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default MegaMenuMobile
