import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { RiUserLine } from "react-icons/ri";
import InputAdornment from "@mui/material/InputAdornment";
import SvgIcon from "@mui/material/SvgIcon";
import { Divider, Input, Stack, Typography } from "@mui/material";
import { db } from "../firebase";
import { collection, where, query, getDocs, setDoc, documentId, doc, updateDoc, serverTimestamp, getDoc } from "firebase/firestore";
import {AuthContext }from "../context/AuthContext"
const Search = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState(null);
  const [err, seterr] = useState(false);
  const {currUser} = useContext(AuthContext)
  const handleSearch = async () => {
    // console.log(name);
    const q = query(collection(db, "user"), where("displayName", "==", name));
    try {
      const querySnap = await getDocs(q);
      if (querySnap.size > 0) {
        seterr(false);
      } else if (querySnap.size === 0 && name.length > 0) {
        setUser(null);
        seterr(true);
      }

      querySnap.forEach((doc) => {
        // console.log(doc);
        setUser(doc.data());
      });
    } catch (err) {
      console.log(err);
    }
  };
  const handleSlect = async () =>{

    const combineId = currUser.uid > user.uid ? currUser.uid+user.uid : user.uid+currUser.uid;
     
      const res = await getDoc(doc(db,"chats",combineId));
      console.log(res);
      if(!res.exists()){
        //craete chat
        await setDoc(doc(db,"chats",combineId),{messages:[]})
      }
   

    //create UserChats
    await updateDoc(doc(db,"userChats",currUser.uid),{
      [combineId+".userInfo"]:{
        uid:user.uid,
        displayName:user.displayName,

      },
      [combineId+".date"]: serverTimestamp()
    })
    await updateDoc(doc(db, "userChats", user.uid), {
      [combineId + ".userInfo"]: {
        uid: currUser.uid,
        displayName: currUser.displayName,
        
      },
      [combineId + ".date"]: serverTimestamp(),
    });

    setUser(null);
    seterr(false)
    setName("")
    




  }

  useEffect(() => {
    handleSearch();
    if (name.length === 0) {
      seterr(false);
      setUser(null);
    }
  }, [name]);
  //   const handleKey = (e) => {
  //     e.code === "Enter" && handleSearch();
  //   };
  return (
    <>
      <Box component="form" sx={{ flexGrow: 1 }}>
        <Input
          sx={{
            minHeight: "7vh",
            pl: 2,
          }}
          defaultValue=""
          value={name}
          fullWidth
          placeholder="Find User"
          onChange={(e) => setName(e.target.value)}
          startAdornment={
            <InputAdornment position="start">
              <SvgIcon>
                <RiUserLine />
              </SvgIcon>
            </InputAdornment>
          }
        ></Input>
      </Box>
      {err && (
        <>
          <Typography p={3}>No user Found</Typography> <Divider />{" "}
        </>
      )}
      {user && (
        <>
          <Stack
            mt={2}
            ml={2}
            sx={{
              cursor: "pointer",
              width: "max-content",
              justifyContent: "center",
              
            }}
            
          >
            <div onClick={handleSlect}>
            <Stack
              borderRadius="50%"
              sx={{
                height: 60,
                width: 60,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage:
                  "url(https://img.freepik.com/premium-psd/3d-cartoon-man-smiling-portrait-isolated-transparent-background-png-psd_888962-1570.jpg)",
              }}
            ></Stack>
            <Typography fontWeight="bold" ml={2}>
              {user.displayName}
            </Typography>

            </div>
            {/* <Stack
              borderRadius="50%"
              sx={{
                height: 60,
                width: 60,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage:
                  "url(https://img.freepik.com/premium-psd/3d-cartoon-man-smiling-portrait-isolated-transparent-background-png-psd_888962-1570.jpg)",
              }}
            ></Stack>
            <Typography fontWeight="bold" ml={2}>
              {user.displayName}
            </Typography> */}
          </Stack>

          <Divider />
        </>
      )}
    </>
  );
};

export default Search;
