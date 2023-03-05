import { Card, CardHeader } from '@chakra-ui/card';
import { Box, Heading } from '@chakra-ui/layout';
import React from 'react';

const ProfileCard = ({ gender, height, drink, smoke, verified, datingPreference, age }) => {
    let g = ""
    let pp = ""
    if (gender === 1) {
        g = "Male"
        pp = 'male.png'
    } else if (gender === 2) {
        g = "Female"
        pp = 'female.png'
    }else {
        g = "Non Binary"
        pp = 'female.png'
    }


    let smk = ""
    if (smoke === 1) {
        smk = "Often"
    } else if (smoke === 2) {
        smk = "Sometimes"
    }else {
        smk = "Never"
    }


    let drk = ""
    if (drink === 1) {
        drk = "Often"
    } else if (smoke === 2) {
        drk = "Sometimes"
    }else {
        drk = "Never"
    }

    let date_pref = ""
    if (datingPreference === 2) {
        date_pref = "Female"
    } else if (datingPreference === 1) {
        date_pref = "Male"
    }
    else if (datingPreference === 3) {
        date_pref = "Non Binary"
    }else {
        date_pref = "Anyone"
    }
  return (
    <Card>
        <div className="card" style={{ border: '1px solid #ccc' }}>
            <img src={pp} width='100px' className="card-img-top" alt="Profile Image" style={{ display: 'block', margin: '0 auto' }} />
            <div className="card-body">
                {/* <CardHeader>
                    <Heading size='md'>
                        <h5 className="card-title">Profile Information</h5>
                    </Heading>
                </CardHeader> */}
                <CardHeader>
                    <Heading size='md'>
                        <p className="card-text">Gender: {g}</p>
                    </Heading>
                </CardHeader>
                <CardHeader>
                    <Heading size='md'>
                        <p className="card-text">Height: {height === -1 ? 'Not Specified' : height}</p>
                    </Heading>
                </CardHeader>
                <CardHeader>
                    <Heading size='md'>
                        <p className="card-text">Drinks? - {drk === 3 ? 'Not Specified' : drk}</p>
                    </Heading>
                </CardHeader>
                
                <CardHeader>
                    <Heading size='md'>
                        <p className="card-text">Smokes? - {smk === 3 ? 'Not Specified' : smk}</p>
                    </Heading>
                </CardHeader>

                <CardHeader>
                    <Heading size='md'>
                        <p className="card-text">Verified Profile? - {verified ? 'Yes' : 'No'}</p>
                    </Heading>
                </CardHeader>
                
                
                <CardHeader>
                    <Heading size='md'>
                        <p className="card-text">Date Preference: {date_pref}</p>
                    </Heading>
                </CardHeader>
                
                <CardHeader>
                    <Heading size='md'>
                        <p className="card-text">Age: {age === -1 ? 'Not Specified' : age}</p>
                    </Heading>
                </CardHeader>
                
            </div>
        </div>    
    </Card>
        
    
  );
};

export default ProfileCard;
