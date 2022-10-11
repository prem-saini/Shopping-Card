import { connect } from 'react-redux'
import Home from '../components/Home'
import {addToCard,removeToCard} from '../Services/actions/actions.js'

const mapStateToProps=state => ({
cardData:state.cardItems

})

const mapDispatchToProps=dispatch=>({
    addToCardHandler:data=>dispatch(addToCard(data)),
    removeToCardHandler:data=>dispatch(removeToCard(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)


// export default Home