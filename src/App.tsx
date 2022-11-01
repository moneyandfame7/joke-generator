import Box from '@mui/material/Box'
import * as React from 'react'
import './App.css'
import Header from './layouts/Header'
import {Button, Container, Tooltip, Zoom} from "@mui/material";
import {useEffect, useState} from 'react';
import axios from 'axios'
import Card from './components/Card'
import CardLoader from './components/CardLoader';

const BASE_URL = 'https://63600cb2ca0fe3c21aab6ff2.mockapi.io/jokes'

// @TODO: написать типы для шуток
export interface IJoke {
    id: string,
    type: string,
    setup: string,
    punchline: string
}

const App: React.FC = () => {
    const [isLoading, setLoading] = useState<boolean>(true)
    const [joke, setJoke] = useState<IJoke>()
    const fetchData = async () => {
        const jokeResponse = await axios.get(BASE_URL + `/${randomId()}`)
        setJoke(jokeResponse.data)
        setTimeout(() => {
            setLoading(false) // выключение лоадера при загрузке
        }, 3000)
    }
    useEffect(() => {
        fetchData().finally(()=>{
            console.log('Fetch data is ready')
        })
    }, [])
// TODO: поменять цвет скелетона, убрать всё по компонентам и мб добавить подсказки при наведении, удалить ненужное
    const randomId = () => (
        Math.floor(1 + Math.random() * (12 + 1 - 1))
    )
    return (
        <>
            <Box sx={{minWidth: '100%', minHeight: '100vh', backgroundColor: '#201E20', color: '#DDC3A5'}}>
                <Header/>
                <Container maxWidth='sm'>
                    <Box sx={{py: 5, display: 'flex', alignItems: 'center', flexDirection: 'column', gap: 2}}>
                        {
                            isLoading ? <CardLoader/> : <Card joke={joke}/>
                        }
                        <Tooltip title="Generate" arrow TransitionComponent={Zoom}>
                            <Button variant='outlined' onClick={() => {
                                fetchData()
                            }}>Generate</Button>
                        </Tooltip>
                    </Box>
                </Container>
            </Box>
        </>
    )
}
export default App