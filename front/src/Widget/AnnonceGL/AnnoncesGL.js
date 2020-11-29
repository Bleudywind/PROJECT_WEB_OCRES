import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import emoji from 'remark-emoji';
import './AnnoncesGL.css';


//https://github.com/remarkjs/react-markdown

export default function AnnoncesGL() {

    const renderes = {
        code: ({language, value}) => {
            return <ReactMarkdown language={language} children={value} plugins={[emoji, gfm]}/>
        }
    }

    const text = `:warning: :GL: :warning: NOUVEAUTE 2020 :warning: :GL: :warning: @everyone @Capitaines 

    :hype: Grosse nouveauté ce soir : https://gl.vivide.re/ :hype:
    
    C'est un site avec toutes les stats des parties de la GL, joueurs, équipes, etc...
    Merci à @Vivi pour tout le dev  :heart: 
    
    Nous espérons que l'outil vous plaira (et qu'il vous sera utile), et n'hésitez pas à MP @Vivi en cas de report de bug/autre (et pour le remercier) :smirk: :punch: 
    
    ___
    
    Pour du plus basique : comme tous les mercredis, petit rappel sur le format du soir !
    :arrow_forward: Dragon : 1 seul BO3 
    :arrow_forward: Héraut : 1 seul BO3
    :arrow_forward: Carapateur : 2 BO1 (round 5 & 6, 21h45 pour le second match au plus tard !)
    
    :date: Début des matchs : 20h30
    :watch: Retard maximum autorisé : 15 minutes
    :white_check_mark: Déclaration des forfaits : à partir de 20h45 à un ADMIN (en orange) de votre région
    
    Les streams sont ON ! Et vous pourrez retrouver tous les streamers Grosse Ligue au même endroit ! Une seule adresse : https://www.twitch.tv/team/lagrosseligue/
    
    Bonne soirée à tous, bonne chance et surtout AMUSEZ-VOUS ! :heart:`.replace(/\n/g,"\n\n");

 

    return(
        <div>
            <h1>
                Annonces Grosse Ligue
            </h1>
            <div className="textBlock">
                <ReactMarkdown plugins={[emoji, gfm]} renderers={renderes} children= {text} className="text scrollbar scrollbar-primary">

                </ReactMarkdown>
            </div>
        </div>
        
        
    );
}