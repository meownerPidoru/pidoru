import '../App.css';
import CardItem from './cardItem';
import { Flex } from '@chakra-ui/react';
const ShopPage = () => {
        return(
        <Flex
        justify={'center'}
        align={'center'}
        flexWrap={'wrap'}
        gap={'35px'}
        mt={'50px'}
        >
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
        </Flex>
        )
}
export default ShopPage;