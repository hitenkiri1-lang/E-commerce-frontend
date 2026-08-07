
import React, { Component} from 'react'
export class MegaMenu extends Component {

    constructor() {
        super()
        this.MegaMenu = this.MegaMenu.bind(this);
    }

    componentDidMount() {
        this.MegaMenu();
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
        return (
            <div className='accordionMenuDivAll'>
                <div className='accordionMenuDivInsideAll'>
                    <button className='accordionAll'>
                        <img className='accordionMenuIconAll' alt='icon' src='https://cdn-icons-png.flaticon.com/512/1828/1828859.png' />&nbsp;Mobile & Tablet
                    </button>
                    <div className='panelAll'>
                        <ul>
                            <li><a className='accordionItemAll' href=''>Mobile & Tablet 1</a></li>
                            <li><a className='accordionItemAll' href=''>Mobile & Tablet 2</a></li>
                        </ul>
                    </div>

                    <button className='accordionAll'>
                        <img className='accordionMenuIconAll' alt='icon' src='https://cdn-icons-png.flaticon.com/512/1828/1828859.png' />&nbsp;Mobile & Tablet
                    </button>
                    <div className='panelAll'>
                        <ul>
                            <li><a className='accordionItemAll' href=''>Mobile & Tablet 1</a></li>
                            <li><a className='accordionItemAll' href=''>Mobile & Tablet 2</a></li>
                        </ul>
                    </div>

                    <button className='accordionAll'>
                        <img className='accordionMenuIconAll' alt='icon' src='https://cdn-icons-png.flaticon.com/512/1828/1828859.png' />&nbsp;Mobile & Tablet
                    </button>
                    <div className='panelAll'>
                        <ul>
                            <li><a className='accordionItemAll' href=''>Mobile & Tablet 1</a></li>
                            <li><a className='accordionItemAll' href=''>Mobile & Tablet 2</a></li>
                        </ul>
                    </div>

                    <button className='accordionAll'>
                        <img className='accordionMenuIconAll' alt='icon' src='https://cdn-icons-png.flaticon.com/512/1828/1828859.png' />&nbsp;Mobile & Tablet
                    </button>
                    <div className='panelAll'>
                        <ul>
                            <li><a className='accordionItemAll' href=''>Mobile & Tablet 1</a></li>
                            <li><a className='accordionItemAll' href=''>Mobile & Tablet 2</a></li>
                        </ul>
                    </div>

                    <button className='accordionAll'>
                        <img className='accordionMenuIconAll' alt='icon' src='https://cdn-icons-png.flaticon.com/512/1828/1828859.png' />&nbsp;Mobile & Tablet
                    </button>
                    <div className='panelAll'>
                        <ul>
                            <li><a className='accordionItemAll' href=''>Mobile & Tablet 1</a></li>
                            <li><a className='accordionItemAll' href=''>Mobile & Tablet 2</a></li>
                        </ul>
                    </div>

                    <button className='accordionAll'>
                        <img className='accordionMenuIconAll' alt='icon' src='https://cdn-icons-png.flaticon.com/512/1828/1828859.png' />&nbsp;Mobile & Tablet
                    </button>
                    <div className='panelAll'>
                        <ul>
                            <li><a className='accordionItemAll' href=''>Mobile & Tablet 1</a></li>
                            <li><a className='accordionItemAll' href=''>Mobile & Tablet 2</a></li>
                        </ul>
                    </div>

                    <button className='accordionAll'>
                        <img className='accordionMenuIconAll' alt='icon' src='https://cdn-icons-png.flaticon.com/512/1828/1828859.png' />&nbsp;Mobile & Tablet
                    </button>
                    <div className='panelAll'>
                        <ul>
                            <li><a className='accordionItemAll' href=''>Mobile & Tablet 1</a></li>
                            <li><a className='accordionItemAll' href=''>Mobile & Tablet 2</a></li>
                        </ul>
                    </div>

                    <button className='accordionAll'>
                        <img className='accordionMenuIconAll' alt='icon' src='https://cdn-icons-png.flaticon.com/512/1828/1828859.png' />&nbsp;Mobile & Tablet
                    </button>
                    <div className='panelAll'>
                        <ul>
                            <li><a className='accordionItemAll' href=''>Mobile & Tablet 1</a></li>
                            <li><a className='accordionItemAll' href=''>Mobile & Tablet 2</a></li>
                        </ul>
                    </div>

                    <button className='accordionAll'>
                        <img className='accordionMenuIconAll' alt='icon' src='https://cdn-icons-png.flaticon.com/512/1828/1828859.png' />&nbsp;Mobile & Tablet
                    </button>
                    <div className='panelAll'>
                        <ul>
                            <li><a className='accordionItemAll' href=''>Mobile & Tablet 1</a></li>
                            <li><a className='accordionItemAll' href=''>Mobile & Tablet 2</a></li>
                        </ul>
                    </div>

                    <button className='accordionAll'>
                        <img className='accordionMenuIconAll' alt='icon' src='https://cdn-icons-png.flaticon.com/512/1828/1828859.png' />&nbsp;Mobile & Tablet
                    </button>
                    <div className='panelAll'>
                        <ul>
                            <li><a className='accordionItemAll' href=''>Mobile & Tablet 1</a></li>
                            <li><a className='accordionItemAll' href=''>Mobile & Tablet 2</a></li>
                        </ul>
                    </div>

                    <button className='accordionAll'>
                        <img className='accordionMenuIconAll' alt='icon' src='https://cdn-icons-png.flaticon.com/512/1828/1828859.png' />&nbsp;Mobile & Tablet
                    </button>
                    <div className='panelAll'>
                        <ul>
                            <li><a className='accordionItemAll' href=''>Mobile & Tablet 1</a></li>
                            <li><a className='accordionItemAll' href=''>Mobile & Tablet 2</a></li>
                        </ul>
                    </div>

                    <button className='accordionAll'>
                        <img className='accordionMenuIconAll' alt='icon' src='https://cdn-icons-png.flaticon.com/512/1828/1828859.png' />&nbsp;Mobile & Tablet
                    </button>
                    <div className='panelAll'>
                        <ul>
                            <li><a className='accordionItemAll' href=''>Mobile & Tablet 1</a></li>
                            <li><a className='accordionItemAll' href=''>Mobile & Tablet 2</a></li>
                        </ul>
                    </div>

                    <button className='accordionAll'>
                        <img className='accordionMenuIconAll' alt='icon' src='https://cdn-icons-png.flaticon.com/512/1828/1828859.png' />&nbsp;Mobile & Tablet
                    </button>
                    <div className='panelAll'>
                        <ul>
                            <li><a className='accordionItemAll' href=''>Mobile & Tablet 1</a></li>
                            <li><a className='accordionItemAll' href=''>Mobile & Tablet 2</a></li>
                        </ul>
                    </div>

                    <button className='accordionAll'>
                        <img className='accordionMenuIconAll' alt='icon' src='https://cdn-icons-png.flaticon.com/512/1828/1828859.png' />&nbsp;Mobile & Tablet
                    </button>
                    <div className='panelAll'>
                        <ul>
                            <li><a className='accordionItemAll' href='/'>Mobile & Tablet 1</a></li>
                            <li><a className='accordionItemAll' href='/'>Mobile & Tablet 2</a></li>
                        </ul>
                    </div>

                    <button className='accordionAll'>
                        <img className='accordionMenuIconAll' alt='icon' src='https://cdn-icons-png.flaticon.com/512/1828/1828859.png' />&nbsp;Mobile & Tablet
                    </button>
                    <div className='panelAll'>
                        <ul>
                            <li><a className='accordionItemAll' href=''>Mobile & Tablet 1</a></li>
                            <li><a className='accordionItemAll' href=''>Mobile & Tablet 2</a></li>
                        </ul>
                    </div>

                    

                    
                </div>
            </div>
        )
    }
}

export default MegaMenu
