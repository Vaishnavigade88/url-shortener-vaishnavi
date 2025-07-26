import { Avatar , Text} from '@mantine/core';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

import Service from '../../utils/http';
const service = new Service();
export default function profile() {
    const [profileData, setProfileData] =useState(null);
    async function getProfileData(){
        let data = await service.get("user/me");
        setProfileData(data);
        console.log(data);
    }
    useEffect( ()=>{
        getProfileData();
},[])



  return (
    <div>
        Hii
      <Avatar src={profileData?.Avatar} alt="no image here" color="indigo" />
      <Text c="blue">{profileData?.email}</Text>
      <Text td="underline">{profileData?.name}</Text>
    <Text td="underline">{profileData?._id}</Text>
    </div>
  )
}
