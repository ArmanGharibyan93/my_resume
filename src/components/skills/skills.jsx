import React from 'react';
import { connect } from 'react-redux';
import styles from './skills.module.scss';
import { Helmet } from 'react-helmet';

const Skills = ({words}) => {
    return(
        <>
            <Helmet>
                <meta 
                    name="keywords" 
                    content="HTML, CSS, SCSS, javascript, react, git, redux, node, express, next.js, nest.js, typescript, mongodb"
                />
                <meta
                    name="description"
                    content="Programing skills of Arman Gharibyan"
                />
                <title>{words.skillsTitle}</title>
            </Helmet>
            <div className={styles.container}>
                <div className={styles.title}>{words.skillsTitle}</div>
                <div className={styles.itemContainer}>
                    <div className={styles.itemTitle}>HTML5</div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greyCircle}></div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.itemTitle}>CSS3</div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greyCircle}></div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.itemTitle}>SCSS/SASS</div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greyCircle}></div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.itemTitle}>Material UI</div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greyCircle}></div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.itemTitle}>Tailwind</div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greyCircle}></div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.itemTitle}>Bootstrap</div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greyCircle}></div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.itemTitle}>Materialize</div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greyCircle}></div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.itemTitle}>Jquery</div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greyCircle}></div>
                    <div className={styles.greyCircle}></div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.itemTitle}>JavaScript</div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greyCircle}></div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.itemTitle}>TypeScript</div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greyCircle}></div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.itemTitle}>Webpack</div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greyCircle}></div>
                    <div className={styles.greyCircle}></div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.itemTitle}>React</div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greyCircle}></div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.itemTitle}>Next js</div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greyCircle}></div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.itemTitle}>Svelte</div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greyCircle}></div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.itemTitle}>Jest</div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greyCircle}></div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.itemTitle}>Redux</div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greyCircle}></div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.itemTitle}>React-Native</div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greyCircle}></div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.itemTitle}>Electron</div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greyCircle}></div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.itemTitle}>Node js</div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greyCircle}></div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.itemTitle}>Express</div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greyCircle}></div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.itemTitle}>Nest js</div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greyCircle}></div>
                    <div className={styles.greyCircle}></div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.itemTitle}>MongoDB</div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greyCircle}></div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.itemTitle}>MySQL</div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greyCircle}></div>
                    <div className={styles.greyCircle}></div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.itemTitle}>C#</div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greyCircle}></div>
                    <div className={styles.greyCircle}></div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.itemTitle}>C++</div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greyCircle}></div>
                    <div className={styles.greyCircle}></div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.itemTitle}>Git</div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greyCircle}></div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.itemTitle}>REST</div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greyCircle}></div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.itemTitle}>Graph QL</div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.greyCircle}></div>
                    <div className={styles.greyCircle}></div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return{
        words: state.main.words
    }
}

export default connect(mapStateToProps, {})(Skills)