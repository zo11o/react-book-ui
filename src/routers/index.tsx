import React, { SFC, ComponentType, Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Link, Switch, NavLink } from "react-router-dom";
import Layout from '../components/layout'
import Home from '../view/home'

export const withDefaultProps = <
  P extends object,
  DP extends Partial<P> = Partial<P>
> (
  defaultProps: DP,
  Cmp: ComponentType<P>,
) => {
  // 提取出必须的属性
  type RequiredProps = Omit<P, keyof DP>;
  // 重新创建我们的属性定义，通过一个相交类型，将所有的原始属性标记成可选的，必选的属性标记成可选的
  type Props = Partial<DP> & Required<RequiredProps>;

  Cmp.defaultProps = defaultProps;

  // 返回重新的定义的属性类型组件，通过将原始组件的类型检查关闭，然后再设置正确的属性类型
  return (Cmp as ComponentType<any>) as ComponentType<Props>;
};

// const routes = [
//   {
//     path: '/',
//     component: Layout,
//     routes: [
//       {
//         path: "/home",
//         component: Home
//       },
//       {
//         path: "/users",
//         component: Users
//       }
//     ]
//   },
//   {
//     path: '/uc',
//     component: UserCenter
//   },
//   {
//     path: '/about',
//     component: About
//   }
// ]

// const RouteWithSubRoutes = (route: any) => (
//   <Route
//     path={route.path}
//     render={props => (
//       // pass the sub-routes down to keep nesting
//       <route.component {...props} routes={route.routes} />
//     )}
//   />
// );

// function Home () {
//   return <div>
//   <p>only this paragraph will get the style :)</p>

//   { /* you can include <Component />s here that include
//        other <p>s that don't get unexpected styles! */ }

//   <style jsx>{`
//     p {
//       color: red;
//     }
//   `}</style>
// </div>;
// }


function About () {
  return <h2>About</h2>;
}

function User () {
  return <h2>Users</h2>;
}

function Book () {
  return <h2>Books</h2>;
}

// 没有匹配项目
// const NoMatch = ({ location }: ILocation) => (
//   <div>
//     <h3>
//       No match for <code>{location.pathname}</code>
//     </h3>
//   </div>
// );

function NoMatch () {
  return <div>無數據</div>
}

export default function RootRouter () {
  return (
      <Router>
          <Switch>
            <Route path="/about" component={About}></Route>
            <Route render={() => {
              return <Layout>
                <Switch>
                  <Route exact path="/" component={Home}></Route>
                  <Route path="/home" component={Home}></Route>
                  <Route path="/user" component={User}></Route>
                  <Route path="/book" component={Book}></Route>
                </Switch>
              </Layout>
            }} />
          </Switch>
      </Router>
  );
}