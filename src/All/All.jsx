import Header from '../components/header/Header'
import { Cards_container, All_container, Navi_list, Navi_link, All_button } from './All.styles';
import data from '../mock/data'
import Card from '../components/card/Card';

const All = () => {
    return (<All_container>
        <Header />
        <Navi_list>
            <All_button as="a" href="/all">All</All_button>
            <Navi_link as="a" href="/sorting">Sorting</Navi_link>
        </Navi_list>
        <Cards_container>
            {data.map((item) => <Card key={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
            />
            )}
        </Cards_container>
    </All_container>
    )
}

export default All