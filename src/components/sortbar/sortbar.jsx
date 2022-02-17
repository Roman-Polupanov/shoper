import React, { useState } from 'react';
import { Button_cont, Sortbar_cont, Sort_name, Sort_price } from './sortbar.styles';
import data from '../../mock/data'
import Card from '../card/Card';
import { Cards_container } from '../card/Card.styles';

const Sortbar = () => {

    const [list, setList] = useState(data);

    const handleSort = type => {
        const draftList = [...list];
        switch (type) {
            case 'Switch2':
                draftList.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'Switch3':
                draftList.sort((a, b) => a.price - b.price);
                break;
        }
        setList(draftList);
    }

    return (
        <Sortbar_cont>
            <Button_cont>
                <Sort_name onClick={() => handleSort('Switch2')}>Sort by name</Sort_name>
                <Sort_price onClick={() => handleSort('Switch3')}>Sort by price</Sort_price>
            </Button_cont >
            <Cards_container>
                {list.map((item) => <Card key={item.id}
                    name={item.name}
                    image={item.image}
                    price={item.price}
                />
                )}
            </Cards_container>
        </Sortbar_cont>

    );
}

export default Sortbar