import React from 'react';


class AboutMe extends React.Component {

    render() {
        return (
            <div className="aboutme-container">
                <header className="aboutme-header">
                    <h1 className="aboutme-header-name">About Me</h1>
                </header>
                <section>
                    <h2>Jia Li</h2>
                    <h4>Software Engineer</h4>
                    <span>
                        This is my To Do List w/ Redux!
                    </span>
                </section>
            </div>
        )
    }
}

export default AboutMe;
