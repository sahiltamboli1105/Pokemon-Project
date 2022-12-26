import { red } from "@material-ui/core/colors";
import { height } from "@mui/system";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import Data from "./Dataarr";

const Main = (p) => {
  const [c1, setC1] = useState();
  const [c2, setC2] = useState();

  // console.log(p.color)
  return (
    <div className="mainBody">
      <h1 style={{ opacity: `${p.opacity}` }} className="bodyHead">
        {p.text} Type Pokemons
      </h1>
      <div className="bodyMain">
        {p.images.map((pk) => {
          // console.log(pk.Type1);
          // if(p.nooftypes==1){
          //   Array.from(Data).forEach(y=>{
          //     if(y.pokeType==p.Type1)setC1(y.defaultColor);
          //   })
          //   setC2(c1);
          // }else{
          //   Array.from(Data).forEach(y=>{
          //     if(y.pokeType==p.Type1)setC1(y.defaultColor);
          //   })
          //   Array.from(Data).forEach(y=>{
          //     if(y.pokeType==p.Type2)setC2(y.defaultColor);
          //   })
          //   // setC2(c1);
          // }

          // console.log(c1+" "+c2);
          return (
            <>
              <div className="bodyMain-2">

                {/* <Card className="bg-dark text-white">
                  <Card.Img
                    src={pk.Image}
                    alt="Card image"
                    style={{ height: "320px", width: "280px",background:`linear-gradient(${pk.colorU},${pk.colorT})`}}
                  />
                  <Card.ImgOverlay>
                    <Card.Title style={{textTransform:"capitalize",color:"black"}}>{pk.Name}</Card.Title>
                    
                    <button style={{position:"absolute",bottom:7,backgroundColor:pk.colorT,width:"70px",boxShadow:"4px 4px 6px",border:"none",borderRadius:"4px",textTransform: "capitalize"}}>{pk.Type1}</button>
                    <button style={{position:"absolute",bottom:7,right:120,backgroundColor:pk.colorU,width:"70px",boxShadow:"4px 4px 6px",border:"none",borderRadius:"4px",opacity:pk.Opc,textTransform: "capitalize"}}>{pk.Type2}</button>
                  </Card.ImgOverlay>
                  
                </Card> */}

                <Card style={{ width: "17rem",height:"23rem" }}>
                  <Card.Img variant="top" src={pk.Image} style={{background:`linear-gradient(${pk.colorU},${pk.colorT})`,height:"19rem"}}/>
                  <Card.Body>
                    <Card.Title style={{textTransform:"capitalize",fontSize:"20px"}}>{pk.Name}</Card.Title>
                    <Card.Text>
                    <button style={{backgroundColor:pk.colorT,width:"70px",boxShadow:"4px 4px 6px",border:"none",borderRadius:"4px",textTransform: "capitalize"}}>{pk.Type1}</button>
                    <button style={{backgroundColor:pk.colorU,width:"70px",boxShadow:"4px 4px 6px",border:"none",borderRadius:"4px",opacity:pk.Opc,textTransform: "capitalize",marginLeft:"8px"}}>{pk.Type2}</button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
export default Main;
