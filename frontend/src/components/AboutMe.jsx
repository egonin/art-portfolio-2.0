import React from "react";
import { Box, Typography } from "@mui/material";
import "./home.css";

function AboutMe({ selectedView }) {

    return (
    <div className="background-container">
        <Box flexGrow={1} display="flex" sx={{ width: '80%' }} flexDirection={"row"} alignItems={"center"} alignSelf={"center"} marginLeft={5}>
        <img 
        src={"../data/aboutMe.jpg"}
        style={{ width: 'auto', height: '75vh', objectFit: 'contain' }}
        />
        <Box flexGrow={1} display="flex" sx={{ width: '80%' }} flexDirection={"column"} alignItems={"center"} alignSelf={"top"} marginLeft={15}>
        
            <Typography variant="h3" fontFamily={"Abril FatFace"} color="rgba(241, 203, 213, 0.929)" textAlign={"center"}>Emma Casagrande</Typography>
            <br/>
            <Typography variant="h6" fontFamily={"Abril FatFace"} color="rgba(241, 203, 213, 0.929)" textAlign={"justify"}>Bienvenue dans ma petite collection de peintures. Je m'appelle Emma Casagrande et j'ai peint la majorité de ces œuvres dans ma chambre grenobloise en m'inspirant du Sud de la France d'où je viens. 
                Deux couleurs m'inspirent au quotidien et ressortent dans mes peintures : le rose et le bleu. Cependant, le violet a fait son apparition lors de mon escale de six mois à Barcelone et a pris une place importante dans ma vie, comme on peut le constater dans ma peinture <i>Les flores</i>.
                <br/><br/>
                De retour dans le Sud, je continue de travailler sur des projets artistiques dans un univers en pleine évolution.
            </Typography>
        </Box></Box>
  </div>
)
}


export default AboutMe;
