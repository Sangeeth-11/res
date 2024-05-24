
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dash from './pages/Dash'
import Request from './pages/Request'
import None from './pages/None'
import Slidebar from './Slidebar'
import { Row,Col } from 'react-bootstrap'
import './layout.css'
// import Layout from './Layout'

function App() {


  return (
    <>
    {/* <Layout/> */}
     <Row className='row-app'>
      <Col  md={2}  xs={2}className='position-fixed'>
        <Slidebar />
      </Col>
      <Col  md={10}  xs={10} className='contents position-relative'>
        <Routes>
          <Route path='/' element={<None />} />
          <Route path='/dash' element={<Dash />} />
          <Route path='/req' element={<Request />} />
        </Routes>
      </Col>

        </Row>
      </>
      )
}

      export default App
