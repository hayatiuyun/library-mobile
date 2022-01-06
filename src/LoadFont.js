import React from 'react'

class App extends React.Component {
    state = {
        fontLoaded: false,
    };

    componentDidMount() {
        this.loadAssetsAsync();
    }

    async loadAssetsAsync() {
        await Font.loadAsync({
            // Load a font `Montserrat` from a static resource
            CookieRegular: require("../assets/fonts/Cookie/Cookie-Regular.ttf"),
            // MuseoSans700: require("./assets/fonts/museosans_700-webfont.ttf"),
        });
        this.setState({ fontLoaded: true });
    }

    render() {
        if (!this.state.fontLoaded) {
            return null; // render some progress indicator
        }
        return <AnyComponent />;
    }
}