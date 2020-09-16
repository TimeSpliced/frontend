import React from 'react';
import { Route } from 'react-router-dom';


// class AppRoute extends React.Component {

//     componentDidMount() {
//     document.body.classList.add('is-loaded')
//     this.refs.scrollReveal.init();
//   }
//   render (){
//     console.log("this props", this.props)
//     const Layout = (this.props.layout === undefined) ? props => (<React.Fragment>{this.props.children}</React.Fragment>) : this.props.layout;
//     const Component = this.props.component
//     return (
//       <Route
        
//         // {...rest}
//         render={(props) => (
//           <Layout>
//             <Component {...this.props} />
//           </Layout>
//         )} />
//     );
//   }
// }

const AppRoute = ({
  component: Component,
  layout: Layout,
  ...rest
}) => {

  Layout = (Layout === undefined) ? props => (<React.Fragment>{props.children}</React.Fragment>) : Layout;

  return (
    <Route
      
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )} />
  );
}

export default AppRoute;