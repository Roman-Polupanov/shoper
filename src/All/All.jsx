import Header from '../components/header/Header'
import { Cards_container, All_container, Navi_list, Navi_link, All_button } from './All.styles';
import data from '../mock/data'
import Card from '../components/card/Card';
import Sortbar from '../components/sortbar/sortbar';

const All = () => {
    return (<All_container>
        <Header />
        <Sortbar />
    </All_container>
    )
}

export default All