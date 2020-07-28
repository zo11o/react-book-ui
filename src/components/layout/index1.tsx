import React from "react";
import { TabBar } from "antd-mobile";


export interface Props {
}

export interface State{
    selectedTab: string,
    hidden: boolean,
    fullScreen: boolean,
}

class Layout extends React.Component<Props, State, {}> {
    constructor(props: Props) {
        super(props);
        this.state = {
            selectedTab: "redTab",
            hidden: false,
            fullScreen: true,
        };
    }

    renderContent(pageText: string) {
        return (
            <div
                style={{
                    backgroundColor: "white",
                    height: "100%",
                    textAlign: "center",
                }}>
                <div style={{ paddingTop: 60 }}>
                    Clicked “{pageText}” tab， show “{pageText}” information
                </div>
            </div>
        );
    }

    getNavIcon(type: string) {

    }

    render() {
        return (
            <div
                style={
                    this.state.fullScreen
                        ? {
                              position: "fixed",
                              height: "100%",
                              width: "100%",
                              top: 0,
                          }
                        : { height: 400 }
                }>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}>
                    <TabBar.Item
                        title="Home"
                        key="Home"
                        icon={
                            <div
                                style={{
                                    width: "22px",
                                    height: "22px",
                                    background:
                                        "url(./assets/images/nav-book.svg) center center /  21px 21px no-repeat",
                                }}
                            />
                        }
                        selectedIcon={
                            <div
                                style={{
                                    width: "22px",
                                    height: "22px",
                                    background:
                                        "url(./assets/images/nav-book-a.svg) center center /  21px 21px no-repeat",
                                }}
                            />
                        }
                        selected={this.state.selectedTab === "blueTab"}
                        //   badge={1}
                        onPress={() => {
                            this.setState({
                                selectedTab: "blueTab",
                            });
                        }}
                        data-seed="logId">
                        {this.renderContent("Home")}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div
                                style={{
                                    width: "22px",
                                    height: "22px",
                                    background:
                                        "url(./assets/images/nav-history.svg) center center /  21px 21px no-repeat",
                                }}
                            />
                        }
                        selectedIcon={
                            <div
                                style={{
                                    width: "22px",
                                    height: "22px",
                                    background:
                                        "url(./assets/images/nav-history-a.svg) center center /  21px 21px no-repeat",
                                }}
                            />
                        }
                        title="Koubei"
                        key="Koubei"
                        selected={this.state.selectedTab === "redTab"}
                        onPress={() => {
                            this.setState({
                                selectedTab: "redTab",
                            });
                        }}
                        data-seed="logId1">
                        {this.renderContent("Koubei")}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div
                                style={{
                                    width: "22px",
                                    height: "22px",
                                    background:
                                        "url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat",
                                }}
                            />
                        }
                        selectedIcon={
                            <div
                                style={{
                                    width: "22px",
                                    height: "22px",
                                    background:
                                        "url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat",
                                }}
                            />
                        }
                        title="Friend"
                        key="Friend"
                        dot
                        selected={this.state.selectedTab === "greenTab"}
                        onPress={() => {
                            this.setState({
                                selectedTab: "greenTab",
                            });
                        }}>
                        {this.renderContent("Friend")}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div
                                style={{
                                    width: "22px",
                                    height: "22px",
                                    background:
                                        "url(./assets/images/nav-user.svg) center center /  21px 21px no-repeat",
                                }}
                            />
                        }
                        selectedIcon={
                            <div
                                style={{
                                    width: "22px",
                                    height: "22px",
                                    background:
                                        "url(./assets/images/nav-user-a.svg) center center /  21px 21px no-repeat",
                                }}
                            />
                        }
                        title="My"
                        key="my"
                        selected={this.state.selectedTab === "yellowTab"}
                        onPress={() => {
                            this.setState({
                                selectedTab: "yellowTab",
                            });
                        }}>
                        {this.renderContent("My")}
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}

export default Layout;
