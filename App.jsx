import { SettingsInputAntenna } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState,useRef } from "react";
import Nav from "./Nav";
import LeftBox from "./LeftBox";
import Body from "./Body";
import Data from './Dataarr';
const Main = () => {
  const [data, setData] = useState([]);
  const [imgArr, setImgArr] = useState([]);
  const [textType , setTextType] = useState();
  const [opacity , setOpacity] = useState(0);
  const [color , setColor] = useState();
  const [type , setType] = useState('Pokemon');
  const col1=useRef("");
  const col2=useRef("");
  const type1=useRef("");
  const type2=useRef("");
  const opacity2=useRef("");

  const call = async (f) => {
    var p = await axios.get(f.target.accessKey);
    // console.log(p);
    setOpacity(1);
    setType(f.target.innerText);
    
    Array.from(Data).forEach(t=>{
      // console.log(t);
      if(f.target.innerHTML==t.pokeType)setColor(t.defaultColor);
    })

    setTextType(f.target.innerText);
    call2(p.data.pokemon);
    setImgArr([]);
  };
  const call2 = (pk) => {
    pk.map(async (func) => {
      var p = await axios.get(func.pokemon.url);
      console.log(p.data);
      // console.log(p.data.types[0].type.name);
      // setImgArr((t) => {
      //   return [...t, p.data.sprites.front_default];
      // });
      if(p.data.types.length==1){
        // col.current=color;
        // console.log('HII');
        Array.from(Data).forEach(t=>{
          // console.log(t);
          if(p.data.types[0].type.name==t.pokeType){col1.current=t.defaultColor;col2.current=t.defaultColor;type1.current=t.pokeType;opacity2.current=0}
        })
        
      }else{
        Array.from(Data).forEach((t)=>{
          // 
          if(p.data.types[0].type.name==t.pokeType){col1.current=t.defaultColor;type1.current=t.pokeType}
        });
        Array.from(Data).forEach((t)=>{
          // 
          if(p.data.types[1].type.name==t.pokeType){col2.current=t.defaultColor;type2.current=t.pokeType;opacity2.current=1}
        });
      }
      // console.log(col.current);
      setImgArr((t)=>{
        // console.log(p.data.types[0].type.name)
         return[...t,{Image:p.data.sprites.other["official-artwork"].front_default , Name:p.data.name ,colorT:col1.current,colorU:col2.current ,types:p.data.types.length,Type1:type1.current,Type2:type2.current,Opc:opacity2.current}];
         
      });
    });
  };
  // console.log(imgArr);
  useEffect(async () => {
    var p = await axios.get(`https://pokeapi.co/api/v2/type`);
    setData(p.data.results);
  }, []);

  return (
    <>
      <Nav 
      pokeTypes={data}
      func1={call}
      type={type}
      />
      <div className="main">

        <Body 
        // Names={names}
        images={imgArr}
        text={textType}
        opacity={opacity}
        color={color}
        // color2={c3}
        />
      </div>
    </>
  );
};
export default Main;
