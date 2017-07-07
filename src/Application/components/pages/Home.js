/**
 * Created by kodanda_rama on 7/7/17.
 */

import React from 'react';
import { Link } from 'react-router';
import Card from '../../../reusable/card';

const Home = () => {
    return(
        <div className="container">
            <div className="container-padding">
                <SectionOne/>
                <SectionTwo/>
                <SectionThree/>
                <SectionFour/>
                <SectionFive/>
                <SectionSix/>
                <SectionSeven/>
                <SectionEight/>
                <SectionNine/>
            </div>
        </div>
    )
};

const SectionOne = () => {
    return(
        <div className="row top-space">
            <div className="section-one-text"><h2 className="center-text">Hello This is section one text. This can be as long as possible</h2></div>
            <div className="col-md-4 col-sm-6">
                <Card
                    img={"https://images.pexels.com/photos/8983/pexels-photo.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"}
                    para = {"fdsjfdj dkdhsshfdj dhgdfjsghsfdh dfkghdfkgsjdk dfkfghfdkghs kdffhgdfkghs"}
                    heading = {"jhh sdfdshf hfkdsjf jkdhfjkds kldhgjkdfh kdfngjkdsf dgjkdf kkdhjkfd"}/>
            </div>
            <div className="col-md-4 col-sm-6">
                <Card
                    img={"https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"}
                    para = {"fdsjfdj dkdhsshfdj dhgdfjsghsfdh dfkghdfkgsjdk dfkfghfdkghs kdffhgdfkghs"}
                    heading = {"jhh sdfdshf hfkdsjf jkdhfjkds kldhgjkdfh kdfngjkdsf dgjkdf kkdhjkfd"}/>
            </div>
            <div className="col-md-4 col-sm-12">
                <Card
                    img={"https://images.pexels.com/photos/8983/pexels-photo.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"}
                    para = {"fdsjfdj dkdhsshfdj dhgdfjsghsfdh dfkghdfkgsjdk dfkfghfdkghs kdffhgdfkghs"}
                    heading = {"jhh sdfdshf hfkdsjf jkdhfjkds kldhgjkdfh kdfngjkdsf dgjkdf kkdhjkfd"}/>
            </div>
        </div>
    )
};

const SectionTwo = () => {
    return(
        <div className="row top-space">
            <div className="col-md-6">
                <h4 className="spacing para-line-height">Hello hgfadsfjdgfds jzhdfjjd dfjskgh kgshdfkgh khgfs jfdjkfs jdsfhdjk jfsgkjhf fsdsfg fdsgfd jfdsjf jhgsfdj jghsjfd fjdgsjf fd fdgfdg fghfgvc</h4>
                <h6 className="spacing para-line-height">Hgh long paras long long paras fhdsjfhhdafhdfhk fdfhdkjsgf bgjhfdhghajdfg dfgjdsfjghfdjkghdf fdgsd gshdg
                    Hello hgfadsfjdgfds jzhdfjjd dfjskgh kgshdfkgh khgfs jfdjkfs jdsfhdjk jfsgkjhf fsdsfg fdsgfd jfdsjf jhgsfdj jghsjfd fjdgsjf fd fdgfdg fghfgvc
                    Hello hgfadsfjdgfds jzhdfjjd dfjskgh kgshdfkgh khgfs jfdjkfs jdsfhdjk jfsgkjhf fsdsfg fdsgfd jfdsjf jhgsfdj jghsjfd fjdgsjf fd fdgfdg fghfgvc
                    Hello hgfadsfjdgfds jzhdfjjd dfjskgh kgshdfkgh khgfs jfdjkfs jdsfhdjk jfsgkjhf fsdsfg fdsgfd jfdsjf jhgsfdj jghsjfd fjdgsjf fd fdgfdg fghfgvc
                </h6>
                <div className="button inline">Learn more</div>
            </div>
            <div className="col-md-6 "><div className="section-two-img"/></div>
        </div>
    )
};

const SectionThree = () => {
    return(
        <div className="row top-space" style={{position: "relative"}}>
            <div className="section-three-img shaded-image"/>
            <div className="card section-three-card">
                <h5 className="card-text">
                    dsjfhadsfkadsd nssfhkadsjh sdjdkfhdjkfa dashd hsjdgdsa shdjfghjds hjdgfhds hjfhds hjgf hjgdas
                    dsjfhadsfkadsd nssfhkadsjh sdjdkfhdjkfa dashd hsjdgdsa shdjfghjds hjdgfhds hjfhds hjgf hjgdas
                    dsjfhadsfkadsd nssfhkadsjh sdjdkfhdjkfa dashd hsjdgdsa shdjfghjds hjdgfhds hjfhds hjgf hjgdas
                </h5>
            </div>
        </div>
    )
};

const SectionFour = () => {
    return(
        <div className="row top-space" style={{marginTop: "25%"}}>
            <div className="col-md-8 spacing">
                dsjfhadsfkadsd nssfhkadsjh sdjdkfhdjkfa dashd hsjdgdsa shdjfghjds hjdgfhds hjfhds hjgf hjgdas
                dsjfhadsfkadsd nssfhkadsjh sdjdkfhdjkfa dashd hsjdgdsa shdjfghjds hjdgfhds hjfhds hjgf hjgdas
                dsjfhadsfkadsd nssfhkadsjh sdjdkfhdjkfa dashd hsjdgdsa shdjfghjds hjdgfhds hjfhds hjgf hjgdas
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-3">
                <div className="button" style={{float: "right"}}>Click Me</div>
            </div>
        </div>
    )
};

const SectionFive = () => {
    return(
        <div className="row top-space">
            <div className="row">
                <div className="col-md-3">
                    <div className="section-three-img shaded-image"/>
                </div>
                <div className="col-md-7">
                    <div className="section-three-img shaded-image" style={{height: "150px"}}/>
                    <h5>Heloo world heading</h5>
                    <h6>Hello world para</h6>
                </div>
                <div className="col-md-2">
                    <div className="section-three-img shaded-image"/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">
                    <div className="section-three-img shaded-image"/>
                </div>
                <div className="col-md-3">
                    <div className="section-three-img shaded-image"/>
                </div>
                <div className="col-md-7">
                    <div className="section-three-img shaded-image"/>
                </div>
            </div>
        </div>
    )
};

const SectionSix = () => {
    return(
        <div className="row top-space">
            <div className="col-md-12 jumbotron" style={{padding: "10%"}}>
                <h5 style={{lineHeight: "200%", textAlign: "justify", marginBottom: "10%"}}>
                    dsjfhadsfkadsd nssfhkadsjh sdjdkfhdjkfa dashd hsjdgdsa shdjfghjds hjdgfhds hjfhds hjgf hjgdas
                    dsjfhadsfkadsd nssfhkadsjh sdjdkfhdjkfa dashd hsjdgdsa shdjfghjds hjdgfhds hjfhds hjgf hjgdas
                    dsjfhadsfkadsd nssfhkadsjh sdjdkfhdjkfa dashd hsjdgdsa shdjfghjds hjdgfhds hjfhds hjgf hjgdas
                    dsjfhadsfkadsd nssfhkadsjh sdjdkfhdjkfa dashd hsjdgdsa shdjfghjds hjdgfhds hjfhds hjgf hjgdas
                    dsjfhadsfkadsd nssfhkadsjh sdjdkfhdjkfa dashd hsjdgdsa shdjfghjds hjdgfhds hjfhds hjgf hjgdas
                    dsjfhadsfkadsd nssfhkadsjh sdjdkfhdjkfa dashd hsjdgdsa shdjfghjds hjdgfhds hjfhds hjgf hjgdas
                </h5>
                <div>
                    <div className="col-md-3"><div className="small-icon center-block"></div></div>
                    <div className="col-md-3"><div className="small-icon center-block"></div></div>
                    <div className="col-md-3"><div className="small-icon center-block"></div></div>
                    <div className="col-md-3"><div className="small-icon center-block"></div></div>
                    <div className="col-md-3"><div className="small-icon center-block"></div></div>
                    <div className="col-md-3"><div className="small-icon center-block"></div></div>
                    <div className="col-md-3"><div className="small-icon center-block"></div></div>
                    <div className="col-md-3"><div className="small-icon center-block"></div></div>
                </div>
            </div>
        </div>
    )
};

const SectionSeven = () => {
    return(
        <div className="row top-space">
            <div style={{padding: "0px 10% 0px 10%"}}>
                <h3 style={{textAlign: "center"}}>
                    Hello world heading for section seven
                </h3>
                <h6 className="line-hght">
                    dsjfhadsfkadsd nssfhkadsjh sdjdkfhdjkfa dashd hsjdgdsa shdjfghjds hjdgfhds hjfhds hjgf hjgdas
                    dsjfhadsfkadsd nssfhkadsjh sdjdkfhdjkfa dashd hsjdgdsa shdjfghjds hjdgfhds hjfhds hjgf hjgdas
                    dsjfhadsfkadsd nssfhkadsjh sdjdkfhdjkfa dashd hsjdgdsa shdjfghjds hjdgfhds hjfhds hjgf hjgdas
                    dsjfhadsfkadsd nssfhkadsjh sdjdkfhdjkfa dashd hsjdgdsa shdjfghjds hjdgfhds hjfhds hjgf hjgdas
                    dsjfhadsfkadsd nssfhkadsjh sdjdkfhdjkfa dashd hsjdgdsa shdjfghjds hjdgfhds hjfhds hjgf hjgdas
                </h6>
                <div style={{marginTop: "10%"}}>
                    <div className="button inline center-align"> Contact US </div>
                </div>
            </div>
        </div>
    )
};

const SectionEight = () => {
    return(
        <div className="row top-space">
            <div className="col-md-6 nopadding" style={{position: "relative"}}>
                <div className="section-three-img shaded-image"/>
                <div className="image-text">Link 1</div>
            </div>
            <div className="col-md-6 nopadding" style={{position: "relative"}}>
                <div className="section-three-img shaded-image"/>
                <div className="image-text">Link 2</div>
            </div>
        </div>
    )
};

const SectionNine = () => {
    return(
        <div className="blue-text">
            <div className="row top-space">
                <div className="col-md-3">
                    <h5>
                        Contact US
                    </h5>
                    <p className="line-hght para-position">
                        +91 000-000-0000<br/>
                        kodandaram199@gmail.com
                    </p>
                </div>
                <div className="col-md-3">
                    <h5>
                        Follow US
                    </h5>
                    <p className="line-hght para-position">
                        <a href="https://www.linkedin.com/in/kodanda-rama-durgarao-poluri" target="_blank" className="link" style={{textDecoration: "none"}}>Linkedin</a><br/>
                        <a href="https://github.com/kodandaram199" target="_blank" className="link" style={{textDecoration: "none"}}>Facebook</a>
                    </p>
                </div>
                <div className="col-md-2">
                </div>
                <div className="col-md-6">
                    <div className="navbar-right">
                        <h5 >
                            Join our monthly news letter
                        </h5>
                        <p className="spacing para-line-height para-position">
                            You need a helpin hand  with your project?<br/>
                            <div style={{marginTop: "10%"}}>
                                <input type="text" className="button inline" placeholder="Your E-mail Here"/><div className="button inline" style={{marginLeft: "-10%"}}>Enter</div>
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home