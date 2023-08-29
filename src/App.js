import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {PublicRouter} from '~/pages/routers'
import {DefaultLayout} from '~/Layouts'
import {Fragment} from 'react'

function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
      {PublicRouter.map((router,index)=>{
        const Page = router.component;
        let Layout = DefaultLayout
        if(router.layout){
          Layout = router.layout
        }
        else if(router.layout === null){
          Layout = Fragment
        }
        return <Route key={index} path={router.path} 
         element={
        <Layout>
            <Page />
        </Layout>}/>
      })}
    </Routes>
    </div>
  </Router>
  );
}

export default App;
