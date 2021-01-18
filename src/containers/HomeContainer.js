import Home from '../components/Home'
import { connect } from 'react-redux'
import { addTodo, removeTodos } from '../service/actions/actions'

const mapStateToProps = state => ({
    datas: state.cardItems
})
const mapDispatchToProps = dispatch => ({
    AddTodosHome: data => dispatch(addTodo(data)),
    RemoveTodoHome: data => dispatch(removeTodos(data))


})
export default connect(mapStateToProps, mapDispatchToProps)(Home)
// export default Home;