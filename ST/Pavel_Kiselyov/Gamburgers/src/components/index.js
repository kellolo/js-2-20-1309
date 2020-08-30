'use strict'
import Menu from './menu';
export default()=>{
    let menu = new Menu('https://raw.githubusercontent.com/KiseleowPasha/project/master/menu.json','.menu');
    menu.init();
}