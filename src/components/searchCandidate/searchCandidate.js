import React, { useState } from 'react'
import styles from './search.module.css'
import Header from '../Header/Header'
import {Button} from '@mui/material'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { OutlinedInput } from '@mui/material'
import BasicModal from './fetched'
const SearchCandidate = () => {
    const [jobRole,setJobRole]=useState("");
    const [jobLocation,setJobLocation]=useState("")
    const [fetchedCands,setFetchedCands]=useState([]);
    const candidates=[
        {
            cname:"Rahul",
            profession:"software developer",
            location:"lucknow"
        },
        {
            cname:"Prashant",
            profession:"web developer",
            location:"banglore"
        },
        {
            cname:"Ashwani",
            profession:"DevOps Engineer",
            location:"chennai"
        },
        {
            cname:"Alex",
            profession:"Java developer",
            location:"delhi"
        },
        {
            cname:"Tina",
            profession:"Python developer",
            location:"mumbai"
        },
        {
            cname:"charlie",
            profession:"reactjs developer",
            location:"kanpur"
        }
    ]

  return (
    <div className={styles.page}>
        <Header/>
        <div className={styles.container}>
        <div className={styles.searcher} >
        <OutlinedInput onChange={(e)=>setJobRole(e.target.value)} placeholder='Job Role'/>
        <OutlinedInput onChange={(e)=>setJobLocation(e.target.value)} placeholder='Job Location'/>
        <BasicModal data={fetchedCands} func={setFetchedCands}/>
        </div>
        <div className={styles.candidates}>
        {
            candidates.map((cand,i)=>{
                return(cand.location.toLowerCase().includes(jobLocation.toLowerCase())  && cand.profession.toLowerCase().includes(jobRole.toLowerCase()))?
                <div className={styles.card}>
                    <h2 style={{fontWeight:'bold'}}>Name: {cand.cname}</h2>
                    <h2 style={{fontSize:'20px'}}>Profession: {cand.profession}</h2>
                    <h3>Location: {cand.location}</h3>
                    <Button variant="contained" onClick={()=>{setFetchedCands([...fetchedCands,cand]);
                    toast('Candidate Fetched!', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                    }}>Fetch Candidate</Button>
                </div>:null
            })
            
        }
        
        </div>
        </div>
    </div>
  )
}

export default SearchCandidate