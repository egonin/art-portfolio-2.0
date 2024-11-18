import React from "react";
import ImageDisplay from "./ImageDisplay";
import { Box, Typography } from "@mui/material";

function StackCarousel({item}) {
    const [isLoading, setIsLoading] = React.useState(true);
    const loadNextImage = async () => {
        if (item != undefined) {
          const img = new Image();
          img.src = item.img_url;
          await new Promise(resolve => img.onload = resolve);
          setIsLoading(false);
        }
      };
  return ((item!=undefined) ?
    <Box display={"flex"} sx={{ width: '100%' }} flexDirection={"row"} alignContent={"center"} alignSelf={"center"}>
        <Box flexShrink={0} ><ImageDisplay src={item.img_url} alt={item.title} onLoad={loadNextImage}/></Box>
        <Box flexGrow={1} display="flex" sx={{ width: '50%' }} flexDirection={"column"} alignItems={"center"} alignSelf={"top"} marginLeft={5}>
            <Typography variant="h3" fontFamily={"Abril FatFace"} color="rgba(241, 203, 213, 0.929)" textAlign={"center"} top={10}>{item.title}</Typography>
            <Typography variant="h5" fontFamily={"Abril FatFace"} color="rgba(241, 203, 213, 0.929)" textAlign={"center"}>{item.artist}</Typography>
            <Typography variant="h6" fontFamily={"Abril FatFace"} color="rgba(241, 203, 213, 0.929)" textAlign={"center"}>- {item.date} -</Typography>
            <Typography variant="h7" fontFamily={"Abril FatFace"} color="rgb(255,255,255)" textAlign={"center"}>{item.type}</Typography>
            <Typography variant="body1" fontFamily={"Abril FatFace"} color="rgba(241, 203, 213, 0.929)" textAlign={"justify"}>{item.description}</Typography>
        </Box>
    </Box>
    : <div/>
)
}


export default StackCarousel;
