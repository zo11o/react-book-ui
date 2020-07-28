import React, { SFC, ComponentType } from "react";
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from "react-router-dom";
import UserCenter from '../view/uc'

interface IRoute {
  path: string;
  component: React.ReactElement;
}

interface ILocation {
  match: {
    params: object
    isExact: boolean
    path: string
    url: string
  },
  location: {
    key?: string // 在使用 hashHistory 时，没有 key
    pathname: string
    search: string
    hash?: string
    // state: {
    //   [userDefined]: true
    // }
  }
}

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



function Layout () {

  return (
    <div className="layout">
      <div className="layout-body">
          <Switch>
            <Route path="/book">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/uc">
              <UserCenter />
            </Route>
          </Switch>
      </div>
      <nav className="layout-nav">
        <ul>
          <li>
            <NavLink to="/book" activeClassName='selected'>首页</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName='selected'>记录</NavLink>
          </li>
          <li>
            <NavLink to="/uc" activeClassName='selected'>用户中心</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

function Home () {
  return <h2>Home</h2>;
}


function About () {
  return <h2>About</h2>;
}

function Users () {
  return <h2>Users</h2>;
}

// 没有匹配项目
const NoMatch = ({ location }: ILocation) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);


export default function RootRouter () {
  return (
    <>
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/" component={Layout} />
            {/* <Home></Home> */}
            {/* <Route component={NoMatch} /> */}
          </Switch>
        </div>
      </Router>
    </>
  );
}