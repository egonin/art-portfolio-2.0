// import React from "react";
// import { Box, Typography } from "@mui/material";
import "./home.css";

// function AboutMe({ selectedView }) {

//     return (
//     <div className="background-container">
//         <Box flexGrow={1} display="flex" sx={{ width: '80%' }} flexDirection={"row"} alignItems={"center"} alignSelf={"center"} marginLeft={5}>
//         <img 
//         src={"../data/aboutMe.jpg"}
//         style={{ width: 'auto', height: '75vh', objectFit: 'contain' }}
//         />
//         <Box flexGrow={1} display="flex" sx={{ width: '80%' }} flexDirection={"column"} alignItems={"center"} alignSelf={"top"} marginLeft={15}>
        
//             <Typography variant="h3" fontFamily={"Abril FatFace"} color="rgba(241, 203, 213, 0.929)" textAlign={"center"}>Emma Casagrande</Typography>
//             <br/>
//             <Typography variant="h6" fontFamily={"Abril FatFace"} color="rgba(241, 203, 213, 0.929)" textAlign={"justify"}>Bienvenue dans ma petite collection de peintures. Je m'appelle Emma Casagrande et j'ai peint la majorité de ces œuvres dans ma chambre grenobloise en m'inspirant du Sud de la France d'où je viens. 
//                 Deux couleurs m'inspirent au quotidien et ressortent dans mes peintures : le rose et le bleu. Cependant, le violet a fait son apparition lors de mon escale de six mois à Barcelone et a pris une place importante dans ma vie, comme on peut le constater dans ma peinture <i>Les flores</i>.
//                 <br/><br/>
//                 De retour dans le Sud, je continue de travailler sur des projets artistiques dans un univers en pleine évolution.
//             </Typography>
//         </Box></Box>
//   </div>
// )
// }


// export default AboutMe;
import React from "react";
import { Box, Typography, styled } from "@mui/material";


const ContentWrapper = styled(Box)`
  max-width: 1200px;
  position:"relative";
  margin-top:20px;
  width: 100%;

   @media (max-width: 600px) {
    &::before {
      content: '';
      display: block;
      height: 20vh;
    }
`;

const TextContent = styled(Box)`
  color: rgba(241, 203, 213, 0.929);
`;

function AboutMe({ selectedView }) {
  return (
    <div className="background-container">
      <ContentWrapper
        top={20}
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        justifyContent="center"
        alignItems="center"
        flexGrow={1}
      >
        <Box 
          component="img"
          src="../data/aboutMe.jpg"
          alt="Photo de l'artiste"
          sx={{
            width: { xs: '80%', sm: '60%', md: '100%' },
            height: 'auto',
            maxWidth: { xs: '250px', sm: '300px', md: '700px' },
            maxHeight: { xs: '250px', sm: '300px', md: '700px' },
            objectFit: 'cover',
            borderRadius: '10px',
            padding: '10px'
          }}
        />
        
        <TextContent
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems={{ xs: 'center', md: 'flex-start' }}
          flexGrow={1}
          sx={{
            padding: { xs: '0', md: '0 20px' }
          }}
        >
          <Typography 
            variant="h3" 
            component="h1"
            fontFamily="'Abril Fatface'"
            color="rgba(241, 203, 213, 0.929)"
            textAlign={{ xs: 'center', md: 'left' }}
            sx={{
              fontSize: { xs: '24px', md: '36px' },
              marginBottom: '20px'
            }}
          >
            Emma Casagrande
          </Typography>
          
          <Typography 
            variant="body1"
            fontFamily="'Abril Fatface'"
            color="rgba(241, 203, 213, 0.929)"
            textAlign={{ xs: 'center', md: 'left' }}
            sx={{
              fontSize: { xs: '16px', md: '18px' },
              lineHeight: '1.5'
            }}
          >
            Bienvenue dans ma petite collection de peintures. Je m'appelle Emma Casagrande et j'ai peint la majorité de ces œuvres dans ma chambre grenobloise en m'inspirant du Sud de la France d'où je viens. 
            Deux couleurs m'inspirent au quotidien et ressortent dans mes peintures : le rose et le bleu. Cependant, le violet a fait son apparition lors de mon escale de six mois à Barcelone et a pris une place importante dans ma vie, comme on peut le constater dans ma peinture <i>Les flores</i>.
            De retour dans le Sud, je continue de travailler sur des projets artistiques dans un univers en pleine évolution.
          </Typography>
        </TextContent>
      </ContentWrapper>
    </div>
  );
}

export default AboutMe;