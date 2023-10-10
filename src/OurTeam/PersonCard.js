import React from 'react';
import DefaultImg from './DefaultImg.png'
import {ReactComponent as Website, } from '../assets/icons/website.svg';
import {ReactComponent as LinkedIn, } from '../assets/icons/linkedin.svg';
import {ReactComponent as Instagram, } from '../assets/icons/instagram.svg';
import {ReactComponent as Twitter, } from '../assets/icons/twitter.svg';
import {ReactComponent as Facebook, } from '../assets/icons/facebook.svg';
import {ReactComponent as Github, } from '../assets/icons/github.svg';


function PersonCard(props) {

    const displayIcon = function (contactType) {
        switch (contactType) {
            case props.Website:
                return (<Website/>);
            case props.LinkedIn:
                return (<LinkedIn/>);
            case props.Instagram:
                return (<Instagram/>);
            case props.Twitter:
                return (<Twitter/>);
            case props.Facebook:
                return (<Facebook/>);
            case props.Github:
                return (<Github/>);
            default:
                break;
        }
    }

    //if the person has the contact platform, render an icon linking to their page
    //otherwise, render nothing
    const hasContact = (contact)=>
        contact ?
        <li className='contact-link'>
            <a href={contact}>
                {displayIcon(contact)}
            </a>
        </li> :
        null

    const hasImage = ()=>
        props.Image ? 
        props.Image : 
        DefaultImg;

    const hasBio = ()=>
        props.Bio ? 
        props.Bio : 
        'no bio yet';

    return(
        <React.Fragment>
        <div className='our-team bullet'/>
        <div className={'person-card ' + props.Class}>
            <div className='photo-container'>
                <img className='photo'src={hasImage()} alt={props.Name + "'s Photo"}/>
            </div>
            <div className='content-container'>
                <h3 className='name'>{props.Name}</h3>
                <h4 className='position'>{props.Position}</h4>
                <p className='bio'>{hasBio()}</p>
            </div>
            <ul className='contacts'>
                    {hasContact(props.Website)}
                    {hasContact(props.LinkedIn)}
                    {hasContact(props.Instagram)}
                    {hasContact(props.Twitter)}
                    {hasContact(props.Facebook)}
                    {hasContact(props.Github)}
            </ul>
        </div>
        </React.Fragment>
    );
}

export default PersonCard;
//props: Class, Name, Position, Image, Bio, Website, LinkedIn, Instagam, Twitter, Facebook, Github
